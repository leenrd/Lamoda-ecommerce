import "./style-hero.css";

const Hero = () => {
  return (
    <div className="Body">
      <header>
        <div className="hero">
          <div className="mask">
            <h1 id="text" className="title">
              LaModa Fashion Collective
            </h1>
          </div>
          <div className="sub">
            <p className="subtext">Creating art since 1925</p>
            <span>LAMODA&trade; All rights reserved</span>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Hero;
