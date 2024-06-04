import { Route, Routes } from "react-router-dom";
import NavbarLayout from "./Layouts/NavbarLayout";
function App() {
  return (
    <div className="">
      <NavbarLayout />
      <div className="h-full">
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/courses/*" element={<h1>Courses</h1>} />
          <Route path="/blogs/*" element={<h1>Blogs</h1>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
