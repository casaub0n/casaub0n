import { useRef, type ComponentPropsWithoutRef, type FC, useEffect, useCallback } from "react";

import clsx from "clsx";

import css from "@/utils/pandaLoader";

type Props = {
  /** 開閉を管理する Flag */
  isOpen: boolean,
  /** Dialogを閉じるためのFunction */
  onClose?: VoidFunction,
  /** TODO: more strict type */
  dialogStyle?: string,
  /** TODO: more strict type */
  dialogInnerStyle?: string
} & ComponentPropsWithoutRef<"dialog">;

/**
 * @see https://zenn.dev/aiq_dev/articles/69c60e0c378d98#dialog%E3%82%BF%E3%82%B0%E3%82%92%E4%BD%BF%E3%81%A3%E3%81%9Fdialog-component%E3%81%AEsamplecode
 */
export const Mdialog: FC<Props> = ({ className, onClose, isOpen, dialogStyle, dialogInnerStyle, ...props }) => {
  /**
   * Dialog_Element
   * => useRef() で、dialogタグを参照する
   */
  const dialogRef = useRef<HTMLDialogElement>(null);

  /** isOpen の変更を検知して動作する
   * TODO: Warning: Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn’t have a dependency array, or one of the dependencies changes on every render.
   * @see https://ics.media/entry/201106/
   */
  useEffect((): void => {
    const dialogElement = dialogRef.current;
    if (!dialogElement) {
      return;
    }
    // 1. Dialog Open Flag === true
    if (isOpen) {
      // 1-2. 属性値: open が Set されていたら、処理終了
      if (dialogElement.hasAttribute("open")) {
        return;
      }
      // 1-3. showModal()で、Dialogを表示する
      // => top-layer と backdrop の設定も自動で追加される
      dialogElement.showModal();
    } else {
      // 2. Dialog Open Flag === false
      // 2-1. 属性値: open が Set されていなかったら、処理終了
      if (!dialogElement.hasAttribute("open")) {
        return;
      }
      // 2-2. close()で、Dialogを閉じる
      dialogElement.close();
    }
  }, [isOpen]);

  /**
   * Dialog を Close する Func
   * => Closeボタン or Dialog の外部領域を Click すると Call
   */
  const onCloseDialog = useCallback((): void => {
    onClose?.();
  }, [onClose]);

  /** Dialog の 内部領域の Close Event を Cancel する */
  const handleClickContent = useCallback(
    (event: React.MouseEvent<HTMLDivElement>): void => {
      // clickイベントの伝搬を止める。
      event.stopPropagation();
      console.log("Dialog Click");
    },
    []
  );

  const defaultDialogStyle = css({
    padding: 0,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    border: "1px solid black",
    borderRadius: "8px",
  })

  const defaultDialogInnerStyle = css({
    width: "500px",
    height: "500px",
    padding: "1em",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
  })

  return (
    <dialog {...props} className={clsx(dialogStyle ? dialogStyle : defaultDialogStyle)} ref={dialogRef} onClick={() => {
      onCloseDialog();
      }}>
      <div onClick={(e) => {
        handleClickContent(e);
      }} className={clsx(dialogInnerStyle ? dialogInnerStyle : defaultDialogInnerStyle)}>
        <h2>Dialog Test</h2>
        <button onClick={() => onCloseDialog()} className={clsx(css({width: "60px", height: "30px" }))}>Close</button>
      </div>
    </dialog>
  )
};
