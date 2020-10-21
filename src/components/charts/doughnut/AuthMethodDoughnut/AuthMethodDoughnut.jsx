import React from "react";
import {api} from "../../../../api/api";

import {DoughnutChart} from "../DoughnutChart";
import useFetch from "../../../../hooks/useFetch";

export const AuthMethodDoughnut = () => {
  const nasid = 19217252;
  const dataStart = '2019-08-20';
  const dataEnd = '2020-08-27';

  const COLORS = ['#037838', '#721982'];

  const {data, error} = useFetch(
    api.wifibox.getAuthActivity(nasid, dataStart, dataEnd),
    (response) => {
      const data1 = response.data.data1.reduce((acc, cur) => acc + cur, 0);
      const data2 = response.data.data2.reduce((acc, cur) => acc + cur, 0);
      return [
        {
          label: 'Calls',
          data: data1,
          color: COLORS[0]
        },
        {
          label: 'Sms',
          data: data2,
          color: COLORS[1]
        }
      ];
    }
  );

  return (
    <>
      {!error && (
        <DoughnutChart chartTitle='Способ авторизации' data={data}/>
      )}
    </>
  );
};