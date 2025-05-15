import React, { useState, useEffect } from 'react'
import { RefreshCw, Star } from 'lucide-react'

const vocabularyWords = [
  { 
    word: 'Serendipity', 
    meaning: 'A fortunate discovery', 
    example: 'Finding a rare book at a garage sale was a moment of serendipity.',
    difficulty: 3
  },
  { 
    word: 'Ephemeral', 
    meaning: 'Lasting for a very short time', 
    example: 'Social media trends are often ephemeral, quickly fading away.',
    difficulty: 4
  },
  { 
    word: 'Eloquent', 
    meaning: 'Fluent or persuasive in speaking or writing', 
    example: 'Her eloquent speech moved the entire audience to tears.',
    difficulty: 3
  }
]

const VocabularyTrainer: React.FC = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [showMeaning, setShowMeaning] = useState(false)
  const [showExample, setShowExample] = useState(false)

  const nextWord = () => {
    setCurrentWordIndex((prev) => 
      (prev + 1) % vocabularyWords.length
    )
    setShowMeaning(false)
    setShowExample(false)
  }

  const currentWord = vocabularyWords[currentWordIndex]

  return (
    <div className="bg-white rounded-xl p-6 shadow-md text-center">
      <h2 className="text-2xl font-bold mb-6 text-blue-800">Vocabulary Trainer</h2>
      <div className="bg-blue-100 p-8 rounded-xl relative">
        <div className="absolute top-4 right-4 flex items-center space-x-2">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              className={`w-5 h-5 ${i < currentWord.difficulty ? 'text-yellow-500' : 'text-gray-300'}`} 
            />
          ))}
        </div>
        <h3 className="text-3xl font-bold mb-4">{currentWord.word}</h3>
        {!showMeaning ? (
          <button 
            onClick={() => setShowMeaning(true)}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Show Meaning
          </button>
        ) : !showExample ? (
          <div>
            <p className="text-xl text-gray-700 mb-4">{currentWord.meaning}</p>
            <button 
              onClick={() => setShowExample(true)}
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              Show Example
            </button>
          </div>
        ) : (
          <div>
            <p className="text-xl text-gray-700 mb-4">{currentWord.meaning}</p>
            <p className="italic text-gray-600">"{currentWord.example}"</p>
          </div>
        )}
      </div>
      <div className="mt-6 flex justify-center space-x-4">
        <button 
          onClick={nextWord}
          className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 flex items-center"
        >
          <RefreshCw className="mr-2 w-4 h-4" />
          Next Word
        </button>
      </div>
    </div>
  )
}

export default VocabularyTrainer
