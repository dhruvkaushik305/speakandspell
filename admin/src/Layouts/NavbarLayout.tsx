import React from "react";
const NavbarLayout: React.FC = () => {
  return (
    <div className="fixed flex h-[4rem] w-full items-center justify-around border-b border-gray-200 bg-white p-1">
      <header className="text-2xl font-bold sm:text-3xl">Blogs</header>
    </div>
  );
};
export default NavbarLayout;
