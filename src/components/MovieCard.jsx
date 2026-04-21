import { Link } from "react-router";

export default function MovieCard({ movie }) {
  return (
    <div className="col">
      <div className="card h-100 shadow-sm">
        <img src={`http://${movie.image}`} className="card-img-top" alt="..." />
        <div className="card-body d-flex flex-column justify-content-between gap-2">
          <h5 className="card-title fw-bold">{movie.title}</h5>
          <div><span className="fw-semibold">Director:</span> {movie.director}</div>
          <p className="card-text">{movie.abstract}</p>
          <Link to={`/movies/${movie.id}`}>
            <button className="btn btn-dark">View More</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
