import Image from "next/image";
import styles from "./Collections.module.css";
import { trendingCollections } from "@/data/store";

const Collections = () => {
  return (
    <section className={styles.section} aria-labelledby="collection-heading">
      <div className={styles.titleRow}>
        <h2 id="collection-heading">Trending collections</h2>
        <a href="#">Discover more</a>
      </div>
      <div className={styles.scroller}>
        {trendingCollections.map((collection) => (
          <article key={collection.id} className={styles.card}>
            <Image
              src={collection.image}
              alt={collection.title}
              fill
              sizes="(max-width: 768px) 100vw, 320px"
            />
            <div className={styles.cardContent}>
              <h3>{collection.title}</h3>
              <span>{collection.tagline}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Collections;
