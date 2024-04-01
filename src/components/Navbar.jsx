import { Menu, X } from "lucide-react";
import React, { useState } from "react";
import logo from "../assets/logo.png";
import { navItems } from "../constants/index";
const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };
  const handleSmoothScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    const yOffset = -50; // Adjust this value as needed to offset any fixed headers or other elements
    const y =
      element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="conatiner px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img className="h-10 w-10 mr-2" src={logo} alt="" />
            <span className="text-xl tracking-tight">VirtualR</span>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index} className="py-4">
                <a
                  href={item.href}
                  onClick={(e) => handleSmoothScroll(e, item.id)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center items-center space-x-12">
            <a
              href="#"
              className="py-2 px-3 border rounded-md hover:bg-white hover:text-black hover:scale-105 duration-200"
            >
              Sign In
            </a>
            <a
              href="#"
              className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md hover:scale-105 duration-200"
            >
              Create an account
            </a>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <a
                    href={item.href}
                    onClick={(e) => handleSmoothScroll(e, item.id)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6">
              <a
                href="#"
                className="py-2 px-3 border rounded-md  hover:bg-white  hover:text-black"
              >
                Sign In
              </a>
              <a
                href="#"
                className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md "
              >
                Create an account
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
