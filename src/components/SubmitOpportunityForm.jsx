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
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow mb-6">
  <h2 className="text-2xl font-semibold mb-4">Submit New Opportunity</h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div className="flex flex-col">
      <label className="mb-1 text-sm font-medium text-gray-700">Title</label>
      <input
        name="title"
        value={form.title}
        onChange={handleChange}
        required
        className="border p-2 rounded"
        placeholder="Enter title"
      />
    </div>

    <div className="flex flex-col">
      <label className="mb-1 text-sm font-medium text-gray-700">Link</label>
      <input
        name="link"
        value={form.link}
        onChange={handleChange}
        required
        className="border p-2 rounded"
        placeholder="Enter link"
      />
    </div>

    <div className="flex flex-col">
      <label className="mb-1 text-sm font-medium text-gray-700">School</label>
      <select
        name="school"
        value={form.school}
        onChange={handleChange}
        required
        className="border p-2 rounded"
      >
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
    </div>

    <div className="flex flex-col">
      <label className="mb-1 text-sm font-medium text-gray-700">Type</label>
      <select
        name="type"
        value={form.type}
        onChange={handleChange}
        required
        className="border p-2 rounded"
      >
        <option value="">Select Opportunity Type</option>
        <option value="Internship">Internship</option>
        <option value="Full-Time">Full-Time</option>
        <option value="Part-Time">Part-Time</option>
        <option value="Other">Other</option>
      </select>
    </div>

    <div className="flex flex-col md:col-span-2">
      <label className="mb-1 text-sm font-medium text-gray-700">Posted By</label>
      <input
        name="postedBy"
        value={form.postedBy}
        onChange={handleChange}
        required
        className="border p-2 rounded"
        placeholder="Enter name"
      />
    </div>
  </div>

  <div className="mt-6 text-right">
    <button
      type="submit"
      className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
    >
      Submit
    </button>
  </div>
</form>

  );
};

export default SubmitOpportunityForm;
