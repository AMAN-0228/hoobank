import { useState } from "react";
import { logo, close, menu } from "../assets";
import { navLinks } from "../constants/constants";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="w-full py-6 flex justify-between items-center navbar">
      <img src={logo} alt="logo" className="w-[124px] h-[32px]" />
      {/* desktop navigation */}
      <ul className="list-none sm:flex hidden justify-end items-center flex-1 gap-10">
        {navLinks.map((item) => (
          <li
            key={item.id}
            className={`cursor-pointer font-poppins text-[16px] ${
              active === item.title ? "text-white" : "text-dimWhite"
            } `}
            onClick={() => setActive(item.title)}
          >
            <a href={`#` + item.id}>{item.title}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        {/* hamburger menu */}
        <img
          src={toggle ? close : menu}
          alt="menu"
          onClick={() => setToggle((prev) => !prev)}
          className="h-[28px] w-[28px] object-contain "
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="flexCenter flex-col list-none  mx-auto gap-8">
            {navLinks.map((item) => (
              <li
                key={item.id}
                className={`font-poppins mx-auto font-medium cursor-pointer text-[16px] ${active === item.title ? "text-white" : "text-dimWhite"
                }`}
                onClick={() =>{ setToggle(false); setActive(item.title)}}

              >
                <a href={`#${item.id}` }>{item.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
