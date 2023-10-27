import React from "react";
import Card from "./Card";

function DS({ datas }) {
  let datasFSD = datas.filter((data) => data.type == "DS");

  return (
    <div className="mt-3">
      <div className="row">
        {datasFSD.map((data) => (
          <Card key={data.id} data={data} />
        ))}
      </div>
    </div>
  );
}

export default DS;
