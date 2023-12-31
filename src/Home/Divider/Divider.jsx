import React from "react";
import Font from "react-font";

const Divider = ({SubHeading}) => {
  return (
    <div className="my-12 relative">
      <div className="divider mt-0 mb-9 w-1/2 ms-auto text-slate-700">----------</div>
      <Font family="Anonymous Pro">
        <h2 className="text-4xl font-extrabold text-warning hover:text-accent capitalize">{SubHeading}<br />--</h2>
      </Font>
    </div>
  );
};

export default Divider;
