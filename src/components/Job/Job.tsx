import React from "react";
import "./Job.scss";

type Props = {
  info: Job,
}

export const Job: React.FC<Props> = ({ info }) => {
  console.log(info);

  return (
    <div className="job">
      Job
    </div>
  )
}