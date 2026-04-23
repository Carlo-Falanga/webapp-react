import { Link } from "react-router";

export default function MovieCard({ movie, onOpenModal }) {
  return (
    <div className="col">
      <div className="card shadow-sm h-100 position-relative">
        <img
          src={`./images/${movie.image}`}
          className="card-img-top object-fit-cover h-100 hover_movie_card"
          alt={movie.title}
          onClick={() => onOpenModal(movie)}
        />

        <i className="bi bi-eye-fill position-absolute eye_icon" onClick={() => onOpenModal(movie)}></i>

        <div className="card-body d-flex flex-column justify-content-between gap-2">
          <h5 className="card-title fw-bold">{movie.title}</h5>
          <div>
            <span className="fw-semibold">Director:</span> {movie.director}
          </div>
          <p className="card-text">{movie.abstract}</p>

          <Link to={`/movies/${movie.id}`}>
            <button className="btn btn-dark w-100">View More</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
