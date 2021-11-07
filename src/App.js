import { Fragment } from "react";
import AboutUs from "./components/AboutUs";
import Header from "./components/Header";
import Packages from "./components/Packages";
import Footer from "./components/Footer";

function App() {
  return (
    <Fragment>
      <Header />
      <AboutUs />
      <Packages />
      <Footer />
    </Fragment>
  );
}

export default App;
