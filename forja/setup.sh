#!/bin/bash
set -e

# ═══════════════════════════════════════════════════════════
# LA FORJA — Setup de Sandboxes
# Proyecto: Renderly Landing (Sandcastles Clone)
# Agentes: 3
# Supabase: No
# ═══════════════════════════════════════════════════════════

REPO_DIR=$(cd "$(dirname "$0")/.." && pwd)
echo ""
echo "🔨 LA FORJA — Configurando 3 sandboxes"
echo "📁 Repo: $REPO_DIR"
echo ""

# ─── Verificaciones ──────────────────────────────────────

if ! command -v git &> /dev/null; then
    echo "❌ Git no encontrado. Instálalo primero."
    exit 1
fi

if ! git rev-parse --is-inside-work-tree &> /dev/null 2>&1; then
    echo "❌ No estás dentro de un repositorio git."
    exit 1
fi

# Verificar Node.js
if ! command -v node &> /dev/null; then
    echo "❌ Node.js no encontrado."
    exit 1
fi

# ─── Crear Worktrees ─────────────────────────────────────

echo "🌿 Creando worktrees..."

if [ -d "$REPO_DIR/../sandbox-1" ]; then
    echo "   sandbox-1 ya existe, saltando..."
else
    git worktree add "$REPO_DIR/../sandbox-1" -b forja/sandbox-1-literal
    echo "   ✅ sandbox-1 (branch: forja/sandbox-1-literal)"
fi

if [ -d "$REPO_DIR/../sandbox-2" ]; then
    echo "   sandbox-2 ya existe, saltando..."
else
    git worktree add "$REPO_DIR/../sandbox-2" -b forja/sandbox-2-creativo
    echo "   ✅ sandbox-2 (branch: forja/sandbox-2-creativo)"
fi

if [ -d "$REPO_DIR/../sandbox-3" ]; then
    echo "   sandbox-3 ya existe, saltando..."
else
    git worktree add "$REPO_DIR/../sandbox-3" -b forja/sandbox-3-disruptivo
    echo "   ✅ sandbox-3 (branch: forja/sandbox-3-disruptivo)"
fi

# ─── Instalar dependencias en cada worktree ──────────────

echo ""
echo "📦 Instalando dependencias en cada sandbox..."

for i in 1 2 3; do
    cd "$REPO_DIR/../sandbox-$i"
    if [ ! -d "node_modules" ]; then
        npm install --silent > /dev/null 2>&1
        echo "   ✅ sandbox-$i: npm install completado"
    else
        echo "   sandbox-$i: node_modules ya existe, saltando..."
    fi
done

# ─── Resumen ──────────────────────────────────────────────

echo ""
echo "═══════════════════════════════════════════════════════"
echo "🔨 LA FORJA — Setup Completo"
echo "═══════════════════════════════════════════════════════"
echo ""
echo "Worktrees:"
git worktree list
echo ""
echo "🚀 Siguiente paso: Lanza cada agente en su tab de terminal"
echo ""
echo "Tab 1 (Literal):"
echo "  cd \"$REPO_DIR/../sandbox-1\""
echo "  claude --dangerously-skip-permissions \"\$(cat \\\"$REPO_DIR/forja/prompts/sandbox-1-literal.md\\\")\""
echo ""
echo "Tab 2 (Creativo):"
echo "  cd \"$REPO_DIR/../sandbox-2\""
echo "  claude --dangerously-skip-permissions \"\$(cat \\\"$REPO_DIR/forja/prompts/sandbox-2-creativo.md\\\")\""
echo ""
echo "Tab 3 (Disruptivo):"
echo "  cd \"$REPO_DIR/../sandbox-3\""
echo "  claude --dangerously-skip-permissions \"\$(cat \\\"$REPO_DIR/forja/prompts/sandbox-3-disruptivo.md\\\")\""
echo ""
echo "Review (cuando terminen):"
echo "  cd \"$REPO_DIR\""
echo "  claude --dangerously-skip-permissions \"\$(cat \\\"$REPO_DIR/forja/prompts/review-prompt.md\\\")\""
echo ""
echo "═══════════════════════════════════════════════════════"
