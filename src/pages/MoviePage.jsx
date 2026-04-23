import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import ReviewsForm from "../components/ReviewsForm";

export default function MoviePage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  const api_url =
    import.meta.env.VITE_API_SERVER_ADDRESS + "/movies/" + movieId;

  const fetchMovieData = () => {
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
  };

  useEffect(fetchMovieData, [movieId]);

  return (
    <>
      <section>
        <div className="container pt-5">
          <div className="row row-cols-1 row-cols-md-2 g-4 py-5 d-flex align-items-center">
            {movie && (
              <>
                <div className="col-sm-12 col-md-4">
                  <img
                    src={`../images/${movie.image}`}
                    alt={movie.title}
                    className="img-fluid rounded-3 shadow-sm movie_page_img"
                  />
                </div>
                <div className="col">
                  <h2>{movie.title}</h2>
                  <div className="text-secondary fst-italic">Crime</div>
                  <div className="py-3 d-flex flex-row gap-4">
                    <div className="">
                      <span className="fw-semibold">Release Year:</span>
                      {movie.release_year}
                    </div>
                    <div className="">
                      <span className="fw-semibold">Director:</span>
                      {movie.director}
                    </div>
                  </div>
                  <p>{movie.abstract}</p>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      <section className="bg-light">
        <div className="container py-5 my-5">
          <h2 className="text-center mb-5">Reviews</h2>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {movie &&
              movie.reviews &&
              movie.reviews.map((review) => (
                <div className="col" key={review.id}>
                  <div className="card">
                    <div className="card-body">
                      <p className="card-text fst-italic">"{review.text}"</p>
                      <div className="d-flex align-items-center mt-3">
                        <div>
                          <h6 className="mb-0">{review.name}</h6>
                          <small>
                            <span className="fw-semibold">Vote:</span>{" "}
                            {review.vote}
                          </small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      <ReviewsForm movieId={movieId} refreshData={fetchMovieData}/>
    </>
  );
}
