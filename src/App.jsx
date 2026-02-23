import HeroText from "./components/HeroText";
import Navbar from "./components/Navbar"
import Section2 from "./components/Section2/Section2";


import Featurebar from "./components/Featurebar";
import AdditionalSection from "./components/Section1/AdditionalSection";
const App = () => {
  return (
    <div className="w-full min-h-screen">
      <section>
        <HeroText />
        <div className="w-full bg-gradient-to-tl from-pink-600 to-pink-950">
          <Navbar />
          <Featurebar />
          <AdditionalSection />          
        </div>
        <Section2 />
      </section>
    </div>
  );
};

export default App;
