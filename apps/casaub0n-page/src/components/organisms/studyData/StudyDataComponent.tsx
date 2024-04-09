import { type ComponentPropsWithoutRef, type FC } from "react";

import clsx from "clsx";
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";

import studyDataList from "./studyData";

type Props = ComponentPropsWithoutRef<"div">;

/**
 * line graph
 * @description by recharts
 * @see https://zenn.dev/acha_n/articles/how-to-customize-recharts
 */
export const StudyDataComponent: FC<Props> = ({ className, ...props }) => {
  return (
    <div className={clsx(className)} {...props} role="main">
      <LineChart
        data={studyDataList}
        height={300}
        margin={{ top: 5, right: 5, left: 5, bottom: 5 }}
        width={700}
      >
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='date' />
        <YAxis dataKey='問題数' />
        <Line dataKey='問題数' stroke='#8884d8' type='monotone' />
        <Line dataKey='正解数' stroke='#3ba2f6' type='monotone' />
        <Line dataKey='正解率' stroke='#ff0092' type='monotone' />
        <Legend />
        <Tooltip />
      </LineChart>
    </div>
  );
};
