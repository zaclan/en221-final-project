'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import CirclePicker from '@/components/CirclePicker';
import CircleDetails from '@/components/CircleDetails';

const circleThemes = {
  1: { // Limbo
    bg: "bg-[#2f3225]",
    text: "text-[#e2dfd0]",
    accent: "from-[#2f3225] to-[#454937]",
    overlay: "bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJmb2ciIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSI1MCIgZmlsbD0iI2ZmZmZmZjEwIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2ZvZykiLz48L3N2Zz4=')]"
  },
  2: { // Lust
    bg: "bg-[#8b0000]",
    text: "text-[#ffffff]",
    accent: "from-[#8b0000] to-[#a52a2a]",
    overlay: "bg-gradient-radial from-transparent via-[#00000030] to-[#00000050]"
  },
  3: { // Gluttony
    bg: "bg-[#2c1810]",
    text: "text-[#f4e4bc]",
    accent: "from-[#2c1810] to-[#3e5f5c]",
    overlay: "bg-[linear-gradient(0deg,rgba(0,0,0,.2)1px,transparent_1px)] bg-[length:100%_4px]"
  },
  4: { // Greed
    bg: "bg-[#2a1f1f]",
    text: "text-[#ffd700]",
    accent: "from-[#2a1f1f] to-[#b08d57]",
    overlay: "bg-[radial-gradient(circle,rgba(255,215,0,.15)1px,transparent_1px)] bg-[size:12px_12px]"
  },
  5: { // Anger/Wrath
    bg: "bg-[#8b0000]",
    text: "text-[#ffffff]",
    accent: "from-[#8b0000] to-[#ff4500]",
    overlay: "animate-pulse bg-gradient-to-t from-[#ff450030] to-transparent"
  },
  6: { // Heresy
    bg: "bg-[#611212]",
    text: "text-[#ffffff]",
    accent: "from-[#611212] to-[#1c1c1c]",
    overlay: "bg-[radial-gradient(circle,rgba(170,170,170,.05)1px,transparent_1px)] bg-[size:8px_8px]"
  },
  7: { // Violence
    bg: "bg-[#7b1e1e]",
    text: "text-[#ffffff]",
    accent: "from-[#7b1e1e] to-[#2c0000]",
    overlay: "bg-[linear-gradient(-45deg,rgba(255,99,71,.1)1px,transparent_1px)] bg-[size:20px_20px]"
  },
  8: { // Fraud
    bg: "bg-[#2d0031]",
    text: "text-[#ffffff]",
    accent: "from-[#2d0031] to-[#000000]",
    overlay: "bg-[radial-gradient(circle,rgba(204,255,0,.15)2px,transparent_2px)] bg-[size:16px_16px] animate-pulse"
  },
  9: { // Treachery
    bg: "bg-[#0f1c2e]",
    text: "text-[#ffffff]",
    accent: "from-[#0f1c2e] to-[#1f4e69]",
    overlay: "bg-[radial-gradient(circle,rgba(224,247,250,.1)1px,transparent_1px)] bg-[size:10px_10px]"
  }
};

