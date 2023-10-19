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
  return (
    <div
      className="hero min-h-[65vh]"
      style={{ backgroundImage: "url(https://i.ibb.co/gtfTn4j/bg.jpg)" }}
    >
      <div className="hero-overlay bg-opacity-40"></div>
      <div className="hero-content text-center   bg-blue-100">
        <div className="max-w-md h-60 p-8">
          <h1 className="mb-5 text-3xl font-bold">
            Total added item : {cart.length}
          </h1>
          {cart.map((item) => (
            <div key={item._id}>
              <h2>Product name: {item.name}</h2>
              
            </div>
          ))}
          <button className="btn btn-neutral mt-8" onClick={handleCheckOut}>
                checkout
              </button>
        </div>
      </div>
    </div>
  );
};

export default MyCart;
