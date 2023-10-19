import { useEffect, useState } from "react";
import Rating from "react-rating";
import { Link, useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Loading from "../Loading/Loading";

const BrandItems = () => {
  const [allProduct, setAllProduct] = useState([]);
  const [filterProduct, setFilterProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { brand } = useParams();

  useEffect(() => {
    fetch(`https://eco-tech-universe-server.vercel.app/products`)
      .then((res) => res.json())
      .then((result) => {
        setAllProduct(result);
        const filterByUser = result.filter(
          (pd) => pd.brand.toLowerCase() === brand.toLowerCase()
        );
        setFilterProduct(filterByUser);
        setIsLoading(false);
      });
  }, [brand]);

  return (
    <div>
      {filterProduct.length ? (
        <div className="h-[70vh]">
          <Swiper
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {filterProduct.map((pd) => (
              <SwiperSlide
                key={pd._id}
                className="bg-center bg-cover"
                style={{
                  backgroundImage: `url(${pd.image})`,
                  backgroundSize: "cover",
                }}
              >
                <div className="flex justify-center items-center h-full text-blue-800">
                  <div className="bg-slate-50 bg-opacity-70 p-10 sm:p-12 md:p-16">
                    <h1 className="text-xl font-semibold sm:text-2xl md:text-3xl lg:text-4xl mb-2">
                      {pd.name}
                    </h1>
                    <h1 className="text-base font-semibold sm:text-lg md:text-xl lg:text-2xl text-slate-800">
                      <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-orange-800 font-bold">
                        10%
                      </span>{" "}
                      Discount for all products
                    </h1>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ) : (
        ""
      )}
      {isLoading ? (
        <Loading></Loading>
      ) : (
        <div className="max-w-[1440px] min-h-[60vh] mx-auto my-10">
          {filterProduct.length ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 my-10 mx-5 lg:mx-0">
              {filterProduct.map((pd) => (
                <div
                  className="flex flex-col lg:flex-row  gap-5 bg-base-100 shadow-xl"
                  key={pd._id}
                >
                  <div className="lg:w-1/2">
                    <img
                      src={pd.image}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-1/2 p-4 space-y-2">
                    <h2 className="text-xl font-medium">Brand: {pd.brand}</h2>
                    <p className="text-lg font-medium">Name: {pd.name}</p>
                    <p>Type: {pd.type}</p>
                    <p>
                      <Rating
                        initialRating={parseFloat(pd.rating)}
                        emptySymbol={<span className="rating-symbol">☆</span>}
                        fullSymbol={<span className="rating-symbol">★</span>}
                        readonly
                      />
                      ({pd.rating})
                    </p>
                    <p>Price: ${pd.price}</p>
                    <p>Description: {pd.description}</p>

                    <div className="flex flex-col lg:flex-row w-full items-center gap-5 pt-5">
                      <Link to={`/productDetails/${pd._id}`} className="w-full">
                        <button className="btn btn-neutral text-xs">
                          view details
                        </button>
                      </Link>

                      <Link to={`/productUpdate/${pd._id}`} className="w-full">
                        <button className="btn btn-accent text-xs">
                          update product
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="w-full h-[56vh] flex justify-center items-center text-3xl font-semibold">
              No product found
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default BrandItems;
