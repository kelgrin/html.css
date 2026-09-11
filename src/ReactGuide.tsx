import React from 'react'

type Section = {
  id: string
  title: string
  icon: string
  content: React.ReactNode
}

function CodeBlock({ code }: { code: string }) {
  return (
    <pre className="bg-gray-900 text-green-400 px-4 py-3 rounded-lg text-sm font-mono overflow-x-auto border border-gray-700">
      <code>{code}</code>
    </pre>
  )
}

function Card({ title, children, className = '' }: { title?: string; children: React.ReactNode; className?: string }) {
  return (
    <div className={`bg-white rounded-xl shadow-md p-6 border border-gray-100 ${className}`}>
      {title && <h3 className="text-lg font-bold text-gray-800 mb-3">{title}</h3>}
      {children}
    </div>
  )
}

function CompareBlock({ html, react }: { html: string; react: string }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <div className="text-xs font-semibold text-orange-600 uppercase tracking-wide mb-2">📄 HTML</div>
        <CodeBlock code={html} />
      </div>
      <div>
        <div className="text-xs font-semibold text-sky-600 uppercase tracking-wide mb-2">⚛️ React (JSX)</div>
        <CodeBlock code={react} />
      </div>
    </div>
  )
}

// ============ Разделы ============

function IntroSection() {
  return (
    <section id="intro" className="mb-16 scroll-mt-20">
      <div className="flex items-center gap-3 mb-8">
        <span className="text-4xl">🚀</span>
        <h2 className="text-3xl font-bold text-gray-800">Что такое React?</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
        <Card>
          <h3 className="text-lg font-bold text-gray-800 mb-3">⚛️ Определение</h3>
          <p className="text-gray-600 leading-relaxed mb-3">
            <strong>React</strong> — это JavaScript-библиотека для создания пользовательских интерфейсов.
            Создана компанией Facebook (Meta) в 2013 году.
          </p>
          <p className="text-gray-600 leading-relaxed">
            React позволяет создавать <strong>интерактивные</strong> и <strong>динамические</strong> веб-приложения,
            которые обновляются без перезагрузки страницы.
          </p>
        </Card>

        <Card>
          <h3 className="text-lg font-bold text-gray-800 mb-3">🎯 Для чего используется</h3>
          <ul className="text-gray-600 space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-sky-500">•</span>
              <span>Веб-приложения (SPA)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-sky-500">•</span>
              <span>Мобильные приложения (React Native)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-sky-500">•</span>
              <span>Десктопные приложения (Electron)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-sky-500">•</span>
              <span>Интерактивные компоненты сайтов</span>
            </li>
          </ul>
        </Card>
      </div>

      <Card className="mb-6">
        <h3 className="text-lg font-bold text-gray-800 mb-3">🌟 Кто использует React</h3>
        <div className="flex flex-wrap gap-3">
          {['Facebook', 'Instagram', 'Netflix', 'Airbnb', 'Discord', 'WhatsApp', 'TikTok', 'Uber'].map((company) => (
            <span key={company} className="px-3 py-1.5 bg-sky-50 text-sky-700 rounded-full text-sm font-medium border border-sky-200">
              {company}
            </span>
          ))}
        </div>
      </Card>

      <Card>
        <h3 className="text-lg font-bold text-gray-800 mb-3">💡 Ключевые особенности</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-sky-50 rounded-lg">
            <div className="text-2xl mb-2">🧩</div>
            <h4 className="font-bold text-gray-800 mb-1">Компоненты</h4>
            <p className="text-sm text-gray-600">Интерфейс разбит на переиспользуемые части</p>
          </div>
          <div className="p-4 bg-sky-50 rounded-lg">
            <div className="text-2xl mb-2">⚡</div>
            <h4 className="font-bold text-gray-800 mb-1">Виртуальный DOM</h4>
            <p className="text-sm text-gray-600">Быстрое обновление только изменённых частей</p>
          </div>
          <div className="p-4 bg-sky-50 rounded-lg">
            <div className="text-2xl mb-2">🔄</div>
            <h4 className="font-bold text-gray-800 mb-1">Однонаправленный поток</h4>
            <p className="text-sm text-gray-600">Данные идут сверху вниз (от родителя к ребёнку)</p>
          </div>
        </div>
      </Card>
    </section>
  )
}

