import { useState, useEffect } from 'react'
import CSSGuide from './CSSGuide'
import ReactGuide from './ReactGuide'

type TagInfo = {
  tag: string
  description: string
  example: string
  preview: string
}

type Section = {
  id: string
  title: string
  icon: string
  tags: TagInfo[]
}

const sections: Section[] = [
  {
    id: 'headings',
    title: 'Заголовки',
    icon: '📝',
    tags: [
      {
        tag: '<h1>',
        description: 'Главный заголовок страницы. Должен быть один на странице.',
        example: '<h1>Заголовок страницы</h1>',
        preview: '<h1>Заголовок страницы</h1>',
      },
      {
        tag: '<h2>',
        description: 'Заголовок второго уровня. Используется для основных разделов.',
        example: '<h2>Раздел</h2>',
        preview: '<h2>Раздел</h2>',
      },
      {
        tag: '<h3>',
        description: 'Заголовок третьего уровня. Для подразделов.',
        example: '<h3>Подраздел</h3>',
        preview: '<h3>Подраздел</h3>',
      },
      {
        tag: '<h4>',
        description: 'Заголовок четвёртого уровня.',
        example: '<h4>Пункт</h4>',
        preview: '<h4>Пункт</h4>',
      },
      {
        tag: '<h5>',
        description: 'Заголовок пятого уровня.',
        example: '<h5>Подпункт</h5>',
        preview: '<h5>Подпункт</h5>',
      },
      {
        tag: '<h6>',
        description: 'Заголовок шестого (самого низкого) уровня.',
        example: '<h6>Мелкий заголовок</h6>',
        preview: '<h6>Мелкий заголовок</h6>',
      },
    ],
  },
  {
    id: 'text',
    title: 'Текст',
    icon: '📄',
    tags: [
      {
        tag: '<p>',
        description: 'Параграф текста. Основной тег для текстового контента.',
        example: '<p>Это параграф текста.</p>',
        preview: '<p>Это параграф текста.</p>',
      },
      {
        tag: '<span>',
        description: 'Строчный контейнер для выделения части текста.',
        example: 'Обычный <span style="color:blue">синий</span> текст',
        preview: 'Обычный <span style="color:blue">синий</span> текст',
      },
      {
        tag: '<strong>',
        description: 'Важный текст. Отображается жирным.',
        example: '<strong>Важный текст</strong>',
        preview: '<strong>Важный текст</strong>',
      },
      {
        tag: '<em>',
        description: 'Курсивный текст, смысловой акцент.',
        example: '<em>выделение</em>',
        preview: '<em>выделение</em>',
      },
      {
        tag: '<br>',
        description: 'Перенос строки (пустой тег).',
        example: 'Строка 1<br>Строка 2',
        preview: 'Строка 1<br>Строка 2',
      },
      {
        tag: '<a>',
        description: 'Гиперссылка. Атрибут href указывает URL.',
        example: '<a href="#">Ссылка</a>',
        preview: '<a href="#">Ссылка</a>',
      },
      {
        tag: '<blockquote>',
        description: 'Блочная цитата.',
        example: '<blockquote>Цитата</blockquote>',
        preview: '<blockquote>Цитата</blockquote>',
      },
      {
        tag: '<code>',
        description: 'Фрагмент кода.',
        example: '<code>console.log("hi")</code>',
        preview: '<code>console.log("hi")</code>',
      },
      {
        tag: '<ul> / <li>',
        description: 'Маркированный список и элемент списка.',
        example: '<ul><li>Пункт 1</li><li>Пункт 2</li></ul>',
        preview: '<ul><li>Пункт 1</li><li>Пункт 2</li></ul>',
      },
      {
        tag: '<ol> / <li>',
        description: 'Нумерованный список и элемент списка.',
        example: '<ol><li>Первый</li><li>Второй</li></ol>',
        preview: '<ol><li>Первый</li><li>Второй</li></ol>',
      },
    ],
  },
  {
    id: 'containers',
    title: 'Контейнеры',
    icon: '📦',
    tags: [
      {
        tag: '<div>',
        description: 'Блочный контейнер общего назначения.',
        example: '<div>Содержимое</div>',
        preview: '<div>Содержимое div</div>',
      },
      {
        tag: '<span>',
        description: 'Строчный контейнер для части текста.',
        example: '<span>текст</span>',
        preview: 'Текст со <span>строчным контейнером</span> внутри',
      },
      {
        tag: '<header>',
        description: 'Шапка страницы или секции.',
        example: '<header>Навигация</header>',
        preview: '<header>🔝 Шапка сайта</header>',
      },
      {
        tag: '<footer>',
        description: 'Подвал страницы или секции.',
        example: '<footer>Копирайт</footer>',
        preview: '<footer>© 2024 Подвал</footer>',
      },
      {
        tag: '<main>',
        description: 'Основное содержимое страницы (один на страницу).',
        example: '<main>Контент</main>',
        preview: '<main>Основной контент</main>',
      },
      {
        tag: '<section>',
        description: 'Тематический раздел документа.',
        example: '<section>Раздел</section>',
        preview: '<section>Тематический раздел</section>',
      },
      {
        tag: '<article>',
        description: 'Самостоятельный контент (статья, пост).',
        example: '<article>Статья</article>',
        preview: '<article>📰 Статья</article>',
      },
      {
        tag: '<nav>',
        description: 'Навигационный блок с ссылками.',
        example: '<nav><a href="#">Главная</a> <a href="#">О нас</a></nav>',
        preview: '<nav><a href="#">Главная</a> | <a href="#">О нас</a></nav>',
      },
      {
        tag: '<aside>',
        description: 'Боковая панель, дополнительный контент.',
        example: '<aside>Сайдбар</aside>',
        preview: '<aside>💡 Дополнительная информация</aside>',
      },
    ],
  },
  {
    id: 'forms',
    title: 'Формы',
    icon: '📋',
    tags: [
      {
        tag: '<form>',
        description: 'Контейнер формы. Атрибуты: action, method.',
        example: '<form action="/submit" method="POST">...</form>',
        preview: '<form><em>Контейнер формы</em></form>',
      },
      {
        tag: '<input type="text">',
        description: 'Однострочное текстовое поле.',
        example: '<input type="text" placeholder="Имя">',
        preview: '<input type="text" placeholder="Имя">',
      },
      {
        tag: '<input type="email">',
        description: 'Поле для email с проверкой формата.',
        example: '<input type="email" placeholder="mail@example.com">',
        preview: '<input type="email" placeholder="mail@example.com">',
      },
      {
        tag: '<input type="password">',
        description: 'Поле для пароля (скрытый ввод).',
        example: '<input type="password" placeholder="Пароль">',
        preview: '<input type="password" value="secret">',
      },
      {
        tag: '<input type="checkbox">',
        description: 'Чекбокс (флажок).',
        example: '<input type="checkbox"> Согласен',
        preview: '<label><input type="checkbox" checked> Согласен с условиями</label>',
      },
      {
        tag: '<input type="radio">',
        description: 'Переключатель (только один из группы).',
        example: '<input type="radio" name="r"> Вариант',
        preview: '<div><label><input type="radio" name="demo" checked> Вариант 1</label><br><label><input type="radio" name="demo"> Вариант 2</label></div>',
      },
      {
        tag: '<textarea>',
        description: 'Многострочное текстовое поле.',
        example: '<textarea rows="3">Текст</textarea>',
        preview: '<textarea rows="3">Текст</textarea>',
      },
      {
        tag: '<select>',
        description: 'Выпадающий список.',
        example: '<select><option>Вариант</option></select>',
        preview: '<select><option>Вариант 1</option><option>Вариант 2</option></select>',
      },
      {
        tag: '<button>',
        description: 'Кнопка. Типы: submit, button, reset.',
        example: '<button>Отправить</button>',
        preview: '<button>Отправить</button>',
      },
      {
        tag: '<label>',
        description: 'Подпись к элементу формы.',
        example: '<label for="name">Имя:</label>',
        preview: '<label>Имя:</label>',
      },
    ],
  },
]

