import Navbar from "./components/NavBar";

const UxUiProjects = () => {
  return (
    <>
      <Navbar extern section="section3" />
      <div className="flex flex-col justify-center items-center min-h-screen px-4">
        <h1 className="text-[#e2e8c0] text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-4">
          UX/UI <strong className="text-[#be1d90]">Projects</strong>
        </h1>
        <p className="text-[#e2e8c0] text-lg sm:text-xl lg:text-2xl text-center">
          Building <span className="emoji-worker">👷🏼‍♀️</span>
        </p>
      </div>
    </>
  );
};

export default UxUiProjects;
