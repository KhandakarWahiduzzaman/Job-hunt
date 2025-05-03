import { useState, useEffect } from "react";
import axios from "axios";
import OpportunityCard from "./components/OpportunityCard";
import SubmitOpportunityForm from "./components/SubmitOpportunityForm";

function App() {
  const [loggedIn, setLoggedIn] = useState(false); // Track login state
  const [opportunities, setOpportunities] = useState([]);
  const [schoolFilter, setSchoolFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [role, setRole] = useState(null); // new: track role

  const handleLogout = () => {
    setLoggedIn(false);
    setRole(null);
  };
  
  useEffect(() => {
    if (loggedIn) fetchOpportunities();
  }, [loggedIn]);

  const fetchOpportunities = () => {
    axios.get("http://localhost:5000/api/opportunities")
      .then(res => setOpportunities(res.data))
      .catch(err => console.error("Error fetching opportunities", err));
  };

  if (!loggedIn) {
    return (
      <LoginPage
        onLogin={(userRole) => {

          setLoggedIn(true);
          setRole(userRole);
        }}
      />
    );
  }
  

  return (
    <DashboardLayout>
<div className="flex justify-between items-center mb-6">
  <h1 className="text-4xl font-bold">CUNY Career Link</h1>
  <button
    onClick={handleLogout}
    className="text-sm text-red-600 border border-red-600 px-3 py-1 rounded hover:bg-red-600 hover:text-white transition"
  >
    Logout
  </button>
</div>

    <div className="p-6 max-w-4xl mx-auto">
     
   



      {role === "counselor" && (
        <SubmitOpportunityForm onSubmitSuccess={fetchOpportunities} />
      )}

      <div className="flex flex-wrap gap-4 justify-center mb-6">
        <select
          value={schoolFilter}
          onChange={(e) => setSchoolFilter(e.target.value)}
          className="border p-2 rounded shadow-sm w-52"
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
            <Jobs></Jobs>
      </div>
    </DashboardLayout>
  );
}

export default App;
