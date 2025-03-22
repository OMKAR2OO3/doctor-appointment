import "react";
import Footer from "../component/Footer";
import { assets } from "../assets/assets_frontend/assets";

function Contact() {
  return (
    <div>
      <div>
        <h1 className="my-8 text-center text-[20px] font-semibold">
          CONTACT US
        </h1>
        <div className=" sm max-sm:flex-col flex justify-between">
          <div className="basis-[40%]">
            <img src={assets.contact_image} alt="image " />
          </div>
          <div className="basis-[50%] ">
            <h2 className="my-5 text-[20px] font-semibold ">OUR OFFICE</h2>
            <div>
              <p>00000 Willms Station</p>
              <p>Suite 000, Washington, USA</p>
            </div>
            <div className="my-5">
              <p>Tel: (000) 000-0000</p>
              <p>Email: greatstackdev@gmail.com</p>
            </div>
            <h4 className="my-3 text-[20px] font-semibold">
              CAREERS AT PRESCRIPTO
            </h4>
            <p className="py-4">Learn more about our teams and job openings.</p>
            <a
              href=""
              className="border p-3 text-[#000000] bg-white hover:bg-black hover:text-[#ffffff]"
            >
              Explore Jobs
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
