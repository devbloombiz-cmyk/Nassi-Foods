import productOne from "../../assets/NazziFoods/nazzi-3.png";
import productTwo from "../../assets/NazziFoods/nazzi-4.png";
import productThree from "../../assets/NazziFoods/nazzi-5.png";

const serviceCards = [
  {
    title: "Retail Ready Packs",
    description:
      "Shelf-friendly packaging designed for supermarkets, mini stores, and fast-moving retail channels.",
    image: productOne,
  },
  {
    title: "Home Cooking Mixes",
    description:
      "Quick-cook mix variants that help families make authentic dishes in less time with no compromise in taste.",
    image: productTwo,
  },
  {
    title: "Bulk Supply Support",
    description:
      "Scalable production and supply for restaurants, caterers, and distribution partners across regions.",
    image: productThree,
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-dark-900 py-8 md:py-8">
      <div className="section-container">
        <div className="mb-8 max-w-3xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-primary-yellow">
            What We Deliver
          </p>
          <h2 className="text-3xl font-bold text-accent-white md:text-5xl">
            Product-Driven Solutions for Every Kitchen
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {serviceCards.map((card) => (
            <article
              key={card.title}
              className="overflow-hidden rounded-2xl border border-white/10 bg-dark-800/80"
            >
              <img src={card.image} alt={card.title} className="h-56 w-full object-cover" loading="lazy" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-accent-white">{card.title}</h3>
                <p className="mt-3 text-sm leading-6 text-accent-gray">{card.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
