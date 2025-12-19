import heroImg from "../../assets/Batman Hero Img.png";

function Hero() {
  return (
    <section className="mb-5">
      <img src={heroImg} alt="Hero" className="w-full h-[50vh] object-cover" />
    </section>
  );
}

export default Hero;
