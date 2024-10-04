import { useSearchParams,useNavigate } from "react-router-dom";
import styles from "./Map.module.css";

import React from "react";

export default function Map() {
  const navigate = useNavigate()


  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  return (
    <div className={styles.mapContainer} onClick={()=>navigate("form")}>
      <h1>MAP</h1>

      {lat&&<h2>Position: {lat}, {lng}</h2>}
    </div>
  );
}
