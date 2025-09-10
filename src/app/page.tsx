'use client';

import { useState } from 'react';
import OptimizedImage from '../components/OptimizedImage';

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-sm shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">💝</span>
              </div>
              <h1 className="text-2xl font-bold text-amber-600">
                Hope Club Беларусь
              </h1>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#program" className="text-gray-700 hover:text-amber-600 transition-colors font-medium">Программа</a>
              <a href="#team" className="text-gray-700 hover:text-pink-600 transition-colors font-medium">Команда</a>
              <a href="#approach" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">Подход</a>
              <a href="#contact" className="text-gray-700 hover:text-indigo-600 transition-colors font-medium">Контакты</a>
              <a
                href="https://t.me/+0ifj5RsF7KcxNDli"
            target="_blank"
            rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-700 hover:text-pink-600 transition-colors font-medium"
              >
                <span>✈️</span>
                <span>@hope_club28</span>
              </a>
            </nav>
            {/* Mobile menu button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 rounded-lg text-gray-700 hover:text-pink-600 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pt-4 border-t border-gray-200">
              <nav className="flex flex-col space-y-4">
                <a
                  href="#program"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-700 hover:text-amber-600 transition-colors font-medium py-2"
                >
                  Программа
                </a>
                <a
                  href="#team"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-700 hover:text-pink-600 transition-colors font-medium py-2"
                >
                  Команда
                </a>
                <a
                  href="#approach"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-700 hover:text-purple-600 transition-colors font-medium py-2"
                >
                  Подход
                </a>
                <a
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-700 hover:text-indigo-600 transition-colors font-medium py-2"
                >
                  Контакты
                </a>
                <a
                  href="https://t.me/+0ifj5RsF7KcxNDli"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center space-x-2 text-gray-700 hover:text-pink-600 transition-colors font-medium py-2"
                >
                  <span>✈️</span>
                  <span>@hope_club28</span>
                </a>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background cover image */}
        <div className="absolute inset-0">
          <OptimizedImage
            webpSrc="/images/team/webp/cover-team.webp"
            jpgSrc="/images/team/optimized/cover-team.jpg"
            alt="Hope Club Team"
            className="w-full h-full object-cover opacity-40 high-quality-image"
            fallbackEmoji=""
            fallbackBg="bg-amber-50"
          />
        </div>
        
        {/* Background decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-yellow-200/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-pink-200/30 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-200/20 rounded-full blur-2xl"></div>
        </div>

        {/* Floating shapes */}
        <div className="floating-shape w-8 h-8 top-40 left-32"></div>
        <div className="floating-shape w-6 h-6 top-60 right-40" style={{ animationDelay: '1s' }}></div>
        <div className="floating-shape w-10 h-10 bottom-40 left-40" style={{ animationDelay: '2s' }}></div>

        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="block text-amber-600">
                Я понимаю твою боль
              </span>
              <span className="block text-gray-800">
                после расставания
              </span>
              <span className="block text-rose-600">
                28-дневная программа исцеления
              </span>
            </h1>

            <div className="w-full h-1 bg-rose-400 rounded-full mb-8"></div>

            {/* Program focus */}
            <div className="text-center mb-6">
              <p className="text-lg text-gray-600 italic">
                💝 Мы создали программу, которая поможет тебе пройти путь от боли к счастью
              </p>
              <p className="text-sm text-gray-500 mt-2">
                За 4 недели ты обретешь внутреннюю опору и научишься любить себя
              </p>
            </div>

            <div className="max-w-5xl mx-auto mb-12">
              <div className="glass-card rounded-3xl p-8 md:p-10 warm-glow relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-rose-200/30 rounded-full"></div>
                <div className="absolute bottom-4 left-4 w-8 h-8 bg-pink-200/30 rounded-full"></div>

                <p className="text-xl md:text-2xl text-gray-700 leading-relaxed relative z-10">
                  💔 <strong className="text-amber-600">Я знаю, как это больно</strong> — когда после расставания кажется, что мир рухнул.
                  <br />
                  <span className="text-lg">Ты просыпаешься утром и думаешь: &quot;Почему именно я? Что я сделала не так?&quot; А потом приходят воспоминания о тех моментах, когда все было хорошо...</span>
                  <br /><br />
                  <span className="text-amber-600 font-semibold">Дорогая, ты не одна в этом.</span> Мы все проходили через это. Через ночи без сна, через слезы, через попытки понять, что же пошло не так.
                  И мы нашли выход — через осознание, через работу с собой, через поддержку.
                  <br /><br />
                  <span className="text-rose-600 font-medium">28-дневная программа реабилитации</span>
                  <br />
                  <span className="text-base text-gray-600 italic">Поможет тебе пройти путь от боли к счастью, от зависимости к свободе</span>
                </p>
              </div>
            </div>
          </div>

          {/* Program Info */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="glass-card rounded-3xl p-6 md:p-8 warm-glow">
              <div className="grid md:grid-cols-2 gap-6 items-center">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-amber-600 mb-4">
                    🌟 28-дневная программа исцеления
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Структурированный курс, который поможет тебе пройти путь от боли к счастью.
                    Каждая неделя имеет свою цель и ведет к полному исцелению.
                  </p>
                  <div className="text-2xl font-bold text-amber-600">
                    💝 Более 30 девушкам уже помогли
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-amber-600 mb-2">
                    4 недели трансформации
                  </div>
                  <div className="text-lg text-gray-600 mb-4">
                    От боли к счастью
                  </div>
                  <div className="text-sm text-gray-500">
                    Поддержка специалистов на каждом этапе
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Learn More Button */}
          <div className="flex justify-center items-center">
            <a
              href="#program"
              className="group glass-card text-gray-800 px-10 py-5 rounded-full font-bold text-xl hover:bg-white transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl border-2 border-amber-200 hover:border-amber-300"
            >
              <span className="flex items-center">
                📖 Узнать о программе
                <svg className="w-6 h-6 ml-3 transition-transform duration-300 group-hover:translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </span>
            </a>
          </div>

          {/* Program Overview */}
          <div className="mt-20 max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-amber-600 mb-4">
                📋 Как это работает?
              </h3>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Мы прошли этот путь и знаем все его этапы. Мы будем бережно вести тебя за руку через 4 недели трансформации.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="interactive-card glass-card rounded-2xl p-6 warm-glow text-center">
                <div className="w-24 h-24 bg-rose-400 rounded-full flex items-center justify-center mx-auto mb-4 overflow-hidden">
                  <img 
                    src="/images/weeks/1_Week.png" 
                    alt="Неделя 1" 
                    className="w-full h-full object-cover high-quality-image"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
                      if (nextElement) {
                        nextElement.style.display = 'block';
                      }
                    }}
                  />
                  <span className="text-2xl hidden">1️⃣</span>
                </div>
                <h4 className="text-lg font-semibold text-amber-600 mb-2">Неделя 1</h4>
                <h5 className="font-bold text-gray-800 mb-2">ПРИЗНАНИЕ</h5>
                <p className="text-sm text-gray-600">Выпускаем боль, злость и обиду. Смотрим правде в глаза и честно прощаемся.</p>
              </div>

              <div className="interactive-card glass-card rounded-2xl p-6 warm-glow text-center">
                <div className="w-24 h-24 bg-pink-400 rounded-full flex items-center justify-center mx-auto mb-4 overflow-hidden">
                  <img 
                    src="/images/weeks/2_Week.png" 
                    alt="Неделя 2" 
                    className="w-full h-full object-cover high-quality-image"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
                      if (nextElement) {
                        nextElement.style.display = 'block';
                      }
                    }}
                  />
                  <span className="text-2xl hidden">2️⃣</span>
                </div>
                <h4 className="text-lg font-semibold text-amber-600 mb-2">Неделя 2</h4>
                <h5 className="font-bold text-gray-800 mb-2">ПРОЩЕНИЕ СЕБЯ</h5>
                <p className="text-sm text-gray-600">Снимаем груз вины и стыда. Учимся слышать и любить себя снова.</p>
              </div>

              <div className="interactive-card glass-card rounded-2xl p-6 warm-glow text-center">
                <div className="w-24 h-24 bg-purple-400 rounded-full flex items-center justify-center mx-auto mb-4 overflow-hidden">
                  <img 
                    src="/images/weeks/3_Week.png" 
                    alt="Неделя 3" 
                    className="w-full h-full object-cover high-quality-image"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
                      if (nextElement) {
                        nextElement.style.display = 'block';
                      }
                    }}
                  />
                  <span className="text-2xl hidden">3️⃣</span>
                </div>
                <h4 className="text-lg font-semibold text-amber-600 mb-2">Неделя 3</h4>
                <h5 className="font-bold text-gray-800 mb-2">ОПОРЫ</h5>
                <p className="text-sm text-gray-600">Формируем новую жизнь, наполненную заботой о себе. Находим внутренний стержень.</p>
              </div>

              <div className="interactive-card glass-card rounded-2xl p-6 warm-glow text-center">
                <div className="w-24 h-24 bg-indigo-400 rounded-full flex items-center justify-center mx-auto mb-4 overflow-hidden">
                  <img 
                    src="/images/weeks/4_Week.png" 
                    alt="Неделя 4" 
                    className="w-full h-full object-cover high-quality-image"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
                      if (nextElement) {
                        nextElement.style.display = 'block';
                      }
                    }}
                  />
                  <span className="text-2xl hidden">4️⃣</span>
                </div>
                <h4 className="text-lg font-semibold text-amber-600 mb-2">Неделя 4</h4>
                <h5 className="font-bold text-gray-800 mb-2">НОВАЯ ЖИЗНЬ</h5>
                <p className="text-sm text-gray-600">Ставим цели, зажигаем мечты и учимся смотреть в будущее с радостью.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section id="benefits" className="py-20 bg-amber-50 relative overflow-hidden">
        {/* Background cover image */}
        <div className="absolute inset-0 opacity-35">
          <img
            src="/images/team/webp/cover-final.webp"
            alt="Hope Club Benefits Background"
            className="w-full h-full object-cover high-quality-image"
            onError={(e) => {
              e.currentTarget.src = "/images/team/optimized/cover-final.jpg";
            }}
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-amber-600 mb-4">
              🎁 Что ждет тебя в нашей программе? Реальные шаги к новой жизни
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Представь: через 28 дней ты проснешься и почувствуешь, что боль ушла. Что у тебя есть план. Что ты не одна.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="interactive-card glass-card rounded-3xl p-8 warm-glow text-center">
              <div className="w-16 h-16 bg-rose-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🎬</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">28-дневная программа: полный путь к себе</h3>
              <p className="text-gray-600">Ты получишь не просто уроки, а реальные инструменты, которые помогут тебе спать спокойно и просыпаться с надеждой</p>
            </div>

            <div className="interactive-card glass-card rounded-3xl p-8 warm-glow text-center">
              <div className="w-16 h-16 bg-pink-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💬</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Личная консультация со специалистом</h3>
              <p className="text-gray-600">Представь, что у тебя есть человек, который действительно понимает твою ситуацию и может сказать: &quot;Я знаю, как тебе помочь&quot;</p>
            </div>

            <div className="interactive-card glass-card rounded-3xl p-8 warm-glow text-center">
              <div className="w-16 h-16 bg-purple-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">👥</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Сообщество девушек, которые понимают</h3>
              <p className="text-gray-600">Когда ты слышишь истории других и понимаешь: &quot;Я не сумасшедшая, это действительно тяжело, но есть выход&quot;</p>
            </div>

            <div className="interactive-card glass-card rounded-3xl p-8 warm-glow text-center">
              <div className="w-16 h-16 bg-indigo-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📱</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Реальные истории трансформации</h3>
              <p className="text-gray-600">&quot;Я тоже думала, что моя жизнь закончилась. А теперь я счастлива и люблю себя&quot; — такие истории ждут тебя</p>
            </div>

            <div className="interactive-card glass-card rounded-3xl p-8 warm-glow text-center">
              <div className="w-16 h-16 bg-orange-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💝</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Поддержка в самые тяжелые моменты</h3>
              <p className="text-gray-600">Когда хочется позвонить бывшему, когда слезы льются сами собой — мы будем рядом и поможем пройти через это</p>
            </div>

            <div className="interactive-card glass-card rounded-3xl p-8 warm-glow text-center">
              <div className="w-16 h-16 bg-yellow-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🌱</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Начало новой счастливой жизни</h3>
              <p className="text-gray-600">Через 3 дня ты уже не будешь той, кем была вчера. Ты начнешь путь к себе — настоящей, счастливой, любящей себя</p>
            </div>
          </div>

          {/* New Demo Course Block */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <div className="glass-card rounded-3xl p-8 md:p-12 warm-glow max-w-4xl mx-auto">
                <div className="text-center mb-8">
                  <span className="text-4xl">🌟</span>
                  <h3 className="text-3xl md:text-4xl font-bold text-amber-600 mb-4">
                    Готова начать путь к исцелению?
                  </h3>
                  <p className="text-lg text-gray-700">
                    Присоединяйся к нашей программе и получи поддержку специалистов на каждом этапе. 
                    Мы поможем тебе пройти путь от боли к счастью.
                  </p>
                </div>

                <div className="bg-pink-50 rounded-2xl p-6 mb-8">
                  <div className="flex items-center justify-center mb-4">
                    <span className="text-2xl mr-3">💝</span>
                    <h4 className="text-xl font-semibold text-gray-800">Более 30 девушкам уже помогли</h4>
                  </div>
                  <p className="text-gray-600">Бесплатная консультация для каждой девушки</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <a
                    href="https://t.me/+0ifj5RsF7KcxNDli"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center bg-rose-500 text-white px-6 py-4 rounded-full font-bold text-lg hover:bg-rose-600 transition-all duration-300 shadow-xl hover:shadow-2xl"
                  >
                    ✈️ Записаться на программу
                  </a>
                  <a
                    href="https://t.me/+0ifj5RsF7KcxNDli"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center bg-blue-500 text-white px-6 py-4 rounded-full font-bold text-lg hover:bg-blue-600 transition-all duration-300 shadow-xl hover:shadow-2xl"
                  >
                    💬 Бесплатная консультация
                  </a>
                </div>

                <div className="text-center">
                  <p className="text-sm text-gray-500 mb-4">
                    Пиши &quot;ДЕМО&quot; в Telegram для получения бесплатной консультации
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Instagram Feed Placeholder */}
          <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-amber-600 mb-4">
              📸 Реальные истории преодоления кризиса после расставания
            </h3>
            <p className="text-xl text-gray-600 mb-8">
              Личные истории выздоровления, трансформации и восстановления после разрыва отношений
            </p>
          </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="interactive-card glass-card rounded-2xl p-4 warm-glow">
                  <div className="aspect-square bg-pink-200 rounded-xl flex items-center justify-center mb-3">
                    <span className="text-3xl">📸</span>
                  </div>
                  <p className="text-sm text-gray-600 text-center">
                    История #{i}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <a
                href="https://t.me/+0ifj5RsF7KcxNDli"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-pink-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-pink-600 transition-all duration-300 shadow-xl hover:shadow-2xl"
              >
                Смотреть все истории в Telegram
              </a>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="glass-card rounded-3xl p-8 md:p-12 warm-glow max-w-4xl mx-auto">
              <h3 className="text-3xl md:text-4xl font-bold text-amber-600 mb-6">
                💪 Ты готова сделать первый шаг к новой себе?
              </h3>
              <p className="text-xl text-gray-700 mb-6">
                Представь, что через неделю ты проснешься и подумаешь: &quot;Слава богу, это позади&quot;
              </p>
              <p className="text-lg text-gray-600 mb-8 italic">
                Начни свой путь к новой себе — мы рядом, чтобы поддержать тебя
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="http://instagram.com/hope_club28"
          target="_blank"
          rel="noopener noreferrer"
                  className="bg-rose-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-rose-600 transition-all duration-300 shadow-2xl hover:shadow-pink-500/25"
                >
                  📸 Пиши &quot;ДЕМО&quot; в Instagram
        </a>
        <a
                  href="https://t.me/+0ifj5RsF7KcxNDli"
          target="_blank"
          rel="noopener noreferrer"
                  className="bg-blue-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-600 transition-all duration-300 shadow-xl hover:shadow-2xl"
                >
                  ✈️ Пиши &quot;ДЕМО&quot; в Telegram
                </a>
              </div>

              {/* Additional nudge */}
              <div className="mt-8">
                <div className="bg-pink-50 rounded-2xl p-6">
                  <p className="text-sm text-gray-600 italic mb-4">
                    💕 &quot;Я думала, что после расставания моя жизнь кончена. Но благодаря этому курсу я наконец-то обрела себя и стала по-настоящему счастливой&quot;
                  </p>
                  <p className="text-xs text-gray-500">
                    — Одна из участниц нашего сообщества
                  </p>
                </div>
                <p className="text-sm text-gray-500 italic mt-4">
                  🌟 Не откладывай свое счастье. Ты заслуживаешь быть любимой и любить себя
                </p>
                <p className="text-xs text-gray-400 mt-2 font-semibold">
                  Пиши &quot;ДЕМО&quot; прямо сейчас — твоя новая жизнь начинается сегодня!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cover Team Section - Special Design with Visible Faces */}
      <section className="relative py-20 overflow-hidden">
        {/* Full cover image as main design element */}
        <div className="absolute inset-0">
          <OptimizedImage
            webpSrc="/images/team/webp/cover-team.webp"
            jpgSrc="/images/team/optimized/cover-team.jpg"
            alt="Hope Club Team"
            className="w-full h-full object-cover high-quality-image"
            fallbackEmoji=""
            fallbackBg="bg-amber-50"
          />
        </div>
        
        {/* NO OVERLAY - Photo is fully visible */}
        
        {/* Content with animation - appears after photo loads */}
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in-up">
            <div className="glass-card rounded-3xl p-8 md:p-12 warm-glow bg-white/95 backdrop-blur-sm animate-slide-in">
              <h2 className="text-4xl md:text-5xl font-bold text-amber-600 mb-6">
                💝 Мы создали этот проект, потому что сами прошли через боль
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                Каждая из нас знает, насколько разрушительным может быть опыт токсичных отношений. 
                Мы понимаем, как не хватает поддержки и понимания в такие моменты.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center animate-fade-in-delay-1">
                  <div className="w-16 h-16 bg-rose-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">💔</span>
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">Мы знаем боль</h3>
                  <p className="text-sm text-gray-600">Прошли через токсичные отношения и понимаем ваши чувства</p>
                </div>
                <div className="text-center animate-fade-in-delay-2">
                  <div className="w-16 h-16 bg-pink-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🤝</span>
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">Мы знаем выход</h3>
                  <p className="text-sm text-gray-600">Нашли путь к исцелению и готовы поделиться опытом</p>
                </div>
                <div className="text-center animate-fade-in-delay-3">
                  <div className="w-16 h-16 bg-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🌟</span>
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">Мы знаем результат</h3>
                  <p className="text-sm text-gray-600">Помогли уже многим девушкам обрести счастье</p>
                </div>
              </div>
              <div className="text-center animate-fade-in-delay-4">
                <p className="text-lg text-amber-600 font-semibold mb-4">
                  Наша цель — помочь вам своими знаниями и опытом
                </p>
                <a
                  href="https://t.me/+0ifj5RsF7KcxNDli"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-rose-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-rose-600 transition-all duration-300 shadow-2xl hover:shadow-rose-500/25"
                >
                  ✈️ Начать путь к исцелению
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-amber-50 relative overflow-hidden">
        {/* Background cover image - clean version without text */}
        <div className="absolute inset-0 opacity-35">
          <img
            src="/images/team/webp/cover-team-clean.webp"
            alt="Hope Club Team Background"
            className="w-full h-full object-cover high-quality-image"
            onError={(e) => {
              e.currentTarget.src = "/images/team/optimized/cover-team-clean.jpg";
            }}
          />
        </div>
        
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-20 left-20 w-40 h-40 bg-pink-200 rounded-full blur-2xl"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-amber-200 rounded-full blur-2xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-amber-600 mb-4">
              🌟 Наша команда
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Профессиональные гештальт-психологи и консультанты с опытом работы с созависимостью и нарциссической травмой
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4">
                <OptimizedImage
                  webpSrc="/images/team/webp/alesya.webp"
                  jpgSrc="/images/team/optimized/alesya.jpg"
                  alt="Алеся Такун - Психолог, Гештальт-консультант"
                  className="w-full h-full rounded-full object-cover border-4 border-rose-200 shadow-lg"
                  fallbackEmoji="👩‍⚕️"
                  fallbackBg="bg-rose-400"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Алеся Такун</h3>
              <p className="text-sm text-gray-600 mb-3">Психолог, Гештальт-консультант</p>
              <div className="space-y-2 text-left">
                <p className="text-sm text-gray-700">• Белорусский государственный университет М. Танка, специальность - Психология семейных отношений</p>
                <p className="text-sm text-gray-700">• Закончила 1 ступень «Основы гештальт-терапии», сейчас в процессе обучения на 2-й ступени (Московский Гештальт Институт)</p>
                <p className="text-sm text-gray-700">• Окончила спецкурс «Работа с нарциссической травмой» в гештальт-подходе</p>
                <p className="text-sm text-gray-700">• Завершает обучение в марте 2026</p>
              </div>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4">
                <OptimizedImage
                  webpSrc="/images/team/webp/lera.webp"
                  jpgSrc="/images/team/optimized/lera.jpg"
                  alt="Лера - Консультант"
                  className="w-full h-full rounded-full object-cover border-4 border-pink-200 shadow-lg"
                  fallbackEmoji="💬"
                  fallbackBg="bg-pink-400"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Лера</h3>
              <p className="text-sm text-gray-600 mb-3">Консультант</p>
              <div className="space-y-2 text-left">
                <p className="text-sm text-gray-700">• Более 12 лет работы в группах с зависимостью и созависимостью</p>
                <p className="text-sm text-gray-700">• Опыт индивидуальной и семейной психотерапии</p>
                <p className="text-sm text-gray-700">• Расставание - от полной зависимости от мужа до самостоятельности и целостности</p>
                <p className="text-sm text-gray-700">• Волонтерская деятельность в помощи женщинам пострадавшим от зависимости и созависимости</p>
              </div>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4">
                <OptimizedImage
                  webpSrc="/images/team/webp/veronika.webp"
                  jpgSrc="/images/team/optimized/veronika.jpg"
                  alt="Вероника - Психолог, Консультант"
                  className="w-full h-full rounded-full object-cover border-4 border-purple-200 shadow-lg"
                  fallbackEmoji="🧠"
                  fallbackBg="bg-purple-400"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Вероника</h3>
              <p className="text-sm text-gray-600 mb-3">Психолог, Консультант</p>
              <div className="space-y-2 text-left">
                <p className="text-sm text-gray-700">• Закончила Белорусский государственный университет "кафедра общей психологии"</p>
                <p className="text-sm text-gray-700">• Обучалась по гранту академии экспоненциального коучинга Михаила Саидова</p>
                <p className="text-sm text-gray-700">• Более 12 лет работа в группах с зависимостью и созависимостью</p>
                <p className="text-sm text-gray-700">• Опыт 12-шаговых программ</p>
                <p className="text-sm text-gray-700">• Прошла через болезненный развод с мужем, который был нарциссом и абьюзером</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="glass-card rounded-3xl p-8 md:p-12 warm-glow max-w-4xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold text-amber-600 mb-6">
                🎯 Наш подход к лечению
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="w-6 h-6 bg-rose-400 rounded-full flex items-center justify-center text-white text-xs mr-3 mt-0.5">💝</span>
                    <span className="text-gray-700">Гештальт-терапия для работы с травмой</span>
                  </div>
                  <div className="flex items-start">
                    <span className="w-6 h-6 bg-pink-400 rounded-full flex items-center justify-center text-white text-xs mr-3 mt-0.5">🎯</span>
                    <span className="text-gray-700">Работа с нарциссической травмой</span>
                  </div>
                  <div className="flex items-start">
                    <span className="w-6 h-6 bg-purple-400 rounded-full flex items-center justify-center text-white text-xs mr-3 mt-0.5">🛡️</span>
                    <span className="text-gray-700">Восстановление личных границ</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="w-6 h-6 bg-indigo-400 rounded-full flex items-center justify-center text-white text-xs mr-3 mt-0.5">💪</span>
                    <span className="text-gray-700">Самопринятие и самооценка</span>
                  </div>
                  <div className="flex items-start">
                    <span className="w-6 h-6 bg-orange-400 rounded-full flex items-center justify-center text-white text-xs mr-3 mt-0.5">🌱</span>
                    <span className="text-gray-700">Здоровые отношения с собой</span>
                  </div>
                  <div className="flex items-start">
                    <span className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center text-white text-xs mr-3 mt-0.5">✨</span>
                    <span className="text-gray-700">Трансформация и исцеление</span>
                  </div>
                  <div className="flex items-start">
                    <span className="w-6 h-6 bg-indigo-400 rounded-full flex items-center justify-center text-white text-xs mr-3 mt-0.5">👥</span>
                    <span className="text-gray-700">Групповая поддержка и взаимопомощь</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Photo Section - Well Visible Faces */}
      <section className="relative py-20 overflow-hidden">
        {/* Full cover image as main design element - clean version without text */}
        <div className="absolute inset-0">
          <OptimizedImage
            webpSrc="/images/team/webp/cover-team-clean.webp"
            jpgSrc="/images/team/optimized/cover-team-clean.jpg"
            alt="Hope Club Team - Clean Faces Visible"
            className="w-full h-full object-cover high-quality-image"
            fallbackEmoji=""
            fallbackBg="bg-amber-50"
          />
        </div>
        
        {/* NO OVERLAY - Photo is fully visible */}
        
        {/* Content with animation - appears after photo loads */}
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Image with faces visible */}
            <div className="text-center lg:text-left animate-fade-in-up">
              <div className="glass-card rounded-3xl p-8 warm-glow bg-white/95 backdrop-blur-sm animate-slide-in">
                <h2 className="text-3xl md:text-4xl font-bold text-amber-600 mb-6">
                  👥 Мы знаем, через что вы проходите
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Каждая из нас прошла через боль расставания и знает, как важно получить поддержку в такой момент.
                </p>
                <p className="text-base text-gray-600 mb-8">
                  Мы объединились, чтобы помочь другим девушкам найти путь к исцелению.
                </p>
                <a
                  href="https://t.me/+0ifj5RsF7KcxNDli"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-rose-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-rose-600 transition-all duration-300 shadow-2xl hover:shadow-rose-500/25"
                >
                  ✈️ Познакомиться с нами
                </a>
              </div>
            </div>
            
            {/* Right side - Team info */}
            <div className="space-y-6 animate-fade-in-up">
              <div className="glass-card rounded-2xl p-6 warm-glow bg-white/90 backdrop-blur-sm animate-slide-in-delay-1">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-rose-400 rounded-full flex items-center justify-center">
                    <span className="text-xl">👩‍⚕️</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">Алеся Такун</h3>
                    <p className="text-sm text-gray-600">Психолог, Гештальт-консультант</p>
                  </div>
                </div>
              </div>
              
              <div className="glass-card rounded-2xl p-6 warm-glow bg-white/90 backdrop-blur-sm animate-slide-in-delay-2">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-pink-400 rounded-full flex items-center justify-center">
                    <span className="text-xl">💬</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">Лера</h3>
                    <p className="text-sm text-gray-600">Консультант с 12-летним опытом</p>
                  </div>
                </div>
              </div>
              
              <div className="glass-card rounded-2xl p-6 warm-glow bg-white/90 backdrop-blur-sm animate-slide-in-delay-3">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-400 rounded-full flex items-center justify-center">
                    <span className="text-xl">🧠</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">Вероника</h3>
                    <p className="text-sm text-gray-600">Психолог, Консультант</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Description Section */}
      <section id="program" className="py-20 bg-white/90 relative overflow-hidden">
        {/* Background cover image */}
        <div className="absolute inset-0 opacity-35">
          <img
            src="/images/team/webp/cover-final.webp"
            alt="Hope Club Benefits Background"
            className="w-full h-full object-cover high-quality-image"
            onError={(e) => {
              e.currentTarget.src = "/images/team/optimized/cover-final.jpg";
            }}
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-amber-600 mb-4">
              💝 Курс реабилитации после токсичных и деструктивных отношений
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              Восстановление себя и возвращение к себе
            </p>
            <div className="glass-card rounded-3xl p-8 md:p-12 warm-glow max-w-5xl mx-auto">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Разрушительные отношения остались позади, но их последствия все еще отравляют жизнь? 
                Мы помогаем пережить расставание, восстановить самооценку и заложить фундамент счастливой жизни, наполненной любовью к себе.
              </p>
              <p className="text-xl font-semibold text-amber-600 mb-6">
                Наша программа реабилитации длится 28 дней. За эти 4 недели вы не просто переживете расставание, а пройдете этот путь осознанно, с поддержкой.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="glass-card rounded-3xl p-8 warm-glow">
              <h3 className="text-2xl font-bold text-amber-600 mb-6">🎯 Вы сможете:</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="w-6 h-6 bg-rose-400 rounded-full flex items-center justify-center text-white text-xs mr-3 mt-0.5">✓</span>
                  <span className="text-gray-700">Прожить и отпустить: безопасно пережить боль, горечь и злость</span>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 bg-pink-400 rounded-full flex items-center justify-center text-white text-xs mr-3 mt-0.5">✓</span>
                  <span className="text-gray-700">Понять истоки: разобраться, почему вы оказались в таких отношениях и что вас в них удерживало</span>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 bg-purple-400 rounded-full flex items-center justify-center text-white text-xs mr-3 mt-0.5">✓</span>
                  <span className="text-gray-700">Восстановить себя: вернуть любовь к себе, самоценность и внутреннюю опору</span>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 bg-indigo-400 rounded-full flex items-center justify-center text-white text-xs mr-3 mt-0.5">✓</span>
                  <span className="text-gray-700">Научиться жить заново: сфокусироваться на своем будущем и построить здоровые отношения</span>
                </li>
              </ul>
            </div>

            <div className="glass-card rounded-3xl p-8 warm-glow">
              <h3 className="text-2xl font-bold text-amber-600 mb-6">💝 Этот курс для вас, если вы:</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-rose-500 mr-3">1.</span>
                  <span className="text-gray-700">Не можете отпустить бывшие отношения, постоянно думаете о партнере и испытываете желание вернуться</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-500 mr-3">2.</span>
                  <span className="text-gray-700">Чувствуете, что ваша самооценка разрушена, и постоянно вините себя</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-3">3.</span>
                  <span className="text-gray-700">Не понимаете, как жить дальше после расставания, потеряли вкус и радость жизни</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-500 mr-3">4.</span>
                  <span className="text-gray-700">Хотите разобраться, что привело вас в эти отношения, чтобы больше не повторять болезненный сценарий</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3">5.</span>
                  <span className="text-gray-700">Испытываете чувство вины, стыда и собственной неполноценности</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-3">6.</span>
                  <span className="text-gray-700">Все еще находитесь в отношениях, но понимаете, что они токсичны</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 mr-3">7.</span>
                  <span className="text-gray-700">Хотите восстановить свои личные границы и ощущение собственной ценности</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="glass-card rounded-3xl p-8 md:p-12 warm-glow max-w-5xl mx-auto mb-16">
            <h3 className="text-2xl font-bold text-amber-600 mb-6 text-center">🌟 Результаты прохождения курса:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="w-6 h-6 bg-rose-400 rounded-full flex items-center justify-center text-white text-xs mr-3 mt-0.5">✨</span>
                  <span className="text-gray-700">Проживете расставание и эмоционально отпустите партнера</span>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 bg-pink-400 rounded-full flex items-center justify-center text-white text-xs mr-3 mt-0.5">💪</span>
                  <span className="text-gray-700">Восстановите эмоциональное и психическое равновесие</span>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 bg-purple-400 rounded-full flex items-center justify-center text-white text-xs mr-3 mt-0.5">🛡️</span>
                  <span className="text-gray-700">Прекратите самообвинение и обесценивание, увидите ситуацию в реальном свете</span>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 bg-indigo-400 rounded-full flex items-center justify-center text-white text-xs mr-3 mt-0.5">💝</span>
                  <span className="text-gray-700">Научитесь заботиться о себе, радоваться жизни и ценить себя</span>
                </li>
              </ul>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="w-6 h-6 bg-orange-400 rounded-full flex items-center justify-center text-white text-xs mr-3 mt-0.5">🧠</span>
                  <span className="text-gray-700">Поймете и проработаете глубинные установки, которые привели вас к этим отношениям</span>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center text-white text-xs mr-3 mt-0.5">🏗️</span>
                  <span className="text-gray-700">Сформируете здоровую внутреннюю опору</span>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 bg-amber-400 rounded-full flex items-center justify-center text-white text-xs mr-3 mt-0.5">📋</span>
                  <span className="text-gray-700">Составите и начнете реализовывать план по построению новой, счастливой жизни</span>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 bg-rose-400 rounded-full flex items-center justify-center text-white text-xs mr-3 mt-0.5">👥</span>
                  <span className="text-gray-700">Обретете поддерживающее сообщество единомышленниц</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <div className="glass-card rounded-3xl p-8 md:p-12 warm-glow max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-amber-600 mb-6">📚 Как устроена программа?</h3>
              <p className="text-lg text-gray-700 mb-6">
                Курс рассчитан на 28 дней и разделен на 4 тематических блока (по неделе на каждый блок).
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-rose-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📹</span>
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">Формат</h4>
                  <p className="text-sm text-gray-600">Каждый день вы получаете теоретические материалы и практические задания в формате видеоуроков и текстовых файлов</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-pink-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">⏰</span>
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">Доступ</h4>
                  <p className="text-sm text-gray-600">Все материалы останутся с вами на 6 месяцев</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🤝</span>
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">Поддержка</h4>
                  <p className="text-sm text-gray-600">Вы сможете задавать вопросы кураторам в закрытом чате, а еженедельные вебинары и групповая терапия помогут разобрать сложные моменты</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cover Final Section - Special Design with Visible Image */}
      <section className="relative py-20 overflow-hidden">
        {/* Full cover image as main design element */}
        <div className="absolute inset-0">
          <OptimizedImage
            webpSrc="/images/team/webp/cover-final.webp"
            jpgSrc="/images/team/optimized/cover-final.jpg"
            alt="Hope Club Final"
            className="w-full h-full object-cover high-quality-image"
            fallbackEmoji=""
            fallbackBg="bg-amber-50"
          />
        </div>
        
        {/* Gradient overlay to make image more visible */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/40"></div>
        
        {/* Content overlay */}
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <div className="glass-card rounded-3xl p-8 md:p-12 warm-glow max-w-5xl mx-auto bg-white/95 backdrop-blur-sm">
            <h2 className="text-4xl md:text-5xl font-bold text-amber-600 mb-6">
              🌟 Наша программа создана специально для женщин
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Для тех, кто столкнулся с токсичными, абьюзивными или нарциссическими отношениями, 
              для тех, кто привык растворяться в партнере, терять себя и снова и снова повторять 
              один и тот же разрушительный сценарий.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="text-left">
                <h3 className="text-2xl font-bold text-amber-600 mb-4">🎯 Мы понимаем вашу ситуацию:</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-rose-500 mr-3">•</span>
                    <span>Не можете отпустить бывшие отношения</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-3">•</span>
                    <span>Самооценка разрушена</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-3">•</span>
                    <span>Не понимаете, как жить дальше</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-500 mr-3">•</span>
                    <span>Испытываете чувство вины и стыда</span>
                  </li>
                </ul>
              </div>
              <div className="text-left">
                <h3 className="text-2xl font-bold text-amber-600 mb-4">💝 Мы знаем, как помочь:</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-rose-500 mr-3">•</span>
                    <span>Прожить и отпустить боль</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-3">•</span>
                    <span>Восстановить самооценку</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-3">•</span>
                    <span>Найти внутреннюю опору</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-500 mr-3">•</span>
                    <span>Построить здоровые отношения</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="text-center">
              <p className="text-lg text-amber-600 font-semibold mb-6">
                Если ты узнала себя в этом описании, чувствуешь боль и растерянность — 
                мы готовы помочь тебе сделать первый шаг навстречу новой жизни.
              </p>
              <a
                href="https://t.me/+0ifj5RsF7KcxNDli"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-rose-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-rose-600 transition-all duration-300 shadow-2xl hover:shadow-rose-500/25"
              >
                ✈️ Написать нам в Telegram
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Scientific Approach Section */}
      <section id="approach" className="py-20 bg-white/90">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-amber-600 mb-4">
              🔬 Научный подход к трансформации
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Курс построен на интеграции современных психологических методик, доказавших свою эффективность в преодолении кризисов
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="glass-card p-6 rounded-2xl warm-glow">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-rose-400 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">🧠</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-amber-600 mb-2">КПТ (Когнитивно-поведенческая терапия)</h4>
                    <p className="text-gray-600">Изменение негативных мыслительных паттернов и поведенческих стереотипов</p>
                  </div>
                </div>
              </div>

              <div className="glass-card p-6 rounded-2xl warm-glow">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-pink-400 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">💔</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-amber-600 mb-2">Теория привязанности</h4>
                    <p className="text-gray-600">Исследование стилей привязанности и их влияние на отношения</p>
                  </div>
                </div>
              </div>

              <div className="glass-card p-6 rounded-2xl warm-glow">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-400 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">👶</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-amber-600 mb-2">Работа с внутренним ребенком</h4>
                    <p className="text-gray-600">Исцеление детских травм и восстановление внутренней гармонии</p>
                  </div>
                </div>
              </div>

              <div className="glass-card p-6 rounded-2xl warm-glow">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-indigo-400 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">👥</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-amber-600 mb-2">Групповая терапия</h4>
                    <p className="text-gray-600">Взаимная поддержка, обмен опытом и формирование здоровых социальных связей в безопасной среде</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card p-8 rounded-3xl warm-glow">
              <h3 className="text-2xl font-bold text-amber-600 mb-6 text-center">
                📊 Результаты наших участниц
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-rose-50 rounded-xl">
                  <span className="font-semibold text-gray-800">Увеличение самооценки</span>
                  <span className="text-2xl font-bold text-amber-600">+85%</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-pink-50 rounded-xl">
                  <span className="font-semibold text-gray-800">Снижение тревоги</span>
                  <span className="text-2xl font-bold text-amber-600">+70%</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-purple-50 rounded-xl">
                  <span className="font-semibold text-gray-800">Новые отношения</span>
                  <span className="text-2xl font-bold text-amber-600">+60%</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-indigo-50 rounded-xl">
                  <span className="font-semibold text-gray-800">Самопринятие</span>
                  <span className="text-2xl font-bold text-amber-600">+90%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-rose-50 relative overflow-hidden">
        {/* Background cover image */}
        <div className="absolute inset-0 opacity-35">
          <img
            src="/images/team/webp/cover-team-clean.webp"
            alt="Hope Club Contact Background"
            className="w-full h-full object-cover high-quality-image"
            onError={(e) => {
              e.currentTarget.src = "/images/team/optimized/cover-team-clean.jpg";
            }}
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-amber-600 mb-4">
              🚀 Ты не одна — мы поможем тебе исцелиться
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Получи бесплатный демо-курс и поддержку специалиста, который действительно понимает твою боль
            </p>
            <p className="text-sm text-gray-500 italic mb-6">
              💭 Знаешь, мы все были на твоем месте. И мы знаем, как помочь тебе выбраться из этой боли
            </p>

            {/* Free offer reminder */}
            <div className="glass-card rounded-2xl p-6 warm-glow max-w-md mx-auto mb-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600 mb-2">БЕСПЛАТНО</div>
                <div className="text-gray-600">3-дневный курс + консультация</div>
                <div className="text-sm text-gray-500 mt-2">🎁 Доступ к курсу через Instagram</div>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="glass-card rounded-3xl p-8 md:p-12 warm-glow">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-bold text-amber-600 mb-6">📝 Записаться на курс</h3>

                  <form className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Ваше имя *</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition-all duration-300 bg-white/70 backdrop-blur-sm"
                        placeholder="Введите ваше имя"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all duration-300 bg-white/70 backdrop-blur-sm"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Телефон</label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300 bg-white/70 backdrop-blur-sm"
                        placeholder="+7 (999) 123-45-67"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Расскажите о себе</label>
                      <textarea
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300 bg-white/70 backdrop-blur-sm resize-none"
                        placeholder="Что вас привело к этому курсу? Есть ли особые пожелания?"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-rose-500 text-white py-4 px-6 rounded-xl font-bold text-xl hover:bg-rose-600 transition-all duration-300 shadow-2xl hover:shadow-pink-500/25 transform hover:scale-105"
                    >
                      🎯 Начать трансформацию
                    </button>
                  </form>
                </div>

                <div className="space-y-8">
                  <div className="glass-card p-6 rounded-2xl bg-gradient-to-br from-rose-50 to-pink-50">
                    <h4 className="text-lg font-semibold text-amber-600 mb-4">🎁 Что вы получите сразу после оплаты:</h4>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-rose-500 mr-3">✨</span>
                        <span>Персональная консультация в подарок (30 мин)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-pink-500 mr-3">📧</span>
                        <span>Доступ к личному кабинету</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-500 mr-3">👥</span>
                        <span>Приглашение в закрытый чат участниц</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-indigo-500 mr-3">📚</span>
                        <span>Первые материалы курса</span>
                      </li>
                    </ul>
                  </div>

                  <div className="glass-card p-6 rounded-2xl bg-gradient-to-br from-pink-50 to-purple-50">
                    <h4 className="text-lg font-semibold text-amber-600 mb-4">🎯 Следующие шаги:</h4>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <span className="w-6 h-6 bg-rose-400 rounded-full flex items-center justify-center text-white text-xs mr-3 mt-0.5">1️⃣</span>
                        <span className="text-gray-700">Напиши нам в Instagram</span>
                      </div>
                      <div className="flex items-start">
                        <span className="w-6 h-6 bg-pink-400 rounded-full flex items-center justify-center text-white text-xs mr-3 mt-0.5">2️⃣</span>
                        <span className="text-gray-700">Получи доступ к бесплатному курсу</span>
                      </div>
                      <div className="flex items-start">
                        <span className="w-6 h-6 bg-purple-400 rounded-full flex items-center justify-center text-white text-xs mr-3 mt-0.5">3️⃣</span>
                        <span className="text-gray-700">Запишись на бесплатную консультацию</span>
                      </div>
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="glass-card p-4 rounded-xl bg-amber-50">
                      <p className="text-sm text-gray-600">
                        💝 <strong>Полностью бесплатно</strong> для всех, кто готов начать путь к исцелению
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">💝</span>
                </div>
                <span className="text-xl font-bold">Психологическая помощь</span>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Профессиональная поддержка в период восстановления после расставания.
                Вместе мы преодолеем кризис и построим счастливое будущее.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Навигация</h3>
              <ul className="space-y-2">
                <li><a href="#program" className="text-gray-300 hover:text-amber-400 transition-colors">Программа</a></li>
                <li><a href="#team" className="text-gray-300 hover:text-pink-400 transition-colors">Команда</a></li>
                <li><a href="#approach" className="text-gray-300 hover:text-purple-400 transition-colors">Подход</a></li>
                <li><a href="#contact" className="text-gray-300 hover:text-indigo-400 transition-colors">Контакты</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Контакты</h3>
              <div className="space-y-2 text-gray-300">
                <a
                  href="https://t.me/+0ifj5RsF7KcxNDli"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 hover:text-pink-400 transition-colors"
                >
                  <span>✈️</span>
                  <span>@hope_club28</span>
                </a>
                <p>📧 info@hopeclub.by</p>
                <p>📱 +375 (29) 123-45-67</p>
                <p>🕒 Пн-Пт 9:00-18:00 (МСК+1)</p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Как начать? 🚀</h3>
              <div className="space-y-2 text-gray-300">
                <p className="text-sm">📱 Пиши &quot;ДЕМО&quot; в Telegram</p>
                <p className="text-sm">💬 Получи бесплатную консультацию</p>
                <p className="text-sm">🎓 Пройди демо-курс за 3 дня</p>
                <p className="text-sm">🌟 Начни трансформацию прямо сейчас</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400">&copy; 2025 Hope Club. Все права защищены.</p>
            <p className="text-gray-500 text-sm mt-2">Сделано с ❤️ для тех, кто ищет исцеление</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
