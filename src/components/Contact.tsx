'use client'

import { useState } from 'react'

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Здесь будет логика отправки формы
    alert('Спасибо за ваше сообщение! Я свяжусь с вами в ближайшее время.')
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
            Свяжитесь со мной
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Готовы начать работу над собой? Напишите мне, и мы обсудим, как я могу вам помочь
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
                  Ваше имя *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200 text-base"
                  placeholder="Введите ваше имя"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200 text-base"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-2">
                  Телефон
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200 text-base"
                  placeholder="+7 (999) 123-45-67"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
                  Сообщение *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200 resize-none text-base"
                  placeholder="Расскажите о вашей ситуации и том, с чем вам нужна помощь..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-primary-500 to-primary-600 text-white py-4 px-6 rounded-xl font-semibold text-lg hover:from-primary-600 hover:to-primary-700 transition-all duration-300 shadow-warm hover:shadow-lg transform hover:-translate-y-1"
              >
                Отправить сообщение
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-neutral-800 mb-6">
                Как мы можем работать
              </h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-800 mb-1">Онлайн-консультации</h4>
                    <p className="text-neutral-600">Работа через Zoom, Skype или другие платформы</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-secondary-100 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-800 mb-1">Групповые сессии</h4>
                    <p className="text-neutral-600">Поддержка в группе с людьми в похожей ситуации</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-warm-100 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-warm-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-800 mb-1">Гибкий график</h4>
                    <p className="text-neutral-600">Работаем в удобное для вас время</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional info */}
            <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-3xl p-8">
              <h4 className="font-semibold text-neutral-800 mb-4">Важная информация</h4>
              <ul className="space-y-3 text-neutral-700">
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">•</span>
                  Первая консультация бесплатная (30 минут)
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">•</span>
                  Полная конфиденциальность гарантирована
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">•</span>
                  Нет необходимости в предварительной подготовке
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">•</span>
                  Работаю с любыми формами расставаний
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
