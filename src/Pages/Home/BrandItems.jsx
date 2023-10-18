import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const BrandItems = () => {
  const [allProduct, setAllProduct] = useState([]);
  const [filterProduct, setFilterProduct] = useState([]);

  const { brand } = useParams();

  useEffect(() => {
    fetch(
      `https://eco-tech-universe-server-86ztqqszw-masudr.vercel.app/products`
    )
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
                  <p>Description: {pd.description}</p>
                  <p>Rating: {pd.rating}</p>
                  <p>Price: ${pd.price}</p>
                  <div className="flex items-center gap-5 py-4">
                    <Link to={`/productDetails/${pd._id}`}>
                      <button className="btn btn-neutral">view details</button>
                    </Link>

                    <button className="btn btn-secondary">
                      update product
                    </button>
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