function DifferenceSection() {
  return (
    <section id="difference" className="mb-16 scroll-mt-20">
      <div className="flex items-center gap-3 mb-8">
        <span className="text-4xl">🔀</span>
        <h2 className="text-3xl font-bold text-gray-800">React vs HTML</h2>
      </div>

      <Card className="mb-6">
        <h3 className="text-lg font-bold text-gray-800 mb-4">📊 Сравнение</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Критерий</th>
                <th className="text-left py-3 px-4 font-semibold text-orange-600">HTML</th>
                <th className="text-left py-3 px-4 font-semibold text-sky-600">React</th>
              </tr>
            </thead>
            <tbody className="text-gray-600">
              <tr className="border-b border-gray-100">
                <td className="py-3 px-4 font-medium">Что это</td>
                <td className="py-3 px-4">Язык разметки</td>
                <td className="py-3 px-4">JavaScript-библиотека</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 px-4 font-medium">Обновление</td>
                <td className="py-3 px-4">Перезагрузка страницы</td>
                <td className="py-3 px-4">Без перезагрузки (SPA)</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 px-4 font-medium">Интерактивность</td>
                <td className="py-3 px-4">Ограниченная</td>
                <td className="py-3 px-4">Полная</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 px-4 font-medium">Компоненты</td>
                <td className="py-3 px-4">Нет</td>
                <td className="py-3 px-4">Да, переиспользуемые</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 px-4 font-medium">Состояние</td>
                <td className="py-3 px-4">Нет</td>
                <td className="py-3 px-4">useState, useReducer</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">Сборка</td>
                <td className="py-3 px-4">Не нужна</td>
                <td className="py-3 px-4">Нужна (Vite, Webpack)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Card>

      <Card className="mb-6">
        <h3 className="text-lg font-bold text-gray-800 mb-4">🔍 Пример: Счётчик</h3>
        <CompareBlock
          html={`<!-- HTML: статичный, не работает -->
<button onclick="count++">
  Кликнули: <span>0</span> раз
</button>`}
          react={`// React: интерактивный, работает!
function Counter() {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(count + 1)}>
      Кликнули: {count} раз
    </button>
  );
}`}
        />
      </Card>

      <Card>
        <h3 className="text-lg font-bold text-gray-800 mb-3">🎯 Главное отличие</h3>
        <div className="p-4 bg-gradient-to-r from-sky-50 to-blue-50 rounded-lg border border-sky-200">
          <p className="text-gray-700 leading-relaxed">
            <strong>HTML</strong> описывает <em>структуру</em> страницы — что должно быть на экране.
            <br /><br />
            <strong>React</strong> описывает <em>поведение</em> — как страница реагирует на действия пользователя
            и как обновляется интерфейс при изменении данных.
          </p>
        </div>
      </Card>
    </section>
  )
}

function JsxSection() {
  return (
    <section id="jsx" className="mb-16 scroll-mt-20">
      <div className="flex items-center gap-3 mb-8">
        <span className="text-4xl">✨</span>
        <h2 className="text-3xl font-bold text-gray-800">JSX — синтаксис React</h2>
      </div>

      <Card className="mb-6">
        <h3 className="text-lg font-bold text-gray-800 mb-3">Что такое JSX?</h3>
        <p className="text-gray-600 leading-relaxed mb-3">
          <strong>JSX</strong> (JavaScript XML) — расширение синтаксиса JavaScript,
          позволяющее писать HTML-подобный код прямо в JavaScript.
        </p>
        <p className="text-gray-600 leading-relaxed">
          JSX выглядит как HTML, но это <strong>не HTML</strong> — это JavaScript,
          который при сборке преобразуется в вызовы функций.
        </p>
      </Card>

      <Card className="mb-6">
        <h3 className="text-lg font-bold text-gray-800 mb-3">📝 Основные правила JSX</h3>
        <div className="space-y-4">
          <div className="p-4 bg-gray-50 rounded-lg">
            <h4 className="font-bold text-gray-800 mb-2">1. Один корневой элемент</h4>
            <CodeBlock code={`// ❌ Неправильно
return (
  <h1>Привет</h1>
  <p>Мир</p>
);

// ✅ Правильно
return (
  <div>
    <h1>Привет</h1>
    <p>Мир</p>
  </div>
);`}
            />
          </div>

          <div className="p-4 bg-gray-50 rounded-lg">
            <h4 className="font-bold text-gray-800 mb-2">2. className вместо class</h4>
            <CodeBlock code={`// ❌ Неправильно (class — зарезервированное слово JS)
<div class="container">...</div>

// ✅ Правильно
<div className="container">...</div>`}
            />
          </div>

          <div className="p-4 bg-gray-50 rounded-lg">
            <h4 className="font-bold text-gray-800 mb-2">3. JavaScript в фигурных скобках {'{ }'}</h4>
            <CodeBlock code={`const name = "Анна";
const age = 25;

return (
  <div>
    <h1>Привет, {name}!</h1>
    <p>Тебе {age} лет</p>
    <p>Через 5 лет: {age + 5}</p>
  </div>
);`}
            />
          </div>

          <div className="p-4 bg-gray-50 rounded-lg">
            <h4 className="font-bold text-gray-800 mb-2">4. camelCase для атрибутов</h4>
            <CodeBlock code={`// HTML               →  JSX
// class             →  className
// for               →  htmlFor
// tabindex          →  tabIndex
// onclick           →  onClick
// style="color:red" →  style={{color: 'red'}}`}
            />
          </div>
        </div>
      </Card>
    </section>
  )
}

