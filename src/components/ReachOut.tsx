import React from "react";
import call from "../img/phone.svg";
import message from "../img/Featured icon.svg";
import linkdln from "../img/linkedin 1.svg";
const ReachOut = () => {
  return (

    <div className="flex flex-wrap max-[480px]:gap-[1.5rem] gap-[6rem] ml-[1.25rem] md:ml-[5.5rem] mt-[2.5rem] md:mt-[5rem] ">
      <section className="w-fit px-[1.25rem] py-[1.5rem] bg-[#F9FAFB]">
        <img className="pb-[3.94rem] " src={message} alt="message" />
        <h1 className="text-[#101828] text-base md:text-[1.25rem] font-medium leading-[1.875rem] fonr-DMSans">Send a mail to me</h1>
        <p className="pb-[1.25rem] text-[#475467] font-DMSans text-[0.875rem] md:text-base leading-[normal] md:leading-[1.5rem] font-normal ">
          Got a project you want us to work on? <br /> <br />
          Hit me up !
        </p>
        <a className="no-underline text-[#EF5DA8] text-[0.875rem] md:text-base leading-[1.5rem]" href="/">qudusowoade@gmail.com</a>
      </section>
      <section className="w-fit px-[1.25rem] py-[1.5rem] bg-[#F9FAFB]">
      {/* Copy
display: flex;
width: 3rem;
height: 3rem;
padding: 0.75rem;
justify-content: center;
align-items: center; */}
        <img className="mb-[3.94rem] flex justify-center items-center w-[3rem] h-[3rem] p-[0.75rem] bg-[#00A991] rounded-[0.625rem]" src={call} alt="message" />
        <h1 className="text-[#101828] text-base md:text-[1.25rem] font-medium leading-[1.875rem] fonr-DMSans">Call me</h1>
        <p className="pb-[1.25rem] text-[#475467] font-DMSans text-[0.875rem] md:text-base leading-[normal] md:leading-[1.5rem] font-normal ">
          Got a project you want us to work on? <br /> <br />
          Hit me up !
        </p>
        <a className="no-underline text-[#00A991] text-[0.875rem] md:text-base leading-[1.5rem]" href="/">+234 903 071 3016</a>
      </section>
      <section className="w-fit px-[1.25rem] py-[1.5rem] bg-[#F9FAFB]">
        <img className="pb-[3.94rem] " src={linkdln} alt="message" />
        <h1 className="text-[#101828] text-base md:text-[1.25rem] font-medium leading-[1.875rem] fonr-DMSans">Connect with me</h1>
        <p className="pb-[1.25rem] text-[#475467] font-DMSans text-[0.875rem] md:text-base leading-[normal] md:leading-[1.5rem] font-normal ">
          Got a project you want us to work on? <br /> <br />
          Hit me up !
        </p>
        <a className="no-underline text-[#0077B5] text-[0.875rem] md:text-base leading-[1.5rem]" href="/">qudusowoade@gmail.com</a>
      </section>
    </div>
  );
};

export default ReachOut;
