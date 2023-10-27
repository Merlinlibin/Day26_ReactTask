import React from "react";
import Card from "./Card";

function FSD({ datas }) {
  let datasFSD = datas.filter((data) => data.type == "FSD");

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

export default FSD;
