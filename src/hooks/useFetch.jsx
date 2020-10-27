import {useEffect, useState} from "react";

export default (fetchData, parse) => {
  console.log('fetchData', fetchData);

  const [data, setData] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {

    (async () => {
      try {
        const response = await fetchData;
        setData(parse(response));
      } catch (e) {
        setError(true);
      }
    })();
  }, []);

  console.log('data', data);
  return {
    data, error
  };
};