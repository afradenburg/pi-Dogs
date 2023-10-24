import React from "react";
import { Link } from "react-router-dom";

export const LandinPage = () => {
  return (
    <div>
      <h1>All Dogs</h1>
      <Link to={"/home"}>
        <button>Ingresar</button>
      </Link>
    </div>
  );
};
