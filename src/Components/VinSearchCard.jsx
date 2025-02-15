import { Link } from "react-router-dom";

function VinSearchCard(props) {
  return (
    <div className="vinsearchcard">
      <div className="left-side">
        <img src={props.image} alt={props.VinNo} />
      </div>
      <div className="right-side">
        <p>
          <span>Vin No :</span> <div className="">
          {props.VinNo}</div>
        </p>
        <p>
          <span>Date of Production :</span><div className=""> 
          {props.DateOfProduction}</div>
        </p>
        <Link to={`/parts/${props.VinNo}`}  className="link">VIEW AGGREGATES</Link >
      </div>
    </div>
  );
}

export default VinSearchCard;
