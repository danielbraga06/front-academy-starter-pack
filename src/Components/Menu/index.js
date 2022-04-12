import Button from "../Button";
import Logo from "../Logo";
import "./styles.css";

function Menu() {
  return (
    <div className="menu-container">
      <div className="menu">
        <div>
          <Logo />
          Teste
        </div>

        <div className="links-container">
          <Button>StarterPack</Button>
          <Button>Evolution</Button>
          <Button>Specialist</Button>
        </div>

        <div className="right">
          <Button>Entrar</Button>

          <Button
            backgroundColor="#0289ea"
            borderRadius={8}
            padding="13px 65px"
          >
            Começar
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Menu;
