import React, { useState, useEffect} from "react";

function Review () {
 
    const [reviews, setReviews] = useState ([]);

    useEffect(() => {
        fetch('https://pelicula.onrender.com/movies//reviews')
        .then(result => result.json())
        .then(data => setReviews(data))
        .catch(error => console.error(error));

},  []);

    return (

        <div className="review">

            <ul>
                {reviews.map (review => (
                    <li key= {review.id}> {review.user_id} {review.movie_id} {review.comment} </li>
                        
                ))}

            </ul>

        </div>

    );
}

export default Review;