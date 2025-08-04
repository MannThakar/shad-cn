import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import navLogo from "../../assets/logo/01_nav_logo.png";
import { Menu, MoveRight, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => setIsOpen((prev) => !prev);

  return (
    <>
      {/* Navbar */}
      <nav className="w-full bg-[#148E51] fixed z-50">
        <div className="container mx-auto flex items-center justify-between px-4 py-2">
          {/* Logo */}
          <img src={navLogo} alt="Logo" className="h-16 w-auto" />

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex gap-8 text-white font-medium items-center cursor-pointer">
            <a href="#" className="hover:underline">
              Home
            </a>
            <div className="relative group">
              <p className="cursor-pointer group-hover:underline">Services</p>
              <div className="absolute left-0 mt-1 hidden group-hover:flex flex-col bg-white text-black rounded-md shadow-md p-2">
                <a href="#" className="px-2 py-1 hover:bg-gray-100">
                  Web Development
                </a>
                <a href="#" className="px-2 py-1 hover:bg-gray-100">
                  Mobile Apps
                </a>
                <a href="#" className="px-2 py-1 hover:bg-gray-100">
                  UI/UX Design
                </a>
              </div>
            </div>
            <a href="#" className="hover:underline">
              About
            </a>
            <motion.div
              whileHover="hover"
              initial="rest"
              animate="rest"
              className="flex gap-3 bg-white px-4 py-2 rounded-full items-center group cursor-pointer"
            >
              <a href="#" className="text-[#1BA54D] font-medium">
                Contact
              </a>
              <motion.div
                variants={{
                  rest: { x: 0 },
                  hover: { x: 6 },
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="text-[#1BA54D]"
              >
                <MoveRight className="w-4 h-4" strokeWidth={3} />
              </motion.div>
            </motion.div>
          </div>

          {/* Hamburger Icon (mobile only) */}
          <button
            onClick={toggleDrawer}
            className="lg:hidden bg-white p-3 rounded-full cursor-pointer"
          >
            <Menu className="w-6 h-6 text-green-600" />
          </button>
        </div>
      </nav>

      {/* Overlay & Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleDrawer}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 h-full w-96 bg-white z-50 px-6 py-5 flex flex-col gap-6"
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-bold">Menu</h2>
                <button onClick={toggleDrawer}>
                  <X className="w-6 h-6 text-gray-700" />
                </button>
              </div>

              <nav className="flex flex-col gap-4">
                <a
                  className="text-gray-700 font-medium hover:text-black"
                  href="#"
                >
                  Home
                </a>
                <div>
                  <p className="text-gray-700 font-medium">Services</p>
                  <ul className="ml-3 mt-2 space-y-1 text-sm text-gray-600">
                    <li>
                      <a href="#" className="hover:text-black">
                        Web Development
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-black">
                        Mobile Apps
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-black">
                        UI/UX Design
                      </a>
                    </li>
                  </ul>
                </div>
                <a
                  className="text-gray-700 font-medium hover:text-black"
                  href="#"
                >
                  About
                </a>
                <a
                  className="text-gray-700 font-medium hover:text-black"
                  href="#"
                >
                  Contact
                </a>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