function CodeBlock({ code }: { code: string }) {
  return (
    <pre className="bg-gray-900 text-green-400 px-4 py-3 rounded-lg text-sm font-mono overflow-x-auto border border-gray-700">
      <code>{code}</code>
    </pre>
  )
}

function PreviewBlock({ html }: { html: string }) {
  const srcDoc = `<!DOCTYPE html><html><head><style>body{margin:8px;font-family:serif;font-size:16px;}</style></head><body>${html}</body></html>`
  return (
    <iframe
      srcDoc={srcDoc}
      title="preview"
      sandbox=""
      className="w-full border border-gray-200 rounded-lg bg-white"
      style={{ height: '80px', minHeight: '60px' }}
    />
  )
}

function TagCard({ tag }: { tag: TagInfo }) {
  const [showExample, setShowExample] = useState(false)

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 overflow-hidden group">
      <div className="p-5">
        <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
          <code className="text-lg font-bold text-gray-800 bg-gray-100 px-3 py-1 rounded-md font-mono group-hover:bg-blue-50 group-hover:text-blue-700 transition-colors">
            {tag.tag}
          </code>
          <button
            onClick={() => setShowExample(!showExample)}
            className="text-sm px-3 py-1 rounded-full bg-gray-100 hover:bg-blue-100 hover:text-blue-700 transition-colors cursor-pointer"
          >
            {showExample ? 'Скрыть код' : 'Показать код'}
          </button>
        </div>
        <p className="text-gray-600 text-sm leading-relaxed mb-4">{tag.description}</p>

        {/* Живой пример в изолированном iframe */}
        <div className="mb-3">
          <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2 flex items-center gap-1">
            👁️ Как выглядит
          </div>
          <PreviewBlock html={tag.preview} />
        </div>

        {/* Код */}
        {showExample && (
          <div className="animate-fade-in">
            <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2 flex items-center gap-1">
              💻 Код
            </div>
            <CodeBlock code={tag.example} />
          </div>
        )}
      </div>
    </div>
  )
}

