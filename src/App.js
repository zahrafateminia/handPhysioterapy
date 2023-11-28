import Blog from "./components/blogs/Blog";
import AboutUs from "./components/AboutUs";
import TeamMember from "./components/TeamMember";
import Landing from "./components/Landing";
import { Routes, Route } from "react-router-dom";
import ContactUs from "./components/ContactUs";
import PatientResource from "../src/components/PatientResources/PatientResource";
import BasicAccordion from "./components/BasicAccordion";
import BlogPage from "./components/blogs/BlogPage";
import OurFacilities from "./components/OurFacilities";
import Layout from "./components/Layout";
import JoinOurTeam from "../src/components/aboutUs/JoinOurTeam";

function App() {
  return (
    <>
      <Layout>
        <div>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/patientresource" element={<PatientResource />} />
            <Route path="/JoinUs" element={<JoinOurTeam />} />
            {/* <Route path="/aboutus" element={<OurFacilities />} /> */}
            <Route
              path="/aboutus/rehabilitation-team"
              element={<TeamMember />}
            />
            {/* <Route path="/patientsResource" element={<BasicAccordion />} /> */}
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPage />} />
          </Routes>
        </div>
      </Layout>
    </>
  );
}

export default App;
