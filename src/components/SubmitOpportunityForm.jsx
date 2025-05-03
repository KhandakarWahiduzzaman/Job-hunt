import React, { useState } from "react";
import axios from "axios";

const SubmitOpportunityForm = ({ onSubmitSuccess }) => {
  const [form, setForm] = useState({
    title: "",
    link: "",
    school: "",
    type: "",
    postedBy: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        await axios.post("http://localhost:5000/api/opportunities", form);
        if (onSubmitSuccess) onSubmitSuccess(); // refresh the feed        
      alert("Opportunity submitted!");
      setForm({ title: "", link: "", school: "", type: "", postedBy: "" });
    } catch (error) {
      alert("Failed to submit. See console.");
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "2rem" }}>
      <h2>Submit New Opportunity</h2>
      <input name="title" placeholder="Title" value={form.title} onChange={handleChange} required />
      <input name="link" placeholder="Link" value={form.link} onChange={handleChange} required />
        {/* School Dropdown */}
      <select name="school" value={form.school} onChange={handleChange} required>
        <option value="">Select a School</option>
        <option value="Baruch College">Baruch College</option>
        <option value="Brooklyn College">Brooklyn College</option>
        <option value="City College">City College</option>
        <option value="College of Staten Island">College of Staten Island</option>
        <option value="Hunter College">Hunter College</option>
        <option value="John Jay College">John Jay College</option>
        <option value="Lehman College">Lehman College</option>
        <option value="Queens College">Queens College</option>
        <option value="York College">York College</option>
        <option value="Medgar Evers College">Medgar Evers College</option>
        <option value="New York City College of Technology">NYC College of Tech</option>
        <option value="CUNY School of Professional Studies">CUNY SPS</option>
        <option value="CUNY Graduate Center">CUNY Graduate Center</option>
        <option value="CUNY School of Law">CUNY School of Law</option>
        <option value="Guttman Community College">Guttman CC</option>
        <option value="Hostos Community College">Hostos CC</option>
        <option value="Kingsborough Community College">Kingsborough CC</option>
        <option value="LaGuardia Community College">LaGuardia CC</option>
        <option value="Bronx Community College">Bronx CC</option>
        <option value="Queensborough Community College">Queensborough CC</option>
        <option value="Borough of Manhattan Community College">BMCC</option>
        <option value="CUNY School of Labor and Urban Studies">CUNY SLU</option>
        <option value="CUNY Graduate School of Public Health">CUNY SPH</option>
        <option value="CUNY Graduate School of Journalism">CUNY Journalism</option>
      </select>

        {/* Type Dropdown */}
      <select name="type" value={form.type} onChange={handleChange} required>
        <option value="">Select Opportunity Type</option>
        <option value="Internship">Internship</option>
        <option value="Full-Time">Full-Time</option>
        <option value="Part-Time">Part-Time</option>
        <option value="Other">Other</option>
      </select>

      <input name="postedBy" placeholder="Posted By" value={form.postedBy} onChange={handleChange} required />
      <button type="submit">Submit</button>
    </form>
  );
};

export default SubmitOpportunityForm;
