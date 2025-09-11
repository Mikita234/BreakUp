#!/bin/bash

# Create directories if they don't exist
mkdir -p public/images/team/high-quality

echo "🖼️  Optimizing original images with high quality..."

# Optimize with_title.jpg (with HOPE CLUB text)
echo "Processing with_title.jpg..."
convert public/images/team/Original/with_title.jpg \
  -quality 85 \
  -resize '1920x1080>' \
  public/images/team/high-quality/with_title.jpg

# Create WebP version
convert public/images/team/Original/with_title.jpg \
  -quality 85 \
  -resize '1920x1080>' \
  public/images/team/high-quality/with_title.webp

# Optimize without_text.jpg (clean faces)
echo "Processing without_text.jpg..."
convert public/images/team/Original/without_text.jpg \
  -quality 85 \
  -resize '1920x1080>' \
  public/images/team/high-quality/without_text.jpg

# Create WebP version
convert public/images/team/Original/without_text.jpg \
  -quality 85 \
  -resize '1920x1080>' \
  public/images/team/high-quality/without_text.webp

echo "✅ High-quality images created!"
echo "📁 Location: public/images/team/high-quality/"
echo "📊 Quality: 85% (good balance between quality and size)"
echo "📐 Max size: 1920x1080 (responsive)"
