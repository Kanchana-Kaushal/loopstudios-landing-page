import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";

function NavBar() {
  const [isMenuShown, setIsMwnuShown] = useState(false);
  function toggleMenu() {
    setIsMwnuShown((prev) => !prev);
  }

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden");
  }),
    [isMenuShown];

  return (
    <nav className="flex items-center justify-between md:mt-12">
      <img
        src="/public/images/logo.svg"
        alt="loopstudios logo"
        className="z-50 w-40 md:w-50"
      />

      <div className="z-50">
        <motion.img
          src={
            isMenuShown
              ? "/public/images/icon-close.svg"
              : "/public/images/icon-hamburger.svg"
          }
          alt="open-menu"
          className="md:hidden"
          onClick={toggleMenu}
          animate={{ rotate: isMenuShown ? 180 : 0 }}
          transition={{ ease: "linear" }}
        />

        <ul className="hidden items-center gap-4 text-white md:flex">
          <li className="group relative cursor-pointer">
            About
            <div className="absolute -bottom-4 left-1/2 my-2 h-0.5 w-8 -translate-x-1/2 bg-white opacity-0 transition-opacity duration-75 ease-in-out group-hover:opacity-100"></div>
          </li>
          <li className="group relative cursor-pointer">
            Careers
            <div className="absolute -bottom-4 left-1/2 my-2 h-0.5 w-8 -translate-x-1/2 bg-white opacity-0 transition-opacity duration-75 ease-in-out group-hover:opacity-100"></div>
          </li>
          <li className="group relative cursor-pointer">
            Events
            <div className="absolute -bottom-4 left-1/2 my-2 h-0.5 w-8 -translate-x-1/2 bg-white opacity-0 transition-opacity duration-75 ease-in-out group-hover:opacity-100"></div>
          </li>
          <li className="group relative cursor-pointer">
            Products
            <div className="absolute -bottom-4 left-1/2 my-2 h-0.5 w-8 -translate-x-1/2 bg-white opacity-0 transition-opacity duration-75 ease-in-out group-hover:opacity-100"></div>
          </li>
          <li className="group relative cursor-pointer">
            Support
            <div className="absolute -bottom-4 left-1/2 my-2 h-0.5 w-8 -translate-x-1/2 bg-white opacity-0 transition-opacity duration-75 ease-in-out group-hover:opacity-100"></div>
          </li>
        </ul>
      </div>

      <AnimatePresence>
        {isMenuShown && (
          <motion.div
            className="bg-Black absolute inset-0 flex max-h-screen flex-col justify-center"
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            exit={{ x: "-100vw" }}
            key={"menu"}
            transition={{ ease: "easeInOut" }}
          >
            <ul className="space-y-4 p-8 text-2xl font-light text-white uppercase">
              <li>About</li>
              <li>Careers</li>
              <li>Events</li>
              <li>Products</li>
              <li>Support</li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default NavBar;
