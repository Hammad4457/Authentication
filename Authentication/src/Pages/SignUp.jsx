import React from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import NameSvg from "../svg Components/NameSvg";
import EmailSvg from "../svg Components/EmailSvg";
import PasswordSvg from "../svg Components/PasswordSvg";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 bg-[#4BCBEB] md:h-screen">
        <img
          className="py-28 w-96 mx-auto"
          src="src\assets\Signup.PNG"
          alt="Signup Image"
        ></img>
      </div>
      <div className="w-full md:w-1/2">
        <h1 className="text-center items-center justify-center text-lg  font-bold mr-40 mt-32">
          Sign Up for an Account
        </h1>

        <div className="flex justify-center">
          <Formik
            initialValues={{ name: "", email: "", password: "" }}
            validationSchema={Yup.object({
              name: Yup.string().required("Required"),
              email: Yup.string()
                .email("Invalid email address")
                .required("Required"),
              password: Yup.string()
                .min(6, "Password length should be greater than 5")
                .required("Required"),
            })}
            onSubmit={(values, { setSubmitting }) => {
              axios
                .post("http://localhost:3000/api/users/register", {
                  name: values.name,
                  email: values.email,
                  password: values.password,
                  role: "user",
                })
                .then((result) => {
                  console.log(result);
                  navigate("/login");
                })
                .catch((err) => {})
                .finally(() => setSubmitting(false));
            }}
          >
            {({ isSubmitting }) => (
              <Form className="w-full md:w-3/4 lg:w-2/3 xl:w-1/2">
                <div className="relative">
                  <div className="flex mt-8 items-center">
                    <div className="absolute left-0  pl-3">
                      <NameSvg />
                    </div>
                    <Field
                      className="pl-10 w-72 px-3 py-2 ml-2 rounded border border-slate-300"
                      type="text"
                      name="name"
                      placeholder="Enter Name"
                    />
                  </div>
                  <ErrorMessage
                    name="name"
                    component="p"
                    className="text-red-500 ml-2 mt-1 text-xs"
                  />
                </div>

                <div>
                  <div className="flex mt-6 items-center">
                    <div className="absolute  pl-3 ">
                      <EmailSvg />
                    </div>
                    <Field
                      className="w-72 px-3 pl-10 ml-2 py-2 rounded border border-slate-300"
                      type="email"
                      name="email"
                      placeholder="Enter Email"
                    />
                  </div>
                  <ErrorMessage
                    name="email"
                    component="p"
                    className="text-red-500 ml-2 mt-1 text-xs"
                  />
                </div>

                <div className="relative">
                  <div className="flex mt-6 items-center">
                    <div className="absolute  pl-3">
                      <PasswordSvg />
                    </div>

                    <Field
                      className="w-72 pl-10 px-3 ml-2 py-2 rounded border border-slate-300"
                      type="password"
                      name="password"
                      placeholder="Enter Password"
                    />
                  </div>
                  <ErrorMessage
                    name="password"
                    component="p"
                    className="text-red-500 ml-2 mt-1 text-xs"
                  />
                </div>

                <div className="flex mt-10 ml-2 items-center">
                  <input type="checkbox" />
                  <p className="text-xs px-1">
                    By creating an account means you agree to the
                    <b>Terms & Conditions</b> and our <b>Privacy Policy</b>.
                  </p>
                </div>

                <button
                  className="bg-[#4BCBEB] ml-2 mt-8 px-2 py-2 w-72 rounded-2xl"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <div className="flex justify-center items-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-[#FFF] mr-2"></div>
                      <span>Loading</span>
                    </div>
                  ) : (
                    "Sign Up"
                  )}
                </button>

                <p className="ml-8 mt-4  px-1">
                  Already have an Account?
                  <Link to="/Login">
                    <button className="text-blue-800">Login</button>
                  </Link>
                </p>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
