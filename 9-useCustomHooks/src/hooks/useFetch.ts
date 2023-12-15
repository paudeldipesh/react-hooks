import { useEffect, useState } from "react";

export default function useFetch(url: string) {
  const [responses, setResponses] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setResponses(data));
  }, []);

  return responses;
}
