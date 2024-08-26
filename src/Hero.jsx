import heroImg from "./assets/hero.svg";
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            delectus tempora, nobis aperiam dolore corporis dignissimos nam
            quaerat dolor laudantium magnam nihil in omnis. Expedita repellendus
            cupiditate labore omnis sapiente.
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="woman and the browser" />
        </div>
      </div>
    </section>
  );
};
export default Hero;
