import Main from "./components/Main";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Data } from "./components/shared/Data";

const App = () => {
  const data = Data;
  return <Main data={data} />;
};

export default App;
