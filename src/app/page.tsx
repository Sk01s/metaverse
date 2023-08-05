import About from "./sections/About";
import Creater from "./sections/Creater";
import Description from "./sections/Description";
import Footer from "./sections/Footer";
import Information from "./sections/Information";
import Landing from "./sections/Landing";
import Map from "./sections/Map";
import World from "./sections/World";

export default function Home() {
  return (
    <>
      <Landing />
      <Description />
      <World />
      <Information />
      <Map />
      <About />
      <Creater />
      <Footer />
    </>
  );
}