function SectionBlock({ section }: { section: Section }) {
  return (
    <section id={section.id} className="mb-16 scroll-mt-20">
      <div className="flex items-center gap-3 mb-8">
        <span className="text-4xl">{section.icon}</span>
        <h2 className="text-3xl font-bold text-gray-800">{section.title}</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {section.tags.map((tag, index) => (
          <TagCard key={index} tag={tag} />
        ))}
      </div>
    </section>
  )
}

function FeedbackForm() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isExploding, setIsExploding] = useState(false)

  // Вставьте сюда ссылку на вашу Google Form
  // Как получить: откройте Google Form → "Ответить" → "<>" (встроить) → скопируйте src
  const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSfVFrwkOJuBadNLX-8Bq3dCfHHcRLWCv7CGtJlWyMFCZhRC-A/viewform?embedded=true"

  const handleClose = () => {
    setIsExploding(true)
    // Через 2 секунды "собираем" форму обратно (но не показываем)
    setTimeout(() => {
      setIsExploding(false)
      setIsExpanded(false)
    }, 200)
  }

  const handleOpen = () => {
    setIsExpanded(true)
  }

  // Генерируем осколки стекла
  const generateShards = () => {
    const shards = []
    const rows = 5
    const cols = 5
    const shardWidth = 400 / cols
    const shardHeight = 500 / rows

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        shards.push({
          id: `${row}-${col}`,
          left: col * shardWidth,
          top: row * shardHeight,
          width: shardWidth,
          height: shardHeight,
          delay: Math.random() * 0.2,
          rotation: (Math.random() - 0.5) * 180,
          translateX: (Math.random() - 0.5) * 300,
          translateY: Math.random() * 200 + 50,
        })
      }
    }
    return shards
  }

  const shards = generateShards()

  return (
    <>
      {/* Плавающая кнопка слева */}
      <button
        onClick={isExpanded ? handleClose : handleOpen}
        className="fixed bottom-6 left-6 z-[200] bg-gradient-to-r from-green-600 to-teal-600 text-white px-5 py-3 rounded-full shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300 flex items-center gap-2 font-medium"
      >
        <span className="text-xl">✉️</span>
        <span>{isExpanded ? 'Свернуть' : 'Обратная связь'}</span>
      </button>

      {/* Плавающая панель формы */}
      {isExpanded && !isExploding && (
        <div className="fixed bottom-20 left-6 z-[190] w-[400px] h-[500px] bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden animate-fade-in">
          {/* Заголовок */}
          <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-xl">✉️</span>
              <h3 className="text-base font-bold">Обратная связь</h3>
            </div>
            <button
              onClick={handleClose}
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

      {/* Эффект разбивающегося стекла */}
      {isExploding && (
        <div className="fixed bottom-20 left-6 z-[185] pointer-events-none w-[400px] h-[500px]">
          {shards.map((shard) => (
            <div
              key={shard.id}
              className="absolute animate-shard"
              style={{
                left: `${shard.left}px`,
                top: `${shard.top}px`,
                width: `${shard.width}px`,
                height: `${shard.height}px`,
                animationDelay: `${shard.delay}s`,
                background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(200,230,220,0.7) 100%)',
                border: '1px solid rgba(255,255,255,0.8)',
                boxShadow: 'inset 0 0 10px rgba(255,255,255,0.5), 0 0 5px rgba(0,0,0,0.1)',
                clipPath: `polygon(
                  ${Math.random() * 20}% ${Math.random() * 20}%, 
                  ${80 + Math.random() * 20}% ${Math.random() * 20}%, 
                  ${80 + Math.random() * 20}% ${80 + Math.random() * 20}%, 
                  ${Math.random() * 20}% ${80 + Math.random() * 20}%
                )`,
                '--random-x': Math.random(),
                '--random-y': Math.random(),
                '--random-rot': Math.random(),
              } as React.CSSProperties}
            />
          ))}
        </div>
      )}
    </>
  )
}

