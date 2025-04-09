import NavBar from "./NavBar";

function Hero() {
  return (
    <header className="flex min-h-screen flex-col bg-[url(/public/images/mobile/image-hero.jpg)] bg-cover p-6">
      <NavBar />

      <section className="flex grow items-center">
        <h1 className="p-4 text-4xl font-light text-white uppercase ring-2 ring-white">
          Immersive experiences <br /> that <br /> deliver
        </h1>
      </section>
    </header>
  );
}

export default Hero;
