import React, { useEffect } from "react";
import Banner from "./Banner";
import Know from "./Know";
import styles from "./AboutUs.module.css";
import Card from "./Card";
import JoinOurTeam from '../components/aboutUs/JoinOurTeam';
 import TeamMember from "././TeamMember";
import OurFacilities from "../../src/components/OurFacilities";

const AboutUs = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    document.title = " About Us";
    window.scrollTo(0, 0);

  }, []);

  
  return (
    <>
      {" "}
      <div className={styles.container}>
        

        <Know
          title="Our patients say it best."
          des="approach at Hand + Physical Therapy NYC is to provide specialized, high-quality, and professional rehabilitation services for the whole body. Our history and expertise began as certified hand therapists and occupational therapists concentrating on upper extremity rehabilitation and specialized hand therapy for patients with conditions involving the shoulder, elbow, wrist, and hand. However, our patients wanted more and we proudly answered the needs of our community. We expanded our expertise to include compassionate physical therapy for the whole body. We are proudly your trusted Hand + Physical Therapy partner to feel better.

We offer a personalized touch that is currently missing from larger institutions. The one-on-one attention our team provides during each hand therapy, physical therapy, occupational therapy, sports rehabilitation, splinting, and custom orthotics, ASTYM® appointment is an important differentiator from other providers. This type of individualized care is shown to significantly benefit patients recovering from an injury, surgery, or in need of tools to learn how to manage pain.

We’re different, and we’re proud of this distinction.

"
          link="Testimonials"
        />

        {/* <div> */}
          <TeamMember />
        {/* </div> */}
       
          <OurFacilities />
        {/* <JoinOurTeam/> */}
      </div>
    </>
  );
};

export default AboutUs;
