import React, { useState } from 'react'
import { Puzzle, Target, BookOpen } from 'lucide-react'

const wordGames = [
  {
    title: 'Word Scramble',
    description: 'Unscramble the letters to form a correct word',
    difficulty: 'Easy',
    icon: <Puzzle className="w-12 h-12 text-blue-600" />,
    gameState: null
  },
  {
    title: 'Sentence Builder',
    description: 'Construct grammatically correct sentences',
    difficulty: 'Medium',
    icon: <BookOpen className="w-12 h-12 text-green-600" />,
    gameState: null
  },
  {
    title: 'Synonym Challenge',
    description: 'Find the closest synonym for a given word',
    difficulty: 'Hard',
    icon: <Target className="w-12 h-12 text-red-600" />,
    gameState: null
  }
]

const GameSection: React.FC = () => {
  const [selectedGame, setSelectedGame] = useState<string | null>(null)

  const startGame = (gameTitle: string) => {
    setSelectedGame(gameTitle)
    // Future: Implement game logic for each game type
  }

  return (
    <div className="bg-white rounded-xl p-6 shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-blue-800">Language Games</h2>
      {selectedGame ? (
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-4">{selectedGame}</h3>
          <p className="text-gray-600 mb-6">Game in development</p>
          <button 
            onClick={() => setSelectedGame(null)}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Back to Games
          </button>
        </div>
      ) : (
        wordGames.map((game) => (
          <div 
            key={game.title}
            className="mb-4 p-4 border rounded-lg hover:bg-red-50 cursor-pointer flex items-center"
            onClick={() => startGame(game.title)}
          >
            <div className="mr-4">{game.icon}</div>
            <div>
              <h3 className="text-xl font-semibold">{game.title}</h3>
              <p className="text-gray-600">{game.description}</p>
              <span 
                className={`
                  text-sm px-2 py-1 rounded 
                  ${game.difficulty === 'Easy' ? 'bg-green-200 text-green-800' : 
                    game.difficulty === 'Medium' ? 'bg-yellow-200 text-yellow-800' : 
                    'bg-red-200 text-red-800'}
                `}
              >
                {game.difficulty}
              </span>
            </div>
          </div>
        ))
      )}
    </div>
  )
}

export default GameSection
