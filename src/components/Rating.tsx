import { useState } from "react";

const Rating = () => {
  const [rating, setRating] = useState<number | undefined>(undefined);

  const handleSubmit = (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("yeet");
  };

  return (
    <div className="w-96 h-96 rounded-3xl bg-gray-800 p-7">
      <img src="icon-star.svg" alt="" />
      <h1 className="text-slate-200">How did we do?</h1>
      <p className="text-slate-500">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <form onSubmit={handleSubmit}>
        {[1, 2, 3, 4, 5].map((rating) => (
          <button
            className="text-slate-500"
            type="button"
            key={rating}
            value={rating}
            onClick={() => setRating(rating)}
          >
            {rating}
          </button>
        ))}
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
};

export default Rating;
