import "../Css/Parts.css";
import img1 from "../assets/login/aa807ioox.webp";
function Parts() {
  const data = [
    { name: "Engine", image: img1 },
    { name: "Frame", image: img1 },
    { name: "Engine", image: img1 },
    { name: "Frame", image: img1 },
  ];
  return (
    <div className="parts-body">
      Parts
      <div className="flex">

        <div className="left-side">
          {data.map((data, key) => {
           return( <div key={key} className="card">
              <img className="small-img" src={data.image} alt={data.name} />
              <p>{data.name}</p>
            </div>)
          })}
        </div>
        <div className="right-side">
            <input type="text"  placeholder="Search"/>
            <div className="">
                <div className="">Aggregates</div>
            {data.map((val,key)=>{
                return<div className="" key={key}>
                    {val.name}
                </div>
            })}</div>
        </div>
      </div>
    </div>
  );
}

export default Parts;
