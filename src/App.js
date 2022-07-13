import MenuContainer from "./components/MenuContainer";
import { useState } from "react";
import Header from "./components/Header";
import CarrinhoCompras from "./components/CarrinhoCompras";

function App() {
  const [products] = useState([
    {
      id: 1,
      name: "Hamburguer",
      category: "Sanduíches",
      price: 14.0,
      img: "https://i.ibb.co/fpVHnZL/hamburguer.png",
    },
    {
      id: 2,
      name: "X-Burguer",
      category: "Sanduíches",
      price: 16.0,
      img: "https://i.ibb.co/djbw6LV/x-burgue.png",
    },
    {
      id: 3,
      name: "Big Kenzie",
      category: "Sanduíches",
      price: 18.0,
      img: "https://i.ibb.co/FYBKCwn/big-kenzie.png",
    },
    {
      id: 4,
      name: "Fanta Guaraná",
      category: "Bebidas",
      price: 5.0,
      img: "https://i.ibb.co/cCjqmPM/fanta-guarana.png",
    },
    {
      id: 5,
      name: "Coca-Cola",
      category: "Bebidas",
      price: 4.99,
      img: "https://i.ibb.co/fxCGP7k/coca-cola.png",
    },
    {
      id: 6,
      name: "Milkshake Ovomaltine",
      category: "Bebidas",
      price: 4.99,
      img: "https://i.ibb.co/QNb3DJJ/milkshake-ovomaltine.png",
    },
  ]);

  const [filteredProducts, setFilteredProducts] = useState(products);
  const [currentSale, setCurrentSale] = useState([]);

  const showProducts = (produtoFiltrado) => {
    const filtraPesquisa = products.filter((item) => {
      return (
        item.name.toUpperCase().includes(produtoFiltrado.toUpperCase()) ||
        item.category.toUpperCase().includes(produtoFiltrado.toUpperCase())
      );
    });
    setFilteredProducts(filtraPesquisa);
  };

  const handleClick = (productId) => {
    const filtroCarrinho = products.find((item) => {
      return item.id === productId;
    });
    if (!currentSale.find((item) => item.id === filtroCarrinho.id))
      setCurrentSale([...currentSale, filtroCarrinho]);
  };

  const removeProduto = (id) => {
    const filtro = currentSale.filter((item) => {
      return item.id !== id;
    });
    if (filtro) {
      if (Array.isArray(filtro)) setCurrentSale(filtro);
      else setCurrentSale([filtro]);
    } else setCurrentSale([]);
  };

  const removeTodos = () => {
    setCurrentSale([]);
  };

  return (
    <>
      <Header showProducts={showProducts} />
      <div className="renderizacao">
        <div className="pagina_inicial">
          <MenuContainer
            produtos={filteredProducts}
            handleClick={handleClick}
          />
          <CarrinhoCompras
            currentSale={currentSale}
            removeProduto={removeProduto}
            removeTodos={removeTodos}
          />
        </div>
      </div>
    </>
  );
}

export default App;
