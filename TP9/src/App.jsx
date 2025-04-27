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

import { useState, useEffect } from 'react';
import './App.css';

function App() {
  // State for counter
  const [count, setCount] = useState(0);

  // Data for Mobile Legends cards
  const mobileLegends = {
    page: 1,
    results: [
      {
        id: 1,
        title: "Layla - Malefic Gunner",
        body: "Layla is a marksman hero who excels at dealing high damage from a safe distance. With her powerful long-range attacks and ultimate ability, she can eliminate enemies without putting herself at risk. Perfect for beginners and experienced players alike.",
        image: laylaImage,
        role: "Marksman"
      },
      {
        id: 2,
        title: "Tigreal - Warrior of Dawn",
        body: "Tigreal is a tank hero who specializes in crowd control and protection. His abilities allow him to push enemies and create space for teammates. With high durability and defensive capabilities, he's the perfect frontliner for any team composition.",
        image: tigrealImage,
        role: "Tank"
      },
      {
        id: 3,
        title: "Eudora - Lightning Sorceress",
        body: "Eudora is a powerful mage who can burst down enemies with her lightning abilities. Her combination of stun and high magical damage makes her extremely dangerous in team fights. She excels at eliminating key targets quickly.",
        image: eudoraImage,
        role: "Mage"
      },
      {
        id: 4,
        title: "Zilong - Dragon Warrior",
        body: "Zilong is a fighter-assassin who specializes in single-target elimination and split pushing. With his ultimate ability, he can quickly move around the map to create pressure or join team fights. His spear flip ability can isolate enemy carries.",
        image: zilongImage,
        role: "Fighter/Assassin"
      },
      {
        id: 5,
        title: "Rafaela - Wings of Holiness",
        body: "Rafaela is a support hero who provides healing and movement speed to allies. Her abilities allow her to sustain her team during fights and chase down enemies. Her ultimate can stun multiple enemies, making her valuable in team compositions.",
        image: rafaelaImage,
        role: "Support"
      },
      {
        id: 6,
        title: "Alucard - Demon Hunter",
        body: "Alucard is a fighter who excels at lifesteal and sustained damage. His abilities allow him to chase targets and deal significant damage while healing himself. He's particularly strong in 1v1 situations and can snowball if given early advantages.",
        image: alucarddImage,
        role: "Fighter"
      }
    ],
  };

// Data for Modes
const modes = [
  {
    id: 1,
    title: "Classic Mode",
    image: clsImage,
    description: "Casual gameplay where players can practice and enjoy standard battles without affecting rank.",
  },
  {
    id: 2,
    title: "Ranked Mode",
    image: rankImage,
    description: "Competitive gameplay where players fight to climb the leaderboard and earn exclusive rewards.",
  },
  {
    id: 3,
    title: "Brawl Mode",
    image: brawlImage,
    description: "Fast-paced matches on a single-lane map with random heroes. Great for quick fun games.",
  },
];

// Data for Tournaments
const tournaments = [
  {
    id: 1,
    title: "Mobile Legends Professional League (MPL)",
    description: "Top-tier Mobile Legends tournament featuring the best teams from each region.",
    image: mplImage,
  },
  {
    id: 2,
    title: "MSC (Mid Season Cup)",
    description: "Annual world championship event where the best MLBB teams around the world compete.",
    image: mscImage,
    
  },
  {
    id: 3,
    title: "M-Series World Championship",
    
    description: "Annual world championship event where the best MLBB teams around the world compete.",
    image: mImage,
  },
];



  // useEffect for checking if count is divisible by 5
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
    <div className="min-h-screen bg-gray-100">
      {/* Navigation Bar */}
      <nav className="bg-violet-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-xl font-bold">Muhammad Rafli Tp9</div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-200">Heroes</a>
            <a href="#" className="hover:text-blue-200">Mode</a>
            <a href="#" className="hover:text-blue-200">Tournament</a>
          </div>
        </div>
      </nav>

      {/* Counter Demo */}
      <div className="container mx-auto mt-8 p-4">

        <h1 className="text-3xl font-bold mb-6 text-center">Counter</h1>

        <div className="bg-white p-6 rounded-lg shadow-md mb-8 min-h-64 flex flex-col justify-center">

          <div className="text-4xl font-bold text-center mb-4">{count}</div>
          <div className="flex justify-center space-x-4">
            <button 
              onClick={decrement}
              className="bg-red-200 hover:bg-red-300 px-6 py-2 rounded-md"
            >
              -
            </button>
            <button 
              onClick={reset}
              className="bg-yellow-200 hover:bg-yellow-300 px-6 py-2 rounded-md"
            >
              Reset
            </button>
            <button 
              onClick={increment}
              className="bg-green-200 hover:bg-green-300 px-6 py-2 rounded-md"
            >
              +
            </button>
          </div>
        </div>
        

        {/* Mobile Legends Cards */}
          <h2 className="text-2xl font-bold mb-4 bg-gray-200 p-3 rounded-md text-center">
            Mobile Legends Heroes
            </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mobileLegends.results.map((hero) => (
              <div key={hero.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src={hero.image} 
                  alt={hero.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <span className="inline-block bg-violet-500 text-white text-xs px-2 py-1 rounded mb-2">
                    {hero.role}
                  </span>
                  <h3 className="text-xl font-bold mb-2 truncate">{hero.title}</h3>
                  <p className="text-gray-700 line-clamp-3">{hero.body}</p>
                  <button className="mt-4 bg-violet-500 hover:bg-violet-600 text-white px-4 py-2 rounded">
                    Read More
                  </button>
                </div>
            </div>
          ))}
        </div>
        <h2 className="text-2xl font-bold mb-4 bg-gray-200 p-3 rounded-md text-center">
  Game Modes
</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {modes.map((mode) => (
    <div key={mode.id} className="bg-white rounded-lg shadow-md overflow-hidden">
      <img 
        src={mode.image}
        alt={mode.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <span className="inline-block bg-violet-500 text-white text-xs px-2 py-1 rounded mb-2">
          {mode.badge}
        </span>
        <h3 className="text-xl font-bold mb-2 truncate">{mode.title}</h3>
        <p className="text-gray-700 line-clamp-3">{mode.description}</p>
        <button className="mt-4 bg-violet-500 hover:bg-violet-600 text-white px-4 py-2 rounded">
          Read More
        </button>
      </div>
    </div>
  ))}
</div>

<h2 className="text-2xl font-bold mb-4 bg-gray-200 p-3 rounded-md text-center">
  Tournaments
</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {tournaments.map((tournament) => (
    <div key={tournament.id} className="bg-white rounded-lg shadow-md overflow-hidden">
      <img 
        src={tournament.image}
        alt={tournament.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <span className="inline-block bg-violet-500 text-white text-xs px-2 py-1 rounded mb-2">
          {tournament.badge}
        </span>
        <h3 className="text-xl font-bold mb-2 truncate">{tournament.title}</h3>
        <p className="text-gray-700 line-clamp-3">{tournament.description}</p>
        <button className="mt-4 bg-violet-500 hover:bg-violet-600 text-white px-4 py-2 rounded">
          Read More
        </button>
      </div>
    </div>
  ))}
</div>


      </div>


    </div>
    
  );
}

export default App; 