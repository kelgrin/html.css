import { useState } from 'react'
import HTMLGuide from './HTMLGuide'
import CSSGuide from './CSSGuide'
import ReactGuide from './ReactGuide'
import GuidePage from './GuidePage'
import Playground from './components/Playground'
import FeedbackForm from './components/FeedbackForm'

type PageType = 'html' | 'css' | 'react' | 'guide'

export default function App() {
  const [activePage, setActivePage] = useState<PageType>('html')

  return (
    <div>
      {/* Global Navigation */}
      <div className="fixed top-4 right-4 z-[100] flex gap-1 bg-white/90 backdrop-blur-md rounded-full shadow-lg border border-gray-200 p-1">
        <button
          onClick={() => setActivePage('html')}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer ${
            activePage === 'html'
              ? 'bg-blue-600 text-white'
              : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          📄 HTML
        </button>
        <button
          onClick={() => setActivePage('css')}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer ${
            activePage === 'css'
              ? 'bg-purple-600 text-white'
              : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          🎨 CSS
        </button>
        <button
          onClick={() => setActivePage('react')}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer ${
            activePage === 'react'
              ? 'bg-sky-600 text-white'
              : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          ⚛️ React
        </button>
        <button
          onClick={() => setActivePage('guide')}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer ${
            activePage === 'guide'
              ? 'bg-indigo-600 text-white'
              : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          🚀 Деплой
        </button>
      </div>

      {/* Render active page */}
      {activePage === 'html' && <HTMLGuide />}
      {activePage === 'css' && <CSSGuide />}
      {activePage === 'react' && <ReactGuide />}
      {activePage === 'guide' && <GuidePage />}

      {/* Floating Playground (only for HTML and CSS) */}
      {(activePage === 'html' || activePage === 'css') && (
        <Playground mode={activePage} />
      )}

      {/* Feedback Form */}
      <FeedbackForm />
    </div>
  )
}
