import "react";
import { assets } from "../assets/assets_frontend/assets";
function Header() {
  return (
    <div className="flex  flex-col md:flex-row items-center bg-[#5f6fff]   rounded-lg mt-4 md:px-10 lg:px-20  ">
      {/* leftt side */}
      <div className=" md:w-1/2 flex flex-col  items-start justify-center gap-4 m-auto md:py-[15vh] md:mb-[-30px]">
        <p className=" font-semibold text-3xl md:text-4xl lg:text-5xl text-[#ffffff] leading-tight md:leading-tight lg:leading-tight">
          Book Appointment <br />
          With Trusted Doctors
        </p>

        <div className=" max-sm:flex-col flex items-center gap-2">
          <img src={assets.group_profiles} alt="" className="h-[50px]" />
          <p className="text-[10px] text-[white]">
            Simply browse through our extensive list of trusted doctors, <br />
            schedule your appointment hassle-free.
          </p>
        </div>

        <div className="flex items-center gap-2 bg-white px-5 py-2 rounded-full max-sm:flex-none max-sm:text-center max-sm:ml-10">
          <a
            href="#speciality"
            className=" text-[#646464] text-[14px] font-semibold"
          >
            Book Appointment
          </a>
          <img src={assets.arrow_icon} alt="" />
        </div>
      </div>
      <div className=" md:w-1/2 pt-[40px]">
        {/* rigth side */}

        <img className="" src={assets.header_img} alt="" />
      </div>
    </div>
  );
}

export default Header;
