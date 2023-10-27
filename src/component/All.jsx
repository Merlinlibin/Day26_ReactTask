import React from "react";
import Card from "./Card";

function All({ datas }) {
  return (
    <div className="mt-3">
      <div className="row">
        {datas.map((data) => (
          <Card key={data.id} data={data} />
        ))}
      </div>
    </div>
  );
}

export default All;
