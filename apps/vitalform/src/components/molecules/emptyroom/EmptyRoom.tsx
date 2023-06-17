import type { FC } from "react";

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

import { ArticleSection } from "@/components/atoms/ArticleSection";
import { ContentText } from "@/components/atoms/ContentText";
import styles from "@/components/molecules/emptyroom/styles.module.css";

import { cloudinaryLoader } from "@/utils/cloudinaryLoader";

type Props = {
  className?: string;
};

export const EmptyRoom: FC<Props> = ({ className }) => {
  return (
    <ArticleSection>
      <h2>板橋駅前桜ビル401号室&nbsp;内見受付中</h2>
      <div className={clsx(className, styles.hero_columns, styles.switcher)} data-direction='rev'>
        <div className={styles.flow}>
          <Image
            alt='sakura building living room'
            loader={cloudinaryLoader("v1665804278")}
            src='/sakura-building-livingroom.jpg'
            width={480}
            height={640}
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </div>
        <div>
          <ContentText>板橋駅から徒歩1分の駅近物件です！</ContentText>
          <ContentText>
            部屋はフルリニューアル、大きなウオーキングクローゼットとワーキングスペースがあります。
          </ContentText>
          <ContentText>内見をお待ちしております。</ContentText>
          <ContentText>
            電話番号：<Link href={"tel:090-1663-4538"}>090-1663-4538</Link>
          </ContentText>
        </div>
      </div>
    </ArticleSection>
  );
};
