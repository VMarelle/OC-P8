import "../assets/style/Presentation.scss";
import pp from "../assets/image/PP.webp";

function Presentation() {
  return (
    <div id="presentation" className="presentation-card">
      <h2>Présentation</h2>
      <div className="card-image">
        <img src={pp} alt="PP"></img>
      </div>
      <h3>Victor Marelle</h3>
      <p>Étudiant en développement web</p>
    </div>
  );
}

export default Presentation;
