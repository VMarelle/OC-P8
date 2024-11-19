import "../assets/style/Footer.scss";
import mail from "../assets/image/mail.webp";
import phone from "../assets/image/telephone.webp";

function Footer() {
  return (
    <div id="contact" className="footer">
      <h3>Me contacter :</h3>
      <p>
        <img src={mail} /> {""}
        <a href="mailto:victormarelle45@gmail.com">victormarelle45@gmail.com</a>
      </p>
      <p>
        {" "}
        <img src={phone} /> +33 6.61.90.56.96
      </p>
      <p>
        icônes par :{" "}
        <a target="_blank" href="https://icons8.com">
          Icons8
        </a>
      </p>
    </div>
  );
}

export default Footer;
