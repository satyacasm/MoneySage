import React, { useState, useContext } from "react";
import InputField from "../components/InputField";
import Button from "../components/Button";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {loginUser} = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogin = async () => {
    console.log({ email, password });
    const res = await loginUser({email, password});
    if(res) {
      navigate("/register");
    }
    else {
      alert("Invalid Credentials");
    }
  };

  const fields = [
    {
      type: "email",
      placeholder: "Email",
      key: "email",
      value: email,
      onChange: (e) => setEmail(e.target.value),
    },
    {
      type: "password",
      placeholder: "Password",
      key: "password",
      value: password,
      onChange: (e) => setPassword(e.target.value),
    },
  ];
  return (
    <>
      <div
        id="container"
        className="
            h-screen
            w-screen
            flex
            flex-col
            justify-center
            items-center
            bg-login
            bg-cover
            bg-center
            bg-no-repeat
            "
      >
        <div
          id="login_container"
          className="
          bg-black
          rounded-2xl
          flex
          flex-col
          justify-center
          items-center
          w-[300px]
          md:w-[350px]
          h-3/4
          lg:w-1/3
        "
        >
          <div
            id="login_header"
            className="
            h-1/5
            pb-16
            w-full
            flex
            justify-center
            items-center
            "
          >
            <h1
              className="
                text-4xl"
            >
              Login
            </h1>
          </div>

          <div
            id="login_form"
            className="
            w-full
            h-1/3
            flex
            flex-col
            justify-center
            items-center
            gap-4
            "
          >
            {fields.map((field) => (
              <div className="w-2/3 h-1/5" key={field.key}>
                <InputField type={field.type} placeholder={field.placeholder} onChange={field.onChange} value = {field.value}/>
              </div>
            ))}
            <div
              id="login-forgot"
              className="
                  h-auto
                  w-2/3
                  flex
                  justify-end
                  items-center
                  p-2
            "
            >
              <Link
                to="/login"
                className="
            text-red
            hover:underline
            "
              >
                Forgot Password?
              </Link>
            </div>
          </div>
          <div
            id="login-btn"
            className="
            h-1/8
            w-2/3
          "
          >
            <Button text="Login" onClick={handleLogin} />
          </div>
          <div
            id="login-link-to-register"
            className="
            h-2/8
            w-2/3
            flex
            items-center
            justify-center
            py-4
          "
          >
            <Link
              to="/register"
              className="
            text-red
            hover:underline
            "
            >
              Don't have an account?
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
