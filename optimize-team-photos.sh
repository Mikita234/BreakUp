#!/bin/bash

# Create directories if they don't exist
mkdir -p public/images/team/quality

echo "🖼️  Creating high-quality team member photos..."

# Alesija (Alesya)
echo "Processing Alesija.jpg..."
magick public/images/team/Original/Alesija.jpg \
  -quality 95 \
  -resize '800x800>' \
  public/images/team/quality/alesya.jpg

magick public/images/team/Original/Alesija.jpg \
  -quality 90 \
  -resize '800x800>' \
  public/images/team/quality/alesya.webp

# Lera
echo "Processing Lera.jpg..."
magick public/images/team/Original/Lera.jpg \
  -quality 95 \
  -resize '800x800>' \
  public/images/team/quality/lera.jpg

magick public/images/team/Original/Lera.jpg \
  -quality 90 \
  -resize '800x800>' \
  public/images/team/quality/lera.webp

# Veronica
echo "Processing Veronica.jpg..."
magick public/images/team/Original/Veronica.jpg \
  -quality 95 \
  -resize '800x800>' \
  public/images/team/quality/veronika.jpg

magick public/images/team/Original/Veronica.jpg \
  -quality 90 \
  -resize '800x800>' \
  public/images/team/quality/veronika.webp

echo "✅ High-quality team photos created!"
echo "📁 Location: public/images/team/quality/"
echo "📊 Quality: 95% JPG, 90% WebP"
echo "📐 Size: 800x800 (perfect for team photos)"

