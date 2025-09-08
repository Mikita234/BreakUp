export function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-50 via-white to-slate-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-br from-teal-200 to-pink-200 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-gradient-to-br from-yellow-200 to-purple-200 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 right-10 w-24 h-24 bg-gradient-to-br from-pink-200 to-teal-200 rounded-full blur-xl"></div>
      </div>

      {/* Floating shapes */}
      <div className="floating-shape w-8 h-8 top-32 right-32"></div>
      <div className="floating-shape w-6 h-6 bottom-40 left-32"></div>
      <div className="floating-shape w-10 h-10 top-1/2 left-16"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Enhanced Image placeholder */}
          <div className="relative group">
            <div className="aspect-square bg-gradient-to-br from-teal-100 via-pink-100 to-yellow-100 rounded-3xl shadow-2xl flex items-center justify-center interactive-card warm-glow">
              <div className="text-center relative z-10">
                <div className="w-32 h-32 bg-gradient-to-br from-white to-gray-50 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl border-4 border-white">
                  <svg className="w-16 h-16 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div className="glass-card px-6 py-3 rounded-full inline-block">
                  <p className="text-gray-700 font-medium">👋 Привет! Я ваш психолог</p>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>

          {/* Enhanced Content */}
          <div>
            <div className="inline-block mb-6">
              <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                🌟 Обо мне
              </h2>
              <div className="w-full h-1 bg-gradient-to-r from-teal-400 via-pink-400 to-yellow-400 rounded-full"></div>
            </div>

            <div className="space-y-6 leading-relaxed">
              <div className="glass-card p-6 rounded-2xl warm-glow">
                <p className="text-lg text-gray-700">
                  👩‍⚕️ Я <strong className="gradient-text">профессиональный психолог</strong> с многолетним опытом работы с людьми,
                  пережившими расставание. Понимаю, насколько сложным может быть этот период,
                  и знаю, как помочь вам пройти через него с минимальными потерями.
                </p>
              </div>

              <div className="glass-card p-6 rounded-2xl warm-glow">
                <p className="text-lg text-gray-700">
                  🎯 Моя <strong className="gradient-text">специализация</strong> — кризисная психология и работа с эмоциональными травмами.
                  Я помогаю клиентам разобраться в своих чувствах, принять ситуацию и двигаться вперед,
                  сохраняя уважение к себе и своему прошлому опыту.
                </p>
              </div>

              <div className="glass-card p-6 rounded-2xl warm-glow">
                <p className="text-lg text-gray-700">
                  💝 В работе использую <strong className="gradient-text">современные методы психотерапии</strong>, адаптированные под индивидуальные
                  особенности каждого человека. Главное для меня — создать атмосферу доверия и поддержки,
                  где вы сможете открыто говорить о своих переживаниях.
                </p>
              </div>
            </div>

            {/* Enhanced Credentials */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="interactive-card glass-card p-6 rounded-2xl warm-glow">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-teal-400 to-pink-400 rounded-xl flex items-center justify-center mr-3">
                    <span className="text-white font-bold text-sm">🎓</span>
                  </div>
                  <h4 className="font-semibold text-gray-800 gradient-text">Образование</h4>
                </div>
                <p className="text-gray-600 text-sm">МГУ им. М.В. Ломоносова<br/>Психологический факультет</p>
              </div>

              <div className="interactive-card glass-card p-6 rounded-2xl warm-glow">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-purple-400 rounded-xl flex items-center justify-center mr-3">
                    <span className="text-white font-bold text-sm">⚡</span>
                  </div>
                  <h4 className="font-semibold text-gray-800 gradient-text">Опыт работы</h4>
                </div>
                <p className="text-gray-600 text-sm">8+ лет<br/>Специализация на кризисной психологии</p>
              </div>

              <div className="interactive-card glass-card p-6 rounded-2xl warm-glow">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-indigo-400 rounded-xl flex items-center justify-center mr-3">
                    <span className="text-white font-bold text-sm">🧠</span>
                  </div>
                  <h4 className="font-semibold text-gray-800 gradient-text">Подход</h4>
                </div>
                <p className="text-gray-600 text-sm">Интегративная терапия<br/>Когнитивно-поведенческий подход</p>
              </div>

              <div className="interactive-card glass-card p-6 rounded-2xl warm-glow">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-indigo-400 to-teal-400 rounded-xl flex items-center justify-center mr-3">
                    <span className="text-white font-bold text-sm">❤️</span>
                  </div>
                  <h4 className="font-semibold text-gray-800 gradient-text">Клиенты</h4>
                </div>
                <p className="text-gray-600 text-sm">500+ человек<br/>Помогли восстановиться после расставаний</p>
              </div>
            </div>

            {/* Call to action */}
            <div className="mt-8 text-center">
              <div className="inline-block glass-card px-8 py-4 rounded-full warm-glow">
                <p className="text-gray-700">
                  ✨ <strong className="gradient-text">Готова помочь вам найти путь к исцелению</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
