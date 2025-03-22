import { useContext, useState } from "react";
import Footer from "../component/Footer";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { useEffect } from "react";

function Docter() {
  // const { speciality } = useParams;
  const [speciality, setSpeciality] = useState();
  console.log(speciality);
  const [filterDoc, setFilterDoc] = useState([]);
  const { doctors } = useContext(AppContext);
  const navigate = useNavigate();

  const applyfilter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter((doc) => doc.speciality === speciality));
    } else {
      setFilterDoc(doctors);
    }
  };
  useEffect(() => {
    applyfilter();
  }, [doctors, speciality]);

  return (
    <div className="">
      <p className=" my-4">Browse through the doctors specialist.</p>
      <div className="flex justify-between max-sm:flex max-sm:flex-col">
        <div className="basis-[20%] ">
          <p
            className="border-2 p-1 rounded-md my-2 cursor-pointer on "
            onClick={() => setSpeciality("General physician")}
          >
            General physician
          </p>

          <p
            className="border-2 p-1 rounded-md my-2 cursor-pointer"
            onClick={() => setSpeciality("Gynecologist")}
          >
            Gynecologist
          </p>

          <p
            className="border-2 p-1 rounded-md my-2 cursor-pointer"
            onClick={() => setSpeciality("Dermatologist")}
          >
            Dermatologist
          </p>
          <p
            className="border-2 p-1 rounded-md my-2 cursor-pointer"
            onClick={() => setSpeciality("Pediatricians")}
          >
            Pediatricians
          </p>
          <p
            className="border-2 p-1 rounded-md my-2 cursor-pointer"
            onClick={() => setSpeciality("Neurologist")}
          >
            Neurologist
          </p>
          <p
            className="border-2 p-1 rounded-md my-2 cursor-pointer"
            onClick={() => setSpeciality("Gastroenterologist")}
          >
            Gastroenterologist
          </p>
        </div>
        <div className=" grid grid-cols-3 gap-5 basis-[78%] max-sm:grid-cols-1">
          {filterDoc.map((item, index) => (
            <div
              key={index}
              className=" border mb-6 rounded-lg relative hover:bottom-3 cursor-pointer pb-4"
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
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Docter;
