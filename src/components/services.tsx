import React from "react";
import { designstuff, myarticles, mywork, writestuff } from "../constants";
import arrow from "../img/arrow.svg";
const Services = () => {
  return (
    <figcaption className="sm:">
        {/* <div className="w-[75.875rem] line h-[0.0625rem] bg-[#E3E8EF]  mx-auto my-0"></div> */}
        
    <figure className="my-6 mx-6 sm:grid md:grid-cols-2 md:mx-[7.44rem]  sm:gap-[8rem]">
        
      <section className="mt-[3rem] sm:mt-[0rem]">
   
        <h1 className="text-[#202939] font-DMSans text-[1.5rem] font-bold sm:text-[3rem] ">
          I design <br />
          stuff
        </h1>
   
        <p className="text-[#697586] font-DMSans text-base font-normal leading-[1.3125rem] sm:text-[1.25rem] sm:leading-[1.875rem] pt-[1.25rem] sm:pt-[1.5rem] sm:pb-[4rem] pb-[2.5rem] "> {designstuff}</p>
        <button className=" btn md:h-[ 9.4375rem] font-DMSans text-base font-normal leading-[normal] p-[0.75rem] sm:py-[0.75rem] sm:px-[1rem] flex justify-center items-center gap-[1rem] border-[1px] border-black border-solid text-black hover:text-white hover:bg-black">
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
  

      </section>
      {/* <div className="line bg-[#E3E8EF] w-[0.0625rem]  "></div> */}
      <section className=" mt-[4rem] sm:mt-[0rem]">
        <h1 className="text-[#202939] font-DMSans text-[1.5rem] font-bold sm:text-[3rem] ">
          I write, <br />
          sometimes
        </h1>
        <p className="text-[#697586] md:h-[ 9.4375rem] font-DMSans text-base font-normal leading-[1.3125rem] md:text-[1.25rem] md:leading-[1.875rem] pt-[1.25rem] sm:pt-[1.5rem] md:pb-[5.8rem] pb-[2.5rem]">{writestuff}</p>

        <button className="  btn font-DMSans text-base font-normal leading-[normal]  p-[0.75rem] sm:py-[0.75rem] sm:px-[1rem] flex justify-center items-center gap-[1rem] border-[1px] border-black border-solid text-black hover:text-white hover:bg-black">
          
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
      </section>
    </figure>
    {/* <div className="w-[75.875rem] line h-[0.0625rem] bg-[#E3E8EF]  mx-auto my-0"></div> */}
    </figcaption>
  );
};

export default Services;
