import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SmallCard from "../smallCard";
import Section from "../section";

const SRow = ({ title, fetchUrl }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      console.log(request.data.results);
      return request;
    };
    fetchData();
  }, [fetchUrl]);

  console.log(movies);

  return (
    <Section title={title}>
      {movies.map((movie) => (
        <Link
          key={movie.id}
          to={{
            pathname: `/film/${movie.id}`,
            query: { id: movie.id },
          }}
        >
          <SmallCard key={movie.id} movie={movie} />
        </Link>
      ))}
    </Section>
  );
};

export default SRow;
