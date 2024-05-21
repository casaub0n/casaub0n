import { useState, type ComponentPropsWithoutRef, type FC } from "react";

import clsx from "clsx";

import { Mdialog } from "@/components/atoms/mDialog";

import { div } from "./Pdialog.css";

type Props = ComponentPropsWithoutRef<"div">;

export const Pdialog: FC<Props> = ({className="progress-dialog", ...props}) => {
   /** Dialog の開閉を管理する Flag */
  const [isOpen, setIsOpen] = useState(false);

  /** Dialog を開く Func */
  const openDialog = () => {
    setIsOpen(true);
  };

  /** Dialog を閉じる Func */
  const closeDialog = () => {
    setIsOpen(false);
  };

  return (
    <div className={clsx(className)} {...props}>
      {/* Dialogを Openする Btn */}
      <div className={clsx(div)}>
        <button onClick={() => openDialog()}>Dialog Open</button>
      </div>

      {/* Dialog_Component */}
      <Mdialog isOpen={isOpen} onClose={closeDialog} />
    </div>
  );
};
