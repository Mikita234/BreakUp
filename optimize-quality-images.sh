#!/bin/bash

# Create directories if they don't exist
mkdir -p public/images/team/quality

echo "🖼️  Creating truly high-quality images..."

# High quality with_title.jpg (with HOPE CLUB text)
echo "Processing with_title.jpg with high quality..."
magick public/images/team/Original/with_title.jpg \
  -quality 95 \
  -resize '2560x1440>' \
  public/images/team/quality/with_title.jpg

# Create WebP version with high quality
magick public/images/team/Original/with_title.jpg \
  -quality 90 \
  -resize '2560x1440>' \
  public/images/team/quality/with_title.webp

# High quality without_text.jpg (clean faces)
echo "Processing without_text.jpg with high quality..."
magick public/images/team/Original/without_text.jpg \
  -quality 95 \
  -resize '2560x1440>' \
  public/images/team/quality/without_text.jpg

# Create WebP version with high quality
magick public/images/team/Original/without_text.jpg \
  -quality 90 \
  -resize '2560x1440>' \
  public/images/team/quality/without_text.webp

echo "✅ High-quality images created!"
echo "📁 Location: public/images/team/quality/"
echo "📊 Quality: 95% JPG, 90% WebP (truly high quality)"
echo "📐 Max size: 2560x1440 (2K resolution)"
