import React, { useState, useEffect } from "react";
import AuthModal from "../AuthModal";

import Modal from "../Modal";
function Header() {
  const [top, setTop] = useState(true);
  const [open, setOpen] = useState(false);
  const [comp, setComp] = useState("");
  // detect whether user has scrolled the page down by 10px
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <header
      className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${
        !top && "bg-white backdrop-blur-sm shadow-lg"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Site branding */}
          <div className="flex-shrink-0 mr-4">
            {/* Logo */}
            <div to="/" className="block" aria-label="Cruip">
              <img src="/images/logo.svg" className="w-28" />
            </div>
          </div>

          {/* Site navigation */}
          <nav className="flex flex-grow">
            <ul className="flex flex-grow justify-end flex-wrap items-center">
              <li>
                <button
                  onClick={() => {
                    setOpen(!open);

                    setComp(<AuthModal />);
                  }}
                  className="bg-gradient-to-r active:outline-none active:border-none from-[#0469A1] via-[#0469A1]  to-[#0C9FF2]  text-center w-max   px-8 py-2  rounded-full cursor-pointer text-white"
                >
                  Connet
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <Modal open={open} onClose={() => setOpen(false)}>
        {comp}
      </Modal>
    </header>
  );
}

export default Header;
