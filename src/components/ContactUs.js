import React from "react";
import { useState, useEffect } from "react";
import styles from "./ContactUs.module.css";
import { validate } from "./validate";

const ContactUs = () => {
  useEffect(() => {
    document.title = " Contact Us";
  }, []);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    let: "",
    patient: "yes",
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (evt) => {
    const value = evt.target.value;
    setForm({
      ...form,
      [evt.target.name]: value,
    });
  };
  const handleOptionChange = (changeEvent) => {
    setForm({
      ...form,
      patient: changeEvent.target.value,
    });
  };

  const handleFormSubmit = (formSubmitEvent) => {
    formSubmitEvent.preventDefault();
    console.log(form);
    setErrors(validate(form));
    setSubmitting(true);
  };

  return (
    <div className={styles.container}>
      <div className={styles.visit}>
        <h1>Contact Us</h1>
        <h2>
          michele@handtherapynyc.com
          <br />
          212-989-HAND (4263)
          <br />
          <br />
          89 5th Avenue, Suite 803
          <br />
          New York, NY 10003 <br />
          <br />
        </h2>
        <h3>
          Hours by appointment only
          <br />
          <br />
          Monday &nbsp;&nbsp;&nbsp; &nbsp; &nbsp; 7:30am — 7pm
          <br />
          Tuesday &emsp;&emsp;7:30am — 7pm
          <br />
          Wednesday &nbsp; 7:30am — 7pm
          <br />
          Thursday&emsp;&emsp;7:30am — 7pm
          <br />
          Friday&nbsp; &nbsp; &emsp; &nbsp; &nbsp; 7:30am — 7pm
        </h3>
        <br />
        <p>
          Hand + PhysicalTherapy NYC’s office is centrally located near Union
          Square in New York City. We are just steps away from the downtown,
          midtown, Brooklyn, and Queens subways, as well as the New Jersey
          train. Subways include the A, C, E, N, Q, R, L, 4, 5, 6, and NJ PATH
          trains.
        </p>
      </div>


      <div className={styles.form}>
        <p>
          Have a question or interested in learning more about Hand + Physical
          Therapy NYC? Send us an email, give us a call, or simply complete this
          form. We’ll be in touch shortly.
        </p>
        <form onSubmit={handleFormSubmit}>
          <label>
            Name <span style={{ color: "red" }}> *</span>
          </label>
          
            <br />
            <div className={styles.name}>
              <input
              
                name="firstName"
                type="text"
                value={form.firstName}
                onChange={handleChange}
              />
              <p className={styles.last}>first</p>
              {errors.firstName && (
                <p className={styles.error} >
                  {errors.firstName}
                </p>
              )}
            </div>
            &nbsp;
            <label>
            LastName <span style={{ color: "red" }}> *</span>
          </label>
            <div>
              <input
                name="lastName"
                type="text"
                value={form.lastName}
                onChange={handleChange}
              />
              <p className={styles.last}>last</p>
              {errors.lastName && (
                <p className={styles.error} >
                  {errors.lastName}
                </p>
              )}
            </div>{" "}
          
          <div className={styles.formItem}>
            <label>
              Email <span style={{ color: "red" }}> *</span>
            </label>
            <br />
            <input
              size="auto"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
            />
            {errors.email && submitting && (
              <p className={styles.error}>{errors.email}</p>
            )}
          </div>


          <div  className={styles.formItem}>
            <label>
              PhoneNumber <span style={{ color: "red" }}> *</span>
            </label>
            <br />
            <input
              size="auto"
              name="phoneNumber"
              type="tel"
              value={form.phoneNumber}
              onChange={handleChange}
            />
            {errors.phoneNumber && (
              <p className={styles.error}>{errors.phoneNumber}</p>
            )}
          </div>
          <div  className={styles.formItem}>
            <label>
              Let us know how we can help
              <span style={{ color: "red" }}> *</span>
             
            </label>
            <br/>

            <textarea
              rows="auto"
              cols="auto"
              name="let"
              value={form.let}
              onChange={handleChange}>

              </textarea>
            {errors.let && submitting&& <p className={styles.error}>{errors.let}</p>}
          </div>


          <div  className={styles.formItem}>
            Are you a new patient? <span style={{ color: "red" }}> *</span>
            <br />
            <input
              type="radio"
              name="level"
              value="no"
              checked={form.patient === "no"}
              onChange={handleOptionChange}
            />
            &emsp;
            <label>no</label>
            <br />
            <input
              type="radio"
              name="level"
              value="yes"
              checked={form.patient === "yes"}
              onChange={handleOptionChange}
            />
            &emsp;
            <label>yes</label>
          </div>
          <button type="submit">Submit</button>
        </form>
        {Object.keys(errors).length === 0 && submitting ? (
          <p style={{ color: "green" }}>Successfully submitted ✓</p>
        ) : null}
      </div>

    </div>
  );
};

export default ContactUs;
