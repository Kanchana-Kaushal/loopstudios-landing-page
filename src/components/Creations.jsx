import articles from "../assets/data/articles-data.js";

articles;
function Creations() {
  const creations = articles.map((article) => {
    const words = article.title.split(" ");
    const half = Math.ceil(words.length / 2);
    const half1 = words.slice(0, half).join(" ");
    const half2 = words.slice(half).join(" ");

    return (
      <div
        className="bg-Black hover:bg-White group relative mx-auto cursor-pointer md:mx-0"
        key={article.title}
      >
        <img
          src={article.imgMobile}
          alt={`article.title image`}
          className="mask-linear-220 mask-linear-from-40% mask-linear-to-120% md:hidden"
        />

        <img
          src={article.imgDesktop}
          alt={`article.title image`}
          className="hidden mask-linear-220 mask-linear-from-40% mask-linear-to-120% transition-opacity duration-200 ease-in-out hover:opacity-30 md:flex"
        />

        <h3 className="text-Grey-200 absolute bottom-3 left-3 text-xl font-light uppercase transition-colors duration-200 ease-in-out group-hover:text-black md:bottom-8 md:left-8 md:text-3xl">
          {half1} <br /> {half2}
        </h3>
      </div>
    );
  });

  return (
    <section className="mx-auto px-6 md:max-w-8/10">
      <div className="mb-10 flex items-center justify-center md:justify-between">
        <h2 className="text-3xl font-light uppercase md:text-4xl">
          Our creations
        </h2>
        <button className="hover:bg-Black hidden items-center px-8 py-2 text-sm tracking-widest uppercase ring-1 transition-colors duration-75 ease-in hover:text-white md:flex">
          see all
        </button>
      </div>

      <div className="flex flex-wrap items-start gap-8">{creations}</div>

      <div className="mt-8 flex justify-center">
        <button className="flex items-center px-4 py-2 text-sm tracking-widest uppercase ring-1 md:hidden">
          see more
        </button>
      </div>
    </section>
  );
}

export default Creations;
