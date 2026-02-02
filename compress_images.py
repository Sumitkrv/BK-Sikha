#!/usr/bin/env python3
"""
Script to compress all images in the public directory
"""
import os
from PIL import Image
from pathlib import Path

def compress_image(image_path, quality=85, max_width=1920):
    """Compress and resize image if needed"""
    try:
        with Image.open(image_path) as img:
            # Convert RGBA to RGB if needed
            if img.mode == 'RGBA':
                rgb_img = Image.new('RGB', img.size, (255, 255, 255))
                rgb_img.paste(img, mask=img.split()[3])
                img = rgb_img
            elif img.mode not in ('RGB', 'L'):
                img = img.convert('RGB')
            
            # Get original size
            original_size = os.path.getsize(image_path)
            
            # Resize if too large
            if img.width > max_width:
                ratio = max_width / img.width
                new_height = int(img.height * ratio)
                img = img.resize((max_width, new_height), Image.Resampling.LANCZOS)
            
            # Save compressed image
            if image_path.lower().endswith('.png'):
                img.save(image_path, 'PNG', optimize=True)
            else:
                img.save(image_path, 'JPEG', quality=quality, optimize=True)
            
            new_size = os.path.getsize(image_path)
            saved = original_size - new_size
            
            if saved > 0:
                print(f"✓ {os.path.basename(image_path)}: {original_size//1024}KB → {new_size//1024}KB (saved {saved//1024}KB)")
            else:
                print(f"  {os.path.basename(image_path)}: Already optimized ({original_size//1024}KB)")
                
    except Exception as e:
        print(f"✗ Error processing {image_path}: {e}")

def main():
    public_dir = Path('/Users/sumitthakur/Desktop/BK-Sikha-main/public')
    
    # Find all image files
    image_extensions = ['.jpg', '.jpeg', '.png', '.JPG', '.JPEG', '.PNG']
    image_files = []
    
    for ext in image_extensions:
        image_files.extend(public_dir.rglob(f'*{ext}'))
    
    print(f"Found {len(image_files)} images to process\n")
    
    total_saved = 0
    for img_path in image_files:
        original_size = os.path.getsize(img_path)
        compress_image(str(img_path))
        new_size = os.path.getsize(img_path)
        total_saved += (original_size - new_size)
    
    print(f"\n✓ Total space saved: {total_saved / (1024*1024):.2f} MB")

if __name__ == "__main__":
    main()
