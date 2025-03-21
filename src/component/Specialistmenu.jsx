import "react";
import { specialityData } from "../assets/assets_frontend/assets";
import { Link } from "react-router-dom";

function Specialistmenu() {
  return (
    <div className="text-center pt-16" id="speciality">
      <h4 className="text-[25px] font-semibold leading-7 pb-4 ">
        Find by Speciality
      </h4>
      <p className="text-[14px] pb-7">
        Simply browse through our extensive list of trusted doctors, schedule
        <br />
        your appointment hassle-free.
      </p>
      <div className="flex gap-4 justify-center items-center max-sm:flex-col  mb-5">
        {specialityData.map((item, index) => {
          return (
            <Link
              key={index}
              to={`/docter/${item.speciality}`}
              onClick={() => scrollTo(0, 0)}
              className="relative hover:bottom-5 cursor-pointer"
            >
              {console.log("hello")}
              <img src={item.image} alt="image" className="w-[90px]  " />
              <h2 className="text-[12px]">{item.speciality}</h2>
              {console.log(item)}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Specialistmenu;