function ComponentsSection() {
  return (
    <section id="components" className="mb-16 scroll-mt-20">
      <div className="flex items-center gap-3 mb-8">
        <span className="text-4xl">🧩</span>
        <h2 className="text-3xl font-bold text-gray-800">Компоненты</h2>
      </div>

      <Card className="mb-6">
        <h3 className="text-lg font-bold text-gray-800 mb-3">Что такое компонент?</h3>
        <p className="text-gray-600 leading-relaxed mb-3">
          <strong>Компонент</strong> — это переиспользуемый кусок интерфейса.
          Как функция в программировании: принимает данные и возвращает HTML.
        </p>
        <div className="p-4 bg-sky-50 rounded-lg border border-sky-200">
          <p className="text-gray-700">
            💡 Представьте LEGO: каждый компонент — это кирпичик.
            Собирая кирпичики вместе, вы строите целое приложение.
          </p>
        </div>
      </Card>

      <Card className="mb-6">
        <h3 className="text-lg font-bold text-gray-800 mb-3">📝 Функциональный компонент</h3>
        <CodeBlock code={`// Компонент — это функция, возвращающая JSX
function Welcome() {
  return <h1>Привет, мир!</h1>;
}

// Использование компонента
function App() {
  return (
    <div>
      <Welcome />
      <Welcome />
      <Welcome />
    </div>
  );
}`}
        />
      </Card>

      <Card className="mb-6">
        <h3 className="text-lg font-bold text-gray-800 mb-3">📦 Props — входные данные</h3>
        <p className="text-gray-600 leading-relaxed mb-3">
          <strong>Props</strong> (properties) — данные, которые передаются компоненту.
          Как аргументы функции.
        </p>
        <CodeBlock code={`// Компонент принимает props
function UserCard({ name, age, city }) {
  return (
    <div className="card">
      <h2>{name}</h2>
      <p>Возраст: {age}</p>
      <p>Город: {city}</p>
    </div>
  );
}

// Использование с разными данными
<UserCard name="Анна" age={25} city="Москва" />
<UserCard name="Иван" age={30} city="Питер" />`}
        />
      </Card>

      <Card>
        <h3 className="text-lg font-bold text-gray-800 mb-3">🌳 Структура приложения</h3>
        <div className="p-4 bg-gray-900 rounded-lg font-mono text-sm text-gray-300">
          <div className="text-sky-400">App (корневой компонент)</div>
          <div className="ml-4">├── <span className="text-green-400">Header</span></div>
          <div className="ml-4">│   └── <span className="text-yellow-400">Logo, Nav</span></div>
          <div className="ml-4">├── <span className="text-green-400">Main</span></div>
          <div className="ml-8">│   ├── <span className="text-yellow-400">ArticleList</span></div>
          <div className="ml-12">│   │   └── <span className="text-purple-400">Article</span> (×N)</div>
          <div className="ml-8">│   └── <span className="text-yellow-400">Sidebar</span></div>
          <div className="ml-4">└── <span className="text-green-400">Footer</span></div>
        </div>
      </Card>
    </section>
  )
}

