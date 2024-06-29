import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import BentoGridDemo from "./components/BentoGrid";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-black pb-4 text-white flex flex-col gap-4">
      <div className="w-full text-center flex flex-col gap-4 min-h-screen mx-auto relative justify-center bg-black bg-dot-[#646cffaa]/50 text-white">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_30%,black)]"></div>
        <div className="w-full flex flex-row gap-4 items-center justify-center">
          <a href="https://vitejs.dev" target="_blank">
            <img
              src={viteLogo}
              className="h-20 sm:h-36 hover:drop-shadow-[0px_0px_2rem_#646cffaa] p-2"
              alt="Vite logo"
            />
          </a>
          <a href="https://react.dev" target="_blank">
            <img
              src={reactLogo}
              className="h-20 sm:h-36 hover:drop-shadow-[0px_0px_2rem_#61dafbaa] p-2"
              alt="React logo"
            />
          </a>
        </div>
        <h1 className="text-3xl sm:text-7xl font-bold font-mono">
          Vite + React
        </h1>
        <div>
          <button
            className="px-4 py-2 rounded-lg border-2 border-white bg-black hover:border-[#646cffaa]"
            onClick={() => setCount((count) => count + 1)}
          >
            count is {count}
          </button>
        </div>
      </div>
      <h2 className="text-2xl text-center sm:text-5xl font-semibold font-mono">
        Main features
      </h2>
      <div className="w-4/5 mx-auto">
        <BentoGridDemo />
      </div>
    </div>
  );
}

export default App;
