import "react";
import Header from "../component/Header";
import Specialistmenu from "../component/Specialistmenu";
import TopDocters from "../component/TopDocters";
import Banner from "../component/Banner";
import Footer from "../component/Footer";

function Home() {
  return (
    <div>
      <Header />
      <Specialistmenu />
      <TopDocters />
      <Banner />
      <Footer />
    </div>
  );
}

export default Home;
