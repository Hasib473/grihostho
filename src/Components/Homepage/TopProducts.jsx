import { useState } from "react";
import { useCart } from "../../Context/CartContext"; // ✅ ADDED

import sundarbanhoney from '../../assets/Honey/sundarban honey.png';
import himsagarmango from '../../assets/Mango/Himsagar Mango.png';
import greentea from '../../assets/tea/green tea.png';
import medjoldates from '../../assets/dates/medjol dates.png';
import ajwadates from '../../assets/dates/ajwa dates.png';
import cashwenuts from '../../assets/Nuts/cashew nuts.png';
import termericpowder from '../../assets/Spices/termeric powder.png';

// ─────────────────────────────────────────────────────────
// PRODUCTS
// ─────────────────────────────────────────────────────────

const topProducts = [
  {
    id: 1,
    title: "Ajwa Dates",
    category: "Dates",
    price: "৳ 1,200",
    originalPrice: "৳ 1,500",
    tag: "Best Seller",
    tagColor: "bg-amber-500",
    image: ajwadates,
    fallbackEmoji: "🫙",
    accent: "#92400e",
    gradientOverlay:
      "from-amber-900/85 via-amber-800/70 to-yellow-900/85",
    solidBg: "from-amber-900 via-amber-800 to-yellow-900",
    span: "lg:col-span-1 lg:row-span-1",
    badge: "🔥 Hot",
  },

  {
    id: 3,
    title: "Sundarban Honey",
    category: "Honey",
    price: "৳ 750",
    originalPrice: "৳ 950",
    tag: "Wild Forest",
    tagColor: "bg-green-700",
    image: sundarbanhoney,
    fallbackEmoji: "🐝",
    accent: "#166534",
    gradientOverlay:
      "from-green-900/70 via-emerald-800/45 to-transparent",
    solidBg: "from-green-800 via-emerald-700 to-teal-800",
    span: "lg:col-span-2 lg:row-span-2",
    badge: "⭐ Top Pick",
  },

  {
    id: 4,
    title: "Medjool Dates",
    category: "Dates",
    price: "৳ 980",
    originalPrice: "৳ 1,200",
    tag: "Saudi Import",
    tagColor: "bg-red-700",
    image: medjoldates,
    fallbackEmoji: "🌴",
    accent: "#7f1d1d",
    gradientOverlay:
      "from-red-900/85 via-rose-800/70 to-red-700/85",
    solidBg: "from-red-900 via-rose-800 to-red-700",
    span: "lg:col-span-1 lg:row-span-2",
  },

  {
    id: 2,
    title: "Himsagar Mango",
    category: "Fruits",
    price: "৳ 300",
    originalPrice: "৳ 500",
    tag: "Pure & Raw",
    tagColor: "bg-yellow-500",
    image: himsagarmango,
    fallbackEmoji: "🥭",
    accent: "#b45309",
    gradientOverlay:
      "from-yellow-700/85 via-amber-600/70 to-orange-700/85",
    solidBg: "from-yellow-200 via-amber-400 to-orange-400",
    span: "lg:col-span-1 lg:row-span-1",
  },

  {
    id: 6,
    title: "Turmeric Powder",
    category: "Spices",
    price: "৳ 220",
    originalPrice: "৳ 280",
    tag: "Organic",
    tagColor: "bg-yellow-600",
    image: termericpowder,
    fallbackEmoji: "🌶️",
    accent: "#a16207",
    gradientOverlay:
      "from-orange-800/85 via-yellow-700/70 to-amber-800/85",
    solidBg: "from-yellow-500 via-orange-400 to-amber-500",
    span: "lg:col-span-2 lg:row-span-1",
  },

  {
    id: 5,
    title: "Cashew Nuts",
    category: "Nuts & Seeds",
    price: "৳ 480",
    originalPrice: "৳ 600",
    tag: "Premium",
    tagColor: "bg-stone-600",
    image: cashwenuts,
    fallbackEmoji: "🥜",
    accent: "#78350f",
    gradientOverlay:
      "from-stone-800/85 via-stone-700/70 to-amber-900/85",
    solidBg: "from-stone-700 via-stone-600 to-amber-800",
    span: "lg:col-span-1 lg:row-span-1",
  },

  {
    id: 7,
    title: "Green Tea",
    category: "Beverage",
    price: "৳ 350",
    originalPrice: "৳ 420",
    tag: "Antioxidant",
    tagColor: "bg-teal-600",
    image: greentea,
    fallbackEmoji: "🍵",
    accent: "#0f766e",
    gradientOverlay:
      "from-teal-900/85 via-emerald-800/70 to-green-900/85",
    solidBg: "from-teal-700 via-emerald-600 to-green-700",
    span: "lg:col-span-1 lg:row-span-1",
  },
];

