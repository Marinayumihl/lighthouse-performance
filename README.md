# Catálogo de Produtos React — Otimização de Performance

## Sobre o projeto

Este projeto consiste em um catálogo de produtos desenvolvido com React e Vite. A aplicação permite visualizar produtos com imagem, nome, descrição e preço, além de adicionar novos produtos por meio de um formulário.

O projeto foi utilizado para realizar uma análise de performance com o Chrome DevTools Lighthouse, identificar gargalos e aplicar técnicas de otimização.

---

## Diagnóstico inicial

Antes das otimizações, foi realizado um teste utilizando o Lighthouse na versão de produção da aplicação, com análise em dispositivo móvel.

### Resultado inicial

- Performance: 90
- First Contentful Paint (FCP): 1,3 s
- Largest Contentful Paint (LCP): 3,1 s
- Total Blocking Time (TBT): 210 ms
- Cumulative Layout Shift (CLS): 0,003
- Speed Index: 1,5 s

Entre os principais pontos identificados pelo Lighthouse estavam:

- requisições que bloqueavam a renderização;
- problemas relacionados à descoberta do recurso responsável pelo LCP;
- possibilidade de melhoria na entrega das imagens;
- trabalho realizado na thread principal;
- JavaScript não utilizado;
- tarefas longas na thread principal.

---

## Otimizações aplicadas

### 1. Otimização das imagens

As imagens dos produtos originalmente utilizadas no formato JFIF foram convertidas para WebP.

Também foi realizado o redimensionamento e a compressão das imagens, reduzindo o tamanho dos arquivos sem comprometer significativamente a qualidade visual.

Arquivos finais:

- `tenis.webp` — 5,75 kB
- `camiseta.webp` — 6,28 kB
- `mochila.webp` — 15,13 kB

### 2. Lazy loading

Foi utilizado o atributo `loading="lazy"` nas imagens dos produtos para evitar o carregamento imediato de imagens que não precisam ser exibidas naquele momento.

Também foram definidos `width` e `height` para as imagens, ajudando o navegador a reservar previamente o espaço necessário para os elementos.

```jsx
<img
  src={imagem}
  alt={nome}
  loading="lazy"
  width="300"
  height="200"
/>
```

### 3. Remoção de código desnecessário

A aplicação possuía um carregamento artificial de 1 segundo implementado com `setTimeout` e `useEffect`.

Esse comportamento foi removido, assim como o estado de carregamento relacionado a ele, permitindo que o conteúdo disponível localmente seja renderizado diretamente.

### 4. Remoção de recursos não utilizados

Foram removidos arquivos que não eram utilizados pela aplicação, incluindo imagens do template original e as versões antigas das imagens após a conversão para WebP.

Também foi removido o arquivo `App.css`, que continha estilos do template inicial que não eram utilizados pelo catálogo.

### 5. Minificação

Foi utilizado o processo de build de produção do Vite:

```bash
npm run build
```

O build gera os arquivos de produção otimizados e minificados de HTML, CSS e JavaScript.

---

## Comparativo de performance

| Métrica | Antes | Depois |
|---|---:|---:|
| Performance | 90 | 95 |
| First Contentful Paint (FCP) | 1,3 s | 1,5 s |
| Largest Contentful Paint (LCP) | 3,1 s | 2,7 s |
| Total Blocking Time (TBT) | 210 ms | 120 ms |
| Cumulative Layout Shift (CLS) | 0,003 | 0,003 |
| Speed Index | 1,5 s | 1,5 s |

A pontuação geral de performance passou de **90 para 95**.

O Largest Contentful Paint apresentou redução de **3,1 s para 2,7 s**, enquanto o Total Blocking Time caiu de **210 ms para 120 ms**.

O FCP apresentou uma pequena variação entre as execuções. Os valores do Lighthouse são estimados e podem sofrer oscilações entre diferentes testes.

---

## Resultado

Após as otimizações, foi possível melhorar a pontuação geral do Lighthouse e reduzir métricas importantes relacionadas ao carregamento e ao bloqueio da página.

As principais melhorias envolveram otimização e conversão de imagens para WebP, lazy loading, remoção de código e recursos não utilizados e geração de uma versão de produção minificada.

## Tecnologias utilizadas

- React
- Vite
- JavaScript
- HTML
- CSS
- Chrome DevTools
- Lighthouse

## Executando o projeto

Instale as dependências:

```bash
npm install
```

Execute o projeto em desenvolvimento:

```bash
npm run dev
```

Para gerar a versão de produção:

```bash
npm run build
```

Para visualizar a versão de produção localmente:

```bash
npm run preview
```