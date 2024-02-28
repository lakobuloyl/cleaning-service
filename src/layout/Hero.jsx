
import "../style/HeroStyles.css";

const Hero = (props) => {
  // const {cName, heroImg, imgClass, title, text, btnClass, btnText} = props
  return (
    <div className={props.cName}>
      <img alt="Main Page Image" src={props.heroImg} className={props.imgClass}/>
      <div className="hero-text">
        <h1>{props.title}</h1>
        <p>{props.text}</p>
        <a href="/" className={props.btnClass}>
          {props.btnText}
        </a>
      </div>
    </div>
  );
};

export default Hero;
