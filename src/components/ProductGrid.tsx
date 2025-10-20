import Image from "next/image";
import styles from "./ProductGrid.module.css";
import { featuredProducts } from "@/data/store";
import { AiFillStar } from "react-icons/ai";

const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

const ProductGrid = () => {
  return (
    <section className={styles.section} aria-labelledby="featured-heading">
      <div className={styles.titleRow}>
        <h2 id="featured-heading">Featured picks for you</h2>
        <a href="#">See all deals</a>
      </div>
      <div className={styles.grid}>
        {featuredProducts.map((product) => (
          <article key={product.id} className={styles.card}>
            <div className={styles.imageWrapper}>
              {product.badge ? (
                <span className={styles.badge}>{product.badge}</span>
              ) : null}
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="(max-width: 768px) 100vw, 250px"
              />
            </div>
            <div className={styles.info}>
              <span className={styles.category}>{product.category}</span>
              <h3 className={styles.name}>{product.name}</h3>
              <div className={styles.rating}>
                <AiFillStar color="#ffa41c" />
                <span>
                  {product.rating.toFixed(1)} • {product.ratingsCount.toLocaleString()} ratings
                </span>
              </div>
              <span className={styles.price}>{currency.format(product.price)}</span>
              {product.prime ? (
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/f/f3/Amazon_Prime_logo.svg"
                  alt="Prime eligible"
                  width={52}
                  height={16}
                  className={styles.prime}
                />
              ) : null}
              <div className={styles.actions}>
                <button type="button">Add to Cart</button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
