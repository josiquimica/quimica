# 📜 Histórico de Commits — Lab da Josi

Registro de todas as alterações do projeto **[Lab da Josi](https://josiquimica.github.io/quimica/)** — site de estudo de Química (jogo, apostila e simulado).

**Repositório:** [josiquimica/quimica](https://github.com/josiquimica/quimica)

---

## Resumo

| # | Data | Commit | Autor | Descrição |
|---|------|--------|-------|-----------|
| 10 | 13/07/2026 00:32 | `8a02acc` | Claude | Simulado UECE: 81 questões de provas anteriores (2010–2019) |
| 9 | 13/07/2026 00:05 | `320ea28` | Claude | Animações no celular: efeitos de toque, reduzir-movimento mais suave e cache do PWA |
| 8 | 12/07/2026 16:12 | `ff6b97f` | Josiane Ximenes | PWA para Safari/iOS: manifest, service worker offline, ícones e meta tags apple |
| 7 | 12/07/2026 16:03 | `51a251c` | Josiane Ximenes | Atualiza link do site para o novo usuário josiquimica |
| 6 | 12/07/2026 15:56 | `b7dab99` | Josiane Ximenes | Responsividade mobile no portal, jogo e apostila |
| 5 | 12/07/2026 15:46 | `faf3cd6` | Josiane Ximenes | Portal online (index) + páginas jogo.html/apostila.html para GitHub Pages |
| 4 | 12/07/2026 15:42 | `25dfc27` | Josiane Ximenes | Une conteúdo local (jogo + apostila) ao repositório remoto |
| 3 | 12/07/2026 15:35 | `37cdd37` | Josiane Ximenes | Adiciona apostila de estudo com calculadoras, avatar e gamificação |
| 2 | 12/07/2026 00:55 | `23dd250` | Josiane Ximenes | 20 estações: +7 jogos no Jogo de Química |
| 1 | 12/07/2026 00:42 | `dfcfaab` | Josiane Ximenes | Jogo de Química: 13 estações + caderno de cálculos e favicon |
| 0 | 11/07/2026 22:38 | `1c55ea9` | josifoda | Initial commit |

*Merges de pull requests (#1 e #2) omitidos da lista para facilitar a leitura.*

---

## Detalhes

### 10. Simulado UECE: 81 questões de provas anteriores (2010–2019)
- **Commit:** `8a02acc` · **Data:** 13/07/2026 00:32 · **PR:** [#2](https://github.com/josiquimica/quimica/pull/2)
- **Alterações:** 6 arquivos, +390 / −3 linhas
- Nova página `simulado.html` com 81 questões oficiais do vestibular da UECE organizadas por tema: Termoquímica (23), Eletroquímica (35), Equilíbrio Químico (20) e Cinética Química (3).
- Questões interativas com correção na hora, placar, filtro por tema e progresso salvo no navegador; gabarito marcado como não oficial.
- Figuras das questões 1, 2 e 9 (ciclo de Born-Haber e diagramas de energia) incluídas em `img/`.
- Novo cartão "🎓 Simulado UECE" no portal e cache do service worker atualizado (`labjosi-v3`).

### 9. Animações no celular
- **Commit:** `320ea28` · **Data:** 13/07/2026 00:05 · **PR:** [#1](https://github.com/josiquimica/quimica/pull/1)
- **Alterações:** 6 arquivos, +24 / −20 linhas
- Efeitos que só funcionavam com mouse (`:hover`) passaram a responder também ao toque (`:active`) no portal, no jogo e na apostila.
- A regra `prefers-reduced-motion` do jogo deixou de desligar todas as animações; agora esconde apenas o confete.
- Cache do service worker incrementado (`labjosi-v2`) para o celular baixar os arquivos novos.

### 8. PWA para Safari/iOS
- **Commit:** `ff6b97f` · **Data:** 12/07/2026 16:12
- **Alterações:** 10 arquivos, +112 / −6 linhas
- `manifest.json`, service worker offline (`sw.js`), ícones (180/192/512 px) e meta tags da Apple para instalar o site como aplicativo no iPhone.

### 7. Atualiza link do site
- **Commit:** `51a251c` · **Data:** 12/07/2026 16:03
- **Alterações:** 1 arquivo, +1 / −1 linha
- Link do site atualizado para o novo usuário `josiquimica`.

### 6. Responsividade mobile
- **Commit:** `b7dab99` · **Data:** 12/07/2026 15:56
- **Alterações:** 5 arquivos, +124 / −8 linhas
- Media queries e correção de `overflow-x` no portal, no jogo e na apostila para telas de celular.

### 5. Portal online para GitHub Pages
- **Commit:** `faf3cd6` · **Data:** 12/07/2026 15:46
- **Alterações:** 4 arquivos, +4025 / −2565 linhas
- Criação do portal (`index.html`) e das páginas `jogo.html` e `apostila.html` para publicação no GitHub Pages.

### 4. Une conteúdo local ao repositório remoto
- **Commit:** `25dfc27` · **Data:** 12/07/2026 15:42
- Merge do conteúdo local (jogo + apostila) com o repositório remoto.

### 3. Apostila de estudo
- **Commit:** `37cdd37` · **Data:** 12/07/2026 15:35
- **Alterações:** 1 arquivo, +1392 linhas
- Apostila de Química + Conhecimentos Gerais com calculadoras interativas, avatar tutora e gamificação.

### 2. Jogo com 20 estações
- **Commit:** `23dd250` · **Data:** 12/07/2026 00:55
- **Alterações:** 2 arquivos, +1364 / −16 linhas
- Mais 7 jogos: história da química, estequiometria, orbitais, eletrólitos, propriedades periódicas, nomenclatura e gases — totalizando 20 estações.

### 1. Jogo de Química
- **Commit:** `dfcfaab` · **Data:** 12/07/2026 00:42
- **Alterações:** 6 arquivos, +3862 linhas
- Primeira versão do jogo com 13 estações, caderno de cálculos e favicon.

### 0. Initial commit
- **Commit:** `1c55ea9` · **Data:** 11/07/2026 22:38
- Criação do repositório com o README inicial.
