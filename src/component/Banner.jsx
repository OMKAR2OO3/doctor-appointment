import React from "react";
import { assets } from "../assets/assets_frontend/assets";
import { useNavigate } from "react-router-dom";

function Banner() {
  const navigate = useNavigate();
  return (
    <div className="border bg-[#5f6fff]  flex p-8  rounded-md mt-8">
      <div className="basis-[70%] ml-5 mt-8	">
        <p className="text-[46px] font-bold text-[white] ">
          Book Appointment With 100+ Trusted Doctors
        </p>
        <button
          onClick={() => {
            navigate("/login");
            scrollTo(0, 0);
          }}
          className="border bg-white p-2 rounded-full mt-8"
        >
          Create Account
        </button>
      </div>

      <div className=" hidden md:block relative left-24 bottom-[-34px]">
        <img src={assets.appointment_img} alt="image" className=" w-[80%]" />
      </div>
    </div>
  );
}

export default Banner;
