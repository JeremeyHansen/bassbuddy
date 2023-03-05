import { useState, useEffect } from "react";
import ConcertCard from "./ConcertCard.js";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { IoSearchCircle } from "react-icons/io5";
import ConcertLoadPage from "./ConcertLoadPage.js";
import { BiMapAlt } from "react-icons/bi";
import Map from "./Map.js";

export default function City() {
  //setting state for concert data

  const [concerts, setConcerts] = useState([]);
  const { state } = useLocation();

  //loading page for concerts

  const [className, setClassName] = useState("concert-load-container");

  useEffect(() => {
    const timer = setTimeout(() => {
      setClassName("concert-load-gone");
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  //fetching concert data

  useEffect(() => {
    fetch(
      `https://edmtrain.com/api/events?locationIds=${state.city.cityId}&client=774e665d-5a08-4e18-926e-4896e04e1378`
    )
      .then((res) => res.json())
      .then((data) => setConcerts(data.data));
  }, [state]);

  //search function for out list
  const [searchTerm, setSearchTerm] = useState("");
  
  const concertsToDisplay = concerts?.filter((concert) => (
    (
      concert.venue.name +
      concert.artistList.map((artist) => artist.name) +
      concert.date
      )
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
      ))
      
      function handleChange(event) {
        setSearchTerm(event.target.value);
      }

      
  //function to open search

  const [searchOpen, setSearchOpen] = useState(false);

  function handleSearchIcon() {
    setSearchOpen(!searchOpen);
  }

  //function to open map and set user location

  const [mapOpen, setMapOpen] = useState(false);
  // const [userLatitude, setUserLatitude] = useState();
  // const [userLongitude, setUserLongitude] = useState();

  const center = { 
    lat: (state.city.latitude), 
    lng: (state.city.longitude)
  };

  function openMap() {
    setMapOpen(!mapOpen);
    // navigator.geolocation.getCurrentPosition(function (position) {
      // setUserLatitude(position.coords.latitude);
      // setUserLongitude(position.coords.longitude);
  }

  //setting state to map marker
  const [selectedMarker, setSelectedMarker] = useState("");



  return (
    <div className="whole-container">
      <ConcertLoadPage className={className} />
      <h1 className="title">Hi, {state.city.city}!</h1>
      <h1 className="title2">
        <IoSearchCircle className="search-icon" onClick={handleSearchIcon} />
        UpComing Shows
        <BiMapAlt className="map-icon" onClick={openMap} />
      </h1>
      {searchOpen && (
        <input
          className="search-input"
          placeholder="Artist, Venue, Date"
          value={searchTerm}
          onChange={handleChange}
        ></input>
      )}
      {mapOpen && <Map center={center} concertsToDisplay={concertsToDisplay} setConcerts={setConcerts} selectedMarker={selectedMarker} setSelectedMarker={setSelectedMarker}/>}
      <div className="card-container">
        <motion.div layout>
          <AnimatePresence>
            {concertsToDisplay?.map((concert) => {
              return <ConcertCard key={concert.id} setSelectedMarker={setSelectedMarker} concert={concert} setMapOpen={setMapOpen} setConcerts={setConcerts} concerts={concerts}/>;
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
