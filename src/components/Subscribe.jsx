import React from "react";

const Subscribe = () => {
  const handleSubmit = (e) => e.preventdefault();
  return (
    <div className="flex items-center justify-center flex-col gap-4 py-16">
      <h2 className="text-2xl font-semibold">Subscribe now & get 20% off</h2>
      <p className="text-gray-400">
        Stay updated with our latest collections, exclusive offers, and fashion
        trends.
      </p>
      <form
        className="flex items-center justify-center"
        onSubmit={handleSubmit}
      >
        <input
          type="email"
          placeholder="Enter your email"
          className="border px-5 py-3 text-sm md:w-96 lg:w-[500px] border-gray-300 outline-none"
        />
        <button
          type="submit"
          className="uppercase border border-black bg-black text-white py-2.5 px-10 tracking-wide cursor-pointer"
        >
          subscribe
        </button>
      </form>
    </div>
  );
};

export default Subscribe;
