import Image from "next/image";
import Link from "next/link";
import styles from "./CategoryGrid.module.css";
import { categories } from "@/data/store";

const CategoryGrid = () => {
  return (
    <section className={styles.section} aria-labelledby="category-heading">
      <div className={styles.titleRow}>
        <h2 id="category-heading">Shop by category</h2>
        <Link href="#">Browse more</Link>
      </div>
      <div className={styles.grid}>
        {categories.map((category) => (
          <article key={category.id} className={styles.card}>
            <Image
              src={category.image}
              alt={category.name}
              width={400}
              height={260}
            />
            <div className={styles.content}>
              <h3>{category.name}</h3>
              <span className={styles.spotlight}>{category.spotlight}</span>
              <Link className={styles.cta} href="#">
                Explore {category.name}
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default CategoryGrid;
