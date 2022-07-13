import "./style.css";

const Product = ({ produto, handleClick }) => {
  return (
    <section className="cards">
      <figure className="img_conteudo">
        <img className="img" src={produto.img} alt={produto.name} />
      </figure>
      <h2 className="produto">{produto.name}</h2>
      <h3 className="categoria">{produto.category}</h3>
      <h4 className="preco">R$ {produto.price.toFixed(2)}</h4>
      <button
        className="botao_adicionar"
        onClick={() => handleClick(produto.id)}
      >
        Adicionar
      </button>
    </section>
  );
};

export default Product;
