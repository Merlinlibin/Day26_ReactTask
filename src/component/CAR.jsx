import React from "react";
import Card from "./Card";

function CAR({ datas }) {
  let datasFSD = datas.filter((data) => data.type == "CAR");

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

export default CAR;
