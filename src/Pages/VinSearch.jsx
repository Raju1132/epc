import { useState } from "react";
import "../Css/VinSearch.css";
import VinSearchCard from "../Components/VinSearchCard";
import banner1 from "../assets/home/banner-10010.webp";

function VinSearch() {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState(null);

  const searchResult = {
    image: banner1,
    VinNo: "QWERTY12345",
    DateOfProduction: new Date().toLocaleDateString(),
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleValidate = () => {
    if (search === "") {
      alert("Please enter a VIN to validate.");
    } else {
      setResult(searchResult);
      console.log("Valid VIN entered:", search);
    }
  };

  const handleClear = () => {
    setSearch("");
    setResult(null);
  };

  return (
    <>
      <div className="vinserch-body">
        <p>VIN SEARCH</p>
        <div className="search-bar">
          <label htmlFor="SERIAL NO">SERIAL NO</label>
          <input
            type="text"
            name="vin_search"
            placeholder="Please Enter Serial No."
            value={search}
            onChange={handleChange}
          />
          <div className="flex-button">
            <button  onClick={handleValidate}>VALIDATE</button>
            <button onClick={handleClear}>CLEAR</button>
          </div>
        </div>
        <div className="vinsearch-content">
          {result && <VinSearchCard {...result} />}
        </div>
      </div>
    </>
  );
}

export default VinSearch;
