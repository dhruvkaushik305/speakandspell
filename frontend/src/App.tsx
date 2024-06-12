import { Route, Routes } from "react-router-dom";
import NavbarLayout from "./Layouts/NavbarLayout";
import HomeLayout from "./Layouts/HomeLayout";
import AboutUsLayout from "./Layouts/AboutUsLayout";
import CoursesLayout from "./Layouts/CoursesLayout";
import ContactusLayout from "./Layouts/ContactusLayout";
import FaqLayout from "./Layouts/FaqLayout";
import NotFoundLayout from "./Layouts/NotFoundLayout";
function App() {
  return (
    <div className="flex h-screen flex-col overflow-y-auto overflow-x-hidden">
      <NavbarLayout />
      <div className="grow">
        <Routes>
          <Route path="/" element={<HomeLayout />} />
          <Route path="/aboutus" element={<AboutUsLayout />} />
          <Route path="/faq" element={<FaqLayout />} />
          <Route path="/courses/*" element={<CoursesLayout />} />
          <Route path="/blogs/*" element={<h1>Blogs</h1>} />
          <Route path="/contactus" element={<ContactusLayout />} />
          <Route path="*" element={<NotFoundLayout />} />
        </Routes>
        <footer className="flex min-h-[4rem] w-full items-center justify-between bg-slate-800 p-2 text-white">
          <p>Copyright © Speak and Spell Academy</p>
          <div className="flex flex-col items-start">
            <p>H.No 66, DC Colony</p>
            <p>Hisar</p>
            <p>+91 82950 76276</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
