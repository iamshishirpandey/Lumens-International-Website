import { Switch } from "@headlessui/react";
import React from "react";

import Cases from "../components/Home/Cases";
import ContactCards from "../components/Home/ContactCards";
import Experience from "../components/Home/Experience";
import FullCarousel from "../components/Home/FullCarousel";
import Industries from "../components/Home/Industries";
import MapContainer from "../components/Home/MapContainer";
import Mission from "../components/Home/Mission";
import Names from "../components/Home/Names";

const Index = () => {
  return (
    <div>
      <FullCarousel />
      <ContactCards />
      <Mission />
      <Industries />
      <Experience />
      <Names />
      <Cases />
      <MapContainer />
    </div>
  );
};

export default Index;
