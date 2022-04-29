import UserProfile from "./UserProfile";
import LastProjects from "./LastProjects";

import "./styles.css";
import Technologies from "./Technologies";
import Certificates from "./Certificates";

function CenterContent() {
  return (
    <div className="center-content-container">
      <div className="center-content-container__left">
        <UserProfile />
      </div>

      <div className="center-content-container__right">
        <Technologies />

        <LastProjects />

        <Certificates />
      </div>
    </div>
  );
}

export default CenterContent;
