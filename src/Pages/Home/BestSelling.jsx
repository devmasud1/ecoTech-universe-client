const BestSelling = () => {
  return (
    <div className="max-w-[1440px] mx-auto my-10">
      <div className="mx-5 lg:mx-0">
        <h1 className="text-4xl font-semibold my-4">Best Selling Products</h1>
        <hr className="w-32 h-1 bg-orange-500" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mx-5 lg:mx-0 my-10 lg:my-12">
        <div className="flex flex-col-reverse lg:flex-row  items-center bg-slate-400">
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl font-semibold mb-4 mx-3 mt-4 lg:mt-0">
              MacBook Pro
            </h2>
            <p className="text-lg mx-3 mb-3 lg:mb-0">
              The MacBook Pro is a high-performance laptop from Apple.
            </p>
          </div>
          <div className="w-full lg:w-1/2 bg-slate-200">
            <img
              src="https://i.ibb.co/0c6p7Jq/mack.png"
              alt="MacBook Pro"
              className="object-cover w-full h-[300px] lg:h-[450px] lg:ml-2"
            />
          </div>
        </div>
        <div className="flex flex-col-reverse lg:flex-row items-center bg-slate-300 ">
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl font-semibold mb-4 mx-3 mt-4 lg:mt-0">
              iPad
            </h2>
            <p className="text-lg mx-3 mb-3 lg:mb-0">
              The iPad is a versatile and user-friendly tablet from Apple.
            </p>
          </div>
          <div className="w-full lg:w-1/2 bg-slate-200">
            <img
              src="https://i.ibb.co/zr2FLV4/Ipad.png"
              alt="iPad"
              className="object-cover w-full h-[300px] lg:h-[450px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSelling;
