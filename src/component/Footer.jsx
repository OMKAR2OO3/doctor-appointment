import "react";
import { assets } from "../assets/assets_frontend/assets";

function Footer() {
  return (
    <div>
      <div className="md:flex  mt-[5rem] justify-between">
        <div className="basis-[40%] text-[15px] ">
          <img src={assets.logo} alt="" />
          <p className="mt-4 leading-[30px] text-gray-800">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <div className="basis-[20%]  text-gray-800 ">
          <h2 className="font-bold mb-4">COMPANY</h2>
          <p className="leading-[30px]">Home</p>
          <p className="leading-[30px]">About</p>
          <p className="leading-[30px]">Delivery</p>
          <p className="leading-[30px]">Privacy policy</p>
        </div>
        <div className="basis-[20%]  text-gray-800 ">
          <h2 className="font-bold mb-4 ">GET IN TOUCH</h2>
          <p className="leading-[30px]">+0-000-000-000</p>
          <p className="leading-[30px]">greatstackdev@gmail.com</p>
        </div>
      </div>
      <p className="text-center border-t-2 mt-8 pt-4 pb-4 ">
        Copyright 2025 @ Developed by me - All Right Reserved.
      </p>
    </div>
  );
}

export default Footer;