type Task = {
  id: number
  title: string
  description: string
  exampleCode: string
  hint?: string
}

const htmlTasks: Task[] = [
  {
    id: 1,
    title: 'Создай заголовок',
    description: 'Создай заголовок первого уровня (h1) с текстом "Привет, мир!"',
    exampleCode: '<h1>Привет, мир!</h1>',

  },
  {
    id: 2,
    title: 'Добавь параграф',
    description: 'Создай параграф (p) с любым текстом',
    exampleCode: '<p>Это мой первый параграф.</p>',
 
  },
  {
    id: 3,
    title: 'Создай список',
    description: 'Создай маркированный список (ul) с тремя элементами (li)',
    exampleCode: '<ul>\n  <li>Первый</li>\n  <li>Второй</li>\n  <li>Третий</li>\n</ul>',

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
  },
  {
    id: 6,
    title: 'Добавь изображение',
    description: 'Добавь изображение (img) с src="https://example.com/image.jpg" и alt="Пример"',
    exampleCode: '<img src="https://example.com/image.jpg" alt="Пример">',
    
  },
  {
    id: 7,
    title: 'Создай форму',
    description: 'Создай форму (form) с полем ввода (input type="text") и кнопкой отправки',
    exampleCode: '<form>\n  <input type="text">\n  <button>Отправить</button>\n</form>',

  },
  {
    id: 8,
    title: 'Добавь таблицу',
    description: 'Создай таблицу (table) с одной строкой и двумя ячейками',
    exampleCode: '<table>\n  <tr>\n    <td>Ячейка 1</td>\n    <td>Ячейка 2</td>\n  </tr>\n</table>',
  
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
    hint: 'Используй селектор .box (класс)',
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
    hint: 'Используй классы .container и .item. Для контейнера: gap: 10px. Для элементов: background: #4CAF50, color: white, padding: 10px',
  },
  {
    id: 4,
    title: 'Скруглённые углы',
    description: 'Сделай у блока с классом "box" скруглённые углы 10px, фон #2196F3, белый текст и padding 20px',
    exampleCode: `<style>
  .box { background: #2196F3; color: white; padding: 20px; border-radius: 10px; }
</style>
<div class="box">Скруглённый блок</div>`,
    hint: 'Используй класс .box со свойствами: background: #2196F3, color: white, padding: 20px,',
  },
  {
    id: 5,
    title: 'Тень',
    description: 'Добавь тень блоку с классом "card": белый фон, padding 20px и ***-****** 0 4px 6px rgba(0,0,0,0.1)',
    exampleCode: `<style>
  .card { background: white; padding: 20px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
</style>
<div class="card">Карточка с тенью</div>`,
    hint: 'Используй класс .card',
  },
  {
    id: 6,
    title: 'Центрирование',
    description: 'Центрируй текст в блоке с классом "centered": height 100px, background #FF9800, белый текст',
    exampleCode: `<style>
  .centered { height: 100px; background: #FF9800; color: white; display: flex; align-items: center; justify-content: center; }
</style>
<div class="centered">Центр</div>`,
    hint: 'Используй класс .centered со свойствами: display: flex',
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
    hint: 'Используй класс .btn со свойствами: background, color, padding, border, cursor. Добавь :hover для изменения фона',
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

function Playground({ mode }: { mode: 'html' | 'css' }) {
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

  // Сброс индекса и кода при смене режима
  useEffect(() => {
    setCurrentTaskIndex(0)
    setCode('')
  }, [mode])

  const normalizeCode = (str: string): string => {
    return str
      .replace(/\s+/g, '') // Убираем все пробелы и переносы
      .toLowerCase() // Приводим к нижнему регистру
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

function HTMLGuide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white py-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 text-8xl font-mono">&lt;html&gt;</div>
          <div className="absolute bottom-10 right-10 text-8xl font-mono">&lt;/html&gt;</div>
          <div className="absolute top-20 right-40 text-6xl font-mono">&lt;div&gt;</div>
          <div className="absolute bottom-20 left-40 text-6xl font-mono">&lt;body&gt;</div>
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Справочник HTML тегов</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
            Краткое руководство по основным HTML тегам с живыми примерами и интерактивным тренажёром
          </p>
        </div>
      </header>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-3 flex flex-wrap gap-2 justify-center">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="px-4 py-2 rounded-full text-sm font-medium bg-gray-100 hover:bg-blue-100 hover:text-blue-700 transition-colors"
            >
              {section.icon} {section.title}
            </a>
          ))}
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Intro */}
        <div className="bg-white rounded-2xl shadow-md p-8 mb-12 border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">👋 Что такое HTML теги?</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            HTML (HyperText Markup Language) — язык разметки для создания веб-страниц.
            Теги — это строительные блоки HTML. Они определяют структуру и содержание страницы.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Большинство тегов парные: открывающий <code className="bg-gray-100 px-2 py-0.5 rounded text-sm">&lt;tag&gt;</code> и закрывающий <code className="bg-gray-100 px-2 py-0.5 rounded text-sm">&lt;/tag&gt;</code>.
            Некоторые теги одиночные (пустые), например <code className="bg-gray-100 px-2 py-0.5 rounded text-sm">&lt;br&gt;</code> и <code className="bg-gray-100 px-2 py-0.5 rounded text-sm">&lt;img&gt;</code>.
          </p>
        </div>

        {/* Sections */}
        {sections.map((section) => (
          <SectionBlock key={section.id} section={section} />
        ))}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 px-4 text-center">
        <p className="text-sm">Справочник HTML тегов • Создано для обучения</p>
        <p className="text-xs mt-2 text-gray-500">HTML5 • 2024</p>
      </footer>
    </div>
  )
}

