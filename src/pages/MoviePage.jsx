import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function MoviePage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  const api_url =
    import.meta.env.VITE_API_SERVER_ADDRESS + "/movies/" + movieId;

  useEffect(() => {
    // fetch the api using axios
    axios
      .get(api_url)
      .then((response) => {
        // do something with the response
        setMovie(response.data);
        console.log(response.data);
        
      })
      .catch((error) => {
        console.error("Error fetching movie data:", error);
      });
  }, [movieId]);

  return (
    <>
      <h1>Movie Page: {movieId}</h1>
      {movie ? (
        <div>
          <h2>{movie.title}</h2>
          <p>{movie.description}</p>
          {/* movie review text */}
            {movie.reviews && movie.reviews.map((review) => (
              <p key={review.id}>{review.text}</p>
            ))}
        </div>
      ) : (
        <p>Movie not found.</p>
      )}
    </>
  );
}
