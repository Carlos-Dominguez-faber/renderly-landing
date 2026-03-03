#!/bin/bash
set -e

REPO_DIR=$(cd "$(dirname "$0")/.." && pwd)

echo "🧹 Limpiando sandboxes de La Forja..."

if [ -d "$REPO_DIR/../sandbox-1" ]; then
    git worktree remove "$REPO_DIR/../sandbox-1" --force 2>/dev/null || true
    echo "   ✅ sandbox-1 eliminado"
fi

if [ -d "$REPO_DIR/../sandbox-2" ]; then
    git worktree remove "$REPO_DIR/../sandbox-2" --force 2>/dev/null || true
    echo "   ✅ sandbox-2 eliminado"
fi

if [ -d "$REPO_DIR/../sandbox-3" ]; then
    git worktree remove "$REPO_DIR/../sandbox-3" --force 2>/dev/null || true
    echo "   ✅ sandbox-3 eliminado"
fi

git branch -D forja/sandbox-1-literal 2>/dev/null || true
git branch -D forja/sandbox-2-creativo 2>/dev/null || true
git branch -D forja/sandbox-3-disruptivo 2>/dev/null || true

echo ""
echo "✅ Limpieza completa. Worktrees y branches eliminados."
