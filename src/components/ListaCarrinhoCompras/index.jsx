import "./style.css";

const ListaCarrinhoCompras = ({ produto, removeProduto }) => {
  return (
    <div className="renderiza_produto">
      <figure className="container_img">
        <img
          className="img_listacarrinho"
          src={produto.img}
          alt={produto.name}
        />
      </figure>
      <div className="nome_produto">
        <h2 className="produto_titulo">{produto.name}</h2>
        <h3 className="produto_categoria">{produto.category}</h3>
      </div>
      <button
        className="remove_produto"
        onClick={() => removeProduto(produto.id)}
      >
        Remover
      </button>
    </div>
  );
};

export default ListaCarrinhoCompras;
