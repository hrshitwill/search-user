import {
  useState,
  useEffect
} from "react";

function useFetch(url) {

  const [data, setData] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    async function fetchData() {

      try {

        const response =
          await fetch(url);

        const result =
          await response.json();

        setData(result);

      } catch(error) {

        console.log(error);

      } finally {

        setLoading(false);

      }

    }

    fetchData();

  }, [url]);

  return {
    data,
    loading
  };

}

export default useFetch;