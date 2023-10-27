import React from "react";

function Card({ data }) {
  return (
    <div className="col-md-6 col-lg-4 py-2 " id="cardSection">
      <div className="cards rounded  text-start mx-2 my-2 shadow bg-white rounded ">
        <div className="image">
          <img className="img-fluid" src={data.imageUrl} alt="thumb" />
        </div>
        <div className="m-3 px-3 height">
          <h4 className="contentH">{data.title}</h4>
          <p className="opacity-50 contentP py-2">{data.description}</p>
          <a className="cardLink" href="#">
            READ MORE »
          </a>
        </div>
        <hr className="opacity-25" />
        <div className="d-flex align-items-start justify-content-start opacity-50 px-3 fontSize">
          <p className="mx-1">{data.date}3</p>
          <i className="bi bi-dot mx-1"></i>
          <p className="mx-1">No Comments</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