export default function App() {
  const [activeGuide, setActiveGuide] = useState<'html' | 'css' | 'react'>('html')

  return (
    <div>
      {/* Global Tab Switcher */}
      <div className="fixed top-4 right-4 z-[100] flex gap-1 bg-white/90 backdrop-blur-md rounded-full shadow-lg border border-gray-200 p-1">
        <button
          onClick={() => setActiveGuide('html')}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer ${
            activeGuide === 'html'
              ? 'bg-blue-600 text-white'
              : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          📄 HTML
        </button>
        <button
          onClick={() => setActiveGuide('css')}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer ${
            activeGuide === 'css'
              ? 'bg-purple-600 text-white'
              : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          🎨 CSS
        </button>
        <button
          onClick={() => setActiveGuide('react')}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer ${
            activeGuide === 'react'
              ? 'bg-sky-600 text-white'
              : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          ⚛️ React
        </button>
      </div>

      {/* Render active guide */}
      {activeGuide === 'html' && <HTMLGuide />}
      {activeGuide === 'css' && <CSSGuide />}
      {activeGuide === 'react' && <ReactGuide />}

      {/* Floating Playground (только для HTML и CSS) */}
      {activeGuide !== 'react' && <Playground mode={activeGuide} />}

      {/* Feedback Form */}
      <FeedbackForm />
    </div>
  )
}
