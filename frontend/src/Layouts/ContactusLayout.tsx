import React from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
type FormInputs = {
  name: string;
  email: string;
  phone: string;
  query: string;
};
const ContactusLayout: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();
  const onSubmit = (data: FormInputs) => {
    console.log(data);
  };
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className="mx-auto flex h-full max-w-[95%] flex-col items-center justify-center gap-5 md:max-w-[90%]"
    >
      <div className="flex flex-col items-center justify-center gap-3 text-gray-600">
        <h1 className="text-2xl font-bold md:text-3xl lg:text-4xl">
          Contact Us
        </h1>
        <h2 className="text-center text-lg italic md:text-xl">
          Need help? Don't worry we have real people behind the keyboard.
        </h2>
      </div>
      <form
        className="flex w-full flex-col items-center gap-5 p-3"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex w-full flex-col items-start justify-center gap-1 md:w-[80%] xl:w-[50%]">
          <label htmlFor={"name"} className="text-md text-gray-600 sm:text-lg">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full rounded-lg bg-gray-200/70 p-2 text-gray-800 focus:outline-none"
            placeholder="Enter your name"
            {...register("name", {
              pattern: {
                message: "Please enter a valid name",
                value: /^[a-zA-Z]+$/,
              },
              required: true,
            })}
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>
        <div className="flex w-full flex-col items-start justify-center gap-1 md:w-[80%] xl:w-[50%]">
          <label htmlFor={"email"} className="text-md text-gray-600 sm:text-lg">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full rounded-lg bg-gray-200/70 p-2 text-gray-800 focus:outline-none"
            placeholder="Enter your email"
            {...register("email", {
              pattern: {
                message: "Please enter a valid email address",
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              },
              required: true,
            })}
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
        </div>
        <div className="flex w-full flex-col items-start justify-center gap-1 md:w-[80%] xl:w-[50%]">
          <label htmlFor={"phone"} className="text-md text-gray-600 sm:text-lg">
            Phone number
          </label>
          <input
            type="tel"
            id="phone"
            className="w-full rounded-lg bg-gray-200/70 p-2 text-gray-800 focus:outline-none"
            placeholder="Enter your phone number"
            {...register("phone", {
              pattern: {
                message: "Please enter a valid phone number",
                value: /^[0-9]{10}$/,
              },
              required: true,
            })}
          />
          {errors.phone && (
            <p className="text-red-500">{errors.phone.message}</p>
          )}
        </div>
        <div className="flex w-full flex-col items-start justify-center gap-1 md:w-[80%] xl:w-[50%]">
          <label htmlFor="query" className="text-md text-gray-600 sm:text-lg">
            Query
          </label>
          <textarea
            id="query"
            className="h-[6rem] w-full resize-none rounded-lg bg-gray-200/70 p-2 text-gray-800 focus:outline-none"
            placeholder="Enter your query"
            {...register("query", { required: true })}
          />
        </div>
        <button className="w-[80%] rounded-xl bg-Tertiary/90 px-4 py-3 text-white sm:w-[40%] md:w-[30%]">
          Submit
        </button>
      </form>
    </motion.div>
  );
};
export default ContactusLayout;
