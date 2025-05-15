import React, { useState } from 'react'
import { Mic, Volume2, CheckCircle } from 'lucide-react'

const pronunciationPhrases = [
  {
    phrase: 'Hello, how are you?',
    difficulty: 'Easy',
    audioUrl: '', // Placeholder for potential audio integration
    tips: [
      'Focus on rising intonation at the end',
      'Pronounce "how" with a clear "h" sound'
    ]
  },
  {
    phrase: 'Where is the nearest coffee shop?',
    difficulty: 'Medium',
    audioUrl: '',
    tips: [
      'Stress the word "nearest"',
      'Smooth transition between words'
    ]
  },
  {
    phrase: 'I would like to book a table for dinner.',
    difficulty: 'Hard',
    audioUrl: '',
    tips: [
      'Soft "would" pronunciation',
      'Clear articulation of "book"'
    ]
  }
]

const PronunciationExercise: React.FC = () => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0)
  const [showTips, setShowTips] = useState(false)

  const nextPhrase = () => {
    setCurrentPhraseIndex((prev) => 
      (prev + 1) % pronunciationPhrases.length
    )
    setShowTips(false)
  }

  const currentPhrase = pronunciationPhrases[currentPhraseIndex]

  return (
    <div className="bg-white rounded-xl p-6 shadow-md text-center">
      <h2 className="text-2xl font-bold mb-6 text-blue-800">Pronunciation Practice</h2>
      <div className="bg-purple-100 p-8 rounded-xl">
        <div className="flex justify-between items-center mb-4">
          <span className={`
            text-sm px-2 py-1 rounded 
            ${currentPhrase.difficulty === 'Easy' ? 'bg-green-200 text-green-800' : 
              currentPhrase.difficulty === 'Medium' ? 'bg-yellow-200 text-yellow-800' : 
              'bg-red-200 text-red-800'}
          `}>
            {currentPhrase.difficulty}
          </span>
        </div>
        <h3 className="text-3xl font-bold mb-4">{currentPhrase.phrase}</h3>
        <div className="flex justify-center items-center space-x-4">
          <button className="bg-purple-500 text-white p-3 rounded-full hover:bg-purple-600">
            <Mic className="w-8 h-8" />
          </button>
          <button className="bg-blue-500 text-white p-3 rounded-full hover:bg-blue-600">
            <Volume2 className="w-8 h-8" />
          </button>
          <button 
            onClick={() => setShowTips(!showTips)}
            className="bg-green-500 text-white p-3 rounded-full hover:bg-green-600"
          >
            {showTips ? 'Hide' : 'Show'} Tips
          </button>
        </div>
        {showTips && (
          <div className="mt-4 bg-white p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Pronunciation Tips:</h4>
            <ul className="text-left list-inside">
              {currentPhrase.tips.map((tip, index) => (
                <li key={index} className="flex items-center mb-2">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                  {tip}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="mt-6 flex justify-center space-x-4">
        <button 
          onClick={nextPhrase}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Next Phrase
        </button>
      </div>
    </div>
  )
}

export default PronunciationExercise
