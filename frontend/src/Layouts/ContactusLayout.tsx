import React from "react";
import { useForm } from "react-hook-form";
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
    <div className="mx-auto flex h-full w-[90%] flex-col items-center justify-center gap-5 md:w-[100%]">
      <div className="md:bg-contactusBanner flex h-[10rem] w-full flex-col items-center justify-center bg-cover bg-center md:h-[15rem] lg:h-[20rem]">
        <div className="flex flex-col items-center justify-center gap-3 rounded-xl backdrop-blur-lg">
          <h1 className="text-2xl font-bold md:text-3xl lg:text-4xl">
            Contact Us
          </h1>
          <h2 className="text-center text-lg italic md:text-2xl">
            Need help? Don't worry we have real people behind the keyboard.
          </h2>
        </div>
      </div>
      <form
        className="flex w-full flex-col items-center gap-5 md:min-w-[80%] md:grow md:justify-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex w-full flex-col items-start justify-center gap-1 md:w-[80%] xl:w-[50%]">
          <label htmlFor={"name"} className="text-lg sm:text-xl">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full rounded-lg bg-gray-200 p-2 focus:outline-none"
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
          <label htmlFor={"email"} className="text-lg sm:text-xl">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full rounded-lg bg-gray-200 p-2 focus:outline-none"
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
          <label htmlFor={"phone"} className="text-lg sm:text-xl">
            Phone number
          </label>
          <input
            type="tel"
            id="phone"
            className="w-full rounded-lg bg-gray-200 p-2 focus:outline-none"
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
          <label htmlFor="query" className="text-lg sm:text-xl">
            Query
          </label>
          <textarea
            id="query"
            className="h-[6rem] w-full resize-none rounded-lg bg-gray-200 p-2 focus:outline-none"
            placeholder="Enter your query"
            {...register("query", { required: true })}
          />
        </div>
        <button className="w-[60%] rounded-xl bg-Tertiary px-4 py-3 text-white sm:w-[20%]">
          Submit
        </button>
      </form>
    </div>
  );
};
export default ContactusLayout;
