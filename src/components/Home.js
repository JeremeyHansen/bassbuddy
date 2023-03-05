import "../css/home.css";
import { Link } from "react-router-dom";
import { BsMusicNote, BsMusicNoteBeamed } from "react-icons/bs";


export default function Home() {
  function handleClick() {}
  return (
    <div className="home-container">
      <div className="home-text">
        <div className="main-text">
          <h6>Mom Can You Pick Me Up, <span>The Bass Is</span> Too <span>Loud</span>.</h6>
        </div>
        <button onClick={handleClick} className="find-shows-btn">
          <Link to="/cities" className="shows-text">
            Find Shows
          </Link>
        </button>
      </div>
      <div className="note-container">
      {/* <BsMusicNote className="note-5"/> */}
      <BsMusicNote className="note-6"/>
      {/* <BsMusicNote className="note-7"/> */}
      {/* <BsMusicNote className="note-8"/> */}
      {/* <BsMusicNote className="note-9"/> */}
      <BsMusicNote className="note-10"/>
      {/* <BsMusicNoteBeamed className="note2-5"/> */}
      <BsMusicNoteBeamed className="note2-6"/>
      {/* <BsMusicNoteBeamed className="note2-7"/> */}
      {/* <BsMusicNoteBeamed className="note2-8"/> */}
      <BsMusicNoteBeamed className="note2-9"/>
      <BsMusicNoteBeamed className="note2-10"/>
      </div>
    </div>
  );
}
