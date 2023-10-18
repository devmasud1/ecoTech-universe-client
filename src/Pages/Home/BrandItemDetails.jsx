import Rating from "react-rating";
import { useLoaderData } from "react-router-dom";

const BrandItemDetails = () => {
  const productDetailsData = useLoaderData();

  const { name, image, rating, price, description } = productDetailsData || {};

  const ratingNum = parseFloat(rating);

  const handleAddToCart = () =>{
    
  }

  return (
    <div className="max-w-[1440px] min-h-[55vh] mx-auto my-12">
      <div className="flex flex-col lg:flex-row mx-5 lg:mx-0  gap-10">
        <div className="w-full lg:w-1/2">
          <img src={image} alt="" />
        </div>
        <div className="w-full lg:w-1/2 bg-slate-100 p-5 space-y-4">
          <h2 className="text-xl lg:text-2xl font-medium">{name}</h2>
          <p>
            <Rating
              initialRating={ratingNum}
              emptySymbol={<span className="rating-symbol">☆</span>}
              fullSymbol={<span className="rating-symbol">★</span>}
              readonly
            />
            ({rating})
          </p>
          <p className="text-2xl lg:text-3xl font-medium my-2">${price}</p>

          <label>Product Details</label>
          <p className="">{description}</p>

          <div className="flex w-full gap-5">
            <img src={image} alt="" className="w-1/2 h-28 object-cover" />
            <img src={image} alt="" className="w-1/2 h-28 object-cover" />
          </div>
          <div className="pt-5">
            <button className="btn btn-neutral" onClick={() => handleAddToCart()}>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandItemDetails;
