import Features from "../components/landing/Features";
import Footer from "../layouts/Footer";
import JoinUs from "../components/landing/JoinUs";
import Presentation from "../components/landing/Presentation";
import Process from "../components/landing/Process";

function LandingPage() {
  return (
    <div>
      <Presentation />
      <Features />
      <Process />
      <JoinUs />
      <Footer />
    </div>
  );
}

export default LandingPage;
