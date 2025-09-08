export function Services() {
  const services = [
    {
      title: "💬 Индивидуальные консультации",
      description: "Персональный подход к каждой ситуации. Работа с эмоциями, мыслями и поведением после расставания.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      features: ["Работа с горем и потерей", "Преодоление одиночества", "Восстановление самооценки"],
      gradient: "from-yellow-400 via-teal-400 to-pink-400",
      bgGradient: "from-yellow-50 via-teal-50 to-pink-50"
    },
    {
      title: "🚨 Кризисная поддержка",
      description: "Срочная помощь в острый период после расставания. Экстренные сессии для стабилизации состояния.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      features: ["Экстренные сессии", "Стабилизация эмоций", "Поддержка 24/7"],
      gradient: "from-teal-400 via-pink-400 to-purple-400",
      bgGradient: "from-teal-50 via-pink-50 to-purple-50"
    },
    {
      title: "👥 Групповая терапия",
      description: "Работа в группе с людьми, пережившими похожие ситуации. Обмен опытом и взаимная поддержка.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      features: ["Обмен опытом", "Взаимная поддержка", "Безопасная среда"],
      gradient: "from-pink-400 via-purple-400 to-indigo-400",
      bgGradient: "from-pink-50 via-purple-50 to-indigo-50"
    },
    {
      title: "💻 Онлайн-консультации",
      description: "Удобный формат работы из любой точки мира. Полноценная терапия через видеосвязь или чат.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      features: ["Видеоконсультации", "Чат-поддержка", "Гибкий график"],
      gradient: "from-indigo-400 via-teal-400 to-yellow-400",
      bgGradient: "from-indigo-50 via-teal-50 to-yellow-50"
    }
  ]

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 right-10 w-32 h-32 bg-yellow-200 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-teal-200 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-10 w-16 h-16 bg-pink-200 rounded-full blur-xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block">
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
              ✨ Наши услуги
            </h2>
            <div className="w-full h-1 bg-gradient-to-r from-yellow-400 via-teal-400 to-pink-400 rounded-full"></div>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-6">
            Комплексная поддержка для преодоления кризиса после расставания 🌈
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`interactive-card glass-card rounded-3xl p-8 warm-glow group animate-reveal`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Header with gradient icon */}
              <div className="flex items-center mb-6">
                <div className={`w-14 h-14 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center shadow-lg mr-4 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 gradient-text">
                  {service.title}
                </h3>
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features list with enhanced styling */}
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-700">
                    <div className={`w-5 h-5 bg-gradient-to-br ${service.gradient} rounded-full flex items-center justify-center mr-3 flex-shrink-0 shadow-sm`}>
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="font-medium">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Enhanced CTA button */}
              <div className="mt-auto">
                <a
                  href="#contact"
                  className={`inline-flex items-center px-6 py-3 rounded-full font-semibold text-white bg-gradient-to-r ${service.gradient} hover:shadow-lg transition-all duration-300 group/btn`}
                >
                  Узнать подробнее
                  <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom decorative element */}
        <div className="text-center mt-16">
          <div className="inline-block glass-card px-8 py-4 rounded-full">
            <p className="text-gray-600">
              💫 <strong className="gradient-text">Каждая услуга адаптирована</strong> под ваши индивидуальные потребности
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
