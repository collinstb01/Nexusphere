import React, { useState } from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";
import l from "../assets/l.png";
import telegram from "../assets/telegram.png";
import burger from "../assets/burger.svg";
import menu from "../assets/menu.svg";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const path = useLocation();

  console.log(path);

  return (
    <motion.div
      initial={{ y: "-200%", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 2, delay: 0.5 }}
    >
      <Main className="grid lg:grid-cols-2 grid-cols-2 items-center pt-5">
        <div
          className={`flex items-center ${
            show && "active flex-col justify-center items-center"
          }`}
        >
          <Link to="/">
            <img
              src={logo}
              alt=""
              srcset=""
              className="lg:pr-72 pr-5 lg:pl-14 pl-5 cursor-pointer"
            />
          </Link>
          <div className={`lg:flex  ${show ? "block text-center" : "hidden"}`}>
            <Link to="/">
              <p
                className={`${
                  path.pathname == "/" ? "text-purple-700" : "text-white"
                } lg:text-xl text-lg font-medium py-2 lg:py-0 px-2`}
              >
                Home
              </p>
            </Link>
            <Link to="/services">
              <p
                className={`${
                  path.pathname == "/services"
                    ? "text-purple-700"
                    : "text-white"
                } lg:text-xl text-lg font-medium py-2 lg:py-0 px-2`}
              >
                Sevices
              </p>
            </Link>
            <Link to="/about">
              <p
                className={`${
                  path.pathname == "/about" ? "text-purple-700" : "text-white"
                } lg:text-xl text-lg font-medium py-2 lg:py-0 px-2`}
              >
                About
              </p>
            </Link>
            {show && (
              <div className={`mt-4`}>
                <div className="flex justify-center mb-3">
                  <Link to="https://www.linkedin.com/company/nexusphere/">
                    <img srcSet={l} alt="" className="logo mx-2" />
                  </Link>
                  <Link to="https://t.me/+87QTjXDts2s5OTdk">
                    <img srcSet={telegram} alt="" className="logo mx-2" />
                  </Link>
                </div>
                <Link to="/contact">
                  <button className="rounded text-white py-2 px-5 lg:mr-4 lg:ml-12">
                    Contact us
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
        {show && (
          <div
            className="flex justify-end mr-10 z-10 fixed right-1 top-8"
            onClick={() => setShow(false)}
          >
            <img srcSet={menu} alt="" className="logoTurnOnAndOff" />
          </div>
        )}
        {!show && (
          <div
            className="lg:hidden flex justify-end mr-10 z-12"
            onClick={() => setShow(true)}
          >
            <img srcSet={burger} alt="" className="logoTurnOnAndOff" />
          </div>
        )}
        <div className={`lg:justify-end z-10 lg:flex hidden`}>
          <img srcSet={l} alt="" className="logo" />
          <img srcSet={telegram} alt="" className="logo lg:ml-3" />
          <Link to="/contact">
            <button className="rounded text-white py-2 px-5 lg:mr-4 lg:ml-12">
              Contact us
            </button>
          </Link>
        </div>
      </Main>
    </motion.div>
  );
};

export default Navbar;

const Main = styled.div`
  .logoTurnOnAndOff {
    -webkit-filter: invert(100%); /* For Safari/Chrome */
    filter: invert(100%);
    width: 30px;
    height: 30px;
  }
  .active {
    background-color: black;
    height: 100vh;
    width: 100%;
    position: fixed;
    z-index: 1;
    top: 0;
  }
  .logo {
    width: 37.5px;
    height: 37.5px;
  }
  .logo2 {
    /* width: 72px;
    height: 18px; */
  }
  button {
    background: #b881ff;
  }
`;
