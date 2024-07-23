import Navbar from "./components/NavBar";

const FrontEndProjects = () => {
  return (
    <div>
      <Navbar extern section="section2" />
      <h1 className="text-[#e2e8c0] text-[62px] font-bold text-center">
        Frontend <strong className="text-[#be1d90]">Projects</strong>
      </h1>
      <p className="text-[#e2e8c0] text-[20px] text-center">
        Building <span className="emoji-worker">👷🏼‍♀️</span>
      </p>
    </div>
  );
};

export default FrontEndProjects;
