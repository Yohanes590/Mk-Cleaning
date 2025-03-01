import NavBar from "./componets/nav-bar"
import Home_landing from "./componets/home"
import About_Section from "./componets/about-section"
import ServiceCompo from "./componets/service"
import PortFolio from "./componets/portfolio"
import ContactUs from "./componets/contact-us"
import Fotter from "./componets/fotter"
import Loader from "./componets/loder"
function App() {
  return (<>
    <Loader />
    <NavBar />
    <Home_landing />
    <About_Section />
    <ServiceCompo />
    <PortFolio />
    <ContactUs />
    <Fotter />

  </>)
}

export default App