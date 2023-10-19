import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const MyCart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch(`https://eco-tech-universe-server.vercel.app/carts`)
      .then((res) => res.json())
      .then((result) => {
        setCart(result);
      });
  }, []);

  const handleCheckOut = () => {
    Swal.fire({
      icon: "success",
      title: "You order has been received",
      text: "Product on the way....",
    });
  };

  const handleCartDelete = (id) => {
    fetch(`https://eco-tech-universe-server.vercel.app/cart/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
          const remainingItem = cart.filter((item) => item._id !== id);
          setCart(remainingItem);
        }
      });
  };

  return (
    <div
      className="hero min-h-[70vh]"
      style={{ backgroundImage: "url(https://i.ibb.co/gtfTn4j/bg.jpg)" }}
    >
      <div className="hero-overlay bg-opacity-40"></div>
      <div className="hero-content text-center bg-blue-100">
        <div className="max-w-md min-h-60 p-8">
          <h1 className="mb-5 text-3xl font-bold text-black">
            Total added item : {cart.length}
          </h1>
          {cart.map((item) => (
            <div key={item._id} className="flex items-center gap-2 space-y-2 text-black">
              <h2>Product name: {item.name}</h2>
              <button
                onClick={() => handleCartDelete(item._id)}
                className="bg-red-700 px-4 text-xl font-medium text-white rounded-md"
              >
                X
              </button>
            </div>
          ))}
          {cart.length ? (
            <button className="btn btn-neutral mt-8" onClick={handleCheckOut}>
              checkout
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default MyCart;
