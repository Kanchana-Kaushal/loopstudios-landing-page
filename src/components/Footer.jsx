function Footer() {
  return (
    <footer className="bg-Black" role="contentinfo" aria-label="Site footer">
      <div className="mx-auto mt-20 max-w-8/10 items-start justify-between px-6 py-16 md:flex">
        <div>
          <img
            src="/loopstudios-landing-page/images/logo.svg"
            alt="Loopstudios logo"
            className="mx-auto mb-8 w-40 md:mx-0 md:mb-4"
          />

          <ul
            className="space-y-4 text-center text-white md:flex md:gap-8"
            aria-label="Footer navigation"
          >
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Events</a>
            </li>
            <li>
              <a href="#">Products</a>
            </li>
            <li>
              <a href="#">Support</a>
            </li>
          </ul>
        </div>

        <div className="t text-center">
          <div className="mt-12 mb-4 flex items-center justify-center gap-4 md:mt-0 md:justify-end">
            <a href="#" aria-label="Facebook">
              <img
                src="/loopstudios-landing-page/images/icon-facebook.svg"
                alt="Facebook icon"
              />
            </a>
            <a href="#" aria-label="Twitter">
              <img
                src="/loopstudios-landing-page/images/icon-twitter.svg"
                alt="Twitter icon"
              />
            </a>
            <a href="#" aria-label="Pinterest">
              <img
                src="/loopstudios-landing-page/images/icon-pinterest.svg"
                alt="Pinterest icon"
              />
            </a>
            <a href="#" aria-label="Instagram">
              <img
                src="/loopstudios-landing-page/images/icon-instagram.svg"
                alt="Instagram icon"
              />
            </a>
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
