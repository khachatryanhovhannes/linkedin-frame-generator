import { useState } from "react";
import CanvasEditor from "./components/CanvasEditor";
import ControlsPanel from "./components/ControlsPanel";

export default function App() {
  const [imageSrc, setImageSrc] = useState<string>("/user.png");
  const [frameColor, setFrameColor] = useState("#107038");
  const [frameWidth, setFrameWidth] = useState(120);
  const [text, setText] = useState("#OPENTOWORK");
  const [textColor, setTextColor] = useState("#ffffff");
  const [textSize, setTextSize] = useState(75);
  const [fontFamily, setFontFamily] = useState("Courier New");
  const [fontWeight, setFontWeight] = useState("700");
  const [angleDeg, setAngleDeg] = useState(120);
  const [scale, setScale] = useState(1);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => setImageSrc(reader.result as string);
    reader.readAsDataURL(file);
  };

  const downloadImage = () => {
    const canvas = document.querySelector("canvas");
    if (!canvas) return;

    const link = document.createElement("a");
    link.download = "framed-image.png";
    link.href = canvas.toDataURL();
    link.click();
  };

  return (
    <div className="min-h-screen bg-gray-50 py-5 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-semibold text-center text-gray-800">
          LinkedIn Frame Generator
        </h1>
        <div className="flex justify-center items-center py-3 gap-6 mt-4 mb-6 text-blue-700 font-medium text-lg">
          <a
            href="http://hovhanneskhachatryan.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            🌐 Visit My Website
          </a>
          <a
            href="https://www.linkedin.com/in/khachatryan-hovhannes/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            💼 Connect on LinkedIn
          </a>
        </div>

        <div className="text-center">
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            placeholder="Upload File"
            className="text-sm text-gray-700"
          />
        </div>

        {imageSrc && (
          <>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="w-full flex justify-center items-center">
                <CanvasEditor
                  imageSrc={imageSrc}
                  frameColor={frameColor}
                  frameWidth={frameWidth}
                  text={text}
                  textColor={textColor}
                  textSize={textSize}
                  fontFamily={fontFamily}
                  fontWeight={fontWeight}
                  angleDeg={angleDeg}
                  scale={scale}
                  setScale={setScale}
                />
              </div>
              <div className="w-full">
                <ControlsPanel
                  frameColor={frameColor}
                  setFrameColor={setFrameColor}
                  frameWidth={frameWidth}
                  setFrameWidth={setFrameWidth}
                  text={text}
                  setText={setText}
                  textColor={textColor}
                  setTextColor={setTextColor}
                  textSize={textSize}
                  setTextSize={setTextSize}
                  fontFamily={fontFamily}
                  setFontFamily={setFontFamily}
                  fontWeight={fontWeight}
                  setFontWeight={setFontWeight}
                  angleDeg={angleDeg}
                  setAngleDeg={setAngleDeg}
                  scale={scale}
                  setScale={setScale}
                />
                <div className="text-center mt-8">
                  <button
                    onClick={downloadImage}
                    className="bg-[#0A66C2] text-white font-semibold py-2 px-6 rounded hover:bg-blue-700 transition"
                  >
                    Download
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
