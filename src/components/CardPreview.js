import React from "react";
import './../style/detail.css';

function CardPreview({detail}) {

  return (
    <>
      {detail && (
        <div className="detail_container">
          <div className="picture">
            <img src={detail["url"]} alt="picture_detail" />
          </div>
          <div className="detail_content">
            <h3>{detail["title"]}</h3>
            <p>{detail["explanation"]}</p>
            <p></p>
          </div>
        </div>
      )}
    </>
  );
}

export default CardPreview;