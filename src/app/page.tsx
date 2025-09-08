export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-sm shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-pink-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">💝</span>
              </div>
              <h1 className="text-2xl font-bold gradient-text">
                Hope Club Беларусь
              </h1>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-gray-700 hover:text-yellow-600 transition-colors font-medium">Услуги</a>
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
            <button className="md:hidden p-2 rounded-lg text-gray-700 hover:text-pink-600 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden mt-4 pt-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <a href="#services" className="text-gray-700 hover:text-yellow-600 transition-colors font-medium py-2">Услуги</a>
              <a href="#team" className="text-gray-700 hover:text-pink-600 transition-colors font-medium py-2">Команда</a>
              <a href="#approach" className="text-gray-700 hover:text-purple-600 transition-colors font-medium py-2">Подход</a>
              <a href="#contact" className="text-gray-700 hover:text-indigo-600 transition-colors font-medium py-2">Контакты</a>
              <a
                href="https://t.me/+0ifj5RsF7KcxNDli"
            target="_blank"
            rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-700 hover:text-pink-600 transition-colors font-medium py-2"
              >
                <span>✈️</span>
                <span>@hope_club28</span>
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
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
              <span className="block gradient-text">
                Я понимаю твою боль
              </span>
              <span className="block text-gray-800">
                после расставания
              </span>
              <span className="block bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
                Бесплатный демо-курс
              </span>
            </h1>

            <div className="w-full h-1 bg-gradient-to-r from-rose-400 via-pink-400 to-purple-400 rounded-full mb-8"></div>

            {/* Subtle nudge */}
            <div className="text-center mb-6">
              <p className="text-sm text-gray-500 italic">
                💭 Знаешь, многие девушки проходят через то же самое... И находят выход
              </p>
              <p className="text-xs text-gray-400 mt-2">
                Пиши &quot;ДЕМО&quot; в Telegram @hope_club28 — и ты не одна в этом пути
              </p>
            </div>

            <div className="max-w-5xl mx-auto mb-12">
              <div className="glass-card rounded-3xl p-8 md:p-10 warm-glow relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-rose-200/30 rounded-full"></div>
                <div className="absolute bottom-4 left-4 w-8 h-8 bg-pink-200/30 rounded-full"></div>

                <p className="text-xl md:text-2xl text-gray-700 leading-relaxed relative z-10">
                  💔 <strong className="gradient-text">Я знаю, как это больно</strong> — когда после расставания кажется, что мир рухнул.
                  <br />
                  <span className="text-lg">Ты просыпаешься утром и думаешь: &quot;Почему именно я? Что я сделала не так?&quot; А потом приходят воспоминания о тех моментах, когда все было хорошо...</span>
                  <br /><br />
                  <span className="text-rose-600 font-semibold">Дорогая, ты не одна в этом.</span> Мы все проходили через это. Через ночи без сна, через слезы, через попытки понять, что же пошло не так.
                  И мы нашли выход — через осознание, через работу с собой, через поддержку.
                  <br /><br />
                  <span className="text-indigo-600 font-medium">Бесплатный 3-дневный демо-курс + личная поддержка специалиста</span>
                  <br />
                  <span className="text-base text-gray-600 italic">Потому что ты заслуживаешь быть счастливой, а не мучиться от прошлого</span>
                </p>
              </div>
            </div>
          </div>

          {/* Course Info */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="glass-card rounded-3xl p-6 md:p-8 warm-glow">
              <div className="grid md:grid-cols-2 gap-6 items-center">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold gradient-text mb-4">
                    🌟 Бесплатный 3-дневный курс
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Начни свой путь к исцелению прямо сейчас! Бесплатный курс поможет тебе
                    прожить первые шаги после расставания и понять, что ты не одна.
                  </p>
                  <div className="text-2xl font-bold gradient-text">
                    💝 Более 30 девушкам уже помогли
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold gradient-text mb-2">
                    Бесплатная консультация
                  </div>
                  <div className="text-lg text-gray-600 mb-4">
                    для каждой девушки
                  </div>
                  <div className="text-sm text-gray-500">
                    Пиши &quot;ДЕМО&quot; в Instagram
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="https://t.me/+0ifj5RsF7KcxNDli"
          target="_blank"
          rel="noopener noreferrer"
              className="group bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 text-white px-10 py-5 rounded-full font-bold text-xl hover:from-rose-600 hover:via-pink-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-pink-500/25"
            >
              <span className="flex items-center">
                ✈️ Пиши &quot;ДЕМО&quot; в Telegram
                <svg className="w-6 h-6 ml-3 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
        </a>
        <a
              href="https://t.me/+0ifj5RsF7KcxNDli"
              target="_blank"
              rel="noopener noreferrer"
              className="group glass-card text-gray-800 px-10 py-5 rounded-full font-bold text-xl hover:bg-white transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl border-2 border-rose-200 hover:border-rose-300"
            >
              <span className="flex items-center">
                💬 Бесплатная консультация
                <svg className="w-6 h-6 ml-3 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </span>
            </a>
          </div>

          {/* Program Overview */}
          <div className="mt-20 max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
                📋 Как это работает?
              </h3>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Мы прошли этот путь и знаем все его этапы. Мы будем бережно вести тебя за руку через 4 недели трансформации.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="interactive-card glass-card rounded-2xl p-6 warm-glow text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-rose-400 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">1️⃣</span>
                </div>
                <h4 className="text-lg font-semibold gradient-text mb-2">Неделя 1</h4>
                <h5 className="font-bold text-gray-800 mb-2">ПРИЗНАНИЕ</h5>
                <p className="text-sm text-gray-600">Выпускаем боль, злость и обиду. Смотрим правде в глаза и честно прощаемся.</p>
              </div>

              <div className="interactive-card glass-card rounded-2xl p-6 warm-glow text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">2️⃣</span>
                </div>
                <h4 className="text-lg font-semibold gradient-text mb-2">Неделя 2</h4>
                <h5 className="font-bold text-gray-800 mb-2">ПРОЩЕНИЕ СЕБЯ</h5>
                <p className="text-sm text-gray-600">Снимаем груз вины и стыда. Учимся слышать и любить себя снова.</p>
              </div>

              <div className="interactive-card glass-card rounded-2xl p-6 warm-glow text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-indigo-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">3️⃣</span>
                </div>
                <h4 className="text-lg font-semibold gradient-text mb-2">Неделя 3</h4>
                <h5 className="font-bold text-gray-800 mb-2">ОПОРЫ</h5>
                <p className="text-sm text-gray-600">Формируем новую жизнь, наполненную заботой о себе. Находим внутренний стержень.</p>
              </div>

              <div className="interactive-card glass-card rounded-2xl p-6 warm-glow text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-400 to-rose-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">4️⃣</span>
                </div>
                <h4 className="text-lg font-semibold gradient-text mb-2">Неделя 4</h4>
                <h5 className="font-bold text-gray-800 mb-2">НОВАЯ ЖИЗНЬ</h5>
                <p className="text-sm text-gray-600">Ставим цели, зажигаем мечты и учимся смотреть в будущее с радостью.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section id="benefits" className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
              🎁 Что ждет тебя в нашем бесплатном курсе? Реальные шаги к новой жизни
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Представь: через 3 дня ты проснешься и почувствуешь, что боль уже не так сильна. Что у тебя есть план. Что ты не одна.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="interactive-card glass-card rounded-3xl p-8 warm-glow text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-rose-400 to-pink-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🎬</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Бесплатный демо-курс: первые шаги к себе</h3>
              <p className="text-gray-600">Ты получишь не просто уроки, а реальные инструменты, которые помогут тебе спать спокойно и просыпаться с надеждой</p>
            </div>

            <div className="interactive-card glass-card rounded-3xl p-8 warm-glow text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💬</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Личная консультация со специалистом</h3>
              <p className="text-gray-600">Представь, что у тебя есть человек, который действительно понимает твою ситуацию и может сказать: &quot;Я знаю, как тебе помочь&quot;</p>
            </div>

            <div className="interactive-card glass-card rounded-3xl p-8 warm-glow text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-indigo-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">👥</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Сообщество девушек, которые понимают</h3>
              <p className="text-gray-600">Когда ты слышишь истории других и понимаешь: &quot;Я не сумасшедшая, это действительно тяжело, но есть выход&quot;</p>
            </div>

            <div className="interactive-card glass-card rounded-3xl p-8 warm-glow text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-400 to-rose-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📱</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Реальные истории трансформации</h3>
              <p className="text-gray-600">&quot;Я тоже думала, что моя жизнь закончилась. А теперь я счастлива и люблю себя&quot; — такие истории ждут тебя</p>
            </div>

            <div className="interactive-card glass-card rounded-3xl p-8 warm-glow text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-rose-400 to-orange-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💝</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Поддержка в самые тяжелые моменты</h3>
              <p className="text-gray-600">Когда хочется позвонить бывшему, когда слезы льются сами собой — мы будем рядом и поможем пройти через это</p>
            </div>

            <div className="interactive-card glass-card rounded-3xl p-8 warm-glow text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-yellow-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
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
                  <h3 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
                    Бесплатный 3-дневный курс
                  </h3>
                  <p className="text-lg text-gray-700">
                    Начни свой путь к исцелению прямо сейчас! Бесплатный курс поможет тебе прожить первые шаги после расставания и понять, что ты не одна.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-6 mb-8">
                  <div className="flex items-center justify-center mb-4">
                    <span className="text-2xl mr-3">💝</span>
                    <h4 className="text-xl font-semibold text-gray-800">Более 30 девушкам уже помогли</h4>
                  </div>
                  <p className="text-gray-600">Бесплатная консультация для каждой девушки</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <a
                    href="http://instagram.com/hope_club28"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center bg-gradient-to-r from-pink-500 to-rose-500 text-white px-6 py-4 rounded-full font-bold text-lg hover:from-pink-600 hover:to-rose-600 transition-all duration-300 shadow-xl hover:shadow-2xl"
                  >
                    📸 Пиши &quot;ДЕМО&quot; в Instagram
                  </a>
                  <a
                    href="https://t.me/+0ifj5RsF7KcxNDli"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-4 rounded-full font-bold text-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-xl hover:shadow-2xl"
                  >
                    ✈️ Пиши &quot;ДЕМО&quot; в Telegram
                  </a>
                </div>

                <div className="text-center">
                  <a
                    href="https://t.me/+0ifj5RsF7KcxNDli"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block glass-card text-gray-800 px-8 py-4 rounded-full font-bold text-lg hover:bg-white transition-all duration-300 shadow-xl hover:shadow-2xl"
                  >
                    💬 Бесплатная консультация
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Instagram Feed Placeholder */}
          <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
              📸 Реальные истории преодоления кризиса после расставания
            </h3>
            <p className="text-xl text-gray-600 mb-8">
              Личные истории выздоровления, трансформации и восстановления после разрыва отношений
            </p>
          </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="interactive-card glass-card rounded-2xl p-4 warm-glow">
                  <div className="aspect-square bg-gradient-to-br from-pink-200 to-purple-200 rounded-xl flex items-center justify-center mb-3">
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
                className="inline-block bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-pink-600 hover:to-purple-600 transition-all duration-300 shadow-xl hover:shadow-2xl"
              >
                Смотреть все истории в Telegram
              </a>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="glass-card rounded-3xl p-8 md:p-12 warm-glow max-w-4xl mx-auto">
              <h3 className="text-3xl md:text-4xl font-bold gradient-text mb-6">
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
                  className="bg-gradient-to-r from-pink-500 via-rose-500 to-red-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-pink-600 hover:via-rose-600 hover:to-red-600 transition-all duration-300 shadow-2xl hover:shadow-pink-500/25"
                >
                  📸 Пиши &quot;ДЕМО&quot; в Instagram
        </a>
        <a
                  href="https://t.me/+0ifj5RsF7KcxNDli"
          target="_blank"
          rel="noopener noreferrer"
                  className="bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-blue-600 hover:via-purple-600 hover:to-indigo-600 transition-all duration-300 shadow-xl hover:shadow-2xl"
                >
                  ✈️ Пиши &quot;ДЕМО&quot; в Telegram
                </a>
              </div>

              {/* Additional nudge */}
              <div className="mt-8">
                <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-6">
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

      {/* Team Section */}
      <section id="team" className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-br from-teal-200 to-pink-200 rounded-full blur-2xl"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-gradient-to-br from-yellow-200 to-purple-200 rounded-full blur-2xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
              🌟 Наша команда
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Профессиональные гештальт-психологи и консультанты с опытом работы с созависимостью и нарциссической травмой
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-rose-400 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">👩‍⚕️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Алеся Такун</h3>
              <p className="text-sm text-gray-600 mb-3">Гештальт-психолог</p>
              <div className="space-y-2 text-left">
                <p className="text-sm text-gray-700">• Белорусский государственный университет</p>
                <p className="text-sm text-gray-700">• Обучение гештальт-терапии МГИ</p>
                <p className="text-sm text-gray-700">• Работа с нарциссической травмой</p>
                <p className="text-sm text-gray-700">• 2+ года практики</p>
              </div>
            </div>

            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💬</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Валерия</h3>
              <p className="text-sm text-gray-600 mb-3">Консультант</p>
              <div className="space-y-2 text-left">
                <p className="text-sm text-gray-700">• 12+ лет работы с зависимостями</p>
                <p className="text-sm text-gray-700">• Семейная психотерапия</p>
                <p className="text-sm text-gray-700">• Опыт выхода из созависимости</p>
                <p className="text-sm text-gray-700">• Волонтерская деятельность</p>
              </div>
            </div>

            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-purple-400 to-indigo-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🧠</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Вероника</h3>
              <p className="text-sm text-gray-600 mb-3">Психолог</p>
              <div className="space-y-2 text-left">
                <p className="text-sm text-gray-700">• БГУ, кафедра психологии</p>
                <p className="text-sm text-gray-700">• Коучинг Михаила Саидова</p>
                <p className="text-sm text-gray-700">• 12+ лет с зависимостями</p>
                <p className="text-sm text-gray-700">• Личный опыт исцеления</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="glass-card rounded-3xl p-8 md:p-12 warm-glow max-w-4xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold gradient-text mb-6">
                🎯 Наш подход к лечению
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="w-6 h-6 bg-gradient-to-br from-rose-400 to-pink-400 rounded-full flex items-center justify-center text-white text-xs mr-3 mt-0.5">💝</span>
                    <span className="text-gray-700">Гештальт-терапия для работы с травмой</span>
                  </div>
                  <div className="flex items-start">
                    <span className="w-6 h-6 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full flex items-center justify-center text-white text-xs mr-3 mt-0.5">🎯</span>
                    <span className="text-gray-700">Работа с нарциссической травмой</span>
                  </div>
                  <div className="flex items-start">
                    <span className="w-6 h-6 bg-gradient-to-br from-purple-400 to-indigo-400 rounded-full flex items-center justify-center text-white text-xs mr-3 mt-0.5">🛡️</span>
                    <span className="text-gray-700">Восстановление личных границ</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="w-6 h-6 bg-gradient-to-br from-indigo-400 to-rose-400 rounded-full flex items-center justify-center text-white text-xs mr-3 mt-0.5">💪</span>
                    <span className="text-gray-700">Самопринятие и самооценка</span>
                  </div>
                  <div className="flex items-start">
                    <span className="w-6 h-6 bg-gradient-to-br from-rose-400 to-orange-400 rounded-full flex items-center justify-center text-white text-xs mr-3 mt-0.5">🌱</span>
                    <span className="text-gray-700">Здоровые отношения с собой</span>
                  </div>
                  <div className="flex items-start">
                    <span className="w-6 h-6 bg-gradient-to-br from-orange-400 to-yellow-400 rounded-full flex items-center justify-center text-white text-xs mr-3 mt-0.5">✨</span>
                    <span className="text-gray-700">Трансформация и исцеление</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scientific Approach Section */}
      <section id="approach" className="py-20 bg-white/90">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
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
                  <div className="w-12 h-12 bg-gradient-to-br from-rose-400 to-pink-400 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">🧠</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold gradient-text mb-2">КПТ (Когнитивно-поведенческая терапия)</h4>
                    <p className="text-gray-600">Изменение негативных мыслительных паттернов и поведенческих стереотипов</p>
                  </div>
                </div>
              </div>

              <div className="glass-card p-6 rounded-2xl warm-glow">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-purple-400 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">💔</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold gradient-text mb-2">Теория привязанности</h4>
                    <p className="text-gray-600">Исследование стилей привязанности и их влияние на отношения</p>
                  </div>
                </div>
              </div>

              <div className="glass-card p-6 rounded-2xl warm-glow">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-indigo-400 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">👶</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold gradient-text mb-2">Работа с внутренним ребенком</h4>
                    <p className="text-gray-600">Исцеление детских травм и восстановление внутренней гармонии</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card p-8 rounded-3xl warm-glow">
              <h3 className="text-2xl font-bold gradient-text mb-6 text-center">
                📊 Результаты наших участниц
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-gradient-to-r from-rose-50 to-pink-50 rounded-xl">
                  <span className="font-semibold text-gray-800">Увеличение самооценки</span>
                  <span className="text-2xl font-bold gradient-text">+85%</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl">
                  <span className="font-semibold text-gray-800">Снижение тревоги</span>
                  <span className="text-2xl font-bold gradient-text">+70%</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl">
                  <span className="font-semibold text-gray-800">Новые отношения</span>
                  <span className="text-2xl font-bold gradient-text">+60%</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-gradient-to-r from-indigo-50 to-rose-50 rounded-xl">
                  <span className="font-semibold text-gray-800">Самопринятие</span>
                  <span className="text-2xl font-bold gradient-text">+90%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
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
                <div className="text-3xl font-bold gradient-text mb-2">БЕСПЛАТНО</div>
                <div className="text-gray-600">3-дневный курс + консультация</div>
                <div className="text-sm text-gray-500 mt-2">🎁 Доступ к курсу через Instagram</div>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="glass-card rounded-3xl p-8 md:p-12 warm-glow">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-bold gradient-text mb-6">📝 Записаться на курс</h3>

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
                      className="w-full bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 text-white py-4 px-6 rounded-xl font-bold text-xl hover:from-rose-600 hover:via-pink-600 hover:to-purple-600 transition-all duration-300 shadow-2xl hover:shadow-pink-500/25 transform hover:scale-105"
                    >
                      🎯 Начать трансформацию
                    </button>
                  </form>
                </div>

                <div className="space-y-8">
                  <div className="glass-card p-6 rounded-2xl bg-gradient-to-br from-rose-50 to-pink-50">
                    <h4 className="text-lg font-semibold gradient-text mb-4">🎁 Что вы получите сразу после оплаты:</h4>
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
                    <h4 className="text-lg font-semibold gradient-text mb-4">🎯 Следующие шаги:</h4>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <span className="w-6 h-6 bg-gradient-to-br from-rose-400 to-pink-400 rounded-full flex items-center justify-center text-white text-xs mr-3 mt-0.5">1️⃣</span>
                        <span className="text-gray-700">Напиши нам в Instagram</span>
                      </div>
                      <div className="flex items-start">
                        <span className="w-6 h-6 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full flex items-center justify-center text-white text-xs mr-3 mt-0.5">2️⃣</span>
                        <span className="text-gray-700">Получи доступ к бесплатному курсу</span>
                      </div>
                      <div className="flex items-start">
                        <span className="w-6 h-6 bg-gradient-to-br from-purple-400 to-indigo-400 rounded-full flex items-center justify-center text-white text-xs mr-3 mt-0.5">3️⃣</span>
                        <span className="text-gray-700">Запишись на бесплатную консультацию</span>
                      </div>
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="glass-card p-4 rounded-xl bg-gradient-to-r from-yellow-50 to-pink-50">
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
                <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-pink-500 rounded-full flex items-center justify-center">
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
                <li><a href="#services" className="text-gray-300 hover:text-yellow-400 transition-colors">Услуги</a></li>
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
