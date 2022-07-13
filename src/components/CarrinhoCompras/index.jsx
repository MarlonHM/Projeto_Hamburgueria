import { useState, useEffect } from "react";
import ListaCarrinhoCompras from "../ListaCarrinhoCompras";
import "./style.css";

const CarrinhoCompras = ({ currentSale, removeProduto, removeTodos }) => {
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const filtraPreco = currentSale
      .reduce((anterior, valorAtual) => {
        return anterior + valorAtual.price;
      }, 0)
      .toFixed(2);
    setCartTotal(filtraPreco);
  }, [currentSale]);

  return (
    <div className="centraliza">
      <div className="carrinho">
        <h2 className="titulo_carrinho">Carrinho de compras</h2>
        {currentSale.length ? (
          <div>
            {currentSale.map((item) => {
              return (
                <ListaCarrinhoCompras
                  key={item.name}
                  removeProduto={removeProduto}
                  produto={item}
                />
              );
            })}
            <div className="container_carrinho">
              <div className="div_total">
                <h2 className="total">Total</h2>
                <span className="valor">R$ {cartTotal}</span>
              </div>
              <button className="remover" onClick={() => removeTodos()}>
                Remover todos
              </button>
            </div>
          </div>
        ) : (
          <div className="carrinho_vazio">
            <h3 className="sacola_vazia"> Sua sacola está vazia</h3>
            <p className="adicione_itens">Adicione itens</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CarrinhoCompras;
