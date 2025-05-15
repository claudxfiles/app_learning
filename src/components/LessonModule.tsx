import React, { useState } from 'react'
import { CheckCircle2, Lock } from 'lucide-react'

const lessons = [
  {
    title: 'Basic Greetings',
    level: 'Beginner',
    description: 'Learn how to introduce yourself and greet people in English',
    progress: 75,
    unlocked: true,
    subtopics: [
      'Self-introduction',
      'Greeting phrases',
      'Basic conversation starters'
    ]
  },
  {
    title: 'Daily Conversations',
    level: 'Intermediate',
    description: 'Practice common phrases used in everyday situations',
    progress: 40,
    unlocked: true,
    subtopics: [
      'Asking for directions',
      'Ordering food',
      'Small talk techniques'
    ]
  },
  {
    title: 'Business English',
    level: 'Advanced',
    description: 'Professional communication and workplace vocabulary',
    progress: 10,
    unlocked: false,
    subtopics: [
      'Professional emails',
      'Presentation skills',
      'Negotiation language'
    ]
  }
]

const LessonModule: React.FC = () => {
  const [selectedLesson, setSelectedLesson] = useState<string | null>(null)

  return (
    <div className="bg-white rounded-xl p-6 shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-blue-800">English Lessons</h2>
      {lessons.map((lesson) => (
        <div 
          key={lesson.title}
          className={`
            mb-4 p-4 border rounded-lg 
            ${lesson.unlocked 
              ? 'hover:bg-blue-50 cursor-pointer' 
              : 'opacity-50 cursor-not-allowed'}
          `}
          onClick={() => lesson.unlocked && setSelectedLesson(lesson.title)}
        >
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-xl font-semibold">{lesson.title}</h3>
              <p className="text-gray-600">{lesson.description}</p>
              <div className="mt-2 flex items-center space-x-2">
                <span className="text-sm text-blue-600">{lesson.level}</span>
                {lesson.unlocked ? (
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div 
                      className="bg-blue-600 h-2.5 rounded-full" 
                      style={{width: `${lesson.progress}%`}}
                    ></div>
                  </div>
                ) : (
                  <Lock className="text-gray-400 w-5 h-5" />
                )}
              </div>
              {selectedLesson === lesson.title && (
                <div className="mt-4">
                  <h4 className="font-semibold text-gray-700">Subtopics:</h4>
                  <ul className="list-disc list-inside text-gray-600">
                    {lesson.subtopics.map((subtopic) => (
                      <li key={subtopic} className="flex items-center">
                        <CheckCircle2 className="w-4 h-4 mr-2 text-green-500" />
                        {subtopic}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default LessonModule
