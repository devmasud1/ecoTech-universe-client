const Banner = () => {
  return (
    <div
      className="h-[70vh] bg-cover relative"
      style={{
        backgroundImage: "url(https://i.ibb.co/cNgKhhg/banner.jpg)",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-80"></div>
      <div className="w-1/2 mx-auto text-white absolute inset-0 flex flex-col   justify-center space-y-6">
        <h1 className="text-4xl font-bold w-full">
          <span className="text-5xl">Your Tech </span> <br /> Wonderland for
          Premium Product
        </h1>
        <p className="space-y-3">
          Discover a world of tech wonders where the latest gadgets and
          innovations await. We bring you an exclusive selection of top-tier
          tech products that redefine convenience and performance. Explore our
          collection and embark on a journey to upgrade your digital lifestyle.
          Welcome to the ultimate tech shopping destination
        </p>
        <button className="w-[120px] bg-red-200 px-6 py-1 rounded-tl-xl rounded-br-lg  text-black font-medium text-lg hover:bg-black hover:text-white transition-all duration-3000 ease-in">
          Explore
        </button>
      </div>
    </div>
  );
};

export default Banner;
