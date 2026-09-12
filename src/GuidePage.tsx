import { useState } from 'react'

export default function GuidePage() {
  const [activeTab, setActiveTab] = useState<'supabase' | 'vercel'>('supabase')

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 text-8xl">🗄️</div>
          <div className="absolute bottom-10 right-10 text-8xl">🚀</div>
          <div className="absolute top-20 right-40 text-6xl">⚡</div>
          <div className="absolute bottom-20 left-40 text-6xl">🌐</div>
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Деплой проекта</h1>
          <p className="text-xl text-indigo-100 max-w-2xl mx-auto leading-relaxed">
            Подключение базы данных Supabase и хостинг на Vercel
          </p>
        </div>
      </header>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-3 flex gap-2 justify-center">
          <button
            onClick={() => setActiveTab('supabase')}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
              activeTab === 'supabase'
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            🗄️ Supabase
          </button>
          <button
            onClick={() => setActiveTab('vercel')}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
              activeTab === 'vercel'
                ? 'bg-purple-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            🚀 Vercel
          </button>
        </div>
      </nav>

      {/* Animated Sprites */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-20 left-10 w-16 h-16 animate-float-1">
          <div className="w-full h-full bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full shadow-lg"></div>
        </div>
        <div className="absolute top-40 right-20 w-12 h-12 animate-float-2">
          <div className="w-full h-full bg-gradient-to-br from-green-400 to-teal-500 rounded-full shadow-lg"></div>
        </div>
        <div className="absolute bottom-32 left-1/4 w-14 h-14 animate-float-3">
          <div className="w-full h-full bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full shadow-lg"></div>
        </div>
        <div className="absolute bottom-20 right-1/3 w-10 h-10 animate-float-4">
          <div className="w-full h-full bg-gradient-to-br from-pink-400 to-rose-500 rounded-full shadow-lg"></div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-12 relative z-10">
        {activeTab === 'supabase' ? <SupabaseSection /> : <VercelSection />}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 px-4 text-center relative z-10">
        <p className="text-sm">Руководство по деплою • Создано для обучения</p>
        <p className="text-xs mt-2 text-gray-500">2024</p>
      </footer>
    </div>
  )
}

