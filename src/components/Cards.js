import React from "react";
import './../style/card.css';
function Cards(props) {
  const { astronomicData, dataDateFilter, indeger,astronomicDetay } = props;
  return (
    <>
      {astronomicData.length > 0 ? (
        dataDateFilter(astronomicData, indeger).map((item, index) => {
          return (
            <article key={index} className="card_article">
              <div className="article_img">
                <img src={item.url} alt="Günün Astronomik Resmi" />
              </div>
              <div className="article_date">
                <p>Date : {item.date}</p>
              </div>
              <button
                onClick={() => {
                  astronomicDetay(item.id);
                }}
              >
                Detay
              </button>
            </article>
          );
        })
      ) : (
        <h2 style={{ color: "whitesmoke", letterSpacing: "0.2rem" }}>
          Yükleniyor ...
        </h2>
      )}
    </>
  );
}

export default Cards;