// ─────────────────────────────────────────────────────────
// DISCOUNT
// ─────────────────────────────────────────────────────────

function Discount({ original, current }) {
  const orig = parseInt(original.replace(/[^\d]/g, ""));
  const curr = parseInt(current.replace(/[^\d]/g, ""));
  const pct = Math.round(((orig - curr) / orig) * 100);

  return (
    <span className="rounded-full bg-red-500 px-1.5 py-0.5 text-[10px] font-bold leading-none text-white">
      -{pct}%
    </span>
  );
}

// ─────────────────────────────────────────────────────────
// CARD
// ─────────────────────────────────────────────────────────

function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);

    const { addToCart } = useCart(); // ✅ ADDED


  const isHero =
    product.span.includes("row-span-2") &&
    product.span.includes("col-span-2");

  const isWide =
    product.span.includes("col-span-2") && !isHero;

  const isTall =
    product.span.includes("row-span-2") && !isHero;

  const hasImage = !!product.image;

    const handleAddToCart = () => {
    addToCart({
      id: product.id,
      product: product.title,
      image: product.image,
      category: product.category,
      price: parseInt(product.price.replace(/[^\d]/g, "")),
      quantity: 1,
    });
  };

  return (
    <div
      className={`
        ${product.span}
        relative
        overflow-hidden
        rounded-2xl
        cursor-pointer
        min-h-[220px]
        sm:min-h-[250px]
        lg:min-h-0
        shadow-[0_10px_30px_rgba(0,0,0,0.08)]
        ring-1
        ring-black/5
      `}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* IMAGE */}
      {hasImage ? (
        <>
          <img
            src={product.image}
            alt={product.title}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700"
            style={{
              transform: hovered
                ? "scale(1.07)"
                : "scale(1)",
            }}
          />

          <div
            className={`absolute inset-0 bg-gradient-to-t ${product.gradientOverlay} transition-opacity duration-500`}
            style={{
              opacity: hovered ? 0.88 : 0.68,
            }}
          />
        </>
      ) : (
        <>
          <div
            className={`absolute inset-0 bg-gradient-to-br ${product.solidBg}`}
          />

          <div
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                "radial-gradient(circle, white 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }}
          />
        </>
      )}

      {/* GLOW */}
      <div
        className="pointer-events-none absolute rounded-full blur-3xl transition-all duration-700"
        style={{
          width: isHero ? "280px" : "110px",
          height: isHero ? "280px" : "110px",
          background: "rgba(255,255,255,0.06)",
          top: hovered ? "-15%" : "-5%",
          right: hovered ? "-5%" : "-18%",
        }}
      />

      {/* CONTENT */}
      <div
        className={`relative z-10 flex h-full flex-col justify-between ${
          isHero
            ? "p-5 sm:p-6"
            : "p-3 sm:p-3.5"
        }`}
      >
        {/* TOP */}
        <div className="flex flex-wrap items-start justify-between gap-2">
          <span
            className={`whitespace-nowrap rounded-full px-2 py-0.5 text-[9px] font-semibold uppercase tracking-widest text-white ${product.tagColor}`}
          >
            {product.tag}
          </span>

          {product.badge && (
            <span className="whitespace-nowrap rounded-full bg-white/20 px-2 py-0.5 text-[10px] text-white backdrop-blur-sm">
              {product.badge}
            </span>
          )}
        </div>

        {/* FALLBACK EMOJI */}
        {!hasImage && (
          <div
            className="pointer-events-none flex select-none items-center justify-center transition-transform duration-500"
            style={{
              fontSize: isHero
                ? "4.5rem"
                : isTall
                ? "3rem"
                : isWide
                ? "2.6rem"
                : "2.2rem",

              transform: hovered
                ? "scale(1.18) rotate(-6deg)"
                : "scale(1) rotate(0deg)",

              filter:
                "drop-shadow(0 8px 24px rgba(0,0,0,0.4))",
            }}
          >
            {product.fallbackEmoji}
          </div>
        )}

        {/* BOTTOM */}
        <div>
          <p className="mb-0.5 text-[9px] font-medium uppercase tracking-widest text-white/65">
            {product.category}
          </p>

          <h3
            className="font-bold leading-tight text-white"
            style={{
              fontFamily: "'Georgia', serif",
              fontSize: isHero
                ? "clamp(1.4rem,3vw,2rem)"
                : isWide
                ? "1rem"
                : "0.92rem",
            }}
          >
            {product.title}
          </h3>

          <div className="mt-1 flex flex-wrap items-center gap-1.5">
            <span
              className="font-bold text-white"
              style={{
                fontSize: isHero
                  ? "1.1rem"
                  : "0.85rem",
              }}
            >
              {product.price}
            </span>

            <span className="text-xs text-white/55 line-through">
              {product.originalPrice}
            </span>

            <Discount
              original={product.originalPrice}
              current={product.price}
            />
          </div>

          {/* BUTTON */}
          <button onClick={handleAddToCart}
            className="mt-2.5 w-full cursor-pointer rounded-xl text-xs font-semibold backdrop-blur-sm transition-all duration-300"
            style={{
              padding: isHero
                ? "8px 0"
                : "6px 0",

              background: hovered
                ? "rgba(255,255,255,0.95)"
                : "rgba(255,255,255,0.12)",

              color: hovered
                ? product.accent
                : "#fff",

              transform: hovered
                ? "translateY(0)"
                : "translateY(6px)",

              opacity: hovered ? 1 : 0.45,
            }}
          >
            Add to Cart →
          </button>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────
