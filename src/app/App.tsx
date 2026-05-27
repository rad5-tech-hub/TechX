import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustBanner from "./components/TrustBanner";
import Problem from "./components/Problem";
import Transformation from "./components/Transformation";
import Tracks from "./components/Tracks";
import LearningExperience from "./components/LearningExperience";
import WhyRad5 from "./components/WhyRad5";
import WhoShouldApply from "./components/WhoShouldApply";
import ProgramBenefits from "./components/ProgramBenefits";
import StudentExperience from "./components/StudentExperience";
import Tuition from "./components/Tuition";
import Testimonials from "./components/Testimonials";
import ApplicationTimeline from "./components/ApplicationTimeline";
import FAQ from "./components/FAQ";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import ApplyForm from "./components/ApplyForm";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background text-foreground" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <TrustBanner />
              <Problem />
              <Transformation />
              <Tracks />
              <WhyRad5 />
              <LearningExperience />
              <ApplicationTimeline />
              <WhoShouldApply />
              <ProgramBenefits />
              <StudentExperience />
              <Tuition />
              <Testimonials />
              <FAQ />
              <FinalCTA />
            </>
          } />
          <Route path="/apply" element={<ApplyForm />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
