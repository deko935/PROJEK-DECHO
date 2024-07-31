import "./App.css";
import NavbarPages from "./Pages/NavbarPages";
import IntroSectionPages from "./Pages/IntroSectionPages";
import HorrorPages from "./Pages/HorrorPages";
import TrendingPages from "./Pages/TrendingPages";
function App() {
  return (
    <>
      <div className="MyBg">
        <NavbarPages />
        <IntroSectionPages />
      </div>
      <div className="trending">
        <TrendingPages />
      </div>

      <div className="horror">
        <HorrorPages />
      </div>
    </>
  );
}

export default App;
