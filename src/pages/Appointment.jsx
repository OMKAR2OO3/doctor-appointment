import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/Appcontext";
import { assets } from "../assets/assets_frontend/assets";
import Footer from "../component/Footer";

function Appointment() {
  const { docId } = useParams();
  const DayofWeeks = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const { doctors } = useContext(AppContext);
  const [docInfo, setDocInfo] = useState(null);
  const [docSlots, setDocslots] = useState([]);
  const [slotIndex, setSlotindex] = useState(0);
  const [slotTime, setSlottime] = useState("");

  useEffect(() => {
    const docInfo = doctors.find((doc) => doc._id === docId);
    setDocInfo(docInfo);
  }, [doctors, docId]);

  useEffect(() => {
    if (!docInfo) return;

    const getAvailableSlots = () => {
      let today = new Date();
      let slotsArray = [];

      for (let i = 0; i < 7; i++) {
        let currentDate = new Date(today);
        currentDate.setDate(today.getDate() + i);

        let endTime = new Date(currentDate);
        endTime.setHours(21, 0, 0, 0);

        if (i === 0) {
          currentDate.setHours(
            currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10
          );
          currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
        } else {
          currentDate.setHours(10);
          currentDate.setMinutes(0);
        }

        let timeSlots = [];
        while (currentDate < endTime) {
          let formattedTime = currentDate.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          });

          timeSlots.push({
            datetime: new Date(currentDate),
            time: formattedTime,
          });

          currentDate.setMinutes(currentDate.getMinutes() + 30);
        }

        slotsArray.push(timeSlots);
      }

      setDocslots(slotsArray);
    };

    getAvailableSlots();
  }, [docInfo]);

  return (
    <div>
      {docInfo ? (
        <>
          <div className="flex justify-between mt-5 max-sm:flex-col ">
            <div className="bg-[#5f6fff] basis-[30%] rounded-lg">
              <img src={docInfo.image} alt="" className="" />
            </div>
            <div className="basis-[68%] border bg-white p-4 rounded-lg">
              <div>
                <h2 className="font-semibold text-[20px] inline-block">
                  {docInfo.name}
                </h2>
                <img
                  src={assets.verified_icon}
                  alt=""
                  className="inline-block ml-2 w-4"
                />
              </div>
              <p className="text-[#757d88]">
                {docInfo.degree} - {docInfo.speciality}
                <span className="border px-2 bg-white text-[12px] rounded-full ml-2">
                  {docInfo.experience}
                </span>
              </p>
              <div>
                <p className="my-4">
                  About
                  <img
                    src={assets.info_icon}
                    alt=""
                    className="inline-block ml-1 w-3"
                  />
                </p>
                <p className="text-[#757d88] text-[14px]">{docInfo.about}</p>
                <p className="mt-6">Appointment fee: ${docInfo.fees}</p>
              </div>
            </div>
          </div>

          <div>
            <p className="my-4 text-center text-[25px] font-medium">
              Booking slots
            </p>
            <div className="flex justify-between text-center mt-5 max-sm:flex-col">
              {docSlots.map((slotDay, index) => (
                <div
                  key={index}
                  onClick={() => setSlotindex(index)}
                  className={`mb-2 border p-5 cursor-pointer rounded-2xl ${
                    slotIndex === index
                      ? "bg-[#5f6fff] text-white"
                      : "border border-gray-200"
                  }`}
                >
                  <p>
                    {slotDay[0] && DayofWeeks[slotDay[0].datetime.getDay()]}
                  </p>
                  <p>{slotDay[0] && slotDay[0].datetime.getDate()}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="text-sm flex gap-8 overflow-x-scroll my-3">
            {docSlots.length &&
              docSlots[slotIndex].map((item, index) => (
                <p
                  key={index}
                  onClick={() => setSlottime(item.time)}
                  className={`border rounded-xl p-3 flex-shrink-0 cursor-pointer ${
                    item.time === slotTime
                      ? "bg-[#5f6fff] text-white"
                      : "text-gray-400 border-gray-300"
                  }`}
                >
                  {item.time.toLowerCase()}
                </p>
              ))}
          </div>
          <div className="text-center">
            <button className="px-6 py-2  my-4 bg-[#5f6fff] text-white rounded-3xl">
              Book an appointment
            </button>
          </div>
          <Footer />
        </>
      ) : (
        <p className="text-center my-10">Loading doctor info...</p>
      )}
    </div>
  );
}

export default Appointment;
