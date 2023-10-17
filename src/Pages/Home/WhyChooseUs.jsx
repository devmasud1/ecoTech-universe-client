import { AiFillCar } from "react-icons/ai";
import {
  MdDiscount,
  MdOutlineAttachMoney,
  MdSupportAgent,
} from "react-icons/md";
const WhyChooseUs = () => {
  return (
    <div className="max-w-[1440px] mx-auto">
      <h1 className="text-center text-3xl font-bold mx-auto">Why Choose Us</h1>
      <hr className="w-28 h-1 bg-orange-500 text-center mx-auto mt-2 mb-5" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10 mx-5 lg:mx-0 my-12 text-white">
        <div className="flex items-center gap-3 bg-orange-400 p-4">
          <div>
            <AiFillCar className="text-7xl"></AiFillCar>
          </div>
          <div>
            <h2 className="text-xl font-medium">FREE SHIPPING</h2>
            <p>Nulla vel metus scelerisque ante sollici.</p>
          </div>
        </div>

        <div className="flex items-center gap-3 bg-[#95BB7A] p-4">
          <div>
            <MdOutlineAttachMoney className="text-7xl"></MdOutlineAttachMoney>
          </div>
          <div>
            <h2 className="text-xl font-medium">MONEY BACK</h2>
            <p>Nulla vel metus scelerisque ante sollici.</p>
          </div>
        </div>

        <div className="flex items-center gap-3 bg-[#6e6e6e] p-4">
          <div>
            <MdDiscount className="text-7xl"></MdDiscount>
          </div>
          <div>
            <h2 className="text-xl font-medium">DISCOUNTS</h2>
            <p>Nulla vel metus scelerisque ante sollici.</p>
          </div>
        </div>

        <div className="flex items-center gap-3 bg-[#7F7F7F] p-4">
          <div>
            <MdSupportAgent className="text-7xl"></MdSupportAgent>
          </div>
          <div>
            <h2 className="text-xl font-medium">SUPPORT</h2>
            <p>Nulla vel metus scelerisque ante sollici.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
