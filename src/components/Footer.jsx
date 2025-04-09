function Footer() {
  return (
    <footer className="bg-Black">
      <div className="mx-auto mt-20 max-w-8/10 items-start justify-between px-6 py-16 md:flex">
        <div>
          <img
            src="/public/images/logo.svg"
            alt="loopstudios logo"
            className="mx-auto mb-8 w-40 md:mx-0 md:mb-4"
          />

          <ul className="space-y-4 text-center text-white md:flex md:gap-8">
            <li>About</li>
            <li>Careers</li>
            <li>Events</li>
            <li>Products</li>
            <li>Support</li>
          </ul>
        </div>

        <div className="t text-center">
          <div className="mt-12 mb-4 flex items-center justify-center gap-4 md:mt-0 md:justify-end">
            <img src="/public/images/icon-facebook.svg" alt="facebook" />
            <img src="/public/images/icon-twitter.svg" alt="twitter" />
            <img src="/public/images/icon-pinterest.svg" alt="pinterest" />
            <img src="/public/images/icon-instagram.svg" alt="instagram" />
          </div>

          <p className="text-gray-500 md:text-right">
            &copy; 2021 Loopstudios. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
