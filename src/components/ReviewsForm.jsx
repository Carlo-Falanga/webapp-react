export default function ReviewsForm(){

    return(
        <section>
            <div className="container my-5 py-5">
                <h3>Submit a Review</h3>
                <form action="">
                    {/* Name */}
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control" id="name" placeholder="Your name"/>
                    </div>

                    {/* Vote */}
                    <div className="mb-3">
                        <label htmlFor="vote" className="form-label">Vote</label>
                        <select className="form-select" id="vote">
                            <option value="">Select a rating</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>

                    {/* Text */}
                    <div className="mb-3">
                        <label htmlFor="text" className="form-label">Review</label>
                        <textarea className="form-control" id="text" rows="3" placeholder="Write your review here..."></textarea>
                    </div>
                    {/* Button */}
                    <button type="submit" className="btn btn-primary">Submit Review</button>
                </form>
            </div>
        </section>
    )
}