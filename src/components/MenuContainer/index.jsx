import Product from "../Product";
import "./style.css";

const MenuContainer = ({ produtos, handleClick }) => {
  return (
    <main className="container">
      {produtos.map((item) => {
        return (
          <Product key={item.id} produto={item} handleClick={handleClick} />
        );
      })}
    </main>
  );
};

export default MenuContainer;
