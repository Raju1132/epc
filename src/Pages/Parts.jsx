import { useState } from "react";
import "../Css/Parts.css";
import img1 from "../assets/login/aa807ioox.webp";
function Parts() {
  const [parts, setParts] = useState(true);
  const data = [
    { name: "Engine", image: img1 },
    { name: "Frame", image: img1 },
  ];
  const dataparts =[
    
  ]

  const handleSelection = () => {
    setParts(false);
  };
  return (
    <div className="parts-body">
      Parts
      <div className="flex">
        <div className="left-side">
          {parts ? (
            data.map((item, key) => {
              return (
                <div key={key} className="card" onClick={handleSelection}>
                  <img className="small-img" src={item.image} alt={item.name} />
                  <p>{item.name}</p>
                </div>
              );
            })
          ) : (
            dataparts.map((item, key) => {
              return (
                <div key={key} className="card" onClick={handleSelection}>
                  <img className="small-img" src={item.image} alt={item.name} />
                  <p>{item.name}</p>
                </div>
              );
            })
          )}
        </div>
        <div className="right-side">
          <input type="text" placeholder="Search" />
          <div className="table">
            <div className="aggregation">Aggregates</div>

            {data.map((val, key) => {
              return (
                <div className="fields" key={key}>
                  {val.name}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Parts;
