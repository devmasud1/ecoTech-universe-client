const AddProduct = () => {
  const handleAddProduct = (e) => {
    e.preventDefault();

    const form = e.target;

    const image = form.image.value;
    const name = form.name.value;
    const brand = form.brand.value;
    const type = form.type.value;
    const description = form.description.value;
    const rating = form.rating.value;
    const price = form.price.value;

    const newProduct = {
      image,
      name,
      brand,
      type,
      description,
      rating,
      price,
    };

    fetch(`https://eco-tech-universe-server-86ztqqszw-masudr.vercel.app/product`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div
      className="bg-cover bg-center h-full py-10"
      style={{
        backgroundImage: `url(https://i.ibb.co/pwn6fvJ/addproductbg.jpg)`,
      }}
    >
      <div className="bg-[#f4f3f0bd] max-w-[1440px] mx-auto py-10">
        <div className="w-full lg:w-1/2 mx-5 lg:mx-auto text-center">
          <h1 className="text-2xl lg:text-3xl font-bold text-[#374151] my-2 lg:my-4">
            Add New Product
          </h1>
          <p className="text-[#374151]">
            Unlock new horizons of possibilities with our Add Product feature.
            Elevate your product offerings effortlessly, reaching a wider
            audience with just a few clicks.
          </p>
        </div>
        <div className="w-full mx-auto my-5">
          <form onSubmit={handleAddProduct} className="mx-5">
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
                    placeholder="Enter image url"
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
                    placeholder="Enter product name"
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
                    placeholder="Enter product brand"
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
                    placeholder="Enter product type"
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
                    placeholder="Enter product rating"
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
                    placeholder="Enter product price"
                    className="input input-bordered w-full"
                  />
                </div>
              </div>
            </div>

            <div className="mt-8 w-1/2 mx-auto">
              <input
                className="btn btn-block btn-neutral"
                type="submit"
                value="Add Product"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
