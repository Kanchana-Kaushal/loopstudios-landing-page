import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

function NavBar() {
  const [isMenuShown, setIsMwnuShown] = useState(false);
  function toggleMenu() {
    setIsMwnuShown((prev) => !prev);
  }

  return (
    <nav className="flex items-center justify-between">
      <img
        src="/public/images/logo.svg"
        alt="loopstudios logo"
        className="z-50 w-40"
      />

      <motion.img
        src={
          isMenuShown
            ? "/public/images/icon-close.svg"
            : "/public/images/icon-hamburger.svg"
        }
        alt="open-menu"
        className="z-50"
        onClick={toggleMenu}
        animate={{ rotate: isMenuShown ? 180 : 0 }}
        transition={{ ease: "linear" }}
      />

      <AnimatePresence>
        {isMenuShown && (
          <motion.ul
            className="bg-Black font-josefin absolute inset-0 flex flex-col justify-center space-y-4 p-8 text-2xl font-light text-white uppercase"
            initial={{ x: -400 }}
            animate={{ x: 0 }}
            exit={{ x: -400 }}
            key={"menu"}
            transition={{ ease: "easeInOut" }}
          >
            <li>About</li>
            <li>Careers</li>
            <li>Events</li>
            <li>Products</li>
            <li>Support</li>
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default NavBar;
