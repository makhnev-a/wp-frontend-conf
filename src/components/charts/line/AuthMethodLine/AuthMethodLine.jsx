import React, {useState} from "react";
import {useTheme} from "@material-ui/core";
import {Label, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";

import {Title} from '../../../Title/Title';
import {api} from '../../../../api/api';
import useFetch from '../../../../hooks/useFetch';

export const AuthMethodLine = () => {
  const nasid = 19217252;
  const dataStart = '2019-08-20';
  const dataEnd = '2020-08-27';

  const theme = useTheme();

  const [opacity, setOpacity] = useState({data1: 1, data2: 1});

  const {data, error} = useFetch(
    api.wifibox.getAuthActivity(nasid, dataStart, dataEnd),
    (response) => {
      return response.data.labels.map((label, index) => ({
        label,
        data1: response.data.data1[index],
        data2: response.data.data2[index]
      }));
    }
  );

  const onOpacityEnterClick = (event) => {
    setOpacity((prevState) => ({
      ...prevState,
      [event.dataKey]: prevState[event.dataKey] === 1 ? 0 : 1
    }));
  };

  return (
    <>
      {!error && (
        <>
          <Title>Способ авторизации</Title>
          <ResponsiveContainer>
            <LineChart
              data={data}
              margin={{
                top: 16,
                right: 16,
                bottom: 0,
                left: 24
              }}
            >
              <XAxis dataKey='label' stroke={theme.palette.text.secondary}/>
              <YAxis stroke={theme.palette.text.secondary}>
                <Label
                  angle={270}
                  position='left'
                  style={{textAnchor: 'middle', fill: theme.palette.text.primary}}
                >
                  Sales ($)
                </Label>
              </YAxis>
              <Tooltip/>
              <Legend verticalAlign={'top'} onClick={onOpacityEnterClick}/>
              <Line
                strokeOpacity={opacity.data1}
                type='monotone'
                dataKey='data1'
                stroke='#037838'
                dot={true}
              />
              <Line
                strokeOpacity={opacity.data2}
                type='monotone'
                dataKey='data2'
                stroke='#721982'
                dot={true}
              />
            </LineChart>
          </ResponsiveContainer>
        </>
      )}
    </>
  );
};