import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

function TopDocters() {
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);

  return (
    <div className=" text-center">
      <h1 className="text-[24px] font-semibold pt-20">Top Doctors to Book</h1>
      <p className="text-[14px]">
        Simply browse through our extensive list of trusted <br />
        doctors.
      </p>
      <div className="max-sm:flex max-sm:flex-col flex flex-wrap justify-between mt-5">
        {
          <>
            {doctors.slice(0, 10).map((item, index) => (
              <div
                key={index}
                className=" border basis-[18%] mb-6 rounded-lg relative hover:bottom-3 cursor-pointer pb-4"
              >
                <div
                  className="bg-[#eaefff] mb-4 "
                  onClick={() => navigate(`/appointment/${item._id}`)}
                >
                  <img src={item.image} alt="" className="" />
                </div>
                <div className="flex pl-4 items-center">
                  <p className=" bg-green-500 h-2 w-2 rounded-full mr-3"></p>
                  <p className=" text-green-500 text-[14px] font-medium">
                    Available
                  </p>
                </div>
                <p className="text-left pl-4 font-semibold">{item.name}</p>
                <p className="text-left pl-4 text-[14px] text-gray-500">
                  {item.speciality}
                </p>
              </div>
            ))}
          </>
        }
      </div>
      <button
        onClick={() => {
          navigate("/docter");
          scrollTo(0, 0);
        }}
        className="border-[2px] pt-1 pb-1 pl-6 pr-6 bg-[#eaefff] rounded-2xl"
      >
        more
      </button>
    </div>
  );
}

export default TopDocters;
