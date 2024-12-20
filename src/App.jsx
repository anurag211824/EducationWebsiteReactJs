import React from "react";
import Hero from "./sections/Hero";
import OurProgram from "./sections/OurProgram";
import AboutUniversity from "./sections/AboutUniversity";
import Gallery from "./sections/Gallery";
import Testimonails from "./sections/Testimonails";
import ContactUs from "./sections/ContactUs";
import Footer from "./sections/Footer";

const App = () => {
  return (
 <main >
  <section className="mb-10">
    <Hero/>
  </section>
 <section className="padding max-container mb-10">
  <OurProgram/>
 </section>

 <section className="bg-black padding max-container">
  <AboutUniversity/>
 </section>

<section className="">
  <Gallery/>
</section>
<section>
  <Testimonails/>
</section>
<section>
  <ContactUs/>
</section>

<section>
  <Footer/>
</section>
  
 </main>
  );
};

export default App;
