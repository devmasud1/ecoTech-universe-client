import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar";

const ErrorPage = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="h-[80vh] flex justify-center items-center ">
        <div className="flex flex-col">
          <h1 className="text-2xl font-medium">Page not found</h1>
          <Link to="/" className="py-4 mx-auto">
            <button className="btn btn-neutral">Back To Home</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
