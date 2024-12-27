import Features from "../components/landing/Features";
import Footer from "../components/landing/Footer";
import Header from "../components/landing/Header";
import JoinUs from "../components/landing/JoinUs";
import Presentation from "../components/landing/Presentation";
import Process from "../components/landing/Process";

function LandingPage() {
  return (
    <div>
      <Header />
      <Presentation />
      <Features />
      <Process />
      <JoinUs />
      <Footer />
    </div>
  );
}

export default LandingPage;
