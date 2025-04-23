import Features from "../components/landing/Features";
import Footer from "../components/landing/Footer";
import Header from "../components/landing/Header";
import JoinUs from "../components/landing/JoinUs";
import Presentation from "../components/landing/Presentation";
import Process from "../components/landing/Process";

function LandingPage() {
  return (
    <div className="h-auto min-h-dvh w-full text-white">
      <Header />

      <main className="h-auto pt-[4.5rem] md:pt-[4rem]">
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
