import React from "react";

function Alerts({ message }) {
  return <div className="alerts">{message && <p>{message}</p>}</div>;
}

export default Alerts;
