import React, { useEffect, useState } from "react";
import { getJobList } from "../../api";
import mockData from "../../mock.json";
import { Job } from "../Job/Job";

export const Main: React.FC = () => {
  const [jobList , setJobList] = useState<Job[]>([]);

useEffect(() => {
  getJobList().then(result => {
    if (result) {
      setJobList(result);
    }

    if (result.error) {
      setJobList(mockData);
    }
  });
}, []);

  return (
    <div className="main">
      <ul className="main__list">
        {jobList.map(job => (
          <li key={job.id} className="main__item">
            <Job info={job} />
          </li>
        ))}
      </ul>
    </div>
  )
}
