const Footer = () => {
  return (
    <div className="">
      <div className="bg-base-200 ">
        <footer className="max-w-[1440px] mx-auto footer p-4 lg:p-10 text-base-content flex flex-col lg:flex-row justify-between">
          <nav className="mb-4 lg:mb-0 sm:mb-0">
            <header className="footer-title">Services</header>
            <a className="link link-hover">Apple</a>
            <a className="link link-hover">Samsung</a>
            <a className="link link-hover">Sony</a>
            <a className="link link-hover">Google</a>
          </nav>
          <nav className="mb-4 lg:mb-0 sm:mb-0">
            <header className="footer-title">Company</header>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>
          <nav>
            <header className="footer-title">Legal</header>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
          <form className="mb-4 lg:mb-0 sm:mb-0">
            <header className="footer-title">Newsletter</header>
            <fieldset className="form-control">
              <label className="label">
                <span className="label-text">Enter your email address</span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="username@site.com"
                  className="input input-bordered w-full pr-12"
                />
                <button className="btn btn-neutral absolute top-0 right-0 rounded-l-none">
                  Subscribe
                </button>
              </div>
            </fieldset>
          </form>
        </footer>
      </div>
      <div>
        <footer className="footer footer-center p-4 bg-base-300 text-base-content">
          <aside>
            <p>All rights reserved by EcoTechUniverse</p>
          </aside>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
