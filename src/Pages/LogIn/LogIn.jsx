import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../hook/Provider/AuthProvider";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LogIn = () => {
  const { logInUser, GoogleLogIn } = useContext(AuthContext);

  const handleGoogleLogIn = () => {
    GoogleLogIn()
      .then(() => {
        toast("log in success", { type: "success" });
      })
      .catch(() => {
        toast("something wrong", { type: "error" });
      });
  };

  const handleUserLogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    logInUser(email, password)
      .then(() => {
        toast("log in success", { type: "success" });
      })
      .catch(() => {
        toast("something wrong", { type: "error" });
      });
    e.target.email.value = "";
    e.target.password.value = "";
  };

  return (
    <div
      className="hero h-[65vh]"
      style={{ backgroundImage: "url(https://i.ibb.co/NtZwvJq/logIn.jpg)" }}
    >
      <ToastContainer />
      <div className="hero-overlay bg-opacity-95"></div>
      <div className="hero-content">
        <div className="w-full">
          <form onSubmit={handleUserLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white text-lg">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white text-lg">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            <div className="mt-6">
              <button
                onClick={handleGoogleLogIn}
                className="btn btn-neutral w-full"
              >
                Log in with google
              </button>
            </div>

            <p className="mt-3 text-white">
              Do not have account? Please,{" "}
              <Link to="/register" className="text-blue-500">
                {" "}
                register
              </Link>{" "}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
