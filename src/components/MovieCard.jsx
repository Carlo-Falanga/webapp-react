import { Link } from "react-router";

export default function MovieCard({ movie }) {
  return (
    <div className="col">
      <div className="card h-100 shadow-sm">
        <img src={`http://${movie.image}`} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{movie.title}</h5>
          <p className="card-text">{movie.abstract}</p>
          <Link to={`/movies/${movie.id}`}>
            <button className="btn btn-primary">View More</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
