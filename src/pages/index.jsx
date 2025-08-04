import Events from "../components/commonComponents/Events";
import Navbar from "../components/commonComponents/Navbar";
import Hero from "../components/Hero";

const LayoutPage = () => {
  return (
    <>
      <section>
        <Navbar />
      </section>
      <section>
        <Hero />
      </section>
      <section>
        <Events />
      </section>
    </>
  );
};

export default LayoutPage;
