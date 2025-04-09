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
