import React, { useState, useEffect } from "react";

function Review() {
  const [reviews, setReviews] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [listItems, setListItems] = useState([]);

  useEffect(() => {
    fetch(`https://pelicula.onrender.com/movies/1/reviews`)
      .then((result) => result.json())
      .then((data) => setReviews(data))
      .catch((error) => console.error(error));
  }, []);
  
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddItem = () => {
    setListItems([...listItems, inputValue]);
    setInputValue("");
  };

  const handleRemoveItem = (index) => {
    const newList = [...listItems];
    newList.splice(index, 1);
    setListItems(newList);
  };

  const handleEditItem = (index) => {
    const newInputValue = prompt("Enter the new value:");
    if (newInputValue !== null) {
      const newList = [...listItems];
      newList[index] = newInputValue;
      setListItems(newList);
    }
  };

  return (
    <div className="review-1">
        <p>Here</p>
      <h1>Here you can add a review about a Movie </h1>
      <ol className="list1">
      {reviews.map((review) => (
          <li key={review.id}>
            {review.user_id} {review.movie_id} {review.comment}
          </li>
        ))}
          {listItems.map((item, index) => (
            <li key={index}>
              {item}
              <button onClick={() => handleEditItem(index)}>Edit</button>
              <button onClick={() => handleRemoveItem(index)}>
                Remove Review
              </button>
            </li>
          ))}
        </ol>
      <div>
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <button className="btn1" onClick={handleAddItem}>
          {" "}
          Add Your Review{" "}
        </button>

        <br />
        <br />
        <br />
        <br />

       
      </div>
    </div>
  );
}

export default Review;