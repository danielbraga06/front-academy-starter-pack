import LogoImagem from "./Imagens/logo-eu.png";
import "./styles.css";

function Logo() {
  return (
    <div>
      <img alt="Logo Front Academy" class="logo" src={LogoImagem} />
    </div>
  );
}

export default Logo;
