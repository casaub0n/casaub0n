/* eslint-disable @cspell/spellchecker */
import type { MessageActionsId, ResponseMessageData, ZennArticleData } from "./types";

document.addEventListener("DOMContentLoaded", () => {
  // 現在のタブ情報を取得
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const tabs0 = tabs[0];
    if (tabs0 === undefined) {
      throw new Error("アクティブなタブが見つかりませんでした。");
    }
    if (tabs.length === 0 || tabs0.id === undefined) {
      throw new Error("アクティブなタブが見つかりませんでした。");
    }
    chrome.tabs.sendMessage<MessageActionsId>(
      tabs0.id,
      { action: "get-zenn-articles" },
      (response: ResponseMessageData | undefined) => {
        if (chrome.runtime.lastError) {
          throw new Error(chrome.runtime.lastError.message);
        }

        if (!response) {
          throw new Error("記事情報の取得に失敗しました。");
        }

        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        const markdown = createArticleMarkdown(response.data);
        const textarea = document.querySelector<HTMLTextAreaElement>(".markdown-output");
        if (!textarea) {
          throw new Error("テキストエリア要素が見つかりませんでした。");
        }
        textarea.value = markdown;
      },
    );
  });
});

const createArticleMarkdown = (articles: ZennArticleData[]) => {
  return articles
    .map((article) => {
      return `## ${article.emoji}${article.title}\n\nlink🔗 : https://zenn.dev${article.url}\n`;
    })
    .join("\n");
};
