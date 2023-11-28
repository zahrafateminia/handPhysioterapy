import React, { useEffect } from "react";
import Introduce from "./Introduce";
import Banner from "./Banner";
import physio from "../imgs/Physical-Therapy-Treatment-Plans-That-Focus-On-Recovery.jpg";
import hand from "../imgs/Occupational-Hand-Therapy-Injury-And-Recovery.jpg";
import Intro from "./Intro";
import Additional from "./Additional";
import bannerpic from "../imgs/hand-therapy-holding-hands-comfort-healing.jpg";
import Know from "./Know";
import Layout from "./Layout";

const Landing = () => {
  useEffect(() => {
    document.title = " Hand + Therapy";
  }, []);

  return (
    <>
    
      <Banner
        title="Welcome"
        pic={bannerpic}
        h2=" Eliminate pain and get back to doing what you love.
"
      />
      <Know
        title="Get to Know Us"
        des="Hand + Physical Therapy NYC is a private practice focusing on the physical rehabilitation of the whole body—from head to little toe. As a team of certified hand therapists, occupational therapists, and physical therapists, we take pride in our ability to provide the highest caliber of customized, one-on-one therapeutic treatment and
care for every body.
We work one-on-one with our patients to identify the source of the pain as well as any underlying cause(s). This type of comprehensive assessment allows our hand therapists and physical therapists to treat each patient’s immediate needs, as well as guide and educate patients with strategies, techniques, and therapeutic exercises that benefit long-term health."
        link="learn more"
      />
      <Introduce
        picture={physio}
        title="Physical Therapy"
        description="We are committed to providing customized care and treatment plans that focus on recovery and avoiding reinjury. Our licensed physical therapists are balance and strength training specialists. We work with sports injury, injury prevention, and post-operative patients, as well as individuals seeking golf and tennis specific sports rehabilitation. "
      />
      <Additional />
      <Intro
        picture={hand}
        title="Occupational Therapy"
        description="Our occupational therapists help patients become more self-sufficient by sharing real-life solutions and adaptive strategies designed to help patients perform daily tasks as independently as possible. Occupational therapy can support the return to independent function while also decreasing pain, building strength, and improving range of motion. Working to support both fine and gross motor skills, especially as we age or after an injury, is the cornerstone to aging gracefully and living independently."
      />
      </>
    
  );
};

export default Landing;
