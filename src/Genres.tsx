import { useState, useEffect } from "react";

export function Genres() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = () => {
      fetch(
        `https://api.rawg.io/api/genres?key=afce07a77615492191297e9d59036b7c`
      )
        .then((response) => response.json())
        .then((data) => {
          setData(data.results);
        });
    };

    getData();
  }, []);

  return data.map((v: { slug: string; id: number }) => {
    return <option key={v.id}>{v.slug}</option>;
  });
}
