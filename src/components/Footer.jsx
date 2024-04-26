import React from "react";
import styled from "styled-components";
import logo2 from "../assets/logo2.png";
import instagram from "../assets/Instagram.png";
import Facebook from "../assets/Facebook.png";
import twitter from "../assets/twitter.png";
import linkedin from "../assets/linkedin.png";
import Email from "../assets/Email.png";

const Footer = () => {
  return (
    <Main className="nav lg:pl-24 pl-5 lg:pr-20 pr-5">
      <div className="main pt-32 pb-7">
        <div className="firstSection lg:mb-0 pb-10">
          <img src={logo2} alt="" />
          <p className="pt-6 lg:text-lg text-sm">
            Elevate your brand with our expert in marketing. From SEO to social
            media, we craft tailored strategies for impactful online presence.
          </p>
          <div className="flex items-center py-6">
            <img src={instagram} alt="" srcset="" className="pr-6" />
            <img src={Facebook} alt="" srcset="" className="pr-6" />
            <img src={twitter} alt="" srcset="" className="pr-6" />
            <img src={linkedin} alt="" srcset="" className="pr-6" />
          </div>
          <p className="lg:text-lg text-sm">Subscribe to our newsletter </p>
          <div className="flex pt-5 relative">
            <input
              type="text"
              className="w-full p-5 "
              placeholder="Enter your email"
            />
            <input
              type="text"
              className=" text-lg absolute font-semibold text-center gradient top-7 right-4"
              placeholder="Subscribe"
            />
          </div>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2">
          <div className="flex justify-center">
            <div>
              <p className="title text-xl lg:mt-0 mt-3 lg:pb-10 pb-3 font-bold responsiveLinks">
                Support
              </p>
              <p className="pb-2 responsiveLinks">About</p>
              <p className="pb-2 responsiveLinks">Contact us</p>
              <p className="pb-2 responsiveLinks">Careers</p>
              <p className="pb-2 responsiveLinks">Services</p>
              <p className="responsiveLinks">Blog</p>
            </div>
          </div>
          <div className="flex justify-center">
            <div>
              <p className="title text-xl lg:mt-0 mt-3lg:pb-10 lg:pt-0 pt-3 pb-3 font-bold responsiveLinks">
                Company
              </p>
              <p className="pb-2 responsiveLinks">Help center</p>
              <p className="pb-2 responsiveLinks">Report a bug</p>
              <p>Chat support</p>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="">
              <p className="title text-xl lg:mt-0 mt-3 lg:pb-10 lg:pt-0 pt-3 pb-3 font-bold responsiveLinks">
                Contacts us
              </p>
              <div className="pb-2 flex items-start responsiveLinks">
                <img src={Email} alt="" className="mr-2 w-5 h-5" />
                <span>support@nexusphere.io</span>
              </div>
              <div className="pb-2 flex items-start responsiveLinks">
                <img src={Email} alt="" className="mr-2 w-5 h-5" />
                <span>+234784766547</span>
              </div>
              <div className="pb-2 flex items-start responsiveLinks">
                <img src={Email} alt="" className="mr-2 w-5 h-5" />
                <span>support@nexusphere.io</span>
              </div>
              <div className="flex items-start responsiveLinks">
                <img src={Email} alt="" className="mr-2 w-5 h-5" />
                <span>794 Mcallister St San Francisco, 94102</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:flex block lg:justify-between pb-6">
        <p className="terms lg:text-left text-center lg:text-base text-xs">
          Copyright © 2022
        </p>
        <p className="terms lg:text-base lg:text-left text-center text-xs">
          All Rights Reserved |{" "}
          <span className="blue textUnderLine2 lg:text-left text-center lg:text-base text-xs">
            Terms and Conditions | Privacy Policy
          </span>
        </p>
      </div>
    </Main>
  );
};

export default Footer;

const Main = styled.div`
  .terms {
    color: #6f6c90;
  }
  .blue {
    color: #7682ec;
  }
  .gradient {
    height: 47.43px;
    width: 119.7px;
    background: linear-gradient(92.73deg, #3a008c 26.15%, #8543e2 117.44%);
    box-shadow: 0px 3px 12px 0px #4a3aff2e;
  }
  input {
    border-radius: 60px;
  }
  .main {
    display: grid;
    grid-template-columns: 494px 1fr;

    @media (max-width: 1130px) {
      grid-template-columns: auto;
    }
  }
  .responsiveLinks {
    @media (max-width: 1130px) {
      display: flex;
      justify-content: center;
      font-size: 14px;
    }
  }
  color: white;
`;
