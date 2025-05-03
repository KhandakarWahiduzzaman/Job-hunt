import { useEffect, useState } from "react";
import axios from "axios";
import OpportunityCard from "./components/OpportunityCard";
import SubmitOpportunityForm from "./components/SubmitOpportunityForm";

function App() {
  const [opportunities, setOpportunities] = useState([]);
  const [schoolFilter, setSchoolFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");

  useEffect(() => {
    fetchOpportunities();
  }, []);

  const fetchOpportunities = () => {
    axios.get("http://localhost:5000/api/opportunities")
      .then(res => setOpportunities(res.data))
      .catch(err => console.error("Error fetching opportunities", err));
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-6">CUNY Career Link</h1>

      <SubmitOpportunityForm onSubmitSuccess={fetchOpportunities} />

      <div className="flex flex-wrap gap-4 justify-center mb-6">
        <select
          value={schoolFilter}
          onChange={(e) => setSchoolFilter(e.target.value)}
          className="border p-2 rounded shadow-sm"
        >
          <option value="">All Schools</option>
          <option value="Baruch College">Baruch College</option>
          <option value="Hunter College">Hunter College</option>
          <option value="Queens College">Queens College</option>
        </select>

        <select
          value={typeFilter}
          onChange={(e) => setTypeFilter(e.target.value)}
          className="border p-2 rounded shadow-sm w-52"
        >
          <option value="">All Types</option>
          <option value="Internship">Internship</option>
          <option value="Full-Time">Full-Time</option>
          <option value="Part-Time">Part-Time</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
        {opportunities
          .filter(
            (opp) =>
              (schoolFilter === "" || opp.school === schoolFilter) &&
              (typeFilter === "" || opp.type === typeFilter)
          )
          .map((opp, i) => (
            <OpportunityCard key={i} opp={opp} />
          ))}
      </div>
    </div>
  );
}

export default App;
