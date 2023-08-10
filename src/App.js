import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import Header from "./components/Header";
import Cards from "./components/Cards";
import Search from "./components/Search";
import CardPreview from "./components/CardPreview";
import "./App.css";

function App() {

  const [astronomicData, setAstronomicData] = useState([]);
  const [indeger, setInDeger] = useState("");
  const [detail, setDetail] = useState(null);
  const [finalData ,setFinalData] = useState([]);

  const tarih = new Date();
  const refSearch = useRef();

  let dateToday =
    tarih.getFullYear() +
    "-" +
    (tarih.getMonth() + 1) +
    "-" +
    (tarih.getDay() + 6);

  const theme_head = {
    padding: "3px",
    textAlign: "center",
    fontSize: "3rem",
    fontWeight: "bold",
    fontStyle: "italic",
    fontFamily: "cursive",
    letterSpacing: "0.1rem",
  };

  const getAstronomicData = async (final_date) => {
    let deger = "id";
    const veri = await axios
      .get(
        `https://api.nasa.gov/planetary/apod?start_date=2023-06-02&end_date=${final_date}&api_key=5eEbLohfbh8hurbQGq0YdsvzS0hAfCO3CG2IGyz6`
      )
      .then((responce) => {
        return responce.data;
      })
      .catch((error) => console.log(error));
    
    setFinalData([...veri][[...veri].length - 1]);
    veri.forEach((item) => {
      if (!(deger in item)) {
        item[deger] = Math.random() * 1000 + 500;
      }
    });
    setAstronomicData(veri);
  };

  

  const dataDateFilter = (data, deger) => {
    const filterData = [...data].filter((item) => {
      return item.date.includes(deger);
    });
    return filterData;
  };

  const astronomicDetay = (value) => {
    const datas = [...astronomicData];
    const nesne = datas.filter((item) => item.id === value);
    setDetail(...nesne);
  };
  const clearInput = () => {
    refSearch.current.value = "";
    setInDeger("");
  };
  console.log("detay : ", detail);

  useEffect(() => {
    getAstronomicData(dateToday);
  }, [dateToday]);

  useEffect(() => {
    console.log("Astronomic - data : ", astronomicData);
    console.log("Günün Astronomik Datası : ", finalData);
  }, [astronomicData, finalData]);

  return (
    <>
      <Header tema={theme_head}></Header>
      <main>
        <section className="left_side">
          <div
            className="scroll_container"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              maxHeight: "500px",
              width: "100%",
            }}
          >
            <Search
              refSearch={refSearch}
              setInDeger={setInDeger}
              clearInput={clearInput}
            ></Search>
            <Cards
              astronomicData={astronomicData}
              dataDateFilter={dataDateFilter}
              indeger={indeger}
              astronomicDetay={astronomicDetay}
            ></Cards>
          </div>
        </section>
        <section className="right_side">
          <article className="article_preview" style={{ textAlign: "center" }}>
            {!detail && (
              <span style={{ color: "whitesmoke", fontSize: "1.3rem" }}>
                içerikleri burada görünür ! 😉
              </span>
            )}
            <CardPreview detail={detail}></CardPreview>
          </article>
        </section>
      </main>
      <div className="today_content">
        <h1
          style={{
            color: "whitesmoke",
            fontFamily: "cursive",
            fontSize: "2rem",
          }}
        >
          Günün Astronomik Fotosu 👇{" "}
        </h1>
        <div
          style={{
            width: "60%",
            maxHeight: "400x",
            backgroundColor: "#000",
            display: "flex",
            gap: "45px",
            border: "1px solid transparent",
            borderRadius: "5px",
          }}
          className="today_detail"
        >
          <img
            style={{ width: "30%" }}
            src={finalData.url}
            alt="Günün_Fotosu"
          />
          <div className="todayInfo" style={{ width: "60%" }}>
            <h2>{finalData.title}</h2>
            <p style={{color:"darkred",fontWeight:'bold',fontSize:'1.2rem'}}>{finalData.date}</p>
            <p>{finalData.explanation}</p>
          </div>
        </div>
      </div>

      <footer className="footer">
        <p>Daha Fazla API İçin Ziyaret Edin : <a rel="stylesheet" href="https://api.nasa.gov/">Nasa API</a></p>
      </footer>
    </>
  );
}

export default App;
