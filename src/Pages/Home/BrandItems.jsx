import { useEffect, useState } from "react";
import Rating from "react-rating";
import { Link, useParams } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Pagination from "swiper/modules";

const BrandItems = () => {
  const [allProduct, setAllProduct] = useState([]);
  const [filterProduct, setFilterProduct] = useState([]);

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
      });
  }, [brand]);

  return (
    <div>
      <div className="h-[60vh] ">
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
              style={{ backgroundImage: `url(${pd.image})` }}
            >
              <div className="flex justify-center items-center h-full text-white ">
                <div className="bg-slate-400 p-20">
                  <h1 className="text-3xl lg:text-4xl mb-2">{pd.name}</h1>
                  <h1 className="text-xl text-blue-100">
                    <span className="text-3xl lg:text-4xl text-orange-200 font-bold">
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
                    className="w-full h-[310px] object-cover"
                  />
                </div>
                <div className="w-1/2 p-4 text-lg">
                  <h2>Brand: {pd.brand}</h2>
                  <p>Name: {pd.name}</p>
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
                  <div className="flex items-center gap-5 py-4">
                    <Link to={`/productDetails/${pd._id}`}>
                      <button className="btn btn-neutral">view details</button>
                    </Link>

                    <Link to={`/productUpdate/${pd._id}`}>
                      <button className="btn btn-secondary">
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
    </div>
  );
};

export default BrandItems;
