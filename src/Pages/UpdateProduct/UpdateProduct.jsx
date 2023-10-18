import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { BsArrow90DegLeft } from "react-icons/bs";

const UpdateProduct = () => {
  const navigate = useNavigate();
  const productDetailsData = useLoaderData();

  const { _id, name, image, brand, type, rating, price, description } =
    productDetailsData || {};

  const handleUpdateProduct = (e) => {
    e.preventDefault();

    const form = e.target;
    const image = form.image.value;
    const name = form.name.value;
    const brand = form.brand.value;
    const type = form.type.value;
    const description = form.description.value;
    const rating = form.rating.value;
    const price = form.price.value;

    const updateProduct = {
      image,
      name,
      brand,
      type,
      description,
      rating,
      price,
    };

    fetch(`https://eco-tech-universe-server.vercel.app/product/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateProduct),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.modifiedCount > 0) {
          Swal.fire("Product successfully updated");
        }
      });
  };

  const handlePre = () => {
    navigate(-1);
  };

  return (
    <div
      className="bg-cover bg-center h-full py-10"
      style={{
        backgroundImage: `url(https://i.ibb.co/pwn6fvJ/addproductbg.jpg)`,
      }}
    >
      <div className="max-w-[1440px] mx-auto">
        <button
          onClick={handlePre}
          className="flex items-center gap-2 px-6 py-1 bg-slate-800 text-white my-3"
        >
          <BsArrow90DegLeft></BsArrow90DegLeft>
          previous page
        </button>
      </div>
      <div className="bg-[#f4f3f0bd] max-w-[1440px] mx-auto py-10">
        <div className="w-full lg:w-1/2 mx-5 lg:mx-auto text-center">
          <h1 className="text-2xl lg:text-3xl font-bold text-[#374151] my-2 lg:my-4">
            Update Product information
          </h1>
          <p className="text-[#374151]">
            Updating product information typically refers to the process of
            making changes or modifications to the details and attributes
            associated with a specific product.
          </p>
        </div>
        <div className="w-full mx-auto my-5">
          <form onSubmit={handleUpdateProduct} className="mx-5">
            <div className="flex flex-col gap-4 md:flex-row md:gap-8">
              <div className="w-full">
                <label className="label">
                  <span className="font-medium">Image url</span>
                </label>
                <div className="input-group">
                  <input
                    required
                    type="text"
                    name="image"
                    defaultValue={image}
                    className="input input-bordered w-full"
                  />
                </div>
              </div>
            </div>

            <div className="w-full flex flex-col gap-4 md:flex-row md:gap-8">
              <div className="w-full md:w-1/2">
                <label className="label">
                  <span className="font-medium">Name</span>
                </label>
                <div className="input-group">
                  <input
                    required
                    type="text"
                    name="name"
                    defaultValue={name}
                    className="input input-bordered w-full"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <label className="label">
                  <span className="font-medium">Brand Name</span>
                </label>
                <div className="input-group">
                  <input
                    required
                    type="text"
                    name="brand"
                    defaultValue={brand}
                    className="input input-bordered w-full"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4 md:flex-row md:gap-8">
              <div className="w-full md:w-1/2">
                <label className="label">
                  <span className="font-medium">Type</span>
                </label>
                <div className="input-group">
                  <input
                    required
                    type="text"
                    name="type"
                    defaultValue={type}
                    className="input input-bordered w-full"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <label className="label">
                  <span className="font-medium">Description</span>
                </label>
                <div className="input-group">
                  <input
                    required
                    type="text"
                    name="description"
                    defaultValue={description}
                    placeholder="Enter short description"
                    className="input input-bordered w-full"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4 md:flex-row md:gap-8">
              <div className="w-full md:w-1/2">
                <label className="label">
                  <span className="font-medium">Rating</span>
                </label>
                <div className="input-group">
                  <input
                    required
                    type="text"
                    name="rating"
                    defaultValue={rating}
                    className="input input-bordered w-full"
                  />
                </div>
              </div>

              <div className="w-full md:w-1/2">
                <label className="label">
                  <span className="font-medium">Price</span>
                </label>
                <div className="input-group">
                  <input
                    required
                    type="text"
                    name="price"
                    defaultValue={price}
                    className="input input-bordered w-full"
                  />
                </div>
              </div>
            </div>

            <div className="mt-8 w-1/2 mx-auto">
              <input
                className="btn btn-block btn-neutral"
                type="submit"
                value="Update Product"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProduct;
