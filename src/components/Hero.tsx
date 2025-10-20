import Image from "next/image";
import styles from "./Hero.module.css";
import { heroSlides } from "@/data/store";

const Hero = () => {
  const [primary, ...cards] = heroSlides;

  return (
    <section className={styles.hero} aria-labelledby="hero-heading">
      <div className={styles.banner} style={{ background: `linear-gradient(135deg, ${primary.accent}, rgba(35, 47, 62, 0.85))` }}>
        <div className={styles.headline}>
          <h1 id="hero-heading">{primary.headline}</h1>
          <p>{primary.subheading}</p>
          <button type="button">{primary.cta}</button>
        </div>
        <div className={styles.art}>
          <Image
            src={primary.image}
            alt={primary.headline}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
        </div>
      </div>

      <div className={styles.quickCards}>
        {cards.map((card) => (
          <article key={card.id} className={styles.card}>
            <h3>{card.headline}</h3>
            <span>{card.subheading}</span>
            <Image
              src={card.image}
              alt={card.headline}
              width={140}
              height={140}
              sizes="140px"
            />
          </article>
        ))}
      </div>
    </section>
  );
};

export default Hero;
