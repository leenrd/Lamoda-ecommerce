import "./style-about.css";

const About = () => {
  return (
    <>
      <div className="heading-cont">
        <h1 className="headingTitle">Our Story</h1>
        <div className="headsubText">A Timeless Legacy </div>
      </div>

      <div className="body">
        <p className="firstP">
          In the enchanting streets of a European city, fashion designer
          Isabella Delacroix had a dream. In 1925, she brought that dream to
          life when she founded "MODA." Isabella was a true visionary, inspired
          by her global travels and determined to reshape the fashion industry.
        </p>
        <div className="containermoda">
          <img
            className="firstPic"
            src="assets\Newimages\pic1.png"
            alt="sotanghon worker"
          />
        </div>

        <p className="secondP">
          MODA's first boutique opened in the heart of Paris and quickly became
          a hub for artists, poets, and fashion-forward individuals seeking
          unique styles. Isabella's eclectic designs and dedication to quality
          gained the attention of royalty and celebrities, establishing MODA as
          a symbol of luxury and creativity.
        </p>
        <div className="two-cont">
          <div className="containerlac">
            <img
              src="assets\Newimages\Lacroix.png"
              alt="Woman1"
              className="secondPic"
            />
          </div>
          <div className="containerlac2">
            <img
              src="assets\Newimages\Lacroix2.png"
              alt="Woman 2"
              className="thirdPic"
            />
          </div>
        </div>
        <p className="thirdP">
          MODA has maintained its reputation for creativity, quality, and
          inclusivity, celebrating diversity in all its forms. Isabella
          Delacroix's legacy lives on through her brand, inspiring generations
          to embrace fashion as a means of self-expression and cultural
          exploration. MODA stands as a symbol of timeless style, individuality,
          and a commitment to a more sustainable and inclusive future in the
          world of fashion Step into the world of MODA, where history and
          innovation converge to offer you unique, sustainable, and inclusive
          fashion for the modern age.
        </p>
      </div>
    </>
  );
};

export default About;
