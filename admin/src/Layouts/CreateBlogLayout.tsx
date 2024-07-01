import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import React from "react";
import { useForm } from "react-hook-form";
import {
  BsBlockquoteRight,
  BsTypeItalic,
  BsTypeStrikethrough,
  BsTypeUnderline,
} from "react-icons/bs";
import { CiLink } from "react-icons/ci";
import {
  LuBold,
  LuHeading1,
  LuHeading2,
  LuHeading3,
  LuSubscript,
  LuSuperscript,
} from "react-icons/lu";
import Blockquote from "@tiptap/extension-blockquote";
import { PiListBulletsThin } from "react-icons/pi";
import BulletList from "@tiptap/extension-bullet-list";
import Heading from "@tiptap/extension-heading";
import { GoHorizontalRule, GoListOrdered } from "react-icons/go";
import HorizontalRule from "@tiptap/extension-horizontal-rule";
import OrderedList from "@tiptap/extension-ordered-list";
type formInputs = {
  title: string;
  content: string;
};
const CreateBlogLayout: React.FC = () => {
  const editor = useEditor({
    extensions: [
      Blockquote,
      StarterKit,
      BulletList,
      OrderedList,
      HorizontalRule,
      Heading.configure({ levels: [1, 2, 3] }),
      Placeholder.configure({ placeholder: "Write your blog here..." }),
    ],
    editorProps: {
      attributes: {
        class:
          "prose p-4 focus:outline-none h-[40rem] border border-gray-200 rounded-lg w-full overflow-y-auto overflow-x-hidden",
      },
    },
  });
  const { register, handleSubmit } = useForm<formInputs>();
  if (!editor) return null;
  return (
    <div className="flex h-full flex-col items-center justify-center gap-5">
      <header className="w-full p-2 text-left text-4xl font-bold">
        Create Blog Post
      </header>
      <form
        className="flex w-full flex-col gap-5 rounded-lg p-4"
        onSubmit={handleSubmit((data) => console.log(data))}
      >
        <div className="flex flex-col gap-1">
          <label
            htmlFor="title"
            {...register("title")}
            className="text-xl font-medium"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            placeholder="What is your blog about?"
            className="rounded-lg border border-gray-200 p-2 focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-1">
          <div>
            <header className="text-xl font-medium">Content</header>
            <div className="ml-auto flex w-1/2 items-center justify-around gap-2 p-2">
              <BsBlockquoteRight
                className={`size-6 cursor-pointer ${editor?.isActive("blockquote") ? "text-black" : "text-gray-300"}`}
                onClick={() => editor?.chain().focus().toggleBlockquote().run()}
              />
              <PiListBulletsThin
                className={`size-6 cursor-pointer ${editor?.isActive("bulletList") ? "text-black" : "text-gray-300"}`}
                onClick={() => editor.chain().focus().toggleBulletList().run()}
              />
              <GoListOrdered
                onClick={() => editor.chain().focus().toggleOrderedList().run()}
                className={`size-6 cursor-pointer ${editor?.isActive("orderedList") ? "text-black" : "text-gray-300"}`}
              />
              <LuHeading1
                className={`size-6 cursor-pointer ${editor?.isActive("heading", { level: 1 }) ? "text-black" : "text-gray-300"}`}
                onClick={() =>
                  editor.chain().focus().toggleHeading({ level: 1 }).run()
                }
              />
              <LuHeading2
                className={`size-6 cursor-pointer ${editor?.isActive("heading", { level: 2 }) ? "text-black" : "text-gray-300"}`}
                onClick={() =>
                  editor.chain().focus().toggleHeading({ level: 2 }).run()
                }
              />
              <LuHeading3
                className={`size-6 cursor-pointer ${editor?.isActive("heading", { level: 3 }) ? "text-black" : "text-gray-300"}`}
                onClick={() =>
                  editor.chain().focus().toggleHeading({ level: 3 }).run()
                }
              />
              <GoHorizontalRule
                className={`size-6 cursor-pointer ${editor?.isActive("horizontalRule", { level: 3 }) ? "text-black" : "text-gray-300"}`}
                onClick={() => editor.chain().focus().setHorizontalRule().run()}
              />
              <LuBold />
              <BsTypeUnderline />
              <BsTypeItalic />
              <BsTypeStrikethrough />
              <CiLink />
              <LuSubscript />
              <LuSuperscript />
            </div>
            <EditorContent editor={editor} />
          </div>
        </div>
      </form>
      <button className="w-[20%] rounded-lg bg-gray-700 px-4 py-2 text-white">
        Publish
      </button>
    </div>
  );
};
export default CreateBlogLayout;
