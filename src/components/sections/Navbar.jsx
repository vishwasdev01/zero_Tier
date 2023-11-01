import React, { useRef, useState } from "react";
import {ReactComponent as Logo} from '../../assets/logo.svg'

import { GiHamburgerMenu } from "react-icons/gi";

import useOutsideClick from "../../hooks/useOutside";
import { BiSolidDownArrow } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";

function Navbar() {
  const [dropdown, setDropdown] = useState(false);
  const [hamburger, setHamburger] = useState(false);
  const ref = useRef();
 
  useOutsideClick(ref, () => setDropdown(null));

  const items = [
    { name: "Features", key: 1 },
    { name: "Pricing", key: 2 },
    { name: "Download", key: 3 },
    {
      name: "Company",
      key: 4,
      dropdownFun: setDropdown,
      dropdownVal: dropdown,
      dropdownItems: [
        {
          name: "Contact",
          key: 1,
        },
        {
          name: "About Us",
          key: 2,
        },
        {
          name: "Careers",
          key: 3,
        },
        {
          name: "Blog",
          key: 4,
        },
        {
          name: "Media Kit",
          key: 5,
        },
      ],
    },
    {
      name: "Support",
      key: 5,
      dropdownFun: setDropdown,
      dropdownVal: dropdown,
      dropdownItems: [
        {
          name: "Documentation",
          key: 1,
        },
        {
          name: "Knowledge Base",
          key: 2,
        },
        {
          name: "Community",
          key: 3,
        },
        {
          name: "Getting Started",
          key: 4,
        },
      ],
    },
  ];

  return (
    <nav>
      <div className="mx-auto py-5 max-w-7xl px-5">
        <div className="flex h-16 items-center justify-between">
          <div className="flex">
            <Logo className="lg:w-full w-[150px]" />
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden mt-8 absolute right-0 w-[100%] bg-black rounded-md top-[40px]">
         
            {hamburger && (
              <div className="flex flex-col p-5">
                <RxCross2
                  onClick={() => setHamburger(!hamburger)}
                  className="absolute right-[20px] top-[10px]"
                />
                {items.map((item, index) => (
                  <div
                    className="py-1 text-xl md:text-[unset]"
                    key={index}
                    onClick={() => {
                      item.dropdownFun && item.dropdownFun(item.key);
                    }}
                  >
                    <div className="flex items-center hover:text[#ffb441]">
                      {item.name}{" "}
                      {item.dropdownItems && (
                        <BiSolidDownArrow
                          fontSize={"10px"}
                          style={{ marginLeft: "4px", cursor: "pointer" }}
                          className={`${
                            item.dropdownVal === item.key
                              ? "rotate-180 "
                              : "mt-[unset]"
                          } hover:text-[#ffb441] cursor-pointer`}
                        />
                      )}
                    </div>
                    {item.dropdownVal === item.key && (
                      <div
                        className="bg-[#1a1a1a] rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="menu-button"
                        tabindex="-1"
                        ref={ref}
                      >
                        <div className="py-1" role="none">
                          {item.dropdownItems.map((item, index) => (
                            <span
                              className="text-gray-700 block px-2 py-1 text-sm cursor-pointer text-white hover:bg-[#262626] rounded-xl m-2"
                              role="menuitem"
                              tabindex="-1"
                              id="menu-item-0"
                              key={index}
                            >
                              {item.name}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
                <button className="text-start py-1 text-xl md:text-[unset]">
                  Login
                </button>
              </div>
            )}
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex gap-5">
            {items.map((item, index) => (
              <div className="text-xl font-normal" key={index}>
                <div
                  className={`${
                    item.dropdownVal
                      ? "flex relative inline-block text-left"
                      : "flex items-center cursor pointer"
                  } hover:text-[#ffb441] cursor-pointer lg:text-[18px] text-[16px]`}
                >
                  <span
                    className="flex"
                    onClick={(e) => {
                      item.dropdownFun && item.dropdownFun(item.key);
                    }}
                  >
                    {" "}
                    {item.name}
                    {item.dropdownItems && (
                      <BiSolidDownArrow
                        fontSize={"10px"}
                        style={{ marginLeft: "4px", cursor: "pointer" }}
                        className={`${
                          item.dropdownVal === item.key
                            ? "mt-[10px] rotate-180 "
                            : " mt-[10px]"
                        } hover:text-[#ffb441] cursor-pointer`}
                      />
                    )}
                  </span>

                  {item.dropdownVal === item.key && (
                    <div
                      className="absolute right-0 z-10 mt-10 w-max origin-top-right rounded-xl bg-black shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="menu-button"
                      tabindex="-1"
                      ref={ref}
                    >
                      <div className="py-1" role="none">
                        {item.dropdownItems.map((items, index) => (
                          <span
                            className="text-gray-700 block px-4 py-1 text-sm cursor-pointer text-white hover:bg-[#262626] rounded-xl m-2"
                            role="menuitem"
                            tabindex="-1"
                            key={index}
                            id="menu-item-0"
                            onClick={() => {
                              console.log({ item });
                              item.dropdownFun(null);
                            }}
                          >
                            {items.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="flex gap-5 items-center">
            <button className=" hidden md:block">Login</button>
            <button className="bg-[#ffb441] hover:bg-[#ffb441] text-white font-bold py-2 px-4 rounded-full">
              Sign Up
            </button>
            <GiHamburgerMenu
              className="md:hidden"
              onClick={() => setHamburger(!hamburger)}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
