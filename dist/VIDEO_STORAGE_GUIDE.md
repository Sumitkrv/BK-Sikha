# Video Files Storage Guide

## Overview
This project contains large video files (~2.7GB) that are **excluded from Git** to keep the repository lightweight and manageable.

## Excluded Directories
- `public/BK Q&A 21/` (~815MB - 7 videos)
- `public/BK Q&A 22/` (~1.9GB - 17 videos)
- Large `.mp4` and `.mov` files

## Storage Options

### Option 1: Cloud Storage (Recommended)
Upload videos to a cloud service and reference them in your application:

1. **YouTube** (Free, public)
   - Upload videos to YouTube
   - Embed using iframe or YouTube API
   - Best for public content

2. **Vimeo** (Free tier available)
   - More professional appearance
   - Better privacy controls
   - Good for embedded videos

3. **AWS S3 / CloudFront**
   - Full control over content
   - CDN for fast delivery
   - Pay as you go pricing

4. **Cloudinary** (Free tier: 25GB storage, 25GB bandwidth/month)
   - Video hosting and optimization
   - Automatic compression and streaming
   - Easy integration

### Option 2: Git LFS (Git Large File Storage)
For team collaboration where everyone needs video access:

```bash
# Install Git LFS
brew install git-lfs  # macOS
# or visit: https://git-lfs.github.com

# Initialize Git LFS
git lfs install

# Track video files
git lfs track "public/**/*.mp4"
git lfs track "public/**/*.mov"

# Commit the .gitattributes file
git add .gitattributes
git commit -m "Configure Git LFS for video files"

# Now you can add and commit videos
git add public/
git commit -m "Add video files with Git LFS"
git push
```

**Note:** GitHub LFS has limits:
- Free: 1GB storage, 1GB bandwidth/month
- Additional packs available for purchase

### Option 3: External Download
Store videos in a separate location:

1. Upload to Google Drive / Dropbox
2. Share download link in project documentation
3. Team members download videos separately
4. Place in respective folders locally

## Current Status

✅ **Images compressed** - Saved 7.56MB  
✅ **Small video kept** - `logo-animation.mp4` (576KB) is included in Git  
❌ **Large videos excluded** - 24 Q&A videos (~2.7GB) excluded from Git

## Recommendations

1. **For Production**: Use cloud storage (Cloudinary or AWS S3) with CDN
2. **For Development**: Keep videos locally, excluded from Git
3. **For Team Sharing**: Use Git LFS or shared cloud folder

## Questions?
Contact the project maintainer for access to video files or help setting up cloud storage.
