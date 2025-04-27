import { useState, useEffect } from 'react';
import './App.css';

import laylaImage from './assets/layla.jpeg';
import tigrealImage from './assets/tigreal.jpeg';
import rafaelaImage from './assets/rafaela.jpeg';
import zilongImage from './assets/zilong.jpeg';
import eudoraImage from './assets/eudora.jpeg';
import alucarddImage from './assets/alucardd.jpeg';
import mscImage from './assets/msc.jpg';
import mImage from './assets/m.jpg';
import mplImage from './assets/mpl.jpg';
import brawlImage from './assets/brawl.jpg';
import rankImage from './assets/rank.jpg';
import clsImage from './assets/cls.jpg';

function App() {
  // States
  const [count, setCount] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  // Mobile Legends Heroes Data
  const mobileLegends = {
    page: 1,
    results: [
      {
        id: 1,
        title: "Layla - Malefic Gunner",
        body: "Layla is a marksman hero who excels at dealing high damage from a safe distance.",
        image: laylaImage,
        role: "Marksman"
      },
      {
        id: 2,
        title: "Tigreal - Warrior of Dawn",
        body: "Tigreal is a tank hero who specializes in crowd control and protection.",
        image: tigrealImage,
        role: "Tank"
      },
      {
        id: 3,
        title: "Eudora - Lightning Sorceress",
        body: "Eudora is a powerful mage who can burst down enemies with her lightning abilities.",
        image: eudoraImage,
        role: "Mage"
      },
      {
        id: 4,
        title: "Zilong - Dragon Warrior",
        body: "Zilong is a fighter-assassin who specializes in elimination and split pushing.",
        image: zilongImage,
        role: "Fighter/Assassin"
      },
      {
        id: 5,
        title: "Rafaela - Wings of Holiness",
        body: "Rafaela is a support hero who provides healing and movement speed to allies.",
        image: rafaelaImage,
        role: "Support"
      },
      {
        id: 6,
        title: "Alucard - Demon Hunter",
        body: "Alucard is a fighter who excels at lifesteal and sustained damage.",
        image: alucarddImage,
        role: "Fighter"
      }
    ],
  };

  // Game Modes Data
  const modes = [
    {
      id: 1,
      title: "Classic Mode",
      image: clsImage,
      description: "Casual gameplay where players can practice without affecting rank.",
      badge: "Mode"
    },
    {
      id: 2,
      title: "Ranked Mode",
      image: rankImage,
      description: "Competitive gameplay to climb the leaderboard and earn rewards.",
      badge: "Mode"
    },
    {
      id: 3,
      title: "Brawl Mode",
      image: brawlImage,
      description: "Fast-paced single-lane battles with random heroes.",
      badge: "Mode"
    },
  ];

  // Tournament Data
  const tournaments = [
    {
      id: 1,
      title: "Mobile Legends Professional League (MPL)",
      description: "Top-tier MLBB tournament featuring the best teams.",
      image: mplImage,
      badge: "Tournament"
    },
    {
      id: 2,
      title: "MSC (Mid Season Cup)",
      description: "Mid-season championship for MLBB across regions.",
      image: mscImage,
      badge: "Tournament"
    },
    {
      id: 3,
      title: "M-Series World Championship",
      description: "Annual world championship event for MLBB teams.",
      image: mImage,
      badge: "Tournament"
    },
  ];

  // Check if divisible by 5
  useEffect(() => {
    if (count !== 0 && count % 5 === 0) {
      alert(`${count} is divisible by 5`);
    }
  }, [count]);

  // Counter functions
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 dark:text-white transition-colors duration-300">
        {/* Navbar */}
        <nav className="bg-violet-600 dark:bg-violet-800 text-white p-4">
          <div className="container mx-auto flex justify-between items-center">
            <div className="text-xl font-bold">Muhammad Rafli Tp9</div>
            <div className="flex space-x-4">
            <a href="#heroes" className="hover:text-blue-200">Heroes</a>
            <a href="#modes" className="hover:text-blue-200">Mode</a>
            <a href="#tournaments" className="hover:text-blue-400">Tournament</a>

              <button
                onClick={() => setDarkMode(!darkMode)}
                className="ml-4 bg-gray-300 hover:bg-gray-400 text-black px-3 py-1 rounded-md dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 transition"
              >
                {darkMode ? 'Light Mode' : 'Dark Mode'}
              </button>
            </div>
          </div>
        </nav>

        {/* Content */}
        <div className="container mx-auto mt-8 p-4">

          {/* Counter Section */}
          <h1 className="text-3xl font-bold mb-6 text-center underline decoration-wavy decoration-violet-400">
            Counter
          </h1>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-12 min-h-64 flex flex-col justify-center items-center">
            <div className="text-6xl font-extrabold mb-6 animate-pulse">{count}</div>
            <div className="flex justify-center space-x-6">
              <button onClick={decrement} className="bg-red-500 hover:bg-red-600 text-white text-xl font-bold px-6 py-3 rounded-full transition transform hover:scale-110">
                -
              </button>
              <button onClick={reset} className="bg-yellow-400 hover:bg-yellow-500 text-white text-xl font-bold px-6 py-3 rounded-full transition transform hover:scale-110">
                Reset
              </button>
              <button onClick={increment} className="bg-green-500 hover:bg-green-600 text-white text-xl font-bold px-6 py-3 rounded-full transition transform hover:scale-110">
                +
              </button>
            </div>
          </div>

          {/* Mobile Legends Heroes Section */}
          <h2 id="heroes" className="text-2xl font-bold mb-4 bg-gray-200 dark:bg-gray-700 p-3 rounded-md text-center">
          Mobile Legends Heroes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mobileLegends.results.map((hero) => (
              <div key={hero.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                <img src={hero.image} alt={hero.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <span className="inline-block bg-violet-500 text-white text-xs px-2 py-1 rounded mb-2">{hero.role}</span>
                  <h3 className="text-xl font-bold mb-2 truncate">{hero.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300 line-clamp-3">{hero.body}</p>
                  <button className="mt-4 bg-violet-500 hover:bg-violet-600 text-white px-4 py-2 rounded">
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Game Modes Section */}
          <h2 id="modes" className="text-2xl font-bold mb-4 bg-gray-200 dark:bg-gray-700 p-3 rounded-md text-center">
          Game Modes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modes.map((mode) => (
              <div key={mode.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                <img src={mode.image} alt={mode.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <span className="inline-block bg-violet-500 text-white text-xs px-2 py-1 rounded mb-2">{mode.badge}</span>
                  <h3 className="text-xl font-bold mb-2 truncate">{mode.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300 line-clamp-3">{mode.description}</p>
                  <button className="mt-4 bg-violet-500 hover:bg-violet-600 text-white px-4 py-2 rounded">
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Tournaments Section */}
          <h2 id="tournaments" className="text-2xl font-bold mb-4 bg-gray-200 dark:bg-gray-700 p-3 rounded-md text-center">
          Tournaments
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tournaments.map((tournament) => (
              <div key={tournament.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                <img src={tournament.image} alt={tournament.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <span className="inline-block bg-violet-500 text-white text-xs px-2 py-1 rounded mb-2">{tournament.badge}</span>
                  <h3 className="text-xl font-bold mb-2 truncate">{tournament.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300 line-clamp-3">{tournament.description}</p>
                  <button className="mt-4 bg-violet-500 hover:bg-violet-600 text-white px-4 py-2 rounded">
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
