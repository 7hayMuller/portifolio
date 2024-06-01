import "./cube.css";

const RubiksCube = () => {
  const details = Array.from({ length: 27 }, (_, i) => (
    <div key={i} className="detail">
      <div className="side front"></div>
      <div className="side back"></div>
      <div className="side top"></div>
      <div className="side bottom"></div>
      <div className="side left"></div>
      <div className="side right"></div>
    </div>
  ));

  return (
    <div className="justify-center align-middle">
      <div className="container ">
        <div className="rubiks-cube rubiks-cube-1">{details}</div>
        {/* <div className="reflection">
          <div className="rubiks-cube rubiks-cube-1">{details}</div>
        </div> */}
      </div>
    </div>
  );
};

export default RubiksCube;
