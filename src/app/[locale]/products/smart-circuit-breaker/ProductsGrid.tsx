import Image from "next/image";
import { Link } from "@/i18n/navigation";

export function ProductsGrid() {
  const products = [
    {
      slug: "wifi-smart-mcb-1p",
      name: "18mm Wi-Fi Smart Circuit Breaker",
      image: "/assets/products/smart-mcb-18mm.webp",
      summary: "Ultra-compact 18mm smart MCB with WiFi remote control and real-time monitoring.",
      features: ["18×84×68mm", "Single relay", "1-63A configurable", "WiFi + Tuya Smart"],
    },
    {
      slug: "wifi-smart-mcb-2p",
      name: "2P Wi-Fi Smart Circuit Breaker",
      image: "/assets/products/smart-mcb-2p.webp",
      summary: "Dual-pole smart MCB with single/dual relay options for commercial applications.",
      features: ["36×84×68mm", "2P poles", "Single/Dual relay", "220V/400V systems"],
    },
    {
      slug: "wifi-earthleakage-mcb",
      name: "Wi-Fi Smart Earth Leakage Circuit Breaker",
      image: "/assets/products/smart-mcb-leakage.webp",
      summary: "Smart ELCB with real-time leakage current monitoring and temperature protection.",
      features: ["36×85×65mm", "2P poles", "Leakage 10-99mA", "Temperature protection"],
    },
  ];

  return (
    <section className="section products-grid-section">
      <div className="section-heading centered">
        <p className="eyebrow">Product Range</p>
        <h2>Smart Wi-Fi Circuit Breaker Series</h2>
        <p style={{ color: "var(--muted)", marginTop: 12, maxWidth: 720, marginInline: "auto" }}>
          Three configurations to meet different smart control and protection requirements — from compact residential to commercial earth leakage monitoring.
        </p>
      </div>
      <div className="products-grid">
        {products.map((product) => (
          <Link key={product.slug} href={`/products/${product.slug}`} className="product-card">
            <div className="product-card-image">
              <Image src={product.image} alt={product.name} width={300} height={300} />
            </div>
            <div className="product-card-body">
              <h3>{product.name}</h3>
              <p className="product-summary">{product.summary}</p>
              <ul className="product-features">
                {product.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
              <span className="product-card-cta">View Details →</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
