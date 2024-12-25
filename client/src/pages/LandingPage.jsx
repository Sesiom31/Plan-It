import Features from "../components/landing/Features";
import Footer from "../layouts/Footer";
import Presentation from "../components/landing/Presentation";
import Works from "../components/landing/Works";

function LandingPage() {
  return (
    <div>
      <Presentation />
      <Features />
      <Works />
      <Footer />
    </div>
  );
}

export default LandingPage;
