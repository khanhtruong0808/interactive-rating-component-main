import { useState } from "react";

const Rating = () => {
  const [rating, setRating] = useState<number | undefined>(undefined);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!rating) return;
    setSubmitted(true);
  };

  return submitted ? (
    <div className="max-w-xs rounded-xl bg-neutral-300 py-8 px-4 flex flex-col gap-6 items-center">
      <img src="thank-you.svg" alt="" className="w-36" />
      <p className="text-primary font-thin bg-neutral-200 rounded-3xl px-4 py-1.5 text-sm">
        You selected {rating} out of 5
      </p>
      <div className="text-center">
        <h1 className="text-neutral-50 text-2xl mb-3">Thank you!</h1>
        <p className="text-sm text-neutral-100">
          We appreciate you taking the time to give a rating. If you ever need
          more support, don't hesitate to get in touch!
        </p>
      </div>
    </div>
  ) : (
    <div className="max-w-xs rounded-xl bg-neutral-300 p-6 flex flex-col gap-3">
      <div className="w-11 h-11 bg-neutral-200 rounded-full p-3.5">
        <img src="icon-star.svg" alt="" />
      </div>
      <div>
        <h1 className="text-neutral-50 text-2xl mb-4">How did we do?</h1>
        <p className="text-neutral-100 text-[0.85rem]">
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-7 mt-2">
        <div className="flex justify-between">
          {[1, 2, 3, 4, 5].map((rating) => (
            <button
              className="text-neutral-100 text-xs bg-neutral-200 rounded-full w-10 h-10 hover:bg-gray-400 hover:text-white focus:text-white focus:bg-primary"
              type="button"
              key={rating}
              value={rating}
              onClick={() => setRating(rating)}
            >
              {rating}
            </button>
          ))}
        </div>
        <button
          type="submit"
          className="text-white text-sm bg-primary active:text-primary active:bg-white rounded-3xl py-3 tracking-widest"
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default Rating;
