import { useState } from "react";
import "./style.css";

const Header = ({ showProducts }) => {
  const [input, setInput] = useState("");

  return (
    <header className="header">
      <div className="pagina">
        <div className="titulos">
          <h1 className="titulo">
            Burguer<span className="subtitulo">Kenzie</span>
          </h1>
        </div>

        <div className="pesquisa">
          <input
            className="input_pesquisa"
            type="text"
            placeholder="Digite sua pesquisa"
            value={input}
            onChange={(event) => {
              setInput(event.target.value);
              showProducts(input);
            }}
          />
          <button
            className="botao_pesquisa"
            onClick={() => showProducts(input)}
          >
            Pesquisar
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
