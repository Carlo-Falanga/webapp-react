export default function MovieModal({onCloseModal, selectedMovie}) {

    return(
            <div className="modal d-block bg-black bg-opacity-75" tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content p-4">
              <div className="modal-header">
                <h5 className="modal-title fw-bold">{selectedMovie.title}</h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={onCloseModal}
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
                  <strong>Release year:</strong> {selectedMovie.release_year}
                </p>
                <p>{selectedMovie.abstract}</p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-primary btn-dark"
                  onClick={onCloseModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>

    )
}