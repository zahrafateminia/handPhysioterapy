import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Grid } from "@mui/material";

export default function BasicAccordion() {
  return (
    <Grid container mt={1} p={3}>
      <Typography component="h1" variant="" mb={2} color="#146BAD">FAQs</Typography>
      <Accordion >
        <AccordionSummary sx={{background: "#EAEAEE" }}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>What is an Occupational Therapist?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            occupational Therapists are therapists that specialize in the
            treatment and rehabilitation of the entire person. While our focus
            is on the recovery of injury or illness, we take into account all
            the components involved. We incorporate a functional approach to
            getting you back to doing what you love, moving well, and getting
            you back to living life!
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>What should I expect on my first visit?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Your first visit to Hand + Physical Therapy NYC is about getting to
            know you and showing you the best path to recovery or being the best
            version of yourself! Allow yourself an average of 1 hour for a full
            evaluation, and treatment session. We will make sure you leave armed
            with the knowledge on how to feel better a bit more every day. You
            will be provided with a home program that will integrate with your
            therapy sessions, and make recommendations on the best course of
            treatment. Together we will discuss and make a plan with your
            therapist that fits your needs.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>How long are the appointments?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Please allow approximately 1 hour for your treatment sessions. Since
            we provided 1-to-1 care, we are able to focus on you and you alone.
            With this attention to patient care, we maximize your time with us.
            As always, feel free to discuss your specific needs with your
            therapist.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>How often do I have to come in?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            All of our treatment plans are customized to your specific needs.
            After evaluation, recommendations are made taking into consideration
            your physician’s recommendations and physical exam. Re-examinations
            are performed regularly to ensure you are on the best path to
            treatment and rehabilitation.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>What is a Certified Hand Therapist?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            A hand therapist is a nationally registered occupational therapist
            or physical therapist who, through advanced continuing education,
            clinical experience, and integration of anatomy, physiology, and
            kinesiology, has become proficient in the treatment of pathological
            upper-quadrant conditions resulting from trauma, disease, or
            congenital or acquired deformity. A hand specialist may also have
            advanced certification as a Certified Hand Therapist (CHT). A CHT
            has a minimum of three years of clinical experience, successfully
            passed an examination of advanced clinical skills and theory in
            upper extremity rehabilitation, and meets mandated criteria to
            maintain this specialized credential.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Grid>
  );
}
