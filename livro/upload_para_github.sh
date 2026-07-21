#!/bin/bash

# 🚀 Script de Upload para GitHub
# Automatiza a adição dos arquivos de rastreamento ao repositório
# Uso: bash upload_para_github.sh

echo "=========================================="
echo "📤 UPLOAD PARA GITHUB - Sistema Automatizado"
echo "=========================================="
echo ""

# Cores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Variáveis de configuração
GITHUB_REPO="https://github.com/pesquisamigra/livro.git"
FOLDER_NAME="rastreamento-melhorias"
COMMIT_MESSAGE="docs: adicionar sistema de rastreamento de melhorias do livro

- Plano detalhado com 18 pontos identificados
- Painel interativo em HTML para monitorar progresso  
- Guia completo de como usar as ferramentas
- Cronograma de 4 semanas para conclusão"

# Função para mostrar erros
error() {
    echo -e "${RED}❌ ERRO: $1${NC}"
    exit 1
}

# Função para mostrar sucesso
success() {
    echo -e "${GREEN}✅ $1${NC}"
}

# Função para mostrar aviso
warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

# Função para mostrar info
info() {
    echo -e "${BLUE}ℹ️  $1${NC}"
}

# Passo 1: Verificar se git está instalado
echo "Passo 1: Verificando se Git está instalado..."
if ! command -v git &> /dev/null; then
    error "Git não está instalado. Por favor, instale o Git primeiro."
fi
success "Git encontrado!"
echo ""

# Passo 2: Verificar se já tem repositório ou clonar
echo "Passo 2: Verificando repositório GitHub..."
if [ -d "livro/.git" ]; then
    info "Repositório já existe localmente"
    REPO_DIR="livro"
else
    warning "Clonando repositório (primeira vez)..."
    git clone "$GITHUB_REPO" livro || error "Falha ao clonar repositório"
    success "Repositório clonado!"
    REPO_DIR="livro"
fi
echo ""

# Passo 3: Navegar para o diretório
cd "$REPO_DIR" || error "Não conseguiu entrar no diretório livro"
info "Entrando no repositório: $(pwd)"
echo ""

# Passo 4: Criar pasta de rastreamento
echo "Passo 3: Criando estrutura de pastas..."
mkdir -p "$FOLDER_NAME" || error "Falha ao criar pasta $FOLDER_NAME"
success "Pasta '$FOLDER_NAME' criada/verificada"
echo ""

# Passo 5: Copiar arquivos
echo "Passo 4: Copiando arquivos de rastreamento..."

# Lista de arquivos a copiar
ARQUIVOS=(
    "Plano_Melhorias_Livro_Migracao.md"
    "rastreador_melhorias.html"
    "GUIA_USO_RASTREADORES.md"
)

# Verificar e copiar arquivos
for arquivo in "${ARQUIVOS[@]}"; do
    if [ -f "../$arquivo" ]; then
        cp "../$arquivo" "$FOLDER_NAME/" || error "Falha ao copiar $arquivo"
        success "Copiado: $arquivo"
    else
        warning "Arquivo não encontrado: $arquivo (pode estar em outro local)"
    fi
done
echo ""

# Passo 6: Criar README para a pasta
echo "Passo 5: Criando README.md para a pasta..."
cat > "$FOLDER_NAME/README.md" << 'EOF'
# 📊 Rastreamento de Melhorias do Livro

Sistema completo para rastrejar e gerenciar as melhorias do livro:
**"Os Processos de Subjetivação na Mobilidade Humana: a experiência de integração dos venezuelanos em Belo Horizonte"**

Autor: Henrique Galhano Balieiro

## 📁 Arquivos Disponíveis

1. **Plano_Melhorias_Livro_Migracao.md** 
   - Lista completa de todos os 18 pontos de melhoria
   - Descrições detalhadas e localizações
   - Divididos por prioridade: Críticos, Importantes, Complementares

2. **rastreador_melhorias.html** 
   - Painel interativo em tempo real
   - Marque conclusões, visualize progresso
   - Filtre por tipo, atribua responsáveis, defina datas
   - Exporte dados em CSV

3. **GUIA_USO_RASTREADORES.md** 
   - Tutorial completo de como usar as ferramentas
   - Cronograma realista de 3-4 semanas
   - Dicas práticas e troubleshooting

## 🚀 Como Começar

### Rápido (2 minutos)
1. Abra `rastreador_melhorias.html` em seu navegador
2. Comece a marcar os 4 pontos críticos como concluídos

### Completo (10 minutos)
1. Leia `GUIA_USO_RASTREADORES.md` 
2. Consulte `Plano_Melhorias_Livro_Migracao.md` para detalhes
3. Use o HTML para gerenciar seu progresso

## 📊 Resumo Rápido

| Tipo | Quantidade | Status |
|------|-----------|--------|
| 🔴 Críticos | 4 | ⏳ Iniciar |
| 🟡 Importantes | 8 | ⏳ Próximo |
| 🟢 Complementares | 8 | ⏳ Depois |

**Total de Pontos:** 18  
**Progresso Atual:** 0%  
**Tempo Estimado:** 3-4 semanas

## 📅 Cronograma Sugerido

- **Semana 1:** Resolver 4 pontos críticos
- **Semana 2-3:** Abordar 8 pontos importantes  
- **Semana 4:** Refinar 6 complementares (2 já estão prontos ✅)

## 🔴 Os 4 Pontos Críticos (COMECE AQUI!)

1. **Prefácio faltante** - Solicitar a alguém para escrever
2. **Lacuna "XXXXXXXX"** - Completar frase no Cap. 2.1
3. **Data Roraima 2022(?)** - Confirmar/atualizar no Cap. 4.1
4. **Tradução *jus soli*** - Adicionar tradução do latim no Cap. 2.1

## 💡 Usando o Rastreador HTML

```
✓ Marque conclusões
📊 Veja métricas ao vivo
🏷️ Filtre por prioridade
👤 Atribua responsáveis
📅 Defina datas
📥 Exporte em CSV
```

## 🔄 Mantendo Atualizado

Após cada conclusão:
```bash
git add rastreamento-melhorias/
git commit -m "update: progresso em [descrição do ponto]"
git push origin main
```

## 📞 Suporte

- **Git Help:** https://docs.github.com/pt/get-started
- **Markdown Guide:** https://www.markdownguide.org/
- **HTML5:** https://developer.mozilla.org/pt-BR/docs/Web/HTML

## ✨ Próximas Etapas

1. ✅ Revisar este README
2. ✅ Abrir `rastreador_melhorias.html`
3. ✅ Começar pelos críticos
4. ✅ Marcar progresso regularmente
5. ✅ Fazer commits após cada lote

---

**Criado:** 2024  
**Status:** Em Desenvolvimento  
**Objetivo:** Melhorias 100% Completas  

*Boa sorte com as melhorias! 📚✨*
EOF
success "README.md criado"
echo ""

# Passo 7: Verificar status do git
echo "Passo 6: Verificando status do Git..."
git status
echo ""

# Passo 8: Adicionar arquivos
echo "Passo 7: Adicionando arquivos ao Git..."
git add "$FOLDER_NAME/" || error "Falha ao adicionar arquivos"
success "Arquivos adicionados"
echo ""

# Passo 9: Configurar git (se necessário)
echo "Passo 8: Configurando Git (se necessário)..."
if [ -z "$(git config user.name)" ]; then
    warning "Nome de usuário não configurado. Usando padrão..."
    git config user.name "GitHub User" || warning "Não conseguiu configurar nome"
fi

if [ -z "$(git config user.email)" ]; then
    warning "Email não configurado. Usando padrão..."
    git config user.email "user@github.com" || warning "Não conseguiu configurar email"
fi
success "Git configurado"
echo ""

# Passo 10: Fazer commit
echo "Passo 9: Criando commit..."
git commit -m "$COMMIT_MESSAGE" || error "Falha ao fazer commit"
success "Commit criado"
echo ""

# Passo 11: Fazer push
echo "Passo 10: Fazendo push para GitHub..."
echo "⏳ Isso pode levar alguns segundos..."
echo ""

if git push origin main 2>/dev/null; then
    success "Push realizado com sucesso para 'main'!"
elif git push origin master 2>/dev/null; then
    success "Push realizado com sucesso para 'master'!"
else
    # Tentar descobrir qual é a branch padrão
    DEFAULT_BRANCH=$(git symbolic-ref refs/remotes/origin/HEAD | sed 's@^refs/remotes/origin/@@')
    if [ -z "$DEFAULT_BRANCH" ]; then
        DEFAULT_BRANCH="main"
    fi
    
    info "Tentando push para branch: $DEFAULT_BRANCH"
    if git push origin "$DEFAULT_BRANCH"; then
        success "Push realizado com sucesso para '$DEFAULT_BRANCH'!"
    else
        error "Falha ao fazer push. Verifique sua autenticação GitHub."
    fi
fi
echo ""

# Passo 12: Mostrar resultado final
echo "=========================================="
echo -e "${GREEN}✅ SUCESSO!${NC}"
echo "=========================================="
echo ""
echo "📍 Seus arquivos estão agora no GitHub!"
echo ""
echo "🔗 Acesse: https://github.com/pesquisamigra/livro/tree/main/rastreamento-melhorias"
echo ""
echo "📋 Próximos passos:"
echo "  1. Abra o rastreador: rastreador_melhorias.html"
echo "  2. Comece pelos 4 pontos críticos"
echo "  3. Marque progresso no painel"
echo "  4. Faça commits regularmente"
echo ""
echo "💡 Dica: Use 'git pull origin main' para sincronizar mudanças"
echo ""
echo "=========================================="

# Voltar ao diretório original
cd ..

exit 0
