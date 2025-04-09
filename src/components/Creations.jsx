import articles from "../assets/data/articles-data.js";

articles;
function Creations() {
  const creations = articles.map((article) => {
    const words = article.title.split(" ");
    const half = Math.ceil(words.length / 2);
    const half1 = words.slice(0, half).join(" ");
    const half2 = words.slice(half).join(" ");

    return (
      <div className="bg-Black relative mx-auto w-fit" key={article.title}>
        <img
          src={article.imgMobile}
          alt={`article.title image`}
          className="mask-linear-220 mask-linear-from-40% mask-linear-to-120%"
        />

        <img
          src={article.imgDesktop}
          alt={`article.title image`}
          className="hidden mask-linear-220 mask-linear-from-40% mask-linear-to-120%"
        />

        <h3 className="text-Grey-200 absolute bottom-3 left-3 text-xl font-light uppercase">
          {half1} <br /> {half2}
        </h3>
      </div>
    );
  });

  return (
    <section className="px-6">
      <div className="mb-10 flex items-center justify-center">
        <h2 className="text-3xl font-light uppercase">Our creations</h2>
        <button className="hidden">See all</button>
      </div>
      <div className="space-y-6">{creations}</div>

      <div className="mt-8 flex justify-center">
        <button className="flex items-center px-4 py-2 text-sm tracking-widest uppercase ring-1">
          see more
        </button>
      </div>
    </section>
  );
}

export default Creations;
