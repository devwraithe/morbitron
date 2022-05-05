// import components
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import LargeCard from "../largeCard";
import Section from "../section";

// large row component
const LRow = ({ title, fetchUrl }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(fetchUrl);
      console.log(request.data.results);
      setMovies(request.data.results);
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
          <LargeCard key={movie.id} movie={movie} />
        </Link>
      ))}
    </Section>
  );
};

export default LRow;
