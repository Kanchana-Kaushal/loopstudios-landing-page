function Footer() {
  return (
    <footer className="bg-Black mt-20 px-6 py-16">
      <div>
        <img
          src="/public/images/logo.svg"
          alt="loopstudios logo"
          className="mx-auto mb-8 w-40"
        />

        <ul className="space-y-4 text-center text-white">
          <li>About</li>
          <li>Careers</li>
          <li>Events</li>
          <li>Products</li>
          <li>Support</li>
        </ul>
      </div>

      <div className="text-center">
        <div className="mt-12 mb-4 flex items-center justify-center gap-4">
          <img src="/public/images/icon-facebook.svg" alt="facebook" />
          <img src="/public/images/icon-twitter.svg" alt="twitter" />
          <img src="/public/images/icon-pinterest.svg" alt="pinterest" />
          <img src="/public/images/icon-instagram.svg" alt="instagram" />
        </div>

        <p className="text-gray-500">
          &copy; 2021 Loopstudios. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
