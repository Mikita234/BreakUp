# 🚀 Развертывание Hope Club Website

## Быстрое развертывание

### Способ 1: Автоматический скрипт (Рекомендуется)

1. Создайте репозиторий на GitHub:
   - Перейдите на https://github.com/new
   - Название: `breakup-help`
   - НЕ добавляйте README, .gitignore, license

2. Запустите скрипт:
   ```bash
   ./deploy.sh
   ```

3. Следуйте инструкциям в терминале

### Способ 2: Ручное развертывание

1. Создайте репозиторий на GitHub (см. выше)

2. Выполните команды:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/breakup-help.git
   git push -u origin main
   
   npm install -g gh-pages
   npm run deploy
   ```

3. Настройте GitHub Pages:
   - Settings → Pages
   - Source: "Deploy from a branch"
   - Branch: `gh-pages` / `root`
   - Save

## 📊 Результат

Сайт будет доступен по адресу:
```
https://YOUR_USERNAME.github.io/breakup-help/
```

## 🔧 Технические детали

- **Framework**: Next.js 15 с App Router
- **Styling**: Tailwind CSS
- **Deployment**: GitHub Pages (статический экспорт)
- **SEO**: Оптимизирован для поисковых систем
- **Responsive**: Адаптивный дизайн

## 🎯 Функциональность

- ✅ Современный responsive дизайн
- ✅ Оптимизация для мобильных устройств
- ✅ SEO оптимизация
- ✅ Быстрая загрузка
- ✅ Социальные доказательства
- ✅ Двойная конверсия (Instagram + Telegram)
- ✅ Эмпатичный контент

## 📞 Поддержка

При проблемах с развертыванием:
1. Проверьте, что репозиторий создан правильно
2. Убедитесь, что у вас есть доступ к GitHub
3. Проверьте логи в терминале
