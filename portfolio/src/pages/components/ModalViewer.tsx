import { useEffect } from "react";

const ModelViewer = ({ src, alt, ar, autoRotate, cameraControls }: any) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js";
    script.type = "module";
    document.head.appendChild(script);
  }, []);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <model-viewer
        src={src}
        alt={alt}
        ar={ar ? "" : undefined}
        auto-rotate={autoRotate ? "" : undefined}
        camera-controls={cameraControls ? "" : undefined}
        style={{ width: "500px", height: "500px" }}
      />
    </div>
  );
};

export default ModelViewer;
