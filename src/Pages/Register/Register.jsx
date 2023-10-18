import { Link } from "react-router-dom";

const Register = () => {
  const handleUserRegister = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
  };
  return (
    <div
      className="hero h-[65vh]"
      style={{ backgroundImage: "url(https://i.ibb.co/SXLqYFq/register.jpg)" }}
    >
      <div className="hero-overlay bg-opacity-95"></div>
      <div className="hero-content">
        <div className="w-full">
          <form onSubmit={handleUserRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white text-lg">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                className="input input-bordered"
              />
            </div>

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