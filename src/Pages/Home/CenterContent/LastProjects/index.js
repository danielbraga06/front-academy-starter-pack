import "./styles.css";

import Card from "../../../../Components/Card";
import Heading from "../../../../Components/Heading";
import Project from "../../../../Components/Project";

import MeuPortfolio from "./assets/portfolio.PNG";
import FrontAcademy from "./assets/frontacademy.PNG";

function LastProjects() {
  return (
    <Card>
      <div className="last-projects-container">
        <div className="last-projects__header">
          <Heading fontSize={24}>Últimos projetos</Heading>
          <Heading color="#6A6A6A" fontSize={15}>
            VER TODOS
          </Heading>
        </div>
        <div className="last-projects__wrapper">
          <div className="last-projects__content">
            <Project
              imageUrl={MeuPortfolio}
              link="https://danielbraga06.github.io/portfolio-digital/"
              title="Projeto: Meu primeiro portfólio"
            />
            <Project
              imageUrl={FrontAcademy}
              link="https://www.frontacademy.com.br/"
              title="Exemplo de projeto feito com React"
            />
            <Project
              imageUrl={FrontAcademy}
              link="https://www.frontacademy.com.br/"
              title="Exemplo de projeto feito com React"
            />
            <Project
              imageUrl={FrontAcademy}
              link="https://www.frontacademy.com.br/"
              title="Exemplo de projeto feito com React"
            />
          </div>
        </div>
      </div>
    </Card>
  );
}

export default LastProjects;
