import { useState } from 'react'

type StyleProperty = {
  property: string
  description: string
  example: string
  preview: string
}

type Section = {
  id: string
  title: string
  icon: string
  properties: StyleProperty[]
}

const sections: Section[] = [
  {
    id: 'colors',
    title: 'Цвета и фон',
    icon: '🎨',
    properties: [
      {
        property: 'color',
        description: 'Цвет текста элемента.',
        example: 'p { color: blue; }',
        preview: '<p style="color: blue">Синий текст</p>',
      },
      {
        property: 'background-color',
        description: 'Цвет фона элемента.',
        example: 'div { background-color: yellow; }',
        preview: '<div style="background-color: yellow; padding: 10px">Жёлтый фон</div>',
      },
      {
        property: 'background',
        description: 'Сокращённая запись для фона (цвет, изображение, градиент).',
        example: 'div { background: linear-gradient(to right, red, blue); }',
        preview: '<div style="background: linear-gradient(to right, red, blue); padding: 10px; color: white">Градиент</div>',
      },
      {
        property: 'opacity',
        description: 'Прозрачность элемента (от 0 до 1).',
        example: 'div { opacity: 0.5; }',
        preview: '<div style="background-color: blue; opacity: 0.5; padding: 10px; color: white">Полупрозрачный</div>',
      },
      {
        property: 'rgba()',
        description: 'Цвет с прозрачностью: rgba(red, green, blue, alpha).',
        example: 'div { background-color: rgba(255, 0, 0, 0.3); }',
        preview: '<div style="background-color: rgba(255, 0, 0, 0.3); padding: 10px">Полупрозрачный красный</div>',
      },
    ],
  },
  {
    id: 'text',
    title: 'Текст и шрифты',
    icon: '📝',
    properties: [
      {
        property: 'font-size',
        description: 'Размер шрифта (px, em, rem, %).',
        example: 'p { font-size: 20px; }',
        preview: '<p style="font-size: 20px">Текст 20px</p>',
      },
      {
        property: 'font-weight',
        description: 'Жирность шрифта (normal, bold, 100-900).',
        example: 'p { font-weight: bold; }',
        preview: '<p style="font-weight: bold">Жирный текст</p>',
      },
      {
        property: 'font-family',
        description: 'Семейство шрифтов.',
        example: 'p { font-family: "Arial", sans-serif; }',
        preview: '<p style="font-family: Arial, sans-serif">Шрифт Arial</p>',
      },
      {
        property: 'text-align',
        description: 'Выравнивание текста (left, center, right, justify).',
        example: 'p { text-align: center; }',
        preview: '<p style="text-align: center">Текст по центру</p>',
      },
      {
        property: 'text-decoration',
        description: 'Декоративная линия (underline, line-through, none).',
        example: 'p { text-decoration: underline; }',
        preview: '<p style="text-decoration: underline">Подчёркнутый текст</p>',
      },
      {
        property: 'line-height',
        description: 'Высота строки (множитель или px).',
        example: 'p { line-height: 2; }',
        preview: '<p style="line-height: 2; background: #f0f0f0; padding: 5px">Высокая<br>межстрочная</p>',
      },
      {
        property: 'letter-spacing',
        description: 'Расстояние между буквами.',
        example: 'p { letter-spacing: 3px; }',
        preview: '<p style="letter-spacing: 3px">Разреженный текст</p>',
      },
      {
        property: 'text-transform',
        description: 'Преобразование регистра (uppercase, lowercase, capitalize).',
        example: 'p { text-transform: uppercase; }',
        preview: '<p style="text-transform: uppercase">Заглавные буквы</p>',
      },
    ],
  },
  {
    id: 'spacing',
    title: 'Отступы и размеры',
    icon: '📏',
    properties: [
      {
        property: 'margin',
        description: 'Внешний отступ (сверху, справа, снизу, слева).',
        example: 'div { margin: 20px; }',
        preview: '<div style="background: #e0e0e0; padding: 5px"><div style="margin: 20px; background: #4CAF50; color: white; padding: 10px">margin: 20px</div></div>',
      },
      {
        property: 'padding',
        description: 'Внутренний отступ (сверху, справа, снизу, слева).',
        example: 'div { padding: 20px; }',
        preview: '<div style="background: #4CAF50; color: white; padding: 20px">padding: 20px</div>',
      },
      {
        property: 'width / height',
        description: 'Ширина и высота элемента.',
        example: 'div { width: 200px; height: 100px; }',
        preview: '<div style="width: 200px; height: 100px; background: #2196F3; color: white; display: flex; align-items: center; justify-content: center">200×100px</div>',
      },
      {
        property: 'max-width',
        description: 'Максимальная ширина элемента.',
        example: 'div { max-width: 300px; }',
        preview: '<div style="max-width: 300px; background: #FF9800; color: white; padding: 10px">Максимум 300px ширины</div>',
      },
      {
        property: 'box-sizing',
        description: 'Как считается размер (content-box или border-box).',
        example: 'div { box-sizing: border-box; }',
        preview: '<div style="box-sizing: border-box; width: 200px; padding: 20px; background: #9C27B0; color: white">border-box включает padding</div>',
      },
    ],
  },
  {
    id: 'borders',
    title: 'Границы и скругления',
    icon: '🔲',
    properties: [
      {
        property: 'border',
        description: 'Сокращённая запись границы (толщина, стиль, цвет).',
        example: 'div { border: 2px solid black; }',
        preview: '<div style="border: 2px solid black; padding: 10px">Граница 2px solid black</div>',
      },
      {
        property: 'border-radius',
        description: 'Скругление углов (px или %).',
        example: 'div { border-radius: 10px; }',
        preview: '<div style="border-radius: 10px; background: #E91E63; color: white; padding: 10px">Скруглённые углы</div>',
      },
      {
        property: 'border-radius: 50%',
        description: 'Делает элемент круглым.',
        example: 'div { border-radius: 50%; }',
        preview: '<div style="border-radius: 50%; background: #00BCD4; color: white; padding: 20px; width: 60px; height: 60px; display: flex; align-items: center; justify-content: center">●</div>',
      },
      {
        property: 'box-shadow',
        description: 'Тень элемента (x, y, blur, color).',
        example: 'div { box-shadow: 5px 5px 10px rgba(0,0,0,0.3); }',
        preview: '<div style="box-shadow: 5px 5px 10px rgba(0,0,0,0.3); padding: 10px; background: white">Тень</div>',
      },
      {
        property: 'outline',
        description: 'Контур вне границы (не занимает место).',
        example: 'div { outline: 3px dashed red; }',
        preview: '<div style="outline: 3px dashed red; padding: 10px">Контур</div>',
      },
    ],
  },
  {
    id: 'display',
    title: 'Display и позиционирование',
    icon: '📐',
    properties: [
      {
        property: 'display: block',
        description: 'Блочный элемент (занимает всю ширину).',
        example: 'div { display: block; }',
        preview: '<div style="display: block; background: #4CAF50; color: white; padding: 10px; margin-bottom: 5px">Блок 1</div><div style="display: block; background: #2196F3; color: white; padding: 10px">Блок 2</div>',
      },
      {
        property: 'display: inline',
        description: 'Строчный элемент (только по содержимому).',
        example: 'span { display: inline; }',
        preview: '<span style="display: inline; background: #FF9800; padding: 5px">Строка 1</span><span style="display: inline; background: #9C27B0; color: white; padding: 5px">Строка 2</span>',
      },
      {
        property: 'display: inline-block',
        description: 'Строчно-блочный (как inline, но с размерами).',
        example: 'div { display: inline-block; }',
        preview: '<div style="display: inline-block; background: #E91E63; color: white; padding: 10px; width: 100px">Блок 1</div><div style="display: inline-block; background: #00BCD4; color: white; padding: 10px; width: 100px">Блок 2</div>',
      },
      {
        property: 'display: none',
        description: 'Скрывает элемент полностью.',
        example: 'div { display: none; }',
        preview: '<div style="background: #f0f0f0; padding: 10px">Видимый<div style="display: none">Скрытый</div></div>',
      },
      {
        property: 'position: relative',
        description: 'Относительное позиционирование от нормального места.',
        example: 'div { position: relative; top: 10px; }',
        preview: '<div style="background: #f0f0f0; padding: 20px; height: 60px"><div style="position: relative; top: 10px; left: 20px; background: #FF5722; color: white; padding: 5px">Смещён</div></div>',
      },
      {
        property: 'position: absolute',
        description: 'Абсолютное позиционирование относительно родителя.',
        example: 'div { position: absolute; top: 0; right: 0; }',
        preview: '<div style="position: relative; background: #f0f0f0; padding: 20px; height: 80px"><div style="position: absolute; top: 5px; right: 5px; background: #673AB7; color: white; padding: 5px">Абсолют</div></div>',
      },
      {
        property: 'z-index',
        description: 'Порядок наложения элементов (чем больше, тем выше).',
        example: 'div { z-index: 10; }',
        preview: '<div style="position: relative; height: 60px"><div style="position: absolute; background: red; color: white; padding: 10px; z-index: 1">z-index: 1</div><div style="position: absolute; left: 30px; top: 10px; background: blue; color: white; padding: 10px; z-index: 2">z-index: 2</div></div>',
      },
    ],
  },
  {
    id: 'flexbox',
    title: 'Flexbox',
    icon: '📦',
    properties: [
      {
        property: 'display: flex',
        description: 'Включает flex-контейнер.',
        example: 'div { display: flex; }',
        preview: '<div style="display: flex; gap: 10px; background: #f0f0f0; padding: 10px"><div style="background: #4CAF50; color: white; padding: 10px">1</div><div style="background: #2196F3; color: white; padding: 10px">2</div><div style="background: #FF9800; color: white; padding: 10px">3</div></div>',
      },
      {
        property: 'justify-content',
        description: 'Выравнивание по главной оси (flex-start, center, space-between, space-around).',
        example: 'div { justify-content: center; }',
        preview: '<div style="display: flex; justify-content: center; gap: 10px; background: #f0f0f0; padding: 10px"><div style="background: #E91E63; color: white; padding: 10px">1</div><div style="background: #9C27B0; color: white; padding: 10px">2</div></div>',
      },
      {
        property: 'align-items',
        description: 'Выравнивание по поперечной оси (flex-start, center, flex-end, stretch).',
        example: 'div { align-items: center; }',
        preview: '<div style="display: flex; align-items: center; height: 80px; gap: 10px; background: #f0f0f0; padding: 10px"><div style="background: #00BCD4; color: white; padding: 10px">1</div><div style="background: #FF5722; color: white; padding: 20px">2</div></div>',
      },
      {
        property: 'flex-direction',
        description: 'Направление главной оси (row, column, row-reverse, column-reverse).',
        example: 'div { flex-direction: column; }',
        preview: '<div style="display: flex; flex-direction: column; gap: 10px; background: #f0f0f0; padding: 10px"><div style="background: #4CAF50; color: white; padding: 10px">1</div><div style="background: #2196F3; color: white; padding: 10px">2</div></div>',
      },
      {
        property: 'gap',
        description: 'Расстояние между flex-элементами.',
        example: 'div { gap: 20px; }',
        preview: '<div style="display: flex; gap: 20px; background: #f0f0f0; padding: 10px"><div style="background: #FF9800; color: white; padding: 10px">1</div><div style="background: #9C27B0; color: white; padding: 10px">2</div></div>',
      },
      {
        property: 'flex-wrap',
        description: 'Перенос элементов на новую строку (nowrap, wrap).',
        example: 'div { flex-wrap: wrap; }',
        preview: '<div style="display: flex; flex-wrap: wrap; gap: 10px; background: #f0f0f0; padding: 10px; width: 200px"><div style="background: #E91E63; color: white; padding: 10px; width: 80px">1</div><div style="background: #00BCD4; color: white; padding: 10px; width: 80px">2</div><div style="background: #FF5722; color: white; padding: 10px; width: 80px">3</div></div>',
      },
    ],
  },
  {
    id: 'transitions',
    title: 'Анимации и переходы',
    icon: '✨',
    properties: [
      {
        property: 'transition',
        description: 'Плавный переход свойств (свойство, длительность, функция).',
        example: 'div { transition: background-color 0.3s ease; }',
        preview: '<div style="background: #4CAF50; color: white; padding: 10px; transition: background 0.3s; cursor: pointer" onmouseover="this.style.background=\'#2196F3\'" onmouseout="this.style.background=\'#4CAF50\'">Наведи на меня</div>',
      },
      {
        property: 'transform',
        description: 'Трансформация элемента (rotate, scale, translate, skew).',
        example: 'div { transform: rotate(45deg); }',
        preview: '<div style="background: #FF9800; color: white; padding: 10px; transform: rotate(15deg); display: inline-block">Повёрнут на 15°</div>',
      },
      {
        property: 'transform: scale()',
        description: 'Масштабирование элемента.',
        example: 'div { transform: scale(1.2); }',
        preview: '<div style="background: #E91E63; color: white; padding: 10px; transform: scale(1.2); display: inline-block">Увеличен</div>',
      },
      {
        property: 'animation',
        description: 'Анимация по ключевым кадрам (@keyframes).',
        example: '@keyframes fade { from { opacity: 0; } to { opacity: 1; } }',
        preview: '<div style="background: #9C27B0; color: white; padding: 10px; animation: pulse 2s infinite" class="animate-pulse">Пульсация</div>',
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
  const srcDoc = `<!DOCTYPE html><html><head><style>body{margin:8px;font-family:sans-serif;font-size:16px;}</style></head><body>${html}</body></html>`
  return (
    <iframe
      srcDoc={srcDoc}
      title="preview"
      sandbox=""
      className="w-full border border-gray-200 rounded-lg bg-white"
      style={{ height: '100px', minHeight: '80px' }}
    />
  )
}

function PropertyCard({ property }: { property: StyleProperty }) {
  const [showExample, setShowExample] = useState(false)

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 overflow-hidden group">
      <div className="p-5">
        <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
          <code className="text-lg font-bold text-gray-800 bg-gray-100 px-3 py-1 rounded-md font-mono group-hover:bg-purple-50 group-hover:text-purple-700 transition-colors">
            {property.property}
          </code>
          <button
            onClick={() => setShowExample(!showExample)}
            className="text-sm px-3 py-1 rounded-full bg-gray-100 hover:bg-purple-100 hover:text-purple-700 transition-colors cursor-pointer"
          >
            {showExample ? 'Скрыть код' : 'Показать код'}
          </button>
        </div>
        <p className="text-gray-600 text-sm leading-relaxed mb-4">{property.description}</p>

        {/* Живой пример в изолированном iframe */}
        <div className="mb-3">
          <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2 flex items-center gap-1">
            👁️ Как выглядит
          </div>
          <PreviewBlock html={property.preview} />
        </div>

        {/* Код */}
        {showExample && (
          <div className="animate-fade-in">
            <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2 flex items-center gap-1">
              💻 Код
            </div>
            <CodeBlock code={property.example} />
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
        {section.properties.map((property, index) => (
          <PropertyCard key={index} property={property} />
        ))}
      </div>
    </section>
  )
}

function Playground() {
  const [code, setCode] = useState(`<style>
  .box {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    font-size: 18px;
  }
</style>

<div class="box">
  Красивый блок с градиентом!
</div>`)

  const presets = [
    {
      name: 'Flexbox',
      code: `<style>
  .container {
    display: flex;
    gap: 10px;
    justify-content: center;
    align-items: center;
    background: #f0f0f0;
    padding: 20px;
  }
  .item {
    background: #4CAF50;
    color: white;
    padding: 20px;
    border-radius: 5px;
  }
</style>

<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>`,
    },
    {
      name: 'Карточка',
      code: `<style>
  .card {
    width: 250px;
    background: white;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    padding: 20px;
    font-family: sans-serif;
  }
  .card h3 {
    margin: 0 0 10px 0;
    color: #333;
  }
  .card p {
    margin: 0;
    color: #666;
    line-height: 1.5;
  }
</style>

<div class="card">
  <h3>Заголовок карточки</h3>
  <p>Описание карточки с текстом и стилями.</p>
</div>`,
    },
    {
      name: 'Кнопка',
      code: `<style>
  .btn {
    background: #2196F3;
    color: white;
    border: none;
    padding: 12px 24px;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    transition: background 0.3s;
  }
  .btn:hover {
    background: #1976D2;
  }
</style>

<button class="btn">Нажми меня</button>`,
    },
    {
      name: 'Очистить',
      code: '',
    },
  ]

  const iframeSrcDoc = `<!DOCTYPE html><html><head><style>body{margin:16px;font-family:sans-serif;font-size:16px;}</style></head><body>${code}</body></html>`

  return (
    <section id="playground" className="mb-16 scroll-mt-20">
      <div className="flex items-center gap-3 mb-4">
        <span className="text-4xl">🎮</span>
        <h2 className="text-3xl font-bold text-gray-800">Тренажёр CSS</h2>
      </div>
      <p className="text-gray-600 mb-6">
        Пиши HTML и CSS слева и смотри результат справа в реальном времени. Экспериментируй со стилями!
      </p>

      {/* Пресеты */}
      <div className="flex flex-wrap gap-2 mb-4">
        {presets.map((preset) => (
          <button
            key={preset.name}
            onClick={() => setCode(preset.code)}
            className="px-3 py-1.5 text-sm rounded-full bg-white border border-gray-200 hover:bg-purple-50 hover:border-purple-300 hover:text-purple-700 transition-colors cursor-pointer shadow-sm"
          >
            {preset.name}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Редактор */}
        <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
          <div className="bg-gray-800 text-gray-300 px-4 py-2 text-sm font-mono flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-400"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
            <span className="w-3 h-3 rounded-full bg-green-400"></span>
            <span className="ml-2">styles.css + index.html</span>
          </div>
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            spellCheck={false}
            className="w-full h-96 p-4 font-mono text-sm bg-gray-900 text-green-400 outline-none resize-none"
            placeholder="Введи HTML и CSS здесь..."
          />
        </div>

        {/* Превью в изолированном iframe */}
        <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
          <div className="bg-purple-600 text-white px-4 py-2 text-sm font-medium flex items-center gap-2">
            👁️ Результат
          </div>
          <iframe
            srcDoc={iframeSrcDoc}
            title="playground-preview"
            sandbox="allow-same-origin"
            className="w-full bg-white"
            style={{ height: '384px', minHeight: '384px' }}
          />
        </div>
      </div>
    </section>
  )
}

export default function CSSGuide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white py-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 text-8xl font-mono">{'{ }'}</div>
          <div className="absolute bottom-10 right-10 text-8xl font-mono">color:</div>
          <div className="absolute top-20 right-40 text-6xl font-mono">display:</div>
          <div className="absolute bottom-20 left-40 text-6xl font-mono">flex</div>
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Справочник CSS стилей</h1>
          <p className="text-xl text-purple-100 max-w-2xl mx-auto leading-relaxed">
            Краткое руководство по основным CSS свойствам с живыми примерами и интерактивным тренажёром
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
              className="px-4 py-2 rounded-full text-sm font-medium bg-gray-100 hover:bg-purple-100 hover:text-purple-700 transition-colors"
            >
              {section.icon} {section.title}
            </a>
          ))}
          <a
            href="#playground"
            className="px-4 py-2 rounded-full text-sm font-medium bg-orange-100 text-orange-700 hover:bg-orange-200 transition-colors"
          >
            🎮 Тренажёр
          </a>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Intro */}
        <div className="bg-white rounded-2xl shadow-md p-8 mb-12 border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">🎨 Что такое CSS?</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            CSS (Cascading Style Sheets) — язык стилей для оформления HTML-документов.
            CSS определяет, как элементы выглядят на странице: цвета, шрифты, отступы, расположение и анимации.
          </p>
          <p className="text-gray-600 leading-relaxed">
            CSS-правило состоит из <strong>селектора</strong> (какой элемент стилизовать) и <strong>блока объявлений</strong> (какие стили применить).
            Например: <code className="bg-gray-100 px-2 py-0.5 rounded text-sm">p {'{ color: blue; }'}</code> делает текст параграфов синим.
          </p>
        </div>

        {/* Sections */}
        {sections.map((section) => (
          <SectionBlock key={section.id} section={section} />
        ))}

        {/* Playground */}
        <Playground />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 px-4 text-center">
        <p className="text-sm">Справочник CSS стилей • Создано для обучения</p>
        <p className="text-xs mt-2 text-gray-500">CSS3 • 2024</p>
      </footer>
    </div>
  )
}