// Dummy data for the circles
const circlesData = [
  {
    id: 1,
    name: "Limbo",
    description: "Great thinkers, poets, and noble people who were never baptized live in this sorrowful place. They are not punished, but forever separated from divine light.",
    sin: "Unbaptized Souls / Virtuous Pagans",
    characterStory: "Virgil was a Roman poet best known for The Aeneid. Though virtuous and wise, he lived before Christ and remains in Limbo — honored, but forever denied salvation.",
    featuredSoul: {
      name: "Virgil",
      avatar: "👨‍🏫",
      quote: "They have not sinned; but their worth alone is not enough."
    },
    stats: {
      severity: 1,
      regret: 3,
      defiance: 2
    },
    alignment: 30,
    emojis: {
      severity: "😈",
      regret: "😢😢😢",
      defiance: "🔥🔥"
    }
  },
  {
    id: 2,
    name: "Lust",
    description: "Swept forever in an endless storm, the lustful are punished by being tossed around without rest — just as they were carried away by passion in life.",
    sin: "Carnal Desire",
    characterStory: "A 13th-century Italian noblewoman, Francesca fell in love with her husband's brother, Paolo. When their affair was discovered, they were both murdered — now swept in Hell's eternal storm.",
    featuredSoul: {
      name: "Francesca da Rimini",
      avatar: "💝",
      quote: "Love led us to one death."
    },
    stats: {
      severity: 2,
      regret: 4,
      defiance: 1
    },
    alignment: 40,
    emojis: {
      severity: "😈😈",
      regret: "😢😢😢😢",
      defiance: "🔥"
    }
  },
  {
    id: 3,
    name: "Gluttony",
    description: "The gluttons lie in freezing muck, battered by eternal cold rain and filth — their greed for comfort turned into endless discomfort.",
    sin: "Overindulgence in food, drink, and pleasure",
    characterStory: "Known only by his nickname, Ciacco was a Florentine man infamous for his gluttonous appetites. Now he lies in a swampy, freezing rain — a fitting end for a life of overindulgence.",
    featuredSoul: {
      name: "Ciacco the Florentine",
      avatar: "🍖",
      quote: "In this life, I was gluttonous... see what that feasting has become."
    },
    stats: {
      severity: 3,
      regret: 2,
      defiance: 1
    },
    alignment: 50,
    emojis: {
      severity: "😈😈😈",
      regret: "😢😢",
      defiance: "🔥"
    }
  },
  {
    id: 4,
    name: "Greed",
    description: "The greedy crash huge boulders into one another, shouting, &ldquo;Why hoard?&rdquo; and &ldquo;Why waste?&rdquo; — a futile battle over riches long gone.",
    sin: "Hoarding or squandering wealth",
    characterStory: "Many corrupt popes and clergymen fill this circle, punished for hoarding wealth or wasting it through selfish excess. Now they crash stones against each other for eternity.",
    featuredSoul: {
      name: "Unnamed clergymen and popes",
      avatar: "💰",
      quote: "They had no moderation in life; now they clash eternally."
    },
    stats: {
      severity: 4,
      regret: 1,
      defiance: 3
    },
    alignment: 60,
    emojis: {
      severity: "😈😈😈😈",
      regret: "😢",
      defiance: "🔥🔥🔥"
    }
  },
  {
    id: 5,
    name: "Wrath",
    description: "The wrathful thrash in the River Styx, tearing at each other in fury. The sullen drown beneath it, stewing in silent rage.",
    sin: "Rage and wrath",
    characterStory: "A hot-tempered Florentine nobleman, Filippo was known for his rage and cruelty. In Hell, he thrashes in the River Styx, still lashing out in eternal fury.",
    featuredSoul: {
      name: "Filippo Argenti",
      avatar: "😠",
      quote: "In their hearts, anger swelled — now it consumes them."
    },
    stats: {
      severity: 3,
      regret: 2,
      defiance: 4
    },
    alignment: 70,
    emojis: {
      severity: "😈😈😈",
      regret: "😢😢",
      defiance: "🔥🔥🔥🔥"
    }
  },
  {
    id: 6,
    name: "Heresy",
    description: "Heretics are sealed in burning tombs, trapped in their false beliefs, denied the peace they denied others.",
    sin: "Denial of the soul's immortality",
    characterStory: "A powerful Florentine leader and Epicurean, Farinata denied the soul's immortality. He now lies in a burning tomb, trapped in the very doctrine he preached.",
    featuredSoul: {
      name: "Farinata degli Uberti",
      avatar: "⚱️",
      quote: "Here lie the ones who claimed the soul dies with the body."
    },
    stats: {
      severity: 3,
      regret: 1,
      defiance: 2
    },
    alignment: 75,
    emojis: {
      severity: "😈😈😈",
      regret: "😢",
      defiance: "🔥🔥"
    }
  },
  {
    id: 7,
    name: "Violence",
    description: "This circle is split into three rings: violence against others (boiling blood), self (turned into trees), and God (burning sands). Pier, a suicide, became a gnarled tree tormented by harpies.",
    sin: "Harm to others, self, or God",
    characterStory: "Once a trusted advisor to Emperor Frederick II, Pier took his own life after falling from favor. In Hell, suicides become trees — their blood the only way they can speak.",
    featuredSoul: {
      name: "Pier della Vigna",
      avatar: "🌳",
      quote: "My words are blood — I speak only when torn."
    },
    stats: {
      severity: 4,
      regret: 3,
      defiance: 2
    },
    alignment: 80,
    emojis: {
      severity: "😈😈😈😈",
      regret: "😢😢😢",
      defiance: "🔥🔥"
    }
  },
  {
    id: 8,
    name: "Fraud",
    description: "This circle is filled with deceivers of all kinds, punished in a twisted landscape of burning pits, snakes, and illusions. Pope Nicholas III, among the corrupt clergy, is buried upside down with his feet aflame.",
    sin: "Deceit and corruption, especially by leaders of trust",
    characterStory: "Pope Nicholas III used his position to enrich his family. Now he hangs upside down in a pit, his feet aflame — a mockery of baptism, and a warning to corrupt leaders.",
    featuredSoul: {
      name: "Pope Nicholas III",
      avatar: "🕳",
      quote: "Are you already here, Boniface? The writing lied, then, by some years."
    },
    stats: {
      severity: 5,
      regret: 1,
      defiance: 5
    },
    alignment: 90,
    emojis: {
      severity: "😈😈😈😈😈",
      regret: "😢",
      defiance: "🔥🔥🔥🔥🔥"
    }
  },
  {
    id: 9,
    name: "Treachery",
    description: "The final circle is a frozen lake where traitors are trapped in ice. Judas, the greatest betrayer, is chewed eternally in one of Lucifer's mouths at the very center of Hell.",
    sin: "Betrayal of benefactors (final level: Judecca)",
    characterStory: "Judas was one of Jesus's disciples, remembered for betraying him for thirty silver coins. He now suffers the worst fate: chewed eternally in Lucifer's mouth at the heart of Hell.",
    featuredSoul: {
      name: "Judas Iscariot",
      avatar: "❄️",
      quote: "The worst of sinners lies in the jaws of Dis — the man who kissed and betrayed."
    },
    stats: {
      severity: 5,
      regret: 1,
      defiance: 5
    },
    alignment: 100,
    emojis: {
      severity: "😈😈😈😈😈",
      regret: "😢",
      defiance: "🔥🔥🔥🔥🔥"
    }
  }
];

