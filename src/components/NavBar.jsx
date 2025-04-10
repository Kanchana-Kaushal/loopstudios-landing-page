import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";

function NavBar() {
  const [isMenuShown, setIsMenuShown] = useState(false);

  function toggleMenu() {
    setIsMenuShown((prev) => !prev);
  }

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", isMenuShown);
  }, [isMenuShown]);

  return (
    <nav
      className="flex items-center justify-between md:mt-12"
      aria-label="Main navigation"
    >
      <img
        src="/loopstudios-landing-page/images/logo.svg"
        alt="Loopstudios logo"
        className="z-50 w-40 md:w-50"
      />

      <div className="z-50">
        <motion.button
          onClick={toggleMenu}
          className="md:hidden"
          aria-label={isMenuShown ? "Close menu" : "Open menu"}
          aria-expanded={isMenuShown}
          animate={{ rotate: isMenuShown ? 180 : 0 }}
          transition={{ ease: "linear" }}
        >
          <img
            src={
              isMenuShown
                ? "/loopstudios-landing-page/images/icon-close.svg"
                : "/loopstudios-landing-page/images/icon-hamburger.svg"
            }
            alt=""
            role="presentation"
          />
        </motion.button>

        <ul
          className="hidden items-center gap-4 text-white md:flex"
          role="menubar"
        >
          {["About", "Careers", "Events", "Products", "Support"].map((item) => (
            <li
              key={item}
              className="group relative cursor-pointer"
              role="menuitem"
              tabIndex={0}
            >
              {item}
              <div className="absolute -bottom-4 left-1/2 my-2 h-0.5 w-8 -translate-x-1/2 bg-white opacity-0 transition-opacity duration-75 ease-in-out group-hover:opacity-100"></div>
            </li>
          ))}
        </ul>
      </div>

      <AnimatePresence>
        {isMenuShown && (
          <motion.div
            className="bg-Black absolute inset-0 flex max-h-screen flex-col justify-center"
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            exit={{ x: "-100vw" }}
            key="menu"
            transition={{ ease: "easeInOut" }}
            role="dialog"
            aria-modal="true"
          >
            <ul
              className="space-y-4 p-8 text-2xl font-light text-white uppercase"
              role="menu"
            >
              {["About", "Careers", "Events", "Products", "Support"].map(
                (item) => (
                  <li key={item} role="menuitem" tabIndex={0}>
                    {item}
                  </li>
                ),
              )}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default NavBar;
