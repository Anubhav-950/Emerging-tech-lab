import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import ServiceCards from "../components/ServiceCards";
import ConsultSection from "../components/ConsultSection";
import ClinicSection from "../components/ClinicSection";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <SearchBar />
      <ServiceCards />
      <ConsultSection />
      <ClinicSection />
      <Footer />
    </>
  );
};

export default Home;