// MAIN
// ─────────────────────────────────────────────────────────

export default function TopProducts() {
  return (
    <section
      className="w-full px-3 py-10 sm:px-4 sm:py-12"
      style={{
        background:
          "linear-gradient(160deg, #fdf8f0 0%, #fef3c7 50%, #fdf8f0 100%)",
      }}
    >
      <div className="mx-auto w-full max-w-[1200px]">

        {/* HEADER */}
        <div className="mb-7 flex flex-col gap-4 sm:mb-8 sm:flex-row sm:items-end sm:justify-between">

          <div>
            <p className="mb-1 text-xs font-semibold uppercase tracking-[0.3em] text-amber-500">
              Handpicked For You
            </p>

            <h2
              className="text-3xl font-bold leading-none text-stone-900 sm:text-4xl"
              style={{
                fontFamily: "'Georgia', serif",
                letterSpacing: "-0.03em",
              }}
            >
              Top Products
            </h2>

            <div className="mt-2 flex items-center gap-2">
              <div className="h-0.5 w-10 rounded-full bg-amber-400" />
              <div className="h-0.5 w-4 rounded-full bg-amber-300" />
              <div className="h-0.5 w-2 rounded-full bg-amber-200" />
            </div>
          </div>

          <a
            href="/products"
            className="w-fit border-b border-amber-400 pb-0.5 text-sm font-semibold text-amber-700 transition-all hover:border-amber-700 hover:text-amber-900"
            style={{
              fontFamily: "'Georgia', serif",
            }}
          >
            View All →
          </a>
        </div>

        {/* GRID */}
        <div
          className="
            grid
            grid-cols-1
            gap-3

            sm:grid-cols-2

            lg:grid-cols-4
          "
          style={{
            gridAutoRows:
              window.innerWidth >= 1024
                ? "165px"
                : "auto",
          }}
        >
          {topProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>

        {/* TRUST STRIP */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-center text-xs text-stone-500 sm:gap-6">

          <span>🚚 Free Delivery on ৳1000+</span>

          <span className="hidden h-4 w-px bg-stone-300 sm:block" />

          <span>✅ 100% Authentic Products</span>

          <span className="hidden h-4 w-px bg-stone-300 sm:block" />

          <span>🔄 Easy Returns</span>
        </div>
      </div>
    </section>
  );
}