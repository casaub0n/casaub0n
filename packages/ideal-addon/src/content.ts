/* eslint-disable @cspell/spellchecker */
import type { MessageActionsId, ResponseMessageData, ZennArticleData } from "./types";

const setupMessageListener = () => {
  chrome.runtime.onMessage.addListener(
    async (
      request: MessageActionsId,
      _sender,
      sendResponse: (response: ResponseMessageData) => void,
    ) => {
      // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
      if (request.action === "get-zenn-articles") {
        const details: ZennArticleData[] = [];
        let count = 1;
        let element: Element | null;

        // 記事情報が取得できなくなるまで繰り返す
        while (
          (element = document.querySelector(
            `#__next > div.View_contents__azal2 > div > section > div.View_itemsContainer__srSwj > div > div:nth-child(${count})`,
          )) !== null
        ) {
          try {
            // eslint-disable-next-line @typescript-eslint/no-use-before-define
            const article = getArticleData(element);
            details.push(article);
          } catch (error) {
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            console.error(`記事の取得中にエラーが発生しました : ${error}`);
            continue;
          }
          count++;
        }

        sendResponse({ data: details });
      }
      return true;
    },
  );
};

const getArticleData = (element: Element): ZennArticleData => {
  const titleElemnt = element.querySelector<HTMLElement>("article > div > a > h2");
  const urlElement = element.querySelector<HTMLElement>("article > div > a");
  const emojiElement = element.querySelector<HTMLElement>(
    "article > a > span.Emoji_nativeEmoji__GMBzX",
  );

  if (!titleElemnt || !urlElement || !emojiElement) {
    throw new Error("必要な商品情報の要素が見つかりませんでした。");
  }

  return {
    title: titleElemnt.textContent || "",
    url: urlElement.getAttribute("href") || "",
    emoji: emojiElement.textContent || "",
  };
};

if (typeof chrome !== "undefined" && chrome.runtime) {
  setupMessageListener();
}
