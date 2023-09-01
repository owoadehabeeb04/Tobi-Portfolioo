import React from "react";
import { behancelink, designstuff, myarticles, mywork, writestuff } from "../constants";
import arrow from "../img/arrow.svg";
import { Divider } from "@mui/material";

const Services = () => {
  return (
    <figcaption className="sm:mt-[5rem]" id="Project">
      <div className="w-[75.875rem] line h-[0.0625rem] bg-[#E3E8EF]  mx-auto my-0"></div>

      <figure className="services  mx-6 sm:flex md:flex-row lg:mx-[7.44rem] sm:gap-[2rem] md:gap-[5rem] lg:gap-[5rem] xl:gap-[8rem]">
        <section className="mt-[3rem] sm:mt-[0rem] sm:my-[3rem] md:my-[2rem] sm:ml-[40px] ">
          <div>
            <h1 className="text-[#202939] font-DMSans text-[1.5rem] font-bold sm:text-[3rem] ">
              I design <br />
              stuff
            </h1>

            <p className="text-[#697586] lg:h-[9.4375rem]  font-DMSans text-base font-normal leading-[1.3125rem] sm:text-[1.25rem] sm:leading-[1.875rem] pt-[1.25rem] sm:pt-[1.5rem] sm:mb-[5rem]  ">
              {" "}
              {designstuff}
            </p>
            <a href={behancelink}>
                          <button className=" btn md:h-[ 9.4375rem] mt-[2.5rem] sm:mt-[0rem] font-DMSans text-base font-normal leading-[normal] p-[0.75rem] sm:py-[0.75rem] sm:px-[1rem] flex justify-center items-center gap-[1rem] border-[1px] border-black border-solid text-black hover:text-white hover:bg-black">
              {mywork}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M4.16663 10H15.8333M15.8333 10L9.99996 4.16667M15.8333 10L9.99996 15.8333"
                  stroke="black"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            </a>
          </div>
        </section>
        <Divider orientation="vertical" flexItem></Divider>
        <section className=" max-[640px]:mt-[4rem] md:my-[2rem]">
          <h1 className="text-[#202939] font-DMSans text-[1.5rem] font-bold sm:text-[3rem] ">
            I write, <br />
            sometimes
          </h1>
          <p className="text-[#697586] lg:h-[9.4375rem] font-DMSans text-base font-normal leading-[1.3125rem] md:text-[1.25rem] md:leading-[1.875rem] pt-[1.25rem] sm:pt-[1.5rem] sm:mb-[5rem]  ">
            {writestuff}
          </p>
<a href={behancelink}>
          <button className=" mt-[2.5rem] sm:mt-[0rem] btn font-DMSans text-base font-normal leading-[normal]  p-[0.75rem] sm:py-[0.75rem] sm:px-[1rem] flex justify-center items-center gap-[1rem] border-[1px] border-black border-solid text-black hover:text-white hover:bg-black">
            {myarticles}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M4.16663 10H15.8333M15.8333 10L9.99996 4.16667M15.8333 10L9.99996 15.8333"
                stroke="black"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          </a>
        </section>
      </figure>
      <div className="w-[75.875rem] line h-[0.0625rem] bg-[#E3E8EF]  mx-auto my-0"></div>
    </figcaption>
  );
};

export default Services;
