import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets_frontend/assets";

function Navbar() {
  const navigate = useNavigate();
  const [navbarShow, setNavbarShow] = useState(false);
  const [token, setToken] = useState(true);

  return (
    <div className="flex justify-around items-center mt-3 border-b-2 pb-2 px-4">
      <div className="flex items-center gap-10">
        <img
          src={assets.logo}
          alt="logo"
          className="w-[180px] cursor-pointer"
          onClick={() => navigate("/")}
        />
        <ul className="hidden md:flex font-medium items-center gap-6">
          <NavLink to="/" className="hover:text-[#5f6fff]">
            <li>Home</li>
          </NavLink>
          <NavLink to="/docter" className="hover:text-[#5f6fff]">
            <li>All Doctors</li>
          </NavLink>
          <NavLink to="/about" className="hover:text-[#5f6fff]">
            <li>About</li>
          </NavLink>
          <NavLink to="/contact" className="hover:text-[#5f6fff]">
            <li>Contact</li>
          </NavLink>
        </ul>
      </div>

      <div className="hidden md:flex items-center gap-4">
        {token ? (
          <div className="relative group cursor-pointer">
            <div className="flex items-center gap-2">
              <img
                src={assets.profile_pic}
                alt="Profile"
                className="w-8 rounded-full"
              />
              <img
                src={assets.dropdown_icon}
                alt="Dropdown"
                className="w-2.5"
              />
            </div>
            <div className="absolute right-0 pt-2 z-30 hidden group-hover:block">
              <div className="bg-stone-50 p-4 rounded-lg shadow-md text-gray-600 w-48">
                <p
                  className="hover:text-black cursor-pointer py-1"
                  onClick={() => navigate("/my-profile")}
                >
                  My Profile
                </p>
                <p
                  className="hover:text-black cursor-pointer py-1"
                  onClick={() => navigate("/my-appointment")}
                >
                  My Appointment
                </p>
                <p
                  className="hover:text-black cursor-pointer py-1"
                  onClick={() => setToken(false)}
                >
                  Logout
                </p>
              </div>
            </div>
          </div>
        ) : (
          <button
            className="bg-[#5f6fff] px-4 py-2 rounded-full text-white"
            onClick={() => navigate("/login")}
          >
            Create Account
          </button>
        )}
      </div>

      <div className="md:hidden">
        <img
          src={assets.menu_icon}
          alt="Menu"
          className="w-6 cursor-pointer"
          onClick={() => setNavbarShow(true)}
        />
      </div>

      {navbarShow && (
        <div className="fixed inset-0 bg-white z-40 flex flex-col p-6 md:hidden transition-all">
          <div className="flex justify-between items-center mb-6">
            <img
              src={assets.logo}
              alt="logo"
              className="w-[150px]"
              onClick={() => {
                navigate("/");
                setNavbarShow(false);
              }}
            />
            <img
              src={assets.cross_icon}
              alt="Close"
              className="w-6 cursor-pointer"
              onClick={() => setNavbarShow(false)}
            />
          </div>

          <ul className="flex flex-col gap-6 font-medium text-lg">
            <NavLink to="/" onClick={() => setNavbarShow(false)}>
              <li className="hover:text-[#5f6fff]">Home</li>
            </NavLink>
            <NavLink to="/docter" onClick={() => setNavbarShow(false)}>
              <li className="hover:text-[#5f6fff]">All Doctors</li>
            </NavLink>
            <NavLink to="/about" onClick={() => setNavbarShow(false)}>
              <li className="hover:text-[#5f6fff]">About</li>
            </NavLink>
            <NavLink to="/contact" onClick={() => setNavbarShow(false)}>
              <li className="hover:text-[#5f6fff]">Contact</li>
            </NavLink>
            {token ? (
              <>
                <NavLink to="/my-profile" onClick={() => setNavbarShow(false)}>
                  <li className="hover:text-[#5f6fff]">My Profile</li>
                </NavLink>
                <NavLink
                  to="/my-appointment"
                  onClick={() => setNavbarShow(false)}
                >
                  <li className="hover:text-[#5f6fff]">My Appointment</li>
                </NavLink>
                <li
                  className="cursor-pointer border w-20 px-3 bg-[#5f6fff] text-[white] rounded-full"
                  onClick={() => {
                    setToken(false);
                    setNavbarShow(false);
                  }}
                >
                  Logout
                </li>
              </>
            ) : (
              <li
                className="bg-[#5f6fff] text-white px-4 py-2 rounded-full w-fit"
                onClick={() => {
                  navigate("/login");
                  setNavbarShow(false);
                }}
              >
                Create Account
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
