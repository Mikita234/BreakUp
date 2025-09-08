'use client'

import { useState } from 'react'
import Link from 'next/link'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-soft sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">П</span>
            </div>
            <span className="text-xl font-semibold text-neutral-800">
              Психологическая помощь
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link
              href="#services"
              className="text-neutral-700 hover:text-primary-600 transition-colors duration-200 font-medium"
            >
              Услуги
            </Link>
            <Link
              href="#about"
              className="text-neutral-700 hover:text-primary-600 transition-colors duration-200 font-medium"
            >
              Обо мне
            </Link>
            <Link
              href="#contact"
              className="text-neutral-700 hover:text-primary-600 transition-colors duration-200 font-medium"
            >
              Контакты
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <Link
              href="#contact"
              className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 py-2 rounded-full font-medium hover:from-primary-600 hover:to-primary-700 transition-all duration-200 shadow-warm hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Записаться
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-neutral-700 hover:text-primary-600 hover:bg-primary-50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500"
            aria-label="Открыть меню"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden border-t border-neutral-200 overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-96 opacity-100 py-4' : 'max-h-0 opacity-0'
        }`}>
          <nav className="flex flex-col space-y-4">
            <Link
              href="#services"
              className="text-neutral-700 hover:text-primary-600 transition-colors duration-200 font-medium py-2 px-4 rounded-lg hover:bg-primary-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Услуги
            </Link>
            <Link
              href="#about"
              className="text-neutral-700 hover:text-primary-600 transition-colors duration-200 font-medium py-2 px-4 rounded-lg hover:bg-primary-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Обо мне
            </Link>
            <Link
              href="#contact"
              className="text-neutral-700 hover:text-primary-600 transition-colors duration-200 font-medium py-2 px-4 rounded-lg hover:bg-primary-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Контакты
            </Link>
            <Link
              href="#contact"
              className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 py-3 rounded-full font-medium text-center hover:from-primary-600 hover:to-primary-700 transition-all duration-200 shadow-warm hover:shadow-lg transform hover:-translate-y-0.5"
              onClick={() => setIsMenuOpen(false)}
            >
              Записаться
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
