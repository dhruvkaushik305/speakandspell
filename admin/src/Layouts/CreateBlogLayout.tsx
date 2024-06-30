import React from "react";
import { useForm } from "react-hook-form";
type formInputs = {
  title: string;
  content: string;
};
const CreateBlogLayout: React.FC = () => {
  const { register, handleSubmit } = useForm<formInputs>();
  return (
    <div className="flex h-full flex-col items-center justify-center gap-5">
      <h1 className="text-3xl font-bold">Create Blog</h1>
      <form
        className="flex flex-col gap-5 rounded-lg bg-slate-200 p-4"
        onSubmit={handleSubmit((data) => console.log(data))}
      >
        <div className="flex flex-col gap-1">
          <label htmlFor="title" {...register("title")}>
            Title
          </label>
          <input
            type="text"
            id="title"
            placeholder="What is your blog about?"
            className="rounded-lg p-2 focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="content">Content</label>
          <textarea
            id="content"
            placeholder="Write your blog here"
            className="h-[40rem] w-[80rem] rounded-lg p-2 focus:outline-none"
          />
        </div>
      </form>
      <button className="rounded-lg bg-blue-500 p-2 text-white">Create</button>
    </div>
  );
};
export default CreateBlogLayout;
