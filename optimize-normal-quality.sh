#!/bin/bash

# Create directories if they don't exist
mkdir -p public/images/team/normal

echo "🖼️  Creating normal quality images (1MB target)..."

# High quality with_title.jpg (with HOPE CLUB text)
echo "Processing with_title.jpg with normal quality..."
magick public/images/team/Original/with_title.jpg \
  -quality 98 \
  -resize '3840x2160>' \
  public/images/team/normal/with_title.jpg

# Create WebP version with normal quality
magick public/images/team/Original/with_title.jpg \
  -quality 95 \
  -resize '3840x2160>' \
  public/images/team/normal/with_title.webp

# High quality without_text.jpg (clean faces)
echo "Processing without_text.jpg with normal quality..."
magick public/images/team/Original/without_text.jpg \
  -quality 98 \
  -resize '3840x2160>' \
  public/images/team/normal/without_text.jpg

# Create WebP version with normal quality
magick public/images/team/Original/without_text.jpg \
  -quality 95 \
  -resize '3840x2160>' \
  public/images/team/normal/without_text.webp

# Team member photos with normal quality
echo "Processing team member photos..."

# Alesija (Alesya)
magick public/images/team/Original/Alesija.jpg \
  -quality 98 \
  -resize '1200x1200>' \
  public/images/team/normal/alesya.jpg

magick public/images/team/Original/Alesija.jpg \
  -quality 95 \
  -resize '1200x1200>' \
  public/images/team/normal/alesya.webp

# Lera
magick public/images/team/Original/Lera.jpg \
  -quality 98 \
  -resize '1200x1200>' \
  public/images/team/normal/lera.jpg

magick public/images/team/Original/Lera.jpg \
  -quality 95 \
  -resize '1200x1200>' \
  public/images/team/normal/lera.webp

# Veronica
magick public/images/team/Original/Veronica.jpg \
  -quality 98 \
  -resize '1200x1200>' \
  public/images/team/normal/veronika.jpg

magick public/images/team/Original/Veronica.jpg \
  -quality 95 \
  -resize '1200x1200>' \
  public/images/team/normal/veronika.webp

echo "✅ Normal quality images created!"
echo "📁 Location: public/images/team/normal/"
echo "📊 Quality: 98% JPG, 95% WebP (normal quality)"
echo "📐 Cover images: 4K resolution (3840x2160)"
echo "📐 Team photos: 1200x1200 (high quality)"