function SupabaseSection() {
  return (
    <div className="space-y-8">
      <div className="bg-white rounded-2xl shadow-md p-8 border border-gray-100">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">🗄️ Что такое Supabase?</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          <strong>Supabase</strong> — это open-source альтернатива Firebase, построенная на PostgreSQL.
          Предоставляет базу данных, аутентификацию, хранилище файлов и real-time подписки.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div className="p-4 bg-indigo-50 rounded-lg border border-indigo-200">
            <div className="text-2xl mb-2">🗃️</div>
            <h3 className="font-bold text-gray-800 mb-1">PostgreSQL</h3>
            <p className="text-sm text-gray-600">Мощная реляционная база данных</p>
          </div>
          <div className="p-4 bg-indigo-50 rounded-lg border border-indigo-200">
            <div className="text-2xl mb-2">🔐</div>
            <h3 className="font-bold text-gray-800 mb-1">Auth</h3>
            <p className="text-sm text-gray-600">Аутентификация из коробки</p>
          </div>
          <div className="p-4 bg-indigo-50 rounded-lg border border-indigo-200">
            <div className="text-2xl mb-2">⚡</div>
            <h3 className="font-bold text-gray-800 mb-1">Realtime</h3>
            <p className="text-sm text-gray-600">Обновления в реальном времени</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-md p-8 border border-gray-100">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">📦 Установка и настройка</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-3">1. Установка клиента</h3>
            <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto">
              <code>{`npm install @supabase/supabase-js`}</code>
            </pre>
          </div>

          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-3">2. Создание файла конфигурации</h3>
            <p className="text-gray-600 mb-3">Создайте файл <code className="bg-gray-100 px-2 py-0.5 rounded">src/lib/supabase.js</code>:</p>
            <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
              <code>{`import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)`}</code>
            </pre>
          </div>

          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-3">3. Переменные окружения</h3>
            <p className="text-gray-600 mb-3">Создайте файл <code className="bg-gray-100 px-2 py-0.5 rounded">.env</code> в корне проекта:</p>
            <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
              <code>{`VITE_SUPABASE_URL=your_project_url
VITE_SUPABASE_ANON_KEY=your_anon_key`}</code>
            </pre>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-md p-8 border border-gray-100">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">💡 Примеры использования</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-3">Получение данных</h3>
            <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
              <code>{`import { supabase } from './lib/supabase'

// Получить все записи из таблицы 'posts'
const { data, error } = await supabase
  .from('posts')
  .select('*')

// Получить с фильтром
const { data: filteredData } = await supabase
  .from('posts')
  .select('*')
  .eq('author', 'John')
  .order('created_at', { ascending: false })`}</code>
            </pre>
          </div>

          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-3">Вставка данных</h3>
            <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
              <code>{`// Добавить новую запись
const { data, error } = await supabase
  .from('posts')
  .insert([
    { title: 'Мой пост', content: 'Текст поста', author: 'John' }
  ])`}</code>
            </pre>
          </div>

          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-3">Аутентификация</h3>
            <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
              <code>{`// Регистрация
const { user, error } = await supabase.auth.signUp({
  email: 'user@example.com',
  password: 'password123'
})

// Вход
const { user, error } = await supabase.auth.signIn({
  email: 'user@example.com',
  password: 'password123'
})

// Выход
await supabase.auth.signOut()

// Получить текущего пользователя
const { user } = await supabase.auth.getUser()`}</code>
            </pre>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl shadow-md p-8 border border-indigo-200">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">🎯 Полезные ссылки</h2>
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-2xl">📚</span>
            <div>
              <a href="https://supabase.com/docs" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 font-medium">
                Документация Supabase
              </a>
              <p className="text-sm text-gray-600 mt-1">Полное руководство по API и функциям</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-2xl">🎓</span>
            <div>
              <a href="https://supabase.com/docs/guides/with-react" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 font-medium">
                Supabase + React
              </a>
              <p className="text-sm text-gray-600 mt-1">Интеграция с React приложениями</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-2xl">💻</span>
            <div>
              <a href="https://app.supabase.com" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 font-medium">
                Supabase Dashboard
              </a>
              <p className="text-sm text-gray-600 mt-1">Управление проектами и базами данных</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

function VercelSection() {
  return (
    <div className="space-y-8">
      <div className="bg-white rounded-2xl shadow-md p-8 border border-gray-100">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">🚀 Что такое Vercel?</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          <strong>Vercel</strong> — это платформа для хостинга фронтенд-приложений с автоматическим CI/CD.
          Поддерживает React, Next.js, Vue, Svelte и другие фреймворки.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
            <div className="text-2xl mb-2">⚡</div>
            <h3 className="font-bold text-gray-800 mb-1">Быстрый деплой</h3>
            <p className="text-sm text-gray-600">Автоматический деплой из Git</p>
          </div>
          <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
            <div className="text-2xl mb-2">🌍</div>
            <h3 className="font-bold text-gray-800 mb-1">Global CDN</h3>
            <p className="text-sm text-gray-600">Быстрая загрузка по всему миру</p>
          </div>
          <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
            <div className="text-2xl mb-2">🔒</div>
            <h3 className="font-bold text-gray-800 mb-1">SSL</h3>
            <p className="text-sm text-gray-600">Бесплатные HTTPS сертификаты</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-md p-8 border border-gray-100">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">📦 Деплой проекта</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-3">1. Установка Vercel CLI</h3>
            <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto">
              <code>{`npm install -g vercel`}</code>
            </pre>
          </div>

          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-3">2. Деплой проекта</h3>
            <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto">
              <code>{`# В корне проекта
vercel

# Для продакшена
vercel --prod`}</code>
            </pre>
          </div>

          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-3">3. Альтернатива: через GitHub</h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-600">
              <li>Загрузите проект на GitHub</li>
              <li>Перейдите на <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 font-medium">vercel.com</a></li>
              <li>Нажмите "New Project"</li>
              <li>Выберите репозиторий</li>
              <li>Настройте переменные окружения</li>
              <li>Нажмите "Deploy"</li>
            </ol>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-md p-8 border border-gray-100">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">⚙️ Переменные окружения</h2>
        
        <div className="space-y-4">
          <p className="text-gray-600">
            Добавьте переменные окружения в Vercel Dashboard:
          </p>
          <ol className="list-decimal list-inside space-y-2 text-gray-600">
            <li>Перейдите в настройки проекта на Vercel</li>
            <li>Откройте вкладку "Environment Variables"</li>
            <li>Добавьте переменные:
              <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                <li><code className="bg-gray-100 px-2 py-0.5 rounded">VITE_SUPABASE_URL</code></li>
                <li><code className="bg-gray-100 px-2 py-0.5 rounded">VITE_SUPABASE_ANON_KEY</code></li>
              </ul>
            </li>
            <li>Передеплойте проект</li>
          </ol>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-md p-8 border border-gray-100">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">🔧 Конфигурация Vercel</h2>
        
        <p className="text-gray-600 mb-3">
          Создайте файл <code className="bg-gray-100 px-2 py-0.5 rounded">vercel.json</code> в корне проекта:
        </p>
        <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
          <code>{`{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}`}</code>
        </pre>
      </div>

      <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl shadow-md p-8 border border-purple-200">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">🎯 Полезные ссылки</h2>
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-2xl">📚</span>
            <div>
              <a href="https://vercel.com/docs" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 font-medium">
                Документация Vercel
              </a>
              <p className="text-sm text-gray-600 mt-1">Полное руководство по платформе</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-2xl">🎓</span>
            <div>
              <a href="https://vercel.com/docs/deployments/git/vercel-for-vite" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 font-medium">
                Vercel + Vite
              </a>
              <p className="text-sm text-gray-600 mt-1">Деплой Vite проектов</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-2xl">💻</span>
            <div>
              <a href="https://vercel.com/dashboard" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 font-medium">
                Vercel Dashboard
              </a>
              <p className="text-sm text-gray-600 mt-1">Управление проектами и деплоями</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}
