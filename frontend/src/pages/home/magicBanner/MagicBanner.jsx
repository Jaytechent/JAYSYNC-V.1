import { useEffect, useState } from "react";
import "./banner.css"; // Import your CSS file here
import img1 from "./image/img1.png";
import img2 from "./image/img2.png";
import img3 from "./image/img3.png";
import img4 from "./image/img4.png";
import { Link } from "react-router-dom";

const MagicBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isNext, setIsNext] = useState(false);
  const [isPrev, setIsPrev] = useState(false);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 3 ? 0 : prevSlide + 1));
    setIsNext(true);
    setIsPrev(false);
    setTimeout(() => {
      setIsNext(false);
    }, 500); // Animation duration
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? 3 : prevSlide - 1));
    setIsPrev(true);
    setIsNext(false);
    setTimeout(() => {
      setIsPrev(false);
    }, 500); // Animation duration
  };

  // Automatically click next slide after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      nextSlide();
    }, 3500); // 3.5 seconds

    return () => clearTimeout(timer);
  }, [currentSlide]); // Re-run effect when currentSlide changes

  return (
    <div className="mt-12 lg:mt-10">
      <div className={`carousel ${isNext ? "next" : ""} ${isPrev ? "prev" : ""}`}>
        <div className="list">
          {[img1, img2, img3, img4].map((img, index) => (
            <div
              className="item"
              key={index}
              style={{ display: currentSlide === index ? "block" : "none" }}
            >
              <img
                className="brightness-[0.60]"
                src={img}
                alt={`Slide ${index + 1}`}
              />

              <div className="content">
                <div>
                  <div>
                    <p className="text-xl ml-1 font-semibold tracking-wider text-slate-300">Reach your Audience Across <b>SM</b> at same time</p>
                  </div>
                  <div className="my-5"><h1 className="text-3xl lg:text-6xl font-bold text-slate-200">JAYSYNC</h1></div>
                  <div className="my-5"><h1 className="drop-shadow-2xl text-lime-500 text-5xl lg:text-7xl font-bold">Make that Post Now!</h1></div>
                  <div className="w-2/3 hidden lg:flex ">
                    <p className="text-slate-200">
                     Post Across your Social media in One Click
                    </p>
                  </div>
                </div>

                <div className="flex space-x-4 mt-6">
                  <Link to="/login">
                    <button
                      type="button"
                      className="text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2"
                    >
                      Login
                    </button>
                  </Link>
                  
                </div>

                <Link to="/register">
                  <button
                    type="button"
                    className="mt-14 text-white bg-gradient-to-r from-rose-700 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-lg px-7 py-2 text-center mb-2"
                  >
                    Register
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
        {/* Thumbnails */}
        <div className="thumbnail">
          {[img1, img2, img3, img4].map((img, index) => (
            <div
              key={index}
              className={`item ${
                currentSlide === index
                  ? "border-4 rounded-3xl border-rose-500"
                  : ""
              }`}
              onClick={() => setCurrentSlide(index)}
            >
              <img src={img} alt={`Thumbnail ${index + 1}`} />
            </div>
          ))}
        </div>
        {/* Arrows */}
        <div className="arrows">
          <button id="prev" onClick={prevSlide}>
            {"<"}
          </button>
          <button id="next" onClick={nextSlide}>
            {">"}
          </button>
        </div>
        <div className="time"></div>
      </div>
    </div>
  );
};

export default MagicBanner;