function StateSection() {
  return (
    <section id="state" className="mb-16 scroll-mt-20">
      <div className="flex items-center gap-3 mb-8">
        <span className="text-4xl">🔄</span>
        <h2 className="text-3xl font-bold text-gray-800">Состояние (useState)</h2>
      </div>

      <Card className="mb-6">
        <h3 className="text-lg font-bold text-gray-800 mb-3">Что такое состояние?</h3>
        <p className="text-gray-600 leading-relaxed mb-3">
          <strong>Состояние (state)</strong> — это данные, которые могут меняться со временем.
          Когда состояние меняется, React автоматически обновляет интерфейс.
        </p>
        <div className="p-4 bg-sky-50 rounded-lg border border-sky-200">
          <p className="text-gray-700">
            💡 Примеры состояния: счётчик кликов, текст в поле ввода, список задач,
            открыто/закрыто модальное окно.
          </p>
        </div>
      </Card>

      <Card className="mb-6">
        <h3 className="text-lg font-bold text-gray-800 mb-3">📝 Хук useState</h3>
        <CodeBlock code={`import { useState } from 'react';

function Counter() {
  // [текущее значение, функция для изменения]
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Счётчик: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        +1
      </button>
      <button onClick={() => setCount(count - 1)}>
        -1
      </button>
      <button onClick={() => setCount(0)}>
        Сброс
      </button>
    </div>
  );
}`}
        />
      </Card>

      <Card className="mb-6">
        <h3 className="text-lg font-bold text-gray-800 mb-3">📋 Пример: Список задач</h3>
        <CodeBlock code={`function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState('');

  const addTask = () => {
    if (text.trim()) {
      setTasks([...tasks, text]);
      setText('');
    }
  };

  return (
    <div>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Новая задача"
      />
      <button onClick={addTask}>Добавить</button>

      <ul>
        {tasks.map((task, i) => (
          <li key={i}>{task}</li>
        ))}
      </ul>
    </div>
  );
}`}
        />
      </Card>

      <Card>
        <h3 className="text-lg font-bold text-gray-800 mb-3">⚠️ Важные правила</h3>
        <div className="space-y-3">
          <div className="p-3 bg-red-50 rounded-lg border border-red-200">
            <p className="text-sm text-gray-700">
              <strong>❌ Нельзя менять состояние напрямую:</strong>
            </p>
            <code className="text-xs text-red-600">count = 5; // Неправильно!</code>
          </div>
          <div className="p-3 bg-green-50 rounded-lg border border-green-200">
            <p className="text-sm text-gray-700">
              <strong>✅ Используйте функцию set:</strong>
            </p>
            <code className="text-xs text-green-600">setCount(5); // Правильно!</code>
          </div>
          <div className="p-3 bg-yellow-50 rounded-lg border border-yellow-200">
            <p className="text-sm text-gray-700">
              <strong>💡 Массивы и объекты копируются:</strong>
            </p>
            <code className="text-xs text-yellow-700">setTasks([...tasks, newTask]); // Создаём новый массив</code>
          </div>
        </div>
      </Card>
    </section>
  )
}

