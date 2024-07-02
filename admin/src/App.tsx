import CreateBlogLayout from "./Layouts/CreateBlogLayout";
import NavbarLayout from "./Layouts/NavbarLayout";

function App() {
  return (
    <div className="flex h-screen flex-col">
      <NavbarLayout />
      <div className="grow pb-[2rem] pt-[4rem]">
        <CreateBlogLayout />
      </div>
    </div>
  );
}

export default App;
