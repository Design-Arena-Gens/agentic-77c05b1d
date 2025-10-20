import styles from "./page.module.css";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CategoryGrid from "@/components/CategoryGrid";
import Deals from "@/components/Deals";
import ProductGrid from "@/components/ProductGrid";
import Collections from "@/components/Collections";
import Recommendations from "@/components/Recommendations";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <main>
        <Hero />
        <CategoryGrid />
        <Deals />
        <ProductGrid />
        <Collections />
        <Recommendations />
      </main>
      <Footer />
    </div>
  );
}
