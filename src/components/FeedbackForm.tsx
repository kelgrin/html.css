import { useState } from 'react'

export default function FeedbackForm() {
  const [isExpanded, setIsExpanded] = useState(false)

  const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSfVFrwkOJuBadNLX-8Bq3dCfHHcRLWCv7CGtJlWyMFCZhRC-A/viewform?embedded=true"

  return (
    <>
      {/* Плавающая кнопка слева */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="fixed bottom-6 left-6 z-[200] bg-gradient-to-r from-green-600 to-teal-600 text-white px-5 py-3 rounded-full shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300 flex items-center gap-2 font-medium"
      >
        <span className="text-xl">✉️</span>
        <span>{isExpanded ? 'Свернуть' : 'Обратная связь'}</span>
      </button>

      {/* Плавающая панель формы */}
      {isExpanded && (
        <div className="fixed bottom-20 left-6 z-[190] w-[400px] h-[500px] bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden animate-fade-in">
          {/* Заголовок */}
          <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-xl">✉️</span>
              <h3 className="text-base font-bold">Обратная связь</h3>
            </div>
            <button
              onClick={() => setIsExpanded(false)}
              className="text-white hover:bg-white/20 rounded-full p-1.5 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Google Form iframe */}
          <iframe
            src={GOOGLE_FORM_URL}
            className="w-full h-[calc(100%-52px)] border-0"
            title="Google Form"
          >
            Загрузка…
          </iframe>
        </div>
      )}
    </>
  )
}
