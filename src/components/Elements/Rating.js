export const Rating = ({ rating }) => {
  const ratingArray = Array(5).fill(false);
  for (let i = 0; i < rating; i++) {
    ratingArray[i] = true;
  }
  return (
    <>
      {ratingArray.map((item, index) =>
        item ? (
          <i className="bi bi-star-fill text-yellow-500" key={index}></i>
        ) : (
          <i className="bi bi-star text-yellow-500" key={index}></i>
        )
      )}
    </>
  );
};
