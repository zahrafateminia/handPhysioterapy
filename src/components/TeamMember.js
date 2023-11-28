import React from "react";
import Alejandra from "../imgs/Alejandra-MS-OTR-L.jpg";
import BioKatie from "../imgs/BioKatie-MS-OTR-L-ASTYM.jpg";
import fathima from "../imgs/fathima_bio_pic.jpg";
import Natalia from "../imgs/Natalia-Ruiz-DPT-OCS-CHT-COEE-ASTYM-1.webp";
import Michele from "../imgs/Michele-Pasqualetto-BS-MOT-OTRL-CHT-ASTYM.webp";
import styles from "./Team.module.css";

const team = [
  {
    id: 0,
    pic: Michele,
    name: "Michele Pasqualetto",
    title: "BS, MOT, OTR/L, CHT, ASTYMOWNER",
    intruduction:
      " Michele has spent her career practicing in the specialty of upper extremity rehabilitation. Michele earned her specialization as a Certified Hand Therapist (CHT) in 2007 after working at some of New York’s best hospitals and trauma centers where she trained with some of the most highly regarded hand therapists, and orthopedic and plastic surgeons in the country. Michele has been published in the Hand Journal and has co-authored a chapter in the Hand Clinics book on Intrinsics of the Hand. She is a seasoned speaker who has been invited to speak both nationally and internationally and teaches as an adjunct professor at Touro and Hunter College. Michele, along with her colleagues, sponsor the Annual Lorna Ramos Conference on the Treatment and Management of Brachial Plexus injuries to educate other therapists, physicians, and health care providers in the treatment and management of hand and nerve injuries.",
  },
  {
    id: 1,
    pic: Alejandra,
    name: "Alejandra Montejo",
    title: "MS, OTR/L, ASTYM",
    intruduction:
      "Alejandra is an occupational therapist and hand therapist who specializes in upper extremity rehabilitation. Alejandra has over 8 years of experience as an occupational therapist in New York City. In 2020, Alejandra successfully completed a hand therapy fellowship at NYU Rusk Rehabilitation Center. Alejandra has extensive training and experience working with orthopedic injuries. She spent 2 years abroad working with coal mine, farming and factory workers that sustained traumatic work related injuries. She is very dedicated to both her professional and personal growth and is very happy to join the Hand + Physical Therapy NYC team.",
  },
  {
    id: 2,
    pic: Natalia,
    name: "Natalia Ruiz",
    title: "DPT, OCS, CHT, COEE, ASTYM",
    intruduction:
      " Natalia has been a physical therapist for 17 years and her areas of expertise are orthopedics, hand therapy, and office ergonomics. She is a Board Certified Orthopedic Specialist (OCS) and a Certified Hand Therapist (CHT). She enjoys educating the patients on ways to minimize strain on their hands and upper extremities through multiple techniques and modifications of workspaces. She believes that compassion and a strong therapeutic relationship between the patient and the therapist make a difference in the treatment outcomes as well as individualized. are. She is certified in ASTYM, Kinsiotape, and blood flow restriction. Also trained in myofascial decompression technique. She is also proficient in Spanish.",
  },
  {
    id: 3,
    pic: fathima,
    name: "Fathima Mohamed",
    title: "MS, OTR/L, CHT",
    intruduction:
      "Fathima graduated from New York University as an occupational therapist in 2016. She went on to work in various hospital settings like King’s County Hospital and New York-Presbyterian specializing in neuro-rehabilitation. After a rock climbing accident in 2017 left her injured and in need of surgery, she began her journey into sports rehabilitation and hand therapy. In 2018 Fathima became a Certified Hand Therapist, specializing in chronic overuse syndromes and tendon rehabilitation. Fathima is also a practitioner of Structural Integration, a specialized fascia-work technique that aligns posture and teaches more efficient patterns of movement. Fathima’s methodology combines the physiological with the psychosocial. She seeks to guide her clients to a refined understanding of the mind-body connection. In her free time, she enjoys rock climbing, mountain biking, and writing.",
  },
  {
    id: 4,
    pic: BioKatie,
    name: "Katie Licata",
    title: "MS, OTR/L, CHT, ASTYM",
    intruduction:
      "Katie graduated from Dickinson College in Carlisle, Pennsylvania with a Bachelor of Science in Neuroscience and a minor in Biology. After graduation, she worked as a Research Assistant at Johns Hopkins School of Medicine in the Geriatric Psychiatry and Neuropsychiatry Department. While there, she fell in love with Occupational Therapy and began exploring the different settings it has to offer. She was offered a position at Hand + Physical Therapy NYC as the Patient Care Coordinator and there she developed an interest in the upper extremity. She then received her Master of Science in Occupational Therapy from Columbia University, completing clinical rotations at New York-Presbyterian and Project Renewal. Katie is passionate about providing comprehensive and individualized care to her clients. She is excited to rejoin the Hand + Physical Therapy NYC team as an Occupational Therapist.",
  },
];

const TeamMember = (props) => {
 
  
  const arrayDataItems = team.map((team) => (
    <div  key={team.id} >
      <div className={styles.member}>
        <img src={team.pic} />
        <div className={styles.name}>
          <h2>{team.name}</h2>
          <h5>{team.title}</h5>

          <p>{team.intruduction}</p>
        </div>
      </div>
    </div>
  ));

  return (
    <div className={styles.container}>
      <div className={styles.rehabilitation}>
        <h1>Meet Your Rehabilitation Team</h1>
      </div>
      <div>
        <div  >
          <div className={styles.rehab}>{arrayDataItems}</div>
        </div>
      </div>
    </div>
  );
};
export default TeamMember;
