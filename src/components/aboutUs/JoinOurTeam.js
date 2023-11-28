import { Typography, CardMedia } from "@mui/material";
import React from "react";
import { CREATE_REQUEST } from "../../graphql/queries";
import MenuItem from "@mui/material/MenuItem";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useMutation } from "@apollo/client";
import Button from "@mui/material/Button";
import TeamDescription from "./TeamDescription";

const job = [
  {
    value: "1",
    label: "Full Time Hand Therapist / CHT / Clinic Director    ",
  },
  {
    value: "EUR",
    label: "Physical Therapist Per diem/ Outpatient",
  },
  {
    value: "BTC",
    label: "Volunteer Opportunities Available",
  },

  {
    value: "JPY",
    label: "Patient Care Coordinator",
  },
  {
    value: "IR",
    label: " vulenteer ",
  },
];

const JoinOurTeam = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [name, setName] = useState(" ");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [details, setDetails] = useState("");
  const [jobtitle, setJobtitle] = useState("");

  const [sendRequest, { loading, data, error, called }] = useMutation(
    CREATE_REQUEST,
    {
      variables: {
        name,
        lastname,
        email,
        number,
        jobtitle,
        details,
      },
    }
  );
  console.log(data);

  const handle = (formSubmitEvent) => {
    formSubmitEvent.preventDefault();

    if (number && email && jobtitle) {
      sendRequest();
    } else {
      toast.warn("please fill out email, phone and jobtitle ");
    }
  };

  if (data) {
    toast.success("thank u we recieved you request ");
  }
  console.log({ data });

  return (
    <div>
      <TeamDescription />
      <Container sx={{ marginTop: "35px", marginBottom: "25px" }}>
        <CardMedia component="img" image="" />
        <Typography variant="h3" component="h3">
          Come Join our Dynamic HPTNYC Team!!
        </Typography>
        <Typography mt={2} textAlign="center" variant="p" component="h4">
          Hand + Physical Therapy NYC is happy to announce we are expanding our
          staff to add these additional positions and opportunities
        </Typography>

        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 2, width: "20ch" },
          }}
          noValidate
          autoComplete="on"
        >
          <TextField
            id="outlined-basic"
            onChange={(e) => setName(e.target.value)}
            label="Name"
            name="firstName"
            variant="outlined"
            value={name}
          />
          <TextField
            name="lastName"
            id="outlined-basic"
            onChange={(e) => setLastname(e.target.value)}
            value={lastname}
            label="LastName"
            variant="outlined"
          />
          <TextField
            id="outlined-basic"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            label="Email"
            name="email"
            variant="outlined"
          />
          <TextField
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            id="outlined-basic"
            name="phoneNumber"
            label="PhoneNumber"
            variant="outlined"
          />{" "}
          <TextField
            onChange={(e) => setDetails(e.target.value)}
            name="details"
            value={details}
            id="outlined-multiline-static"
            label="Anything to Say?"
            multiline
            rows={3}
            defaultValue="Default Value"
          />
          <TextField
            onChange={(e) => setJobtitle(e.target.value)}
            id="outlined-select-job"
            select
            value={jobtitle}
            label="Select"
            defaultValue="Full Time Hand Therapist"
            helperText="  Which JobTitle would you like to "
          >
            {job.map((option) => (
              <MenuItem
                key={option.value}
                value={option.value}
                name={option.value}
              >
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          {loading ? (
            <Button variant="contained" disabled>
              sending..
            </Button>
          ) : (
            <Button variant="contained" onClick={handle}>
              Send
            </Button>
          )}
        </Box>
        <ToastContainer
          position="top-left"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </Container>
    </div>
  );
};

export default JoinOurTeam;
