import React from "react";
import SideBarContant from "../components/common/header/SideBarContant";
import Cases from "../components/Home/Cases";
import ContactCards from "../components/Home/ContactCards";
import Experience from "../components/Home/Experience";
import FullCarousel from "../components/Home/FullCarousel";
import Industries from "../components/Home/Industries";
import MapContainer from "../components/Home/MapContainer";
import Names from "../components/Home/Names";

const Home = () => {
  return (
    <div>
      <FullCarousel />
      <ContactCards />
      <Industries />
      <Experience />
      <Names />
      <Cases />
      <MapContainer />
      <SideBarContant />
    </div>
  );
};

export default Home;
