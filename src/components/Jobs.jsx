import { useEffect, useState } from "react";
import axios from "axios";

function JobList() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("https://remotive.com/api/remote-jobs?search=front%20end")
      .then((res) => {
        setJobs(res.data.jobs);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching jobs:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading jobs...</p>;

  return (
    <div>
      <h2>Remote Jobs</h2>
      {jobs.slice(0, 10).map((job) => (
        <div key={job.id} style={{ border: "1px solid #ccc", margin: "1em", padding: "1em" }}>
          <h3>{job.title}</h3>
          <p><strong>Company:</strong> {job.company_name}</p>
          <p><strong>Category:</strong> {job.category}</p>
          <a href={job.url} target="_blank" rel="noopener noreferrer">View Job</a>
        </div>
      ))}
    </div>
  );
}

export default JobList;
