// * data fetching in React Client side
"use client";
import { useEffect, useState } from "react";

// export const metadata = {
//   title: "Home",
// };

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const response = await fetch(
      "https://nomad-movies.nomadcoders.workers.dev/movies"
    );
    const json = await response.json();
    setMovies(json);
    setIsLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div>
      <p>{isLoading ? "isLoading..." : JSON.stringify(movies)}</p>
    </div>
  );
}
