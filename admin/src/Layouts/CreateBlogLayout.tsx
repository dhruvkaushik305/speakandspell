import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import React, { useCallback, useRef } from "react";
import {
  BsBlockquoteRight,
  BsTypeItalic,
  BsTypeStrikethrough,
  BsTypeUnderline,
} from "react-icons/bs";
import { CiLink } from "react-icons/ci";
import {
  LuAlignCenter,
  LuAlignJustify,
  LuAlignLeft,
  LuAlignRight,
  LuBold,
  LuHeading1,
  LuHeading2,
  LuHeading3,
  LuSubscript,
  LuSuperscript,
} from "react-icons/lu";
import { PiListBulletsThin } from "react-icons/pi";
import { GoHorizontalRule, GoListOrdered } from "react-icons/go";
import Underline from "@tiptap/extension-underline";
import Link from "@tiptap/extension-link";
import Superscript from "@tiptap/extension-superscript";
import Subscript from "@tiptap/extension-subscript";
import TextStyle from "@tiptap/extension-text-style";
import Color from "@tiptap/extension-color";
import TextAlign from "@tiptap/extension-text-align";

const CreateBlogLayout: React.FC = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Link,
      Superscript,
      Subscript,
      TextStyle,
      Color,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Placeholder.configure({ placeholder: "Write your blog here..." }),
    ],
    editorProps: {
      attributes: {
        class:
          "prose p-4 focus:outline-none h-[40rem] border border-gray-200 rounded-lg w-full overflow-y-auto overflow-x-hidden",
      },
    },
  });
  const setLink = useCallback(() => {
    const previousUrl = editor?.getAttributes("link").href;
    const url = window.prompt("URL", previousUrl);

    // cancelled
    if (url === null) {
      return;
    }

    // empty
    if (url === "") {
      editor?.chain().focus().extendMarkRange("link").unsetLink().run();

      return;
    }

    // update link
    editor
      ?.chain()
      .focus()
      .extendMarkRange("link")
      .setLink({ href: url })
      .run();
  }, [editor]);
  const titleRef = useRef<HTMLInputElement>(null);
  if (!editor) return null;
  return (
    <div className="flex h-full flex-col items-center justify-center gap-5">
      <header className="w-full p-2 text-left text-2xl font-bold md:text-3xl">
        Create Blog Post
      </header>
      <div className="flex w-full flex-col gap-5 rounded-lg p-3 md:p-4">
        <div className="flex flex-col gap-1">
          <label htmlFor="title" className="text-xl font-medium">
            Title
          </label>
          <input
            type="text"
            id="title"
            placeholder="What is your blog about?"
            ref={titleRef}
            className="rounded-lg border border-gray-200 p-2 focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-1">
          <div>
            <header className="text-xl font-medium">Content</header>
            <div className="flex w-full items-center justify-around gap-2 p-2 lg:ml-auto lg:w-1/2">
              <input
                type="color"
                className="h-7 w-7 rounded-sm p-[1px]"
                onInput={(event) =>
                  editor
                    .chain()
                    .focus()
                    .setColor((event.target as HTMLInputElement).value)
                    .run()
                }
                value={editor.getAttributes("textStyle").color}
              />
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
                className={`size-6 cursor-pointer ${editor?.isActive("horizontalRule") ? "text-black" : "text-gray-300"}`}
                onClick={() => editor.chain().focus().setHorizontalRule().run()}
              />
              <LuBold
                onClick={() => editor.chain().focus().toggleBold().run()}
                className={`size-6 cursor-pointer ${editor?.isActive("bold") ? "text-black" : "text-gray-300"}`}
              />
              <BsTypeUnderline
                onClick={() => editor.chain().focus().toggleUnderline().run()}
                className={`size-6 cursor-pointer ${editor?.isActive("underline") ? "text-black" : "text-gray-300"}`}
              />
              <BsTypeItalic
                onClick={() => editor.chain().focus().toggleItalic().run()}
                className={`size-6 cursor-pointer ${editor?.isActive("italic") ? "text-black" : "text-gray-300"}`}
              />
              <BsTypeStrikethrough
                onClick={() => editor.chain().focus().toggleStrike().run()}
                className={`size-6 cursor-pointer ${editor?.isActive("strike") ? "text-black" : "text-gray-300"}`}
              />
              <LuAlignLeft
                onClick={() =>
                  editor.chain().focus().setTextAlign("left").run()
                }
                className={`size-6 cursor-pointer ${editor?.isActive({ textAlign: "left" }) ? "text-black" : "text-gray-300"}`}
              />
              <LuAlignCenter
                onClick={() =>
                  editor.chain().focus().setTextAlign("center").run()
                }
                className={`size-6 cursor-pointer ${editor?.isActive({ textAlign: "center" }) ? "text-black" : "text-gray-300"}`}
              />
              <LuAlignRight
                onClick={() =>
                  editor.chain().focus().setTextAlign("right").run()
                }
                className={`size-6 cursor-pointer ${editor?.isActive({ textAlign: "right" }) ? "text-black" : "text-gray-300"}`}
              />
              <LuAlignJustify
                onClick={() =>
                  editor.chain().focus().setTextAlign("justify").run()
                }
                className={`size-6 cursor-pointer ${editor?.isActive({ textAlign: "justify" }) ? "text-black" : "text-gray-300"}`}
              />
              <CiLink
                onClick={setLink}
                className={`size-6 cursor-pointer ${editor?.isActive("strike") ? "text-black" : "text-gray-300"}`}
              />
              <LuSubscript
                onClick={() => editor.chain().focus().toggleSubscript().run()}
                className={`size-6 cursor-pointer ${editor?.isActive("subscript") ? "text-black" : "text-gray-300"}`}
              />
              <LuSuperscript
                onClick={() => editor.chain().focus().toggleSuperscript().run()}
                className={`size-6 cursor-pointer ${editor?.isActive("superscript") ? "text-black" : "text-gray-300"}`}
              />
            </div>
            <EditorContent editor={editor} />
          </div>
        </div>
      </div>
      <button
        type="submit"
        className="w-[20%] min-w-[8rem] rounded-lg bg-gray-700 px-4 py-2 text-center text-white"
        onClick={() => {
          console.log(titleRef.current?.value);
          console.log(editor.getHTML());
        }}
      >
        Publish
      </button>
    </div>
  );
};
export default CreateBlogLayout;
