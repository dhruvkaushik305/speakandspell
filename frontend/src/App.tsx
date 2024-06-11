import { Route, Routes } from "react-router-dom";
import NavbarLayout from "./Layouts/NavbarLayout";
import HomeLayout from "./Layouts/HomeLayout";
function App() {
  return (
    <div className="flex h-screen flex-col overflow-y-auto overflow-x-hidden">
      <NavbarLayout />
      <div className="grow pt-[4rem]">
        <Routes>
          <Route path="/" element={<HomeLayout />} />
          <Route path="/courses/*" element={<h1>Courses</h1>} />
          <Route path="/blogs/*" element={<h1>Blogs</h1>} />
          <Route path="/contactus" element={<h1>Contact Us</h1>} />
        </Routes>
        <footer className="flex min-h-[4rem] w-full items-center justify-center bg-slate-800 p-2 text-white">
          <p>Copyright © Speak and Spell Academy</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
