#!/bin/bash

# Скрипт для развертывания на GitHub Pages
# Замените YOUR_USERNAME на ваш логин GitHub

echo "🚀 Начинаем развертывание Hope Club сайта..."

# Установка gh-pages если не установлено
if ! command -v gh-pages &> /dev/null; then
    echo "📦 Устанавливаю gh-pages..."
    npm install -g gh-pages
fi

# Проверяем, настроен ли remote origin
if git remote | grep -q "origin"; then
    echo "❌ Удаленный репозиторий уже настроен. Проверьте настройки."
    echo "Текущие remote:"
    git remote -v
    exit 1
fi

echo "🔗 Настройка удаленного репозитория..."
echo "Введите ваш GitHub username:"
read username

if [ -z "$username" ]; then
    echo "❌ Username не может быть пустым"
    exit 1
fi

git remote add origin https://github.com/$username/breakup-help.git

echo "⬆️ Загружаю код на GitHub..."
git push -u origin main

echo "🚀 Развертывание на GitHub Pages..."
npm run deploy

echo "✅ Готово!"
echo "🌐 Сайт будет доступен по адресу: https://$username.github.io/breakup-help/"
echo ""
echo "📋 Следующие шаги:"
echo "1. Перейдите в Settings → Pages вашего репозитория"
echo "2. Выберите Source: 'Deploy from a branch'"
echo "3. Branch: gh-pages / root"
echo "4. Нажмите Save"
echo "5. Сайт будет доступен через 2-3 минуты"
