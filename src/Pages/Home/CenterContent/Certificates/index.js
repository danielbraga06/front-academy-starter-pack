import "./styles.css";

import Card from "../../../../Components/Card";
import Heading from "../../../../Components/Heading";
import Certificate from "../../../../Components/Certificate";

import StarterPack from "./assets/starter-pack.png";

function Certificates() {
  return (
    <Card>
      <div className="certificates-container">
        <div className="certificates__header">
          <Heading fontSize={24}>Certificados</Heading>
          <Heading color="#6A6A6A" fontSize={15}>
            VER TODOS
          </Heading>
        </div>
        <div className="certificates__content">
          <Certificate
            imageUrl={StarterPack}
            link="https://www.frontacademy.com.br/"
            title="STARTER PACK"
            subTitle="Front Academy, 2022"
            authenticationCode="Autenticação #1929292a1ka191922k1921929aaj"
          />
        </div>
      </div>
    </Card>
  );
}

export default Certificates;
