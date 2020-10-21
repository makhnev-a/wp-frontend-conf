import {useEffect, useState} from "react";

export default (fetchData, parse) => {
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

  return {
    data, error
  };
};