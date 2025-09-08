export function Footer() {
  return (
    <footer className="bg-neutral-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and description */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">П</span>
              </div>
              <span className="text-lg font-semibold">
                Психологическая помощь
              </span>
            </div>
            <p className="text-neutral-300 leading-relaxed">
              Профессиональная поддержка в период восстановления после расставания.
              Вместе мы преодолеем кризис и построим счастливое будущее.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-neutral-300 hover:text-white transition-colors duration-200">
                  Услуги
                </a>
              </li>
              <li>
                <a href="#about" className="text-neutral-300 hover:text-white transition-colors duration-200">
                  Обо мне
                </a>
              </li>
              <li>
                <a href="#contact" className="text-neutral-300 hover:text-white transition-colors duration-200">
                  Контакты
                </a>
              </li>
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <div className="space-y-2 text-neutral-300">
              <p>📧 Email: info@example.com</p>
              <p>📱 Телефон: +7 (999) 123-45-67</p>
              <p>🕒 Работаю: Пн-Пт 9:00-18:00</p>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-neutral-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-400 text-sm">
            © 2024 Психологическая помощь. Все права защищены.
          </p>

          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-neutral-400 hover:text-white transition-colors duration-200 text-sm">
              Политика конфиденциальности
            </a>
            <a href="#" className="text-neutral-400 hover:text-white transition-colors duration-200 text-sm">
              Условия использования
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