function EffectsSection() {
  return (
    <section id="effects" className="mb-16 scroll-mt-20">
      <div className="flex items-center gap-3 mb-8">
        <span className="text-4xl">⚡</span>
        <h2 className="text-3xl font-bold text-gray-800">Эффекты (useEffect)</h2>
      </div>

      <Card className="mb-6">
        <h3 className="text-lg font-bold text-gray-800 mb-3">Что такое эффект?</h3>
        <p className="text-gray-600 leading-relaxed mb-3">
          <strong>Эффект</strong> — это код, который выполняется <em>после</em> рендеринга компонента.
          Используется для побочных действий: запросы к API, подписки, таймеры.
        </p>
      </Card>

      <Card className="mb-6">
        <h3 className="text-lg font-bold text-gray-800 mb-3">📝 Синтаксис useEffect</h3>
        <CodeBlock code={`import { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    // Этот код запустится после рендеринга
    const interval = setInterval(() => {
      setSeconds(s => s + 1);
    }, 1000);

    // Функция очистки (опционально)
    return () => clearInterval(interval);
  }, []); // [] — запустить только один раз

  return <p>Прошло секунд: {seconds}</p>;
}`}
        />
      </Card>

      <Card className="mb-6">
        <h3 className="text-lg font-bold text-gray-800 mb-3">📊 Массив зависимостей</h3>
        <div className="space-y-3">
          <div className="p-4 bg-gray-50 rounded-lg">
            <h4 className="font-bold text-gray-800 mb-2">Без массива — после каждого рендера</h4>
            <CodeBlock code={`useEffect(() => {
  console.log('Рендер!');
});`}
            />
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <h4 className="font-bold text-gray-800 mb-2">Пустой массив — только при монтировании</h4>
            <CodeBlock code={`useEffect(() => {
  console.log('Компонент появился');
}, []);`}
            />
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <h4 className="font-bold text-gray-800 mb-2">С зависимостями — при их изменении</h4>
            <CodeBlock code={`useEffect(() => {
  console.log('Count изменился:', count);
}, [count]);`}
            />
          </div>
        </div>
      </Card>

      <Card>
        <h3 className="text-lg font-bold text-gray-800 mb-3">🌐 Пример: Загрузка данных</h3>
        <CodeBlock code={`function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(\`/api/users/\${userId}\`)
      .then(res => res.json())
      .then(data => {
        setUser(data);
        setLoading(false);
      });
  }, [userId]); // Загружаем при смене userId

  if (loading) return <p>Загрузка...</p>;
  return <h1>{user.name}</h1>;
}`}
        />
      </Card>
    </section>
  )
}

function NodejsSection() {
  return (
    <section id="nodejs" className="mb-16 scroll-mt-20">
      <div className="flex items-center gap-3 mb-8">
        <span className="text-4xl">🟢</span>
        <h2 className="text-3xl font-bold text-gray-800">Связь с Node.js</h2>
      </div>

      <Card className="mb-6">
        <h3 className="text-lg font-bold text-gray-800 mb-3">Что такое Node.js?</h3>
        <p className="text-gray-600 leading-relaxed mb-3">
          <strong>Node.js</strong> — это среда выполнения JavaScript вне браузера.
          Позволяет запускать JS-код на компьютере (не в браузере).
        </p>
        <div className="p-4 bg-green-50 rounded-lg border border-green-200">
          <p className="text-gray-700">
            💡 Node.js — это как "двигатель" для JavaScript. Браузер тоже имеет свой
            движок (V8 в Chrome), но Node.js позволяет использовать его на сервере.
          </p>
        </div>
      </Card>

      <Card className="mb-6">
        <h3 className="text-lg font-bold text-gray-800 mb-3">🔗 Зачем React нужен Node.js?</h3>
        <div className="space-y-3">
          <div className="p-4 bg-gray-50 rounded-lg">
            <h4 className="font-bold text-gray-800 mb-2">1. Сборка проекта</h4>
            <p className="text-sm text-gray-600">
              Node.js запускает сборщики (Vite, Webpack), которые превращают JSX и модули
              в обычный JavaScript, понятный браузеру.
            </p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <h4 className="font-bold text-gray-800 mb-2">2. Менеджер пакетов (npm)</h4>
            <p className="text-sm text-gray-600">
              npm (Node Package Manager) устанавливает библиотеки: React, Tailwind,
              роутеры и т.д.
            </p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <h4 className="font-bold text-gray-800 mb-2">3. Dev-сервер</h4>
            <p className="text-sm text-gray-600">
              При разработке Node.js запускает локальный сервер с горячей перезагрузкой —
              изменения видны мгновенно.
            </p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <h4 className="font-bold text-gray-800 mb-2">4. Транспиляция</h4>
            <p className="text-sm text-gray-600">
              Babel (работает на Node.js) превращает JSX и современный JS в код,
              который понимают старые браузеры.
            </p>
          </div>
        </div>
      </Card>

      <Card className="mb-6">
        <h3 className="text-lg font-bold text-gray-800 mb-3">📦 package.json</h3>
        <p className="text-gray-600 leading-relaxed mb-3">
          Главный файл проекта. Содержит список зависимостей и скрипты для запуска.
        </p>
        <CodeBlock code={`{
  "name": "my-app",
  "scripts": {
    "dev": "vite",           // Запуск dev-сервера
    "build": "vite build",   // Сборка для продакшена
    "preview": "vite preview" // Предпросмотр сборки
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "vite": "^5.0.0",
    "@vitejs/plugin-react": "^4.0.0"
  }
}`}
        />
      </Card>

      <Card>
        <h3 className="text-lg font-bold text-gray-800 mb-3">🗂️ Структура проекта</h3>
        <div className="p-4 bg-gray-900 rounded-lg font-mono text-sm text-gray-300">
          <div>📁 <span className="text-yellow-400">my-app/</span></div>
          <div className="ml-4">├── 📄 <span className="text-green-400">package.json</span> <span className="text-gray-500">← зависимости и скрипты</span></div>
          <div className="ml-4">├── 📄 <span className="text-green-400">vite.config.js</span> <span className="text-gray-500">← настройки сборщика</span></div>
          <div className="ml-4">├── 📄 <span className="text-green-400">index.html</span> <span className="text-gray-500">← точка входа</span></div>
          <div className="ml-4">├── 📁 <span className="text-yellow-400">src/</span></div>
          <div className="ml-8">│   ├── 📄 <span className="text-sky-400">main.jsx</span> <span className="text-gray-500">← запуск React</span></div>
          <div className="ml-8">│   ├── 📄 <span className="text-sky-400">App.jsx</span> <span className="text-gray-500">← главный компонент</span></div>
          <div className="ml-8">│   └── 📄 <span className="text-pink-400">App.css</span> <span className="text-gray-500">← стили</span></div>
          <div className="ml-4">├── 📁 <span className="text-yellow-400">node_modules/</span> <span className="text-gray-500">← установленные пакеты</span></div>
          <div className="ml-4">└── 📁 <span className="text-yellow-400">dist/</span> <span className="text-gray-500">← готовая сборка</span></div>
        </div>
      </Card>
    </section>
  )
}

