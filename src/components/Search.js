import React from "react";
import './../style/search.css';

function Search(props) {
    const {refSearch,setInDeger,clearInput} = props;
  return (
    <div className="search">
      <input
        type="text"
        ref={refSearch}
        onChange={(e) => {
          setInDeger(e.target.value);
        }}
        placeholder="Tarihe göre ara ..."
      />
      <button
        style={{
          padding: "4px 10px",
          color: "darkred",
          cursor: "pointer",
        }}
        onClick={clearInput}
      >
        Temizle
      </button>
    </div>
  );
}

export default Search;
