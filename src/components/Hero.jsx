import NavBar from "./NavBar";

function Hero() {
  return (
    <header
      className="bg-[url(/loopstudios-landing-page/images/mobile/image-hero.jpg)] bg-cover p-6 md:bg-[url(/loopstudios-landing-page/images/desktop/image-hero.jpg)]"
      role="banner"
      aria-label="Hero section with site title and navigation"
    >
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col">
        <NavBar />

        <section className="flex grow items-center">
          <h1 className="min-h-fit p-4 text-4xl font-light text-white uppercase ring-2 ring-white md:w-6/10 md:p-8 md:text-7xl">
            Immersive <br className="hidden md:block" /> experiences <br /> that
            <br className="md:hidden" /> deliver
          </h1>
        </section>
      </div>
    </header>
  );
}

export default Hero;
