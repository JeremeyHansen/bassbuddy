import "../css/concertload.css";
import { CirclesWithBar } from "react-loader-spinner";

export default function ConcertLoadPage({ className }) {
  return (
    <div className={className}>
      <div className="another-one">
      <div className="walker-container">
        <div className="walking">
          <div className="head"></div>
          <div className="body"></div>
          <div className="firstLeg"></div>
          <div className="secondLeg"></div>
          <div className="shadow"></div>
        </div>
      </div>
      <div className="bottom-container">
        <h3>Loading shows near you...</h3>
        <div>
        <CirclesWithBar
        className="loading-circle"
          height="100"
          width="100"
          display=""
          color="#5cdb95"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          outerCircleColor=""
          innerCircleColor="#05386b"
          barColor=""
          ariaLabel="circles-with-bar-loading"
        />
        </div>
      </div>
      </div>
    </div>
  );
}
