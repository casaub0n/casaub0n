import { useState, type ComponentPropsWithoutRef, type FC } from "react";

import clsx from "clsx";

import { Mdialog } from "@/components/atoms/mDialog";

import css from "@/utils/pandaLoader";


type Props = ComponentPropsWithoutRef<"div">;

export const Pdialog: FC<Props> = ({...props}) => {
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
    <div {...props}>
      {/* Dialogを Openする Btn */}
      <div className={clsx(css({textAlign: "center"}))}>
        <button onClick={() => openDialog()}>Dialog Open</button>
      </div>

      {/* Dialog_Component */}
      <Mdialog isOpen={isOpen} onClose={closeDialog} />
    </div>
  );
};
