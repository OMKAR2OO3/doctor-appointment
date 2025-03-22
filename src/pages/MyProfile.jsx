import { useState } from "react";
import { assets } from "../assets/assets_frontend/assets";
import Footer from "../component/Footer";
function MyProfile() {
  const [userData, setuserData] = useState({
    name: "Omkar",
    image: assets.profile_pic,
    email: "omkar@gmail.com",
    phone: "7997448091",
    address: {
      line1: "race view colony",
      line2: "guindy chennai",
    },
    gender: "male",
    dob: "2003-05-31",
  });
  const [isEdit, setIsEdit] = useState(false);
  return (
    <div>
      <div className=" max-w-lg">
        <img src={userData.image} alt="" className="rounded-xl w-40 my-4 " />
        {isEdit ? (
          <input
            type="text"
            value={userData.name}
            onChange={(e) =>
              setuserData((prev) => ({ ...prev, name: e.target.value }))
            }
          ></input>
        ) : (
          <p className="text-[25px] font-semibold my-2">{userData.name}</p>
        )}
        <hr className=" border-none h-0.5 bg-[#565563] " />
        <div>
          <p className=" my-4 underline text-[#565563] ">CONTACT INFORMATION</p>
          <div className="grid grid-cols-[1fr_3fr]">
            <p className="text-[#363636]">Email ID :</p>
            <p className="text-[#5f6fff]">{userData.email}</p>
            <p className="text-[#363636]">Phone:</p>
            {isEdit ? (
              <input
                type="text"
                value={userData.phone}
                onChange={(e) =>
                  setuserData((prev) => ({ ...prev, phone: e.target.value }))
                }
              ></input>
            ) : (
              <p className="text-[#5f6fff]">{userData.phone}</p>
            )}
            <p className="text-[#363636]">Address:</p>
            {isEdit ? (
              <p>
                <input
                  type="text"
                  onChange={(e) =>
                    setuserData((prev) => ({
                      ...prev,
                      address: { ...prev.address, line1: e.target.value },
                    }))
                  }
                  value={userData.address.line1}
                />
                <br />
                <input
                  type="text"
                  onChange={(e) =>
                    setuserData((prev) => ({
                      ...prev,
                      address: { ...prev.address, line2: e.target.value },
                    }))
                  }
                  value={userData.address.line2}
                />
              </p>
            ) : (
              <p className="text-[#363636] ">
                {userData.address.line1}
                <br />
                {userData.address.line2}
              </p>
            )}
          </div>
        </div>
        <div className="">
          <div>
            <p className=" my-4 underline text-[#565563] ">BASIC INFORMATION</p>
          </div>
          <div className="grid grid-cols-[1fr_2fr] gap-3">
            <p>Gender:</p>
            {isEdit ? (
              <select
                onChange={(e) =>
                  setuserData((prev) => ({ ...prev, gender: e.target.value }))
                }
                value={userData.gender}
              >
                <option value="Not selected">none</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            ) : (
              <p>{userData.gender}</p>
            )}
            <p>Birthday:</p>
            {isEdit ? (
              <input
                type="date"
                onChange={(e) =>
                  setuserData((prev) => ({ ...prev, dob: e.target.value }))
                }
                value={userData.dob}
              ></input>
            ) : (
              <p>{userData.dob}</p>
            )}
          </div>
          <div className="my-8 ">
            {isEdit ? (
              <button
                className="border bg-[#5f6fff] text-[white] py-1 px-3 rounded"
                onClick={() => setIsEdit(false)}
              >
                Submit
              </button>
            ) : (
              <button
                className="border bg-[#5f6fff] text-[white] py-1 px-3 rounded"
                onClick={() => setIsEdit(true)}
              >
                Edit
              </button>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default MyProfile;
