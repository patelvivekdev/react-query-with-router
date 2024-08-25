import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';
import BentoGridDemo from '@/components/BentoGrid';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col gap-4 bg-black pb-4 text-white">
      <div className="relative mx-auto flex min-h-screen w-full flex-col justify-center gap-4 bg-black text-center text-white bg-dot-[#646cffaa]/50">
        {/* Radial gradient for the container to give a faded look */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_30%,black)]"></div>
        <div className="flex w-full flex-row items-center justify-center gap-4">
          <a href="https://vitejs.dev" target="_blank">
            <img
              src={viteLogo}
              className="h-20 p-2 hover:drop-shadow-[0px_0px_2rem_#646cffaa] sm:h-36"
              alt="Vite logo"
            />
          </a>
          <a href="https://react.dev" target="_blank">
            <img
              src={reactLogo}
              className="h-20 p-2 hover:drop-shadow-[0px_0px_2rem_#61dafbaa] sm:h-36"
              alt="React logo"
            />
          </a>
        </div>
        <h1 className="font-mono text-3xl font-bold sm:text-7xl">Vite + React</h1>
        <div>
          <button
            className="rounded-lg border-2 border-white bg-black px-4 py-2 hover:border-[#646cffaa]"
            onClick={() => setCount((count) => count + 1)}
          >
            count is {count}
          </button>
        </div>
      </div>
      <h2 className="text-center font-mono text-2xl font-semibold sm:text-5xl">Main features</h2>
      <div className="mx-auto w-4/5">
        <BentoGridDemo />
      </div>
    </div>
  );
}

export default App;
