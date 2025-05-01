'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import CirclePicker from '@/components/CirclePicker';
import CircleDetails from '@/components/CircleDetails';

const circleThemes = {
  1: { // Limbo
    bg: "bg-stone-900",
    text: "text-stone-100",
    accent: "from-stone-900 to-stone-800"
  },
  2: { // Lust
    bg: "bg-red-900",
    text: "text-red-100",
    accent: "from-red-900 to-red-800"
  },
  3: { // Gluttony
    bg: "bg-yellow-900",
    text: "text-yellow-100",
    accent: "from-yellow-900 to-yellow-800"
  },
  4: { // Greed
    bg: "bg-amber-900",
    text: "text-amber-100",
    accent: "from-amber-900 to-amber-800"
  },
  5: { // Wrath
    bg: "bg-orange-900",
    text: "text-orange-100",
    accent: "from-orange-900 to-orange-800"
  },
  6: { // Heresy
    bg: "bg-purple-900",
    text: "text-purple-100",
    accent: "from-purple-900 to-purple-800"
  },
  7: { // Violence
    bg: "bg-pink-900",
    text: "text-pink-100",
    accent: "from-pink-900 to-pink-800"
  },
  8: { // Fraud
    bg: "bg-indigo-900",
    text: "text-indigo-100",
    accent: "from-indigo-900 to-indigo-800"
  },
  9: { // Treachery
    bg: "bg-blue-900",
    text: "text-blue-100",
    accent: "from-blue-900 to-blue-800"
  }
};

// Dummy data for the circles
const circlesData = [
  {
    id: 1,
    name: "Limbo",
    description: "The first circle of Hell, where virtuous non-Christians and unbaptized infants dwell.",
    featuredSoul: {
      name: "Virgil",
      avatar: "",
      quote: "Through me you pass into the city of woe..."
    },
    stats: {
      severity: 2,
      regret: 8,
      defiance: 1
    },
    alignment: 30
  },
  {
    id: 2,
    name: "Lust",
    description: "Where the lustful are blown about by violent winds, representing their lack of self-control.",
    featuredSoul: {
      name: "Francesca da Rimini",
      avatar: "",
      quote: "Love, which quickly arrests the gentle heart..."
    },
    stats: {
      severity: 4,
      regret: 6,
      defiance: 3
    },
    alignment: 60
  },
  // Add more circles as needed
];

export default function Home() {
  const [selectedCircle, setSelectedCircle] = useState(1);

  const selectedCircleData = circlesData.find(circle => circle.id === selectedCircle) || circlesData[0];
  const theme = circleThemes[selectedCircle as keyof typeof circleThemes];

  return (
    <main className={`min-h-screen transition-colors duration-700 ${theme.bg}`}>
      <div className="container mx-auto px-4 py-4 h-screen flex flex-col">
        <h1 className={`text-3xl font-bold text-center mb-4 ${theme.text}`}>Dante's Inferno</h1>
        
        <div className="flex flex-1 gap-4 min-h-0">
          {/* Left Column - Circle Picker */}
          <div className="w-48">
            <CirclePicker
              selectedCircle={selectedCircle}
              onCircleSelect={setSelectedCircle}
              theme={theme}
            />
          </div>

          {/* Middle Column - Main Image */}
          <div className={`flex-1 bg-gradient-to-b ${theme.accent} rounded-lg shadow-lg p-4 transition-colors duration-700`}>
            <div className="relative w-full h-full rounded-lg overflow-hidden">
              <Image
                src="/levels.png"
                alt="Dante's Inferno - The Nine Circles of Hell"
                fill
                style={{ objectFit: 'contain' }}
                priority
              />
            </div>
          </div>

          {/* Right Column - Circle Details */}
          <div className="w-96">
            <CircleDetails 
              circle={selectedCircleData}
              theme={theme}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
