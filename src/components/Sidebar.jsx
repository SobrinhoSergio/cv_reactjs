import SocialNetworkContainer from "./SocialNetworkContainer";
import InformationContainer from "./InformationContainer";

import Avatar from "../img/eu.jpg";

import "../styles/components/sidebar.sass";

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src="https://avatars.githubusercontent.com/u/53090956?v=4" alt="Matheus Battisti" />
      <p className="title">Dev. Web JR.</p>
      <SocialNetworkContainer />
      <InformationContainer />
      <a href="./cv_sergio.pdf" className="btn" download>
        Download currículo
      </a>
    </aside>
  );
};

export default Sidebar;
