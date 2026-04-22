import { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "../components/MovieCard";

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const api_url = import.meta.env.VITE_API_SERVER_ADDRESS + "/movies/";

    // fetch the api using axios
    axios
      .get(api_url)
      .then((response) => {
        setMovies(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleOpenModal = (movie) => {
    setSelectedMovie(movie);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedMovie(null);
  };

  return (
    <>
      <section className="p-5 mb-4 bg-light">
        <div className="container py-5">
          <h1 className="fw-bold">Movies Catalog</h1>
          <p>
            Welcome to our movie catalog! Here you can find a wide selection of
            movies, from the latest releases to timeless classics. Whether
            you're a fan of action, comedy, drama, or any other genre, we have
            something for everyone. Browse through our collection and discover
            your next favorite movie today!
          </p>
        </div>
      </section>

      <section>
        <div className="container py-5">
          <h2 className="fw-semibold pb-4">Latest Movies</h2>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {movies.length > 0 ? (
              movies.map((movie) => (
                <MovieCard
                  key={movie.id}
                  movie={movie}
                  onOpenModal={handleOpenModal}
                />
              ))
            ) : (
              <p>No movies available.</p>
            )}
          </div>

          {showModal && selectedMovie && (
            <div className="modal d-block bg-black bg-opacity-75" tabIndex="-1">
              <div className="modal-dialog">
                <div className="modal-content p-4">
                  <div className="modal-header">
                    <h5 className="modal-title fw-bold">
                      {selectedMovie.title}
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                      onClick={handleCloseModal}
                    ></button>
                  </div>
                  <div className="modal-body">
                    <img
                      src={`./images/${selectedMovie.image}`}
                      alt=""
                      className="img-fluid w-100"
                    />

                    <p className="pt-4">
                      <strong>Director:</strong> {selectedMovie.director}
                    </p>
                    <p>
                      <strong>Genre:</strong> {selectedMovie.genre}
                    </p>
                    <p>
                      <strong>Release year:</strong>{" "}
                      {selectedMovie.release_year}
                    </p>
                    <p>{selectedMovie.abstract}</p>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-primary btn-dark"
                      onClick={handleCloseModal}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
