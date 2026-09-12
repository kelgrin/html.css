import { useState } from 'react'

type Task = {
  id: number
  title: string
  description: string
  exampleCode: string
  hint?: string
}

type PlaygroundProps = {
  mode: 'html' | 'css'
}

const htmlTasks: Task[] = [
  {
    id: 1,
    title: 'Создай заголовок',
    description: 'Создай заголовок первого уровня (h1) с текстом "Привет, мир!"',
    exampleCode: '<h1>Привет, мир!</h1>',
    hint: 'Используй тег <h1>...</h1>',
  },
  {
    id: 2,
    title: 'Добавь параграф',
    description: 'Создай параграф (p) с любым текстом',
    exampleCode: '<p>Это мой первый параграф.</p>',
    hint: 'Используй тег <p>...</p>',
  },
  {
    id: 3,
    title: 'Создай список',
    description: 'Создай маркированный список (ul) с тремя элементами (li)',
    exampleCode: '<ul>\n  <li>Первый</li>\n  <li>Второй</li>\n  <li>Третий</li>\n</ul>',
    hint: 'Используй <ul> и внутри три <li>',
  },
  {
    id: 4,
    title: 'Добавь ссылку',
    description: 'Создай ссылку (a) с текстом "Кликни"',
    exampleCode: '<a href="#">Кликни</a>',
    hint: 'Используй тег <a> с атрибутом href',
  },
  {
    id: 5,
    title: 'Создай кнопку',
    description: 'Создай кнопку (button) с текстом "Нажми меня"',
    exampleCode: '<button>Нажми меня</button>',
    hint: 'Используй <button>...</button>',
  },
  {
    id: 6,
    title: 'Добавь изображение',
    description: 'Добавь изображение (img) с src="https://example.com/image.jpg" и alt="Пример"',
    exampleCode: '<img src="https://example.com/image.jpg" alt="Пример">',
    hint: 'Используй <img> с атрибутами src и alt',
  },
  {
    id: 7,
    title: 'Создай форму',
    description: 'Создай форму (form) с полем ввода (input type="text") и кнопкой отправки',
    exampleCode: '<form>\n  <input type="text">\n  <button>Отправить</button>\n</form>',
    hint: 'Используй <form>, <input type="text"> и <button>',
  },
  {
    id: 8,
    title: 'Добавь таблицу',
    description: 'Создай таблицу (table) с одной строкой и двумя ячейками',
    exampleCode: '<table>\n  <tr>\n    <td>Ячейка 1</td>\n    <td>Ячейка 2</td>\n  </tr>\n</table>',
    hint: 'Используй <table>, <tr> для строки и <td> для ячеек',
  },
]

const cssTasks: Task[] = [
  {
    id: 1,
    title: 'Красный текст',
    description: 'Сделай текст параграфа красным',
    exampleCode: `<style>
  p { color: red; }
</style>
<p>Красный текст</p>`,
    hint: 'Используй селектор p и свойство color: red',
  },
  {
    id: 2,
    title: 'Фон блока',
    description: 'Добавь жёлтый фон блоку div с классом "box" и padding 20px',
    exampleCode: `<style>
  .box { background-color: yellow; padding: 20px; }
</style>
<div class="box">Блок с фоном</div>`,
    hint: 'Используй селектор .box (класс), свойства background-color: yellow и padding: 20px',
  },
  {
    id: 3,
    title: 'Flexbox',
    description: 'Создай flexbox контейнер с классом "container" и тремя элементами с классом "item"',
    exampleCode: `<style>
  .container { display: flex; gap: 10px; }
  .item { background: #4CAF50; color: white; padding: 10px; }
</style>
<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>`,
    hint: 'Используй классы .container и .item. Для контейнера: display: flex и gap: 10px. Для элементов: background: #4CAF50, color: white, padding: 10px',
  },
  {
    id: 4,
    title: 'Скруглённые углы',
    description: 'Сделай у блока с классом "box" скруглённые углы 10px, фон #2196F3, белый текст и padding 20px',
    exampleCode: `<style>
  .box { background: #2196F3; color: white; padding: 20px; border-radius: 10px; }
</style>
<div class="box">Скруглённый блок</div>`,
    hint: 'Используй класс .box со свойствами: background: #2196F3, color: white, padding: 20px, border-radius: 10px',
  },
  {
    id: 5,
    title: 'Тень',
    description: 'Добавь тень блоку с классом "card": белый фон, padding 20px и box-shadow 0 4px 6px rgba(0,0,0,0.1)',
    exampleCode: `<style>
  .card { background: white; padding: 20px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
</style>
<div class="card">Карточка с тенью</div>`,
    hint: 'Используй класс .card со свойствами: background: white, padding: 20px, box-shadow: 0 4px 6px rgba(0,0,0,0.1)',
  },
  {
    id: 6,
    title: 'Центрирование',
    description: 'Центрируй текст в блоке с классом "centered": height 100px, background #FF9800, белый текст',
    exampleCode: `<style>
  .centered { height: 100px; background: #FF9800; color: white; display: flex; align-items: center; justify-content: center; }
</style>
<div class="centered">Центр</div>`,
    hint: 'Используй класс .centered со свойствами: height: 100px, background: #FF9800, color: white, display: flex, align-items: center, justify-content: center',
  },
  {
    id: 7,
    title: 'Hover эффект',
    description: 'Создай кнопку с классом "btn": синий фон (#2196F3), белый текст, padding 10px 20px. При наведении фон становится темнее (#1976D2)',
    exampleCode: `<style>
  .btn { background: #2196F3; color: white; padding: 10px 20px; border: none; cursor: pointer; }
  .btn:hover { background: #1976D2; }
</style>
<button class="btn">Кнопка</button>`,
    hint: 'Используй класс .btn со свойствами: background: #2196F3, color: white, padding: 10px 20px, border: none, cursor: pointer. Добавь .btn:hover с background: #1976D2',
  },
  {
    id: 8,
    title: 'Grid layout',
    description: 'Создай grid контейнер с классом "grid" (3 колонки, gap 10px) и тремя элементами с классом "cell" (фон #9C27B0, белый текст, padding 20px)',
    exampleCode: `<style>
  .grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; }
  .cell { background: #9C27B0; color: white; padding: 20px; }
</style>
<div class="grid">
  <div class="cell">1</div>
  <div class="cell">2</div>
  <div class="cell">3</div>
</div>`,
    hint: 'Используй классы .grid и .cell. Для .grid: display: grid, grid-template-columns: repeat(3, 1fr), gap: 10px. Для .cell: background: #9C27B0, color: white, padding: 20px',
  },
]

