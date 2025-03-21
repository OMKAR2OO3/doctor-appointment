import "react";
import { useState } from "react";

function Login() {
  const [state, setState] = useState("Sign Up");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, SetName] = useState("  ");
  const onSubmitHandle = async (event) => {
    event.preventDefult();
  };
  return (
    <form className="min-h-[80vh] flex items-center mt-3">
      <div className="  flex flex-col gap-3 items-start border p-5 rounded-xl m-auto min-w-[340px] sm:min-w-96 text-zinc-600 text-sm shadow-lg">
        <p className="font-semibold text-[25px] text-[#5e5e5e]">
          {state === "Sign Up" ? "Create Account" : "Login"}
        </p>
        <p className="text-[14px] pt-3 pb-2 text-[#5e5e5e] ">
          Please {state === "Sign Up" ? "sign up" : "login"} to book appointment
        </p>
        {state === "Sign Up" && (
          <div className="w-full">
            <p className="text-[14px] pt-3 pb-2 text-[#5e5e5e] ">Full Name</p>
            <input
              className="border rounded p-2 mt-1 w-full"
              type="text"
              onChange={(e) => SetName(e.traget.name)}
              value={name}
              required
            />
          </div>
        )}

        <div className="w-full">
          <p className="text-[14px] pt-3 pb-2 text-[#5e5e5e] ">Email</p>
          <input
            className="border rounded p-2 mt-1 w-full"
            type="email"
            onChange={(e) => SetName(e.traget.name)}
            value={email}
            required
          />
        </div>
        <div className="w-full">
          <p className="text-[14px] pt-3 pb-2 text-[#5e5e5e] ">Password</p>
          <input
            className="border rounded p-2 mt-1 w-full"
            type="text"
            onChange={(e) => SetName(e.traget.name)}
            value={password}
            required
          />
        </div>
        <button className="border p-3 bg-[#5f6fff] text-white rounded-xl w-full mt-3 pt-2">
          {state === "Sign Up" ? "Create Account" : "Login"}
        </button>
        {state === "Sign Up" ? (
          <p>
            Already have an account?
            <span
              onClick={() => {
                setState("Login");
              }}
              className="text-[#5f6fff] cursor-pointer underline"
            >
              Login here
            </span>
          </p>
        ) : (
          <p>
            Create an new account?
            <span
              onClick={() => {
                setState("Sign Up");
              }}
              className="text-[#5f6fff] cursor-pointer underline"
            >
              Click here
            </span>
          </p>
        )}
      </div>
    </form>
  );
}

export default Login;