const BackgroundPattern: React.FC<{ emoji: string }> = ({ emoji }) => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      <div className="grid grid-cols-6 gap-12 p-8 animate-float">
        {[...Array(36)].map((_, i) => (
          <div key={i} className="flex justify-center">
            <span className="text-6xl opacity-[0.25] transform rotate-12 transition-all duration-700 hover:opacity-[0.12]">
              {emoji}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function Home() {
  const [selectedCircle, setSelectedCircle] = useState(1);

  const selectedCircleData = circlesData.find(circle => circle.id === selectedCircle) || circlesData[0];
  const theme = circleThemes[selectedCircle as keyof typeof circleThemes];

  // Map circle IDs to their background emojis
  const backgroundEmojis: { [key: number]: string } = {
    1: "👻",  // Limbo
    2: "💘",  // Lust
    3: "🍖",  // Gluttony
    4: "🤑",  // Greed
    5: "😡",  // Wrath
    6: "🔥",  // Heresy
    7: "🗡️",  // Violence
    8: "🎭",  // Fraud
    9: "🥶",  // Treachery
  };

  return (
    <main className={`min-h-screen transition-all duration-700 ${theme.bg} font-[Cinzel,serif]`}>
      {/* Theme Overlay */}
      <div className={`absolute inset-0 pointer-events-none ${theme.overlay} transition-all duration-700`} />
      
      {/* Background Emoji Pattern */}
      <BackgroundPattern emoji={backgroundEmojis[selectedCircle]} />
      
      <div className="container mx-auto px-4 py-4 h-screen flex flex-col relative">
        <h1 className={`text-3xl font-bold text-center mb-4 ${theme.text} drop-shadow-lg`}>
          Dante's Inferno
        </h1>
        
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
          <div className={`flex-1 bg-gradient-to-b ${theme.accent} rounded-lg shadow-lg p-4 transition-all duration-700 backdrop-blur-sm`}>
            <div className="relative w-full h-full rounded-lg overflow-hidden">
              <Image
                src="/levels.png"
                alt="Dante's Inferno - The Nine Circles of Hell"
                fill
                style={{ objectFit: 'contain' }}
                priority
                className="mix-blend-luminosity"
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
