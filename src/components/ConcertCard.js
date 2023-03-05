import "../css/concertcard.css";
import { BsMusicNote } from "react-icons/bs";

export default function ConcertCard({ concert, setMapOpen, setSelectedMarker }) {

  const date = concert.date;
  const year = date.slice(0, date.length - 6)
  const updatedDate = date.slice(5);
  const day = updatedDate.slice(3)
  let month = updatedDate.slice(0, updatedDate.length - 3);
  
  
    if (month === "01") {
      month = "January";
    } else if (month === "02") {
      month = "February";
    } else if (month === "03") {
      month = "March";
    } else if (month === "04") {
      month = "April";
    } else if (month === "05") {
      month = "May";
    } else if (month === "06") {
      month = "June";
    } else if (month === "07") {
      month = "July";
    } else if (month === "08") {
      month = "August";
    } else if (month === "09") {
      month = "September";
    } else if (month === "10") {
      month = "October";
    } else if (month === "11") {
      month = "November";
    } else if (month === "12") {
      month = "December";
    }


  const finalDate = month + ' ' + day + ', ' + year
  

  function handleClick(){
    setSelectedMarker((concert))
    setMapOpen(true)
  }
  return (
    <div className="concert-card" onClick={handleClick}>
      <div className="card-venue">
        <h4 as="h5">{concert.venue.name}</h4>
      </div>
      <div className="card-contents">
        <div className="card-text">
          <div className="artist-container">
            <h2 className="artist-title">
              {concert.artistList.length > 1 ? "Artists: " : "Artist: "}
            </h2>
            {concert.artistList.map((art) => {
              return (
                <h2 key={art.id} className="artist-list">
                  &nbsp;{art.name} <BsMusicNote className="artist-music-note" />
                </h2>
              );
            })}
          </div>
          <p>
            <span>Address: </span>
            {concert.venue.address}
          </p>
          <p className="mobile-date">
            <span className="date">Date: </span>
            {finalDate}
          </p>
          <button variant="primary">
            {" "}
            <a className="link" href={concert.link}>
              Tickets
            </a>
          </button>
        </div>
        <div className="img-container">
          {/* <img src={concert.img} className="concert-img"></img> */}
        </div>
      </div>
    </div>
  );
}
