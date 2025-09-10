#!/bin/bash

# Скрипт для оптимизации изображений команды
echo "🖼️  Оптимизация изображений команды..."

# Создаем папки для оптимизированных изображений
mkdir -p public/images/team/webp
mkdir -p public/images/team/optimized

# Функция для конвертации в WebP
convert_to_webp() {
    local input_file="$1"
    local output_name="$2"
    
    echo "📸 Конвертируем $input_file в WebP..."
    
    # Конвертируем в WebP с оптимизацией
    convert "$input_file" \
        -resize 400x400^ \
        -gravity center \
        -extent 400x400 \
        -quality 85 \
        -strip \
        "public/images/team/webp/${output_name}.webp"
    
    # Создаем также оптимизированную JPG версию
    convert "$input_file" \
        -resize 400x400^ \
        -gravity center \
        -extent 400x400 \
        -quality 85 \
        -strip \
        "public/images/team/optimized/${output_name}.jpg"
    
    echo "✅ Готово: ${output_name}"
}

# Конвертируем фотографии команды
convert_to_webp "public/images/team/Alesia.jpg" "alesya"
convert_to_webp "public/images/team/Valerija.jpg" "lera" 
convert_to_webp "public/images/team/Veronika.jpg" "veronika"

# Создаем также версии для обложек (если нужно)
if [ -f "public/images/team/Cover_Final.JPG" ]; then
    convert_to_webp "public/images/team/Cover_Final.JPG" "cover-final"
fi

if [ -f "public/images/team/Cover_TEAM_HopeClub.jpg" ]; then
    convert_to_webp "public/images/team/Cover_TEAM_HopeClub.jpg" "cover-team"
fi

if [ -f "public/images/team/Cover_team_without_text.jpg" ]; then
    convert_to_webp "public/images/team/Cover_team_without_text.jpg" "cover-team-clean"
fi

echo ""
echo "🎉 Оптимизация завершена!"
echo "📁 WebP версии: public/images/team/webp/"
echo "📁 JPG версии: public/images/team/optimized/"
echo ""
echo "📊 Размеры файлов:"
ls -lh public/images/team/webp/*.webp 2>/dev/null || echo "WebP файлы не найдены"
ls -lh public/images/team/optimized/*.jpg 2>/dev/null || echo "JPG файлы не найдены"
