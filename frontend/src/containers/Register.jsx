import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import InputField from "../components/InputField";

const Register = () => {
  const handleRegister = () => {
    console.log("Registering...");
  };

  const fields = [
    {
      type: "text",
      placeholder: "Name",
      key: "name",
    },
    {
      type: "email",
      placeholder: "Email",
      key: "email",
    },
    {
      type: "password",
      placeholder: "Password",
      key: "password",
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
          id="register_container"
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
            id="register_header"
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
              Register
            </h1>
          </div>

          <div
            id="register_form"
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
                <InputField type={field.type} placeholder={field.placeholder} />
              </div>
            ))}
          </div>
          <div
            id="register-btn"
            className="
                h-1/8
                w-2/3
              "
          >
            <Button text="Register" onClick={handleRegister} />
          </div>
          <div
            id="register-link-to-login"
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
              to="/login"
              className="
                text-red
                hover:underline
                "
            >
              Already have an account?
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