function BuildSection() {
  return (
    <section id="build" className="mb-16 scroll-mt-20">
      <div className="flex items-center gap-3 mb-8">
        <span className="text-4xl">🏗️</span>
        <h2 className="text-3xl font-bold text-gray-800">Сборка и запуск</h2>
      </div>

      <Card className="mb-6">
        <h3 className="text-lg font-bold text-gray-800 mb-3">🚀 Создание проекта</h3>
        <CodeBlock code={`# Создать новый React-проект с Vite
npm create vite@latest my-app

# Перейти в папку
cd my-app

# Установить зависимости
npm install

# Запустить dev-сервер
npm run dev`}
        />
        <p className="text-sm text-gray-600 mt-3">
          После запуска откройте <code className="bg-gray-100 px-2 py-0.5 rounded">http://localhost:5173</code>
        </p>
      </Card>

      <Card className="mb-6">
        <h3 className="text-lg font-bold text-gray-800 mb-3">📜 Основные команды</h3>
        <div className="space-y-3">
          <div className="p-4 bg-gray-50 rounded-lg">
            <h4 className="font-bold text-gray-800 mb-2">
              <code className="text-sky-600">npm run dev</code>
            </h4>
            <p className="text-sm text-gray-600">
              Запускает dev-сервер с горячей перезагрузкой. Изменения в коде мгновенно отображаются в браузере.
            </p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <h4 className="font-bold text-gray-800 mb-2">
              <code className="text-sky-600">npm run build</code>
            </h4>
            <p className="text-sm text-gray-600">
              Создаёт оптимизированную сборку в папке <code>dist/</code>. Готово для публикации на хостинге.
            </p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <h4 className="font-bold text-gray-800 mb-2">
              <code className="text-sky-600">npm run preview</code>
            </h4>
            <p className="text-sm text-gray-600">
              Запускает локальный сервер для просмотра готовой сборки.
            </p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <h4 className="font-bold text-gray-800 mb-2">
              <code className="text-sky-600">npm install &lt;пакет&gt;</code>
            </h4>
            <p className="text-sm text-gray-600">
              Устанавливает новый пакет (библиотеку) в проект.
            </p>
          </div>
        </div>
      </Card>

      <Card className="mb-6">
        <h3 className="text-lg font-bold text-gray-800 mb-3">⚙️ Процесс сборки</h3>
        <div className="flex flex-col md:flex-row gap-3 items-stretch">
          <div className="flex-1 p-4 bg-sky-50 rounded-lg border border-sky-200 text-center">
            <div className="text-2xl mb-2">📝</div>
            <div className="font-bold text-gray-800">Исходный код</div>
            <div className="text-xs text-gray-600 mt-1">JSX + ES6 модули</div>
          </div>
          <div className="flex items-center justify-center text-2xl text-gray-400">→</div>
          <div className="flex-1 p-4 bg-yellow-50 rounded-lg border border-yellow-200 text-center">
            <div className="text-2xl mb-2">🔧</div>
            <div className="font-bold text-gray-800">Babel</div>
            <div className="text-xs text-gray-600 mt-1">JSX → JS</div>
          </div>
          <div className="flex items-center justify-center text-2xl text-gray-400">→</div>
          <div className="flex-1 p-4 bg-orange-50 rounded-lg border border-orange-200 text-center">
            <div className="text-2xl mb-2">📦</div>
            <div className="font-bold text-gray-800">Vite/Webpack</div>
            <div className="text-xs text-gray-600 mt-1">Бандлинг + минификация</div>
          </div>
          <div className="flex items-center justify-center text-2xl text-gray-400">→</div>
          <div className="flex-1 p-4 bg-green-50 rounded-lg border border-green-200 text-center">
            <div className="text-2xl mb-2">🌐</div>
            <div className="font-bold text-gray-800">dist/</div>
            <div className="text-xs text-gray-600 mt-1">Готовый HTML+JS+CSS</div>
          </div>
        </div>
      </Card>

      <Card>
        <h3 className="text-lg font-bold text-gray-800 mb-3">🌍 Публикация</h3>
        <p className="text-gray-600 leading-relaxed mb-3">
          После <code className="bg-gray-100 px-2 py-0.5 rounded">npm run build</code> папку <code>dist/</code> можно загрузить на любой хостинг:
        </p>
        <div className="flex flex-wrap gap-2">
          {['Vercel', 'Netlify', 'GitHub Pages', 'Cloudflare Pages', 'Render', 'Railway'].map((host) => (
            <span key={host} className="px-3 py-1.5 bg-green-50 text-green-700 rounded-full text-sm font-medium border border-green-200">
              {host}
            </span>
          ))}
        </div>
      </Card>
    </section>
  )
}

