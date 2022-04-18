import CenterContent from "./CenterContent";
import "./styles.css";
import Text from "../../Components/Text";
import Logo from "../../Components/Logo";

function Home() {
  return (
    <div className="home-container">
      <div className="home-container__content">
        <CenterContent />

        <div className="home-container__content__bottom">
          <Text color="#fff">Powered by</Text>
          <div className="logo-container">
            <Logo />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
