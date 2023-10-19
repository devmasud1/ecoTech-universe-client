import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../hook/Provider/AuthProvider";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const { createUser, passwordErrMsg } = useContext(AuthContext);

  const handleUserRegister = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    createUser(email, password, name)
      .then(() => {
        toast("User successfully created!", { type: "success" });
      })
      .catch(() => {
        toast("Already use this email", { type: "error" });
      });
    e.target.name.value = "";
    e.target.email.value = "";
    e.target.password.value = "";
  };
  return (
    <div
      className="hero h-[65vh]"
      style={{ backgroundImage: "url(https://i.ibb.co/SXLqYFq/register.jpg)" }}
    >
      <ToastContainer />
      <div className="hero-overlay bg-opacity-95"></div>
      <div className="hero-content">
        <div className="w-full">
          <form onSubmit={handleUserRegister} className="card-body">
            <div className="text-white">
              {passwordErrMsg ? passwordErrMsg : ""}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white text-lg">Name</span>
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="Your name"
                className="input input-bordered"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text text-white text-lg">Email</span>
              </label>
              <input
                required
                type="email"
                name="email"
                placeholder="Enter your email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white text-lg">Password</span>
              </label>
              <input
                required
                type="password"
                name="password"
                placeholder="Enter password"
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>

            <p className="mt-3 text-white">
              Already have an account? Please{" "}
              <Link to="/logIn" className="text-blue-500">
                LogIn
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
