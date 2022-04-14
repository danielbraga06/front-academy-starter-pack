import Card from "../../../Components/Card";
import UserProfile from '../UserProfile';
import LastProjects from "./LastProjects";

import "./styles.css";
import Technologies from "./Technologies";

function CenterContent() {
  return (
    <div className="center-content-container">
      <div className="center-content-container__left">
        <UserProfile />
      </div>

      <div className="center-content-container__right">
        <Technologies />

        <LastProjects />

        <Card>Card 3</Card>
      </div>
    </div>
  );
}

export default CenterContent;
