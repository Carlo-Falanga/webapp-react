import { useEffect, useState } from "react";
import axios from "axios";

export default function ReviewsForm({ movieId, refreshData }) {

  const initialFormState = {
    name: "",
    vote: 5,
    text: "",
  };

  const [formData, setFormData] = useState(initialFormState);
  const [submissionStatus, setSubmissionStatus] = useState(null)
  const api_url =
    import.meta.env.VITE_API_SERVER_ADDRESS || "http://localhost:4404";

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    axios
      //    Axios fetch to the api to submit the review
      .post(`${api_url}/movies/${movieId}/reviews`, formData)
      .then((response) => {
        console.log("Review submitted successfully:", response.data);
        if(response){
            setSubmissionStatus('success')
            refreshData()
        }
      })
      .catch((error) => {
        console.error("Error submitting review:", error);
        setSubmissionStatus('error')
      });

      setFormData(initialFormState)
      setSubmissionStatus(null)
  };


  return (
    <section>
      <div className="container my-5 py-5">
        <h3>Submit a Review</h3>
        {submissionStatus === 'success' && <div className="alert alert-success" role="alert">Review sumbitted successfully!</div>}
        {submissionStatus === 'error' && <div className="alert alert-danger" role="alert">Error submitting the review. Please try again</div>}
        <form onSubmit={handleSubmit}>
          {/* Name */}
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Your name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </div>

          {/* Vote */}
          <div className="mb-3">
            <label htmlFor="vote" className="form-label">
              Vote
            </label>
            <select
              className="form-select"
              id="vote"
              value={formData.vote}
              onChange={(e) =>
                setFormData({ ...formData, vote: e.target.value })
              }
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>

          {/* Text */}
          <div className="mb-3">
            <label htmlFor="text" className="form-label">
              Review
            </label>
            <textarea
              className="form-control"
              id="text"
              rows="3"
              placeholder="Write your review here..."
              value={formData.text}
              onChange={(e) =>
                setFormData({ ...formData, text: e.target.value })
              }
            ></textarea>
          </div>
          {/* Button */}
          <button type="submit" className="btn btn-dark w-100">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
