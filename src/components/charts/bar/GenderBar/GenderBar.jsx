import React, {useEffect, useState} from "react";
import {Bar, BarChart, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";

import {Title} from "../../../Title/Title";
import {api} from "../../../../api/api";

const nasid = 19217252;
const dataStart = '2019-08-29';
const dataEnd = '2020-09-05';

export const GenderBar = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);

  const getData = async () => {
    const response = await api.yandex.getGenderBar(nasid, dataStart, dataEnd);

    return response.data.labels.map((label, index) => ({
      label,
      data1: response.data.data1[index],
      data2: response.data.data2[index]
    }));
  };

  useEffect(() => {
    (async () => {
      try {
        const response = await getData();
        setData(response);
      } catch (e) {
        setError(true);
      }
    })();
  }, []);

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
              <Bar dataKey='data2' fill='#721A81'/>
            </BarChart>
          </ResponsiveContainer>
        </>
      )}
    </>
  );
};