import Image from "next/image";
import styles from "./Recommendations.module.css";
import { bestSellers, recommendedProducts, Product } from "@/data/store";

const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

type Props = {
  title: string;
  items: Product[];
};

const Section = ({ title, items }: Props) => {
  const headingId = title.replace(/\s+/g, "-").toLowerCase();

  return (
    <section className={styles.section} aria-labelledby={headingId}>
      <h2 id={headingId} className={styles.title}>
        {title}
      </h2>
      <div className={styles.grid}>
        {items.map((product) => (
          <article key={product.id} className={styles.card}>
            <div className={styles.image}>
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="(max-width: 768px) 100vw, 120px"
              />
            </div>
            <div className={styles.body}>
              <span className={styles.meta}>{product.category}</span>
              <h3 className={styles.name}>{product.name}</h3>
              <span className={styles.meta}>
                {product.rating.toFixed(1)} ({product.ratingsCount.toLocaleString()})
              </span>
              <span className={styles.price}>{currency.format(product.price)}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

const Recommendations = () => {
  return (
    <>
      <Section title="Best sellers" items={bestSellers} />
      <Section title="Recommended for you" items={recommendedProducts} />
    </>
  );
};

export default Recommendations;
