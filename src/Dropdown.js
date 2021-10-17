import React, { useState, useEffect } from "react";
import Select from "react-select";

export function Dropdown() {
  const [film, setFilm] = useState([]);

  let url = "https://swapi.dev/api/films";
  useEffect(() => {
    async function getFilm() {
      const response = await fetch(url);
      const body = await response.json();
      console.log(body.results);
      setFilm(
        body.results.map(({ title }) => ({ label: title, value: title }))
      );
    }
    getFilm();
  }, []);

  return <Select options={film} />;
}
