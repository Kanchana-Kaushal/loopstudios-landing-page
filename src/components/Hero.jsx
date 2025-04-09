import NavBar from "./NavBar";

function Hero() {
  return (
    <header className="bg-[url(/public/images/mobile/image-hero.jpg)] bg-cover p-6">
      <NavBar />

      <section className="my-50 p-4 ring-2 ring-white">
        <h1 className="font-josefin text-4xl font-light text-white uppercase">
          Immersive experiences <br /> that <br /> deliver
        </h1>
      </section>
    </header>
  );
}

export default Hero;
