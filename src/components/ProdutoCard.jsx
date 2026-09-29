function ProdutoCard({ nome, preco, imagem, descricao }) {
  return (
    <div className="produto-card">
      <img
        src={imagem}
        alt={nome}
        loading="lazy"
        width="300"
        height="200"
      />

      <h2>{nome}</h2>

      <p>{descricao}</p>

      <strong>R$ {preco}</strong>
    </div>
  );
}

export default ProdutoCard;