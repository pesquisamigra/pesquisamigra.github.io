# 📤 INSTRUÇÕES PARA CONECTAR AO GITHUB

## Repositório Destino
**URL:** https://github.com/pesquisamigra/livro

---

## OPÇÃO 1: Usando Script Automatizado (Recomendado)

### Passo 1: Execute o Script
Abra seu terminal/cmd e navegue até a pasta dos arquivos, então execute:

```bash
bash upload_para_github.sh
```

**O script automaticamente:**
- Clona seu repositório
- Copia os 3 arquivos de rastreamento
- Cria um commit automático
- Faz o push para GitHub

---

## OPÇÃO 2: Manual (Passo a Passo)

### Passo 1: Clone o Repositório
```bash
git clone https://github.com/pesquisamigra/livro.git
cd livro
```

### Passo 2: Crie uma Pasta para Rastreamento
```bash
mkdir -p rastreamento-melhorias
cd rastreamento-melhorias
```

### Passo 3: Copie os Arquivos
Copie estes 3 arquivos para essa pasta:
- `Plano_Melhorias_Livro_Migracao.md`
- `rastreador_melhorias.html`
- `GUIA_USO_RASTREADORES.md`

### Passo 4: Crie um README para a pasta
```bash
cat > README.md << 'EOF'
# 📊 Rastreamento de Melhorias do Livro

Sistema completo para rastrejar e gerenciar as melhorias do livro:
"Os Processos de Subjetivação na Mobilidade Humana"

## 📁 Arquivos Disponíveis

1. **Plano_Melhorias_Livro_Migracao.md** - Lista completa de todos os 18 pontos
2. **rastreador_melhorias.html** - Painel interativo em tempo real
3. **GUIA_USO_RASTREADORES.md** - Como usar as ferramentas

## 🚀 Como Usar

1. Abra `rastreador_melhorias.html` em seu navegador
2. Leia `GUIA_USO_RASTREADORES.md` para orientações
3. Consulte `Plano_Melhorias_Livro_Migracao.md` para detalhes completos

## 📊 Resumo Rápido

- **Total de Pontos:** 18
- **Críticos:** 4 pontos 🔴
- **Importantes:** 8 pontos 🟡
- **Complementares:** 8 pontos 🟢

## 📅 Cronograma

- **Semana 1:** Resolver críticos
- **Semana 2-3:** Abordar importantes
- **Semana 4:** Refinar complementares

---

_Sistema criado para rastreamento contínuo de melhorias_
EOF
```

### Passo 5: Adicione os Arquivos ao Git
```bash
git add .
```

### Passo 6: Crie um Commit
```bash
git commit -m "docs: adicionar sistema de rastreamento de melhorias do livro

- Plano detalhado com 18 pontos identificados
- Painel interativo em HTML para monitorar progresso
- Guia completo de como usar as ferramentas
- Cronograma de 4 semanas para conclusão"
```

### Passo 7: Faça o Push
```bash
git push origin main
```

Se usar uma branch diferente (dev, develop, etc):
```bash
git push origin nome-da-sua-branch
```

---

## ⚠️ POSSÍVEIS ERROS E SOLUÇÕES

### Erro: "fatal: not a git repository"
**Solução:** Certifique-se de que você está dentro da pasta do repositório clonado
```bash
cd livro
```

### Erro: "permission denied"
**Solução:** Gere um token GitHub:
1. Vá para https://github.com/settings/tokens
2. Clique em "Generate new token"
3. Selecione escopos: `repo` e `workflow`
4. Copie o token
5. Use como senha quando git pedir

### Erro: "fatal: Authentication failed"
**Solução:** Configure credenciais:
```bash
git config --global user.name "Seu Nome"
git config --global user.email "seu.email@example.com"
```

### Erro: "fatal: could not read Username"
**Solução 1:** Use HTTPS com token (recomendado)
```bash
git remote set-url origin https://SEU_TOKEN@github.com/pesquisamigra/livro.git
```

**Solução 2:** Ou configure SSH
```bash
git remote set-url origin git@github.com:pesquisamigra/livro.git
```

---

## ✅ VERIFICAR SE DEU CERTO

Após fazer o push, acesse:
```
https://github.com/pesquisamigra/livro/tree/main/rastreamento-melhorias
```

Você deve ver os 3 arquivos lá! 🎉

---

## 📝 ESTRUTURA FINAL DO REPOSITÓRIO

```
livro/
├── README.md
├── ... (seus outros arquivos)
└── rastreamento-melhorias/
    ├── README.md
    ├── Plano_Melhorias_Livro_Migracao.md
    ├── rastreador_melhorias.html
    └── GUIA_USO_RASTREADORES.md
```

---

## 🔄 ATUALIZAÇÕES FUTURAS

Para atualizar os arquivos quando fizer mudanças:

```bash
cd livro/rastreamento-melhorias
# Editar arquivos...
git add .
git commit -m "update: atualizar progresso de melhorias"
git push origin main
```

---

## 💡 DICAS EXTRAS

### Visualizar Status
```bash
git status
```

### Ver Histórico de Commits
```bash
git log --oneline
```

### Desfazer Último Commit (se precisar)
```bash
git reset --soft HEAD~1
```

### Atualizar com Mudanças do Servidor
```bash
git pull origin main
```

---

## 🎯 PRÓXIMOS PASSOS

1. ✅ Execute o script ou siga os passos manuais
2. ✅ Verifique se os arquivos estão no GitHub
3. ✅ Comece a usar o rastreador!
4. ✅ Faça commits conforme avança
5. ✅ Compartilhe o repositório com sua equipe

---

**Pronto para sincronizar? Execute agora!** 🚀

Se tiver dúvidas, consulte: https://docs.github.com/pt/get-started
