import Features from "../components/landing/Features";
import Footer from "../components/landing/Footer";
import Header from "../components/landing/Header";
import JoinUs from "../components/landing/JoinUs";
import Presentation from "../components/landing/Presentation";
import Process from "../components/landing/Process";

function LandingPage() {
  return (
    <div className="h-auto w-full">
      <Header />

      <main className="mt-[4.5rem] lg:mt-16">
        <Presentation />
        <Features />
        <Process />
        <JoinUs />
      </main>

      <Footer />
    </div>
  );
}

export default LandingPage;
