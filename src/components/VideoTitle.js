import React from "react";

const VideoTitle = ({ title, overview }) => {
  function getFirst35Words(inputString) {
    // Use a regular expression to split the input string into words
    const words = overview.split(/\s+/);

    // Take the first 35 words and join them back into a string
    const first35Words = words.slice(0, 35).join(" ");

    return first35Words;
  }

  const newOverview = getFirst35Words(overview) + "..";
  //  console.log(newOverview);

  return (
    <div
      className="w-screen aspect-video pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-r
     from-black"
    >
      <h1 className="text-2xl md:text-6xl font-bold md:-mt-20 -mt-16 ">
        {title}
      </h1>
      <p className="hidden md:inline-block py-6 text-lg w-1/4">{newOverview}</p>
      <div className="my-2 md:m-0">
        <button className="hidden md:inline-block bg-white text-black py-1 md:py-4 md:px-12 px-4 text-xl  rounded-lg hover:bg-opacity-90 md:bg-opacity-80 bg-opacity-40">
          ▶️ Play
        </button>
        <button className="hidden md:inline-block  mx-2 bg-gray-500 text-white py-1 px-4 md:py-4 md:px-12 text-xl bg-opacity-50 rounded-lg">
          More
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