export default function Playground({ mode }: PlaygroundProps) {
  const [currentTaskIndex, setCurrentTaskIndex] = useState(0)
  const [code, setCode] = useState('')
  const [isExpanded, setIsExpanded] = useState(false)
  const [completedHtmlTasks, setCompletedHtmlTasks] = useState<Set<number>>(new Set())
  const [completedCssTasks, setCompletedCssTasks] = useState<Set<number>>(new Set())

  const tasks = mode === 'html' ? htmlTasks : cssTasks
  const currentTask = tasks[currentTaskIndex]
  const completedTasks = mode === 'html' ? completedHtmlTasks : completedCssTasks
  const setCompletedTasks = mode === 'html' ? setCompletedHtmlTasks : setCompletedCssTasks
  const isCompleted = completedTasks.has(currentTaskIndex)

  const normalizeCode = (str: string): string => {
    return str
      .replace(/\s+/g, '')
      .toLowerCase()
  }

  const checkSolution = () => {
    if (!code.trim()) {
      alert('Напиши код перед проверкой!')
      return
    }

    const normalizedCode = normalizeCode(code)
    const normalizedExample = normalizeCode(currentTask.exampleCode)

    if (normalizedCode === normalizedExample) {
      setCompletedTasks(prev => new Set(prev).add(currentTaskIndex))
    } else {
      alert('Код не совпадает с примером. Проверь синтаксис и попробуй снова!')
    }
  }

  const goToTask = (index: number) => {
    setCurrentTaskIndex(index)
    setCode('')
  }

  const nextTask = () => {
    if (currentTaskIndex < tasks.length - 1) {
      goToTask(currentTaskIndex + 1)
    }
  }

  const prevTask = () => {
    if (currentTaskIndex > 0) {
      goToTask(currentTaskIndex - 1)
    }
  }

  const iframeSrcDoc = mode === 'html'
    ? `<!DOCTYPE html><html><head><style>body{margin:16px;font-family:serif;font-size:16px;}</style></head><body>${code}</body></html>`
    : `<!DOCTYPE html><html><head><style>body{margin:16px;font-family:sans-serif;font-size:16px;}</style></head><body>${code}</body></html>`

  const exampleIframeSrcDoc = mode === 'html'
    ? `<!DOCTYPE html><html><head><style>body{margin:16px;font-family:serif;font-size:16px;}</style></head><body>${currentTask.exampleCode}</body></html>`
    : `<!DOCTYPE html><html><head><style>body{margin:16px;font-family:sans-serif;font-size:16px;}</style></head><body>${currentTask.exampleCode}</body></html>`

  const isCSS = mode === 'css'
  const gradient = isCSS ? 'from-purple-600 to-pink-600' : 'from-blue-600 to-purple-600'
  const btnGradient = isCSS ? 'from-purple-600 to-pink-600' : 'from-blue-600 to-purple-600'
  const previewBg = isCSS ? 'bg-purple-600' : 'bg-blue-600'
  const title = isCSS ? 'Тренажёр CSS' : 'Тренажёр HTML'
  const fileName = isCSS ? 'styles.css + index.html' : 'index.html'
  const placeholder = isCSS ? 'Введи HTML и CSS здесь...' : 'Введи HTML-теги здесь...'

  return (
    <>
      {/* Плавающая кнопка */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className={`fixed bottom-6 right-6 z-[200] bg-gradient-to-r ${btnGradient} text-white px-5 py-3 rounded-full shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300 flex items-center gap-2 font-medium`}
      >
        <span className="text-xl">🎮</span>
        <span>{isExpanded ? 'Свернуть' : 'Тренажёр'}</span>
      </button>

      {/* Плавающая панель тренажёра */}
      {isExpanded && (
        <div className="fixed bottom-20 right-6 z-[190] w-[70vw] max-w-4xl bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden animate-fade-in">
          {/* Заголовок */}
          <div className={`bg-gradient-to-r ${gradient} text-white px-4 py-3 flex items-center justify-between`}>
            <div className="flex items-center gap-2">
              <span className="text-xl">🎮</span>
              <h3 className="text-lg font-bold">{title}</h3>
              <span className="text-sm opacity-80">• Задание {currentTaskIndex + 1} из {tasks.length}</span>
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

          {/* Навигация между заданиями */}
          <div className="px-4 py-2 bg-gray-50 border-b border-gray-200 flex items-center gap-2 overflow-x-auto">
            {tasks.map((task, index) => (
              <button
                key={index}
                onClick={() => goToTask(index)}
                className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                  index === currentTaskIndex
                    ? 'bg-blue-600 text-white scale-110'
                    : completedTasks.has(index)
                    ? 'bg-green-500 text-white'
                    : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                }`}
              >
                {completedTasks.has(index) ? '✓' : task.id}
              </button>
            ))}
          </div>

          {/* Задание */}
          <div className="px-4 py-3 bg-gradient-to-r from-yellow-50 to-orange-50 border-b border-gray-200">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-white font-bold">
                {currentTask.id}
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-gray-800 mb-1">{currentTask.title}</h4>
                <p className="text-sm text-gray-600">{currentTask.description}</p>
                {currentTask.hint && (
                  <p className="text-xs text-gray-500 mt-1 italic">💡 Подсказка: {currentTask.hint}</p>
                )}
              </div>
              {isCompleted && (
                <div className="flex-shrink-0 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center animate-bounce">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              )}
            </div>
          </div>

          {/* Пример и редактор */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Пример */}
            <div className="border-b lg:border-b-0 lg:border-r border-gray-200">
              <div className="bg-green-600 text-white px-3 py-1.5 text-xs font-medium flex items-center gap-1.5">
                🎯 Пример (как должно выглядеть)
              </div>
              <iframe
                srcDoc={exampleIframeSrcDoc}
                title="example-preview"
                sandbox=""
                className="w-full bg-white"
                style={{ height: '200px' }}
              />
            </div>

            {/* Результат студента */}
            <div>
              <div className={`${previewBg} text-white px-3 py-1.5 text-xs font-medium flex items-center justify-between`}>
                <span className="flex items-center gap-1.5">👁️ Твой результат</span>
                {!isCompleted && code.trim() && (
                  <button
                    onClick={checkSolution}
                    className="px-2 py-0.5 bg-white/20 hover:bg-white/30 rounded text-xs transition-colors"
                  >
                    Проверить
                  </button>
                )}
              </div>
              <iframe
                srcDoc={iframeSrcDoc}
                title="student-preview"
                sandbox="allow-same-origin"
                className="w-full bg-white"
                style={{ height: '200px' }}
              />
            </div>
          </div>

          {/* Редактор */}
          <div className="border-t border-gray-200">
            <div className="bg-gray-800 text-gray-300 px-3 py-1.5 text-xs font-mono flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-400"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-green-400"></span>
                <span className="ml-1.5">{fileName}</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={prevTask}
                  disabled={currentTaskIndex === 0}
                  className="px-3 py-1 bg-gray-500 hover:bg-gray-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white rounded text-xs font-medium transition-colors"
                >
                  ← Предыдущее
                </button>
                {isCompleted && currentTaskIndex < tasks.length - 1 && (
                  <button
                    onClick={nextTask}
                    className="px-3 py-1 bg-green-500 hover:bg-green-600 text-white rounded text-xs font-medium transition-colors"
                  >
                    Следующее →
                  </button>
                )}
              </div>
            </div>
            <textarea
              value={code}
              onChange={(e) => {
                setCode(e.target.value)
                if (isCompleted) {
                  setCompletedTasks(prev => {
                    const newSet = new Set(prev)
                    newSet.delete(currentTaskIndex)
                    return newSet
                  })
                }
              }}
              onPaste={(e) => {
                e.preventDefault()
                alert('⚠️ Копирование кода запрещено! Напишите код самостоятельно для лучшего обучения.')
              }}
              spellCheck={false}
              className="w-full h-[200px] p-3 font-mono text-xs bg-gray-900 text-green-400 outline-none resize-none"
              placeholder={placeholder}
            />
          </div>
        </div>
      )}
    </>
  )
}
