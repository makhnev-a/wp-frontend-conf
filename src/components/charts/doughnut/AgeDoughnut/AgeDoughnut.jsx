import React from "react";
import {Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip} from "recharts";

import {api} from "../../../../api/api";
import {Title} from "../../../Title/Title";
import useFetch from "../../../../hooks/useFetch";

const nasid = 19217252;
const dataStart = '2020-08-28';
const dataEnd = '2020-09-04';

export const AgeDoughnut = () => {
  const {data, error} = useFetch(
    api.yandex.getAgeData(nasid, dataStart, dataEnd),
    (response) => {
      return response.data.labels.map((label, index) => ({
        label,
        data: response.data.data[index],
        color: response.data.backgroundColor[index]
      }));
    }
  );

  return (
    <>
      {!error && (
        <>
          <Title>Возраст</Title>
          <ResponsiveContainer>
            <PieChart>
              <Legend
                verticalAlign='top'
                height={36}
                iconType={'line'}
              />
              <Tooltip/>
              <Pie
                data={data}
                dataKey='data'
                nameKey='label'
                innerRadius={30}
                label={((entry) => Math.floor(entry.data))}
              >
                {
                  data.map((entry, index) => <Cell key={`agePieChart-${index}`} fill={entry.color}/>)
                }
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </>
      )}
    </>
  );
};