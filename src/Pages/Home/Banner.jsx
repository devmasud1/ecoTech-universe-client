import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Banner = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      className="h-[70vh] bg-cover relative"
      style={{
        backgroundImage: "url(https://i.ibb.co/cNgKhhg/banner.jpg)",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-80"></div>
      <div
        className="w-11/12 mx-auto text-white absolute inset-0 flex flex-col justify-center space-y-4 lg:w-2/3 xl:w-1/2"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <h1 className="text-3xl font-bold lg:text-4xl">
          <span className="text-4xl lg:text-5xl text-slate-300">Your Tech</span>{" "}
          <br />
          Wonderland for Premium Products
        </h1>
        <p className="text-sm sm:text-base text-slate-200">
          Discover a world of tech wonders where the latest gadgets and
          innovations await. We bring you an exclusive selection of top-tier
          tech products that redefine convenience and performance. Explore our
          collection and embark on a journey to upgrade your digital lifestyle.
          Welcome to the ultimate tech shopping destination.
        </p>
        <button className="w-[120px] bg-red-200 px-4 py-1 rounded-tl-lg rounded-br-lg text-black font-medium text-base hover:bg-black hover:text-white transition-all duration-300">
          Explore
        </button>
      </div>
    </div>
  );
};

export default Banner;
