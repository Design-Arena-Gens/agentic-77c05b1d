import Image from "next/image";
import styles from "./Deals.module.css";
import { dailyDeals } from "@/data/store";

const Deals = () => {
  return (
    <section className={styles.section} aria-labelledby="deals-heading">
      <div className={styles.inner}>
        <div className={styles.titleRow}>
          <h2 id="deals-heading">Today's deals</h2>
          <a href="#">See more</a>
        </div>
        <div className={styles.carousel}>
          {dailyDeals.map((deal) => (
            <article key={deal.id} className={styles.card}>
              <div className={styles.image}>
                <Image
                  src={deal.image}
                  alt={deal.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 300px"
                />
                <span className={styles.overlay} />
              </div>
              <div className={styles.content}>
                <span className={styles.discount}>{deal.discountLabel}</span>
                <h3>{deal.title}</h3>
                <p>{deal.description}</p>
                <span className={styles.expires}>{deal.expiresIn}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Deals;
