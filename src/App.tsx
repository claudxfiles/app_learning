import React, { useState } from 'react'
import { Book, Play, Target, Headphones } from 'lucide-react'
import LessonModule from './components/LessonModule'
import VocabularyTrainer from './components/VocabularyTrainer'
import PronunciationExercise from './components/PronunciationExercise'
import GameSection from './components/GameSection'

const App: React.FC = () => {
  const [activeModule, setActiveModule] = useState<string | null>(null)

  const modules = [
    {
      name: 'Lessons',
      icon: <Book className="w-12 h-12 text-blue-600" />,
      component: <LessonModule />
    },
    {
      name: 'Vocabulary',
      icon: <Target className="w-12 h-12 text-green-600" />,
      component: <VocabularyTrainer />
    },
    {
      name: 'Pronunciation',
      icon: <Headphones className="w-12 h-12 text-purple-600" />,
      component: <PronunciationExercise />
    },
    {
      name: 'Games',
      icon: <Play className="w-12 h-12 text-red-600" />,
      component: <GameSection />
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex flex-col">
      <header className="bg-white shadow-md p-6">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold text-blue-800">EnglishMaster</h1>
          <nav>
            <ul className="flex space-x-4">
              <li>Home</li>
              <li>Progress</li>
              <li>Profile</li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        {activeModule ? (
          <div>
            <button 
              onClick={() => setActiveModule(null)} 
              className="mb-4 text-blue-600 hover:underline"
            >
              ← Back to Modules
            </button>
            {modules.find(m => m.name === activeModule)?.component}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {modules.map((module) => (
              <div 
                key={module.name}
                onClick={() => setActiveModule(module.name)}
                className="bg-white rounded-xl shadow-lg p-6 text-center cursor-pointer hover:scale-105 transition-transform"
              >
                <div className="flex justify-center mb-4">
                  {module.icon}
                </div>
                <h2 className="text-xl font-semibold">{module.name}</h2>
              </div>
            ))}
          </div>
        )}
      </main>

      <footer className="bg-blue-900 text-white py-6">
        <div className="container mx-auto text-center">
          <p>© 2024 EnglishMaster. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
