export function Hero() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden animated-bg">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        {/* Large decorative circles */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-br from-yellow-200/40 to-teal-200/40 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-br from-teal-200/30 to-yellow-200/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-pink-200/20 to-purple-200/20 rounded-full blur-2xl"></div>
      </div>

      {/* Floating geometric shapes */}
      <div className="floating-shape w-16 h-16 top-20 left-20"></div>
      <div className="floating-shape w-12 h-12 top-40 right-32"></div>
      <div className="floating-shape w-20 h-20 bottom-32 left-16"></div>
      <div className="floating-shape w-14 h-14 bottom-20 right-20"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Enhanced Main heading */}
          <div className="mb-6">
            <div className="inline-block">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-2">
                <span className="block gradient-text animate-pulse">Психологическая</span>
                <span className="block bg-gradient-to-r from-yellow-600 via-teal-600 to-pink-600 bg-clip-text text-transparent animate-pulse">
                  помощь при расставании
                </span>
              </h1>
              {/* Decorative underline */}
              <div className="w-full h-1 bg-gradient-to-r from-yellow-400 via-teal-400 to-pink-400 rounded-full mt-4 animate-pulse"></div>
            </div>
          </div>

          {/* Enhanced Subtitle */}
          <div className="glass-card rounded-2xl p-6 md:p-8 mb-8 max-w-4xl mx-auto warm-glow">
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              🌟 <strong className="gradient-text">Профессиональная поддержка</strong> в период восстановления после разрыва отношений.
              <br />
              <span className="text-lg">Вместе мы пройдем через боль, справимся с эмоциями и построим счастливое будущее.</span>
            </p>
          </div>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="#contact"
              className="interactive-card glass-card px-8 py-4 rounded-full font-semibold text-lg text-gray-800 hover:text-white transition-all duration-300 group warm-glow border-2 border-yellow-300 hover:border-yellow-400"
            >
              <span className="flex items-center">
                ✨ Получить консультацию
                <svg className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </a>
            <a
              href="#services"
              className="interactive-card glass-card px-8 py-4 rounded-full font-semibold text-lg text-gray-800 hover:text-white transition-all duration-300 group warm-glow border-2 border-teal-300 hover:border-teal-400"
            >
              <span className="flex items-center">
                🔍 Узнать больше
                <svg className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </span>
            </a>
          </div>

          {/* Enhanced Trust indicators */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="interactive-card glass-card p-6 rounded-2xl text-center warm-glow">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-teal-400 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2 gradient-text">🔒 Конфиденциальность</h3>
              <p className="text-gray-600">Полная анонимность и доверие</p>
            </div>

            <div className="interactive-card glass-card p-6 rounded-2xl text-center warm-glow">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce" style={{ animationDelay: '0.2s' }}>
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2 gradient-text">⚡ Быстрая помощь</h3>
              <p className="text-gray-600">Поддержка в любое время</p>
            </div>

            <div className="interactive-card glass-card p-6 rounded-2xl text-center warm-glow">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce" style={{ animationDelay: '0.4s' }}>
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2 gradient-text">💝 Эмпатичный подход</h3>
              <p className="text-gray-600">Понимаю ваши чувства</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
