function About() {
  return (
    <article
      className="relative mx-auto my-12 max-w-6xl p-6 text-center md:my-30 md:p-0 md:text-left"
      role="region"
      aria-labelledby="about-heading"
    >
      <img
        src="/loopstudios-landing-page/images/mobile/image-interactive.jpg"
        alt="Person wearing a VR headset interacting with a virtual environment"
        className="md:hidden"
      />

      <img
        src="/loopstudios-landing-page/images/desktop/image-interactive.jpg"
        alt="Person wearing a VR headset interacting with a virtual environment"
        className="hidden md:block"
      />

      <div className="bg-White right-0 -bottom-15 p-4 md:absolute md:max-w-150 md:p-15">
        <h2
          id="about-heading"
          className="my-4 text-3xl font-light uppercase md:text-5xl"
        >
          The leader in interactive VR
        </h2>
        <p className="font-alata text-gray-600">
          Founded in 2011, Loopstudios has been producing world-class virtual
          reality projects for some of the best companies around the globe. Our
          award-winning creations have transformed businesses through digital
          experiences that bind to their brand.
        </p>
      </div>
    </article>
  );
}

export default About;
