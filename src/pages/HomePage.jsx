import { useEffect, useState } from "react";
import axios from "axios";

export default function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const api_url = import.meta.env.VITE_API_SERVER_ADDRESS + "/movies/";

    // fetch the api using axios
    axios
      .get(api_url)
      .then((response) => {
        setMovies(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <h1>Home Page</h1>
        <ul>
            {movies.map((movie) => (
                <li key={movie.id}>{movie.title}</li>
            ))}
        </ul>
    </>
  );
}
