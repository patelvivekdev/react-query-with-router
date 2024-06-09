import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-full text-center flex flex-col gap-4 min-h-screen mx-auto relative justify-center bg-[#242424] bg-dot-white/[0.2] text-white">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-[#242424] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="w-full flex flex-row gap-4 items-center justify-center">
        <a href="https://vitejs.dev" target="_blank">
          <img
            src={viteLogo}
            className="h-16 sm:h-28 hover:drop-shadow-[0_0_2em_#646cffaa] p-2"
            alt="Vite logo"
          />
        </a>
        <a href="https://react.dev" target="_blank">
          <img
            src={reactLogo}
            className="h-16 sm:h-28 hover:drop-shadow-[0_0_2em_#61dafbaa] p-2"
            alt="React logo"
          />
        </a>
      </div>
      <h1 className="text-3xl sm:text-7xl font-bold font-mono">Vite + React</h1>
      <div>
        <button
          className="px-4 py-2 rounded-lg border-2 border-white bg-black hover:border-[#646cffaa]"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </button>
        <p className="mt-4">
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="">Click on the Vite and React logos to learn more</p>
    </div>
  );
}

export default App;
