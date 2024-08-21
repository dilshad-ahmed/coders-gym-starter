import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import BgImage from "./assets/bg.png";
import Equipments from "./components/Equipments/Equipments";
import Banner from "./components/Banner/Banner";
import Img1 from "./assets/2.png";
import Img2 from "./assets/3.png";
import TabComp from "./components/Tab/TabComp";
import Testimonials from "./components/Testimonials/Testimonials";
import Banner2 from "./components/Banner/Banner2";
import Footer from "./components/Footer/Footer";

const BannerData = {
  image: Img1,
  title: "The Importants To Take Care Of Yourself",
  subtitle:
    "The Importants To Take Care Of Yourself Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id nam obcaecati sequi odio dolore officia magni reiciendis, architecto, eos, aut asperiores reprehenderit quas rerum omnis facilis quam eius doloribus maxime! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae vero inventore assumenda ducimus alias doloribus.",
  link: "#",
};
const Banner2Data = {
  image: Img2,
  title: "The Importants To Take Care Of Yourself",
  subtitle:
    "The Importants To Take Care Of Yourself Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id nam obcaecati sequi odio dolore officia magni reiciendis, architecto, eos, aut asperiores reprehenderit quas rerum omnis facilis quam eius doloribus maxime! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae vero inventore assumenda ducimus alias doloribus.",
  link: "#",
};

const bgStyle = {
  backgroundImage: `url(${BgImage})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundAttachment: "fixed",
};
const App = () => {
  return (
    <div className="overflow-x-hidden">
      <div style={bgStyle}>
        <Navbar />
        <Hero />
      </div>
      <Equipments />
      <Banner {...BannerData} />
      <TabComp />
      <Banner {...Banner2Data} />
      <Testimonials />
      <Banner2 />
      <Footer />
    </div>
  );
};

export default App;
