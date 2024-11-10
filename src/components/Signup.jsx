/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { z } from "zod"; 
import useStore from "../store"; 

const Signup = () => {
  const { setUser } = useStore(); 

  const [isSubmitted, setIsSubmitted] = useState(false);

  const validationSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z
      .string()
      .email("Invalid email address")
      .min(1, "Email is required"),
    password: z
      .string()
      .min(6, "Password must be at least 6 characters")
      .min(1, "Password is required"),
  });

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white shadow-lg rounded-md">
      <h2 className="text-2xl font-semibold text-center mb-4">Sign Up</h2>

      {isSubmitted && (
        <div className="mb-4 p-4 bg-green-100 text-green-700 border border-green-200 rounded-md text-center">
          <p>Your account has been successfully created!</p>
        </div>
      )}

      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
        }}
        validate={(values) => {
          try {
            validationSchema.parse(values);
            return {}; 
          } catch (error) {
            if (error instanceof z.ZodError) {
              return error.errors.reduce((acc, curr) => {
                acc[curr.path[0]] = curr.message;
                return acc;
              }, {});
            }
          }
        }}
        onSubmit={(values) => {
          console.log("Form Submitted:", values);
          setUser(values); 
          setIsSubmitted(true); 
        }}
      >
        {({ errors, touched }) => (
          <Form>
            {Object.keys(errors).length > 0 && (
              <div className="text-red-500 mb-4">
                {Object.keys(errors).map((key) => (
                  <p key={key}>{errors[key]}</p>
                ))}
              </div>
            )}

            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <Field
                type="text"
                name="name"
                id="name"
                className="w-full mt-2 p-2 border border-gray-300 rounded-md"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <Field
                type="email"
                name="email"
                id="email"
                className="w-full mt-2 p-2 border border-gray-300 rounded-md"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <Field
                type="password"
                name="password"
                id="password"
                className="w-full mt-2 p-2 border border-gray-300 rounded-md"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-md"
              >
                Sign Up
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Signup;
