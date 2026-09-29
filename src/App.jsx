import { useState } from "react";
import ProdutoCard from "./components/ProdutoCard";

import tenis from "./assets/tenis.webp";
import camiseta from "./assets/camiseta.webp";
import mochila from "./assets/mochila.webp";

function App() {
  const [produtos, setProdutos] = useState([
    {
      id: 1,
      nome: "Tênis Esportivo",
      preco: "199,90",
      imagem: tenis,
      descricao: "Tênis confortável para atividades esportivas.",
    },
    {
      id: 2,
      nome: "Camiseta Básica",
      preco: "79,90",
      imagem: camiseta,
      descricao: "Camiseta confortável para o dia a dia.",
    },
    {
      id: 3,
      nome: "Mochila",
      preco: "149,90",
      imagem: mochila,
      descricao: "Mochila prática para estudos e trabalho.",
    },
  ]);


  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");
  const [descricao, setDescricao] = useState("");


  function adicionarProduto(event) {
    event.preventDefault();

    const novoProduto = {
      id: Date.now(),
      nome: nome,
      preco: preco,
      imagem: "https://placehold.co/300x200",
      descricao: descricao,
    };

    setProdutos([...produtos, novoProduto]);

    setNome("");
    setPreco("");
    setDescricao("");
  }

  return (
    <main>
      <h1>Catálogo de Produtos</h1>

      <form onSubmit={adicionarProduto}>
        <h2>Adicionar produto</h2>

        <input
          type="text"
          placeholder="Nome do produto"
          value={nome}
          onChange={(event) => setNome(event.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Preço"
          value={preco}
          onChange={(event) => setPreco(event.target.value)}
          required
        />

        <textarea
          placeholder="Descrição do produto"
          value={descricao}
          onChange={(event) => setDescricao(event.target.value)}
          required
        />

        <button type="submit">Adicionar produto</button>
      </form>

      <section>
        {produtos.map((produto) => (
          <ProdutoCard
            key={produto.id}
            nome={produto.nome}
            preco={produto.preco}
            imagem={produto.imagem}
            descricao={produto.descricao}
          />
        ))}
      </section>
    </main>
  );
}

export default App;