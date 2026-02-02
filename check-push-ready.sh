#!/bin/bash
# Quick verification script to check what will be pushed to GitHub

echo "================================================"
echo "   GitHub Push Readiness Check"
echo "================================================"
echo ""

# Check if we're in a git repository
if ! git rev-parse --git-dir > /dev/null 2>&1; then
    echo "❌ Not a git repository"
    exit 1
fi

echo "✓ Git repository found"
echo ""

# Count modified files
modified=$(git status -s | grep "^M" | wc -l | xargs)
deleted=$(git status -s | grep "^D" | wc -l | xargs)
untracked=$(git status -s | grep "^?" | wc -l | xargs)

echo "📊 Changes Summary:"
echo "  - Modified files: $modified"
echo "  - Deleted from git: $deleted"
echo "  - New files: $untracked"
echo ""

# Check for large files
echo "🔍 Checking for large files (>10MB) in staging..."
large_files=0
while IFS= read -r file; do
    if [ -f "$file" ]; then
        size=$(du -m "$file" 2>/dev/null | cut -f1)
        if [ "$size" -gt 10 ]; then
            echo "  ⚠️  $file (${size}MB)"
            large_files=$((large_files + 1))
        fi
    fi
done < <(git diff --cached --name-only --diff-filter=ACM)

if [ $large_files -eq 0 ]; then
    echo "  ✓ No large files found in staging"
fi
echo ""

# Check if video folders are properly ignored
echo "🎥 Verifying video exclusion..."
if git check-ignore -q "public/BK Q&A 21/"; then
    echo "  ✓ BK Q&A 21/ is properly excluded"
else
    echo "  ⚠️  BK Q&A 21/ might still be tracked"
fi

if git check-ignore -q "public/BK Q&A 22/"; then
    echo "  ✓ BK Q&A 22/ is properly excluded"
else
    echo "  ⚠️  BK Q&A 22/ might still be tracked"
fi
echo ""

# Estimate repository size
echo "📦 Estimated push size..."
staged_size=$(git diff --cached --name-only --diff-filter=ACM | xargs -I {} ls -l {} 2>/dev/null | awk '{sum+=$5} END {print sum/1024/1024}')
echo "  Staged changes: ~${staged_size}MB"
echo ""

# Final recommendations
echo "================================================"
echo "   Recommendations"
echo "================================================"
if [ $large_files -gt 0 ]; then
    echo "⚠️  You have $large_files large file(s) in staging"
    echo "   Consider using Git LFS or cloud storage"
elif [ $(echo "$staged_size > 100" | bc -l 2>/dev/null || echo 0) -eq 1 ]; then
    echo "⚠️  Staged changes are large (${staged_size}MB)"
    echo "   GitHub might have issues with files >100MB"
else
    echo "✅ Repository looks good for GitHub push!"
    echo ""
    echo "Next steps:"
    echo "  1. git add ."
    echo "  2. git commit -m 'Compress images and optimize for GitHub'"
    echo "  3. git push origin main"
fi
echo ""
