import React, {useState} from "react";
import {Label, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import {useTheme} from "@material-ui/core";

import {Title} from "../../../Title/Title";
import {api} from "../../../../api/api";
import useFetch from "../../../../hooks/useFetch";

const nasid = 19217252;
const dataStart = '2019-08-29';
const dataEnd = '2020-09-05';

export const VisitorsLine = () => {
  const [opacity, setOpacity] = useState({newData: 1, constData: 1});

  const {data, error} = useFetch(
    api.yandex.getVisitors(nasid, dataStart, dataEnd),
    (response) => {
      return response.data.labels.map((label, index) => ({
        label,
        newData: response.data.newdata[index],
        constData: response.data.constdata[index]
      }));
    }
  );

  const onOpacityEnterClick = (event) => {
    setOpacity((prevState) => ({
      ...prevState,
      [event.dataKey]: prevState[event.dataKey] === 1 ? 0 : 1
    }));
  };

  const theme = useTheme();

  return (
    <>
      {!error && (
        <>
          <Title>Посетители</Title>
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
                  Посетителей
                </Label>
              </YAxis>
              <Tooltip/>
              <Legend verticalAlign={'top'} onClick={onOpacityEnterClick}/>
              <Line
                strokeOpacity={opacity.newData}
                type='monotone'
                dataKey='newData'
                stroke='#037838'
                dot={true}
              />
              <Line
                strokeOpacity={opacity.constData}
                type='monotone'
                dataKey='constData'
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