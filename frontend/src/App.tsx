import { Route, Routes } from "react-router-dom";
import NavbarLayout from "./Layouts/NavbarLayout";
import HomeLayout from "./Layouts/HomeLayout";
function App() {
  return (
    <div className="flex h-screen flex-col overflow-hidden">
      <NavbarLayout />
      <div className="h-full">
        <Routes>
          <Route path="/" element={<HomeLayout />} />
          <Route path="/courses/*" element={<h1>Courses</h1>} />
          <Route path="/blogs/*" element={<h1>Blogs</h1>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
