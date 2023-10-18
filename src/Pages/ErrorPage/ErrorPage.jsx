import Navbar from "../Shared/Navbar";

const ErrorPage = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="h-[70vh] flex justify-center items-center ">
        <h1 className="text-2xl font-medium">Page not found</h1>
      </div>
    </>
  );
};

export default ErrorPage;
