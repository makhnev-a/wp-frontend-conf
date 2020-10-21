import React from "react";
import {Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip} from "recharts";

import {Title} from "../../Title/Title";

export const DoughnutChart = ({chartTitle, data}) => {
  return (
    <>
      <Title>{chartTitle}</Title>
      <ResponsiveContainer>
        <PieChart>
          <Legend
            verticalAlign='top'
            height={36}
            iconType='line'
          />
          <Tooltip/>
          <Pie
            data={data}
            dataKey='data'
            nameKey='label'
            innerRadius={30}
            label={((entry) => Math.floor(entry.value))}
          >
            {
              data.map((entry, index) =>
                <Cell
                  key={`pieChart-${index}`}
                  fill={entry.color}
                />
              )
            }
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </>
  );
};