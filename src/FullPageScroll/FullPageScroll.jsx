import Fullpage, { FullPageSections } from "@ap.cx/react-fullpage";
import CardOne from "../component/CardOne";
import CardThree from "../component/CardThree";
import CardTwo from "../component/CardTwo";

import "./FullPageScroll.css";

const FullPageScroll = () => {
  return (
    <Fullpage>
      <FullPageSections>
        <CardOne />
        <CardTwo />
        <CardThree />
      </FullPageSections>
    </Fullpage>
  );
};

export default FullPageScroll;