// ============ Главный компонент ============

export default function ReactGuide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-sky-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-700 text-white py-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 text-8xl font-mono">{'{ }'}</div>
          <div className="absolute bottom-10 right-10 text-8xl">⚛️</div>
          <div className="absolute top-20 right-40 text-6xl font-mono">useState</div>
          <div className="absolute bottom-20 left-40 text-6xl font-mono">{'<Component />'}</div>
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="text-6xl mb-4">⚛️</div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Справочник по React</h1>
          <p className="text-xl text-sky-100 max-w-2xl mx-auto leading-relaxed">
            Полное руководство по React: от основ до сборки проекта
          </p>
        </div>
      </header>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-3 flex flex-wrap gap-2 justify-center">
          {[
            { id: 'intro', icon: '🚀', title: 'Что такое React' },
            { id: 'difference', icon: '🔀', title: 'React vs HTML' },
            { id: 'jsx', icon: '✨', title: 'JSX' },
            { id: 'components', icon: '🧩', title: 'Компоненты' },
            { id: 'state', icon: '🔄', title: 'useState' },
            { id: 'effects', icon: '⚡', title: 'useEffect' },
            { id: 'nodejs', icon: '🟢', title: 'Node.js' },
            { id: 'build', icon: '🏗️', title: 'Сборка' },
          ].map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="px-4 py-2 rounded-full text-sm font-medium bg-gray-100 hover:bg-sky-100 hover:text-sky-700 transition-colors"
            >
              {item.icon} {item.title}
            </a>
          ))}
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-12">
        <IntroSection />
        <DifferenceSection />
        <JsxSection />
        <ComponentsSection />
        <StateSection />
        <EffectsSection />
        <NodejsSection />
        <BuildSection />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 px-4 text-center">
        <p className="text-sm">Справочник по React • Создано для обучения</p>
        <p className="text-xs mt-2 text-gray-500">React 18 • 2024</p>
      </footer>
    </div>
  )
}
