import Movie from '../components/movie';
import styles from '../styles/home.module.css'

export const metadata = {
  title: "Home",
};

export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

const getMovies = async () => {
  // await new Promise(resolve => setTimeout(resolve, 1000));
  const response = await fetch(API_URL);
  const json = await response.json();
  return json;
};

export default async function HomePage() {
  const movies = await getMovies();
  return (
    <div className={styles.container}>
      {movies.map(movie => (
        <Movie key={movie.id} {...movie} />
      ))}
    </div>
  );
}

// * data fetching in React Client side
// "use client";
// import { useEffect, useState } from "react";

// // export const metadata = {
// //   title: "Home",
// // };

// export default function Home() {
//   const [isLoading, setIsLoading] = useState(true);
//   const [movies, setMovies] = useState([]);
//   const getMovies = async () => {
//     const response = await fetch(
//       "https://nomad-movies.nomadcoders.workers.dev/movies"
//     );
//     const json = await response.json();
//     setMovies(json);
//     setIsLoading(false);
//   };
//   useEffect(() => {
//     getMovies();
//   }, []);
//   return (
//     <div>
//       <p>{isLoading ? "isLoading..." : JSON.stringify(movies)}</p>
//     </div>
//   );
// }
