import { Link } from "react-router-dom";

const Brand = () => {
  const brandInfo = [
    { id: 1, brand: "Apple", img: "https://i.ibb.co/qkhmYV0/apple.jpg" },
    { id: 2, brand: "Samsung", img: "https://i.ibb.co/3zJZ8kR/samsung.jpg" },
    { id: 3, brand: "Sony", img: "https://i.ibb.co/4MmV3v6/sony.jpg" },
    { id: 4, brand: "Google", img: "https://i.ibb.co/bR9WQsB/googlr.jpg" },
    { id: 5, brand: "Intel", img: "https://i.ibb.co/v1Sx5Km/intel.jpg" },
    { id: 6, brand: "Nokia", img: "https://i.ibb.co/zJpPTWJ/nokia.jpg" },
  ];

  return (
    <div className="max-w-[1440px] mx-auto my-16">
      <h1 className="text-center text-3xl font-bold mx-auto">Our Top Brand</h1>
      <hr className="w-28 h-1 bg-orange-500 text-center mx-auto mt-2 mb-8" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-5 lg:mx-0 gap-8 lg:gap-10">
        {brandInfo.map((brand) => (
          <Link to={`/brandItem/${brand.brand}`} key={brand.id}>
            <div className="card card-compact bg-base-100 shadow-xl relative overflow-hidden">
              <figure className="relative">
                <img
                  src={brand.img}
                  alt="apple"
                  className="w-full max-h-[200px] object-cover transition-transform transform scale-100 hover:scale-105"
                />
              </figure>
              <div className="w-36 text-center mx-auto absolute bottom-0 bg-slate-300">
                <h2 className="text-xl font-semibold py-1">{brand.brand}</h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Brand;
