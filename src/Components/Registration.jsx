import React, { useState } from "react";
import useForm from "./useForm.js";
import "./Registration.css";
import validate from "./validate.js";

const Registration = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const initialValues = {
    name: "",
    email: "",
    PhoneNumber: "",
    positions: "",
    RelevantExperience: "",
    ManagerialExperience: "",
    portfolioUrl: "",
    interviewTime: "",
    skills: [],
  };

  const handleFormSubmit = () => {
    setIsSubmitted(true);
  };

  const { 
    values,
    errors,
    handleChange, 
    handleSubmit } = useForm(initialValues, validate, handleFormSubmit);

  if(isSubmitted) {
    return (
      <div className="summary">
        <h2>Form Submission Summary</h2>
        <p><strong>Name:</strong> {values.name}</p>
        <p><strong>Email:</strong>{values.email}</p>
        <p><strong>Phone Number:</strong>{values.PhoneNumber}</p>
        <p><strong>Applying for Position:</strong>{values.positions}</p>
        {["developer", "designer"].includes(values.positions) && (
          <p><strong>Relevant Experience:</strong>{values.RelevantExperience} years</p>
        )}

        {values.positions === "designers" && (
          <p><strong>Portfolio URL: </strong>{values.portfolioUrl}</p>
        )}

        {values.positions === "manager" && (
          <p><strong>Managerial Experience:</strong>{values.ManagerialExperience} years</p>
        )}

        <p><strong>Additional Skills:</strong>{values.skills.join(",")}</p>
        <p><strong>Preferred Interview Time: </strong> {values.interviewTime}</p>
      </div>
    )
  }

  return (
    <div className="border">
      <div className="wrapper">
        <div className="heading">
          <div className="title">Job Application Form</div>
          <div className="copyright">©copyright xyz—app 2024.</div>
        </div>
        <hr />

        <form onSubmit={handleSubmit} className="form">
          <div className="form-fields">
            <label htmlFor="name" className="labell">
              Full name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Full name"
              className="input-field"
              value={values.name}
              onChange={handleChange}
            />
            {errors.name && <p className="error">{errors.name}</p>}
          </div>

          <div className="form-fields">
            <label htmlFor="email" className="labell">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              className="input-field"
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>

          <div className="form-fields">
            <label htmlFor="Phone number" className="labell">
              Phone number
            </label>
            <input
              type="tel"
              id="Phone number"
              name="PhoneNumber"
              placeholder="Phone number"
              className="input-field"
              value={values.PhoneNumber}
              onChange={handleChange}
            />
            {errors.PhoneNumber && <p className="error">{errors.PhoneNumber}</p>}
          </div>

          <div className="form-fields">
            <label htmlFor="positions" className="labell">
              Apply for Position
            </label>
            <select
              name="positions"
              id="positions"
              className="input-field"
              defaultValue=""
              value={values.positions}
              onChange={handleChange}
            >
              <option value="" disabled selected>
                Select a position
              </option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="manager">Manager</option>
            </select>
            {errors.positions && <p className="error">{errors.positions}</p>}
          </div>

           { (values.positions === "developer" || values.positions === "designer") && 
            (<div className="form-fields">
            <label htmlFor="RelevantExperience" className="labell">
              Relevant Experience(Number of years)
            </label>
            <input
              type="number"
              id="RelevantExperience"
              name="RelevantExperience"
              min="1"
              placeholder="Number of years"
              className="input-field"
              value={values.RelevantExperience}
              onChange={handleChange}
            />
            {errors.RelevantExperience && <p className="error">{errors.RelevantExperience}</p>}
          </div> )}
          
          {values.positions === "manager" && (
            <div className="form-fields">
            <label htmlFor="ManagerialExperience" className="labell">
              Management Experience(Number of years)
            </label>
            <input
              type="number"
              id="ManagerialExperience"
              name="ManagerialExperience"
              min="1"
              placeholder="Number of years"
              className="input-field"
              value={values.ManagerialExperience}
              onChange={handleChange}
            />
            {errors.ManagerialExperience && <p className="error">{errors.ManagerialExperience}</p>}
          </div>
          )}
          

        {values.positions === "designer" && (
          <div className="form-fields">
            <label htmlFor="portfolioUrl">Portfolio URL</label>
            <input
              type="url"
              id="portfolioUrl"
              name="portfolioUrl"
              placeholder="Portfolio URL"
              className="input-field"
              value={values.portfolioUrl}
              onChange={handleChange}
            />
            {errors.portfolioUrl && <p className="error">{errors.portfolioUrl}</p>}
          </div>
        )}
         

          <div className="form-fields">
            <p className="labell">Additional Skills</p>
            <label>
              <input
                type="checkbox"
                name="skills"
                value="JavaScript"
                checked={values.skills.includes("JavaScript")}
                onChange={handleChange}
              />
              JavaScript
            </label>
            <label>
              <input
                type="checkbox"
                name="skills"
                value="CSS"
                checked={values.skills.includes("CSS")}
                onChange={handleChange}
              />
              CSS
            </label>
            <label>
              <input
                type="checkbox"
                name="skills"
                value="Python"
                checked={values.skills.includes("Python")}
                onChange={handleChange}
              />
              Python
            </label>
            <label>
              <input
                type="checkbox"
                name="skills"
                value="HTML"
                checked={values.skills.includes("HTML")}
                onChange={handleChange}
              />
              HTML
            </label>
            <label>
              <input
                type="checkbox"
                name="skills"
                value="Java"
                checked={values.skills.includes("Java")}
                onChange={handleChange}
              />
              Java
            </label>
            {errors.skills && <p className="error">{errors.skills}</p>}
          </div>

          <div className="form-fields">
            <label htmlFor="interviewTime" className="labell">
              Preferred Interview Time
            </label>
            <input
              type="datetime-local"
              id="interviewTime"
              name="interviewTime"
              className="input-field"
              value={values.interviewTime}
              onChange={handleChange}
            />
            {errors.interviewTime && <p className="error">{errors.interviewTime}</p>}
          </div>

          <button type="submit" className="button">
            Send Application
          </button>
        </form>
      </div>
    </div>
  );
};

export default Registration;
