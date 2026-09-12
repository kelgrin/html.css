import { useState } from 'react'

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

export default function HTMLGuide() {
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
