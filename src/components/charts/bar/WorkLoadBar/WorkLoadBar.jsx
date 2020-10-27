import React from "react";
import {Bar, BarChart, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";

import {Title} from "../../../Title/Title";
import {api} from "../../../../api/api";
import useFetch from "../../../../hooks/useFetch";

const nasid = 19217252;
const dataStart = '2019-08-29';
const dataEnd = '2020-09-05';

export const WorkLoadBar = () => {
  const {data, error} = useFetch(
    api.yandex.getWorkLoad(nasid, dataStart, dataEnd),
    (response) => {
      return response.data.labels.map((label, index) => ({
        label,
        data1: response.data.data1[index]
      }));
    }
  );

  return (
    <>
      {!error && (
        <>
          <Title>Способ авторизации</Title>
          <ResponsiveContainer>
            <BarChart
              data={data}
              margin={{
                top: 16,
                right: 16,
                bottom: 0,
                left: 24
              }}
            >
              <XAxis dataKey='label'/>
              <YAxis/>
              <Tooltip/>
              <Legend verticalAlign={'top'}/>
              <Bar dataKey='data1' fill='#037838'/>
            </BarChart>
          </ResponsiveContainer>
        </>
      )}
    </>
  );
};