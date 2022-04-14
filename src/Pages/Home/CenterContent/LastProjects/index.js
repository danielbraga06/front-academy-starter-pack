import "./styles.css";

import Card from "../../../../Components/Card";
import Heading from "../../../../Components/Heading";
import Project from "../../../../Components/Project";

function LastProjects() {
  return (
    <Card>
      <div className="last-projects-container">
        <div className="last-projects__header">
          <Heading fontSize={24}>Últimos projetos</Heading>
          <Heading color="#6A6A6A" fontSize={19} >VER TODOS</Heading>
        </div>
        <div className="last-projects__content">
            <Project />
        </div>
      </div>
    </Card>
  );
}

export default LastProjects;
