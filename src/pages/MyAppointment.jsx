import { useContext } from "react";
import { AppContext } from "../context/AppContext";

function MyAppointment() {
  const { doctors } = useContext(AppContext);
  return (
    <div className="">
      <p className="border-b-2 py-5">My Appointment</p>
      <div>
        {doctors.slice(0, 3).map((item, index) => {
          return (
            <div
              key={index}
              className="grid grid-cols-[1fr_2fr] gap-3 sm:flex sm:gap-6 items-center border my-5 shadow p-2"
            >
              <div className=" bg-[#eaefff]">
                <img src={item.image} alt="img" className="w-32 " />
              </div>
              <div className="flex-1">
                <p className="font-semibold">{item.name}</p>
                <p className="text-[#9d9b9d]">{item.speciality}</p>
                <p className=" text-[#5e6182]">Address:</p>
                <p className="text-[#9d9b9d]">{item.address.line1}</p>
                <p className="text-[#9d9b9d]">{item.address.line2}</p>
                <p className="text-[#9d9b9d]">
                  <span className=" text-[#5e6182]"> Date&Time</span> 18 -3-2025
                  | 10:00 AM
                </p>
              </div>
              <div className="flex flex-col gap-2 justify-end">
                <button className="block text-center border px-4 py-1 bg-white hover:bg-[#5f6fff] hover:text-[white] rounded">
                  Pay Online
                </button>
                <button className=" text-center border px-4 py-1  bg-white hover:bg-[#ef4444] hover:text-[white] rounded">
                  Cancel Appointment
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MyAppointment;
