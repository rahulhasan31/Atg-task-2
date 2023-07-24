import FullPageScroll from "./FullPageScroll/FullPageScroll";

import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  AOS.init();
  return (
    <>
      <FullPageScroll></FullPageScroll>
    </>
  );
}

export default App;
