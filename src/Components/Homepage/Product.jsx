import { useState, useEffect, useRef } from "react";
import { Link } from "react-router";

import honey from "../../assets/Honey/organic honey.png";
import dates from "../../assets/dates/dates.jfif";
import nuts from "../../assets/Nuts/nutsimg.jfif";
import spices from "../../assets/Spices/spices.jfif";
import mango from "../../assets/Mango/mango.jfif";

import { slugify } from "../../data/navigation";

// ─────────────────────────────────────────────
// CATEGORY IMAGES
// ─────────────────────────────────────────────

const categories = [
  {
    name: "Organic",
    image:
      "https://cdn-icons-png.flaticon.com/512/766/766318.png",
    bg: "from-green-50 to-emerald-100",
    accent: "bg-emerald-500",
  },

  {
    name: "Honey",
    image: honey,
    bg: "from-amber-50 to-yellow-100",
    accent: "bg-amber-400",
  },

  {
    name: "Dates",
    image: dates,
    bg: "from-orange-50 to-amber-100",
    accent: "bg-orange-400",
  },

  {
    name: "Spices",
    image: spices,
    bg: "from-red-50 to-orange-100",
    accent: "bg-red-400",
  },

  {
    name: "Nuts & Seeds",
    image: nuts,
    bg: "from-stone-50 to-amber-100",
    accent: "bg-stone-500",
  },

  {
    name: "Mango",
    image: mango,
    bg: "from-teal-50 to-cyan-100",
    accent: "bg-teal-500",
  },

  {
    name: "Rice",
    image:
      "https://cdn-icons-png.flaticon.com/512/2515/2515183.png",
    bg: "from-yellow-50 to-lime-100",
    accent: "bg-yellow-500",
  },

  {
    name: "Flours & Lentils",
    image:
      "https://cdn-icons-png.flaticon.com/512/766/766324.png",
    bg: "from-yellow-50 to-orange-100",
    accent: "bg-yellow-600",
  },

  {
    name: "Dry Fruits",
    image:
      "https://cdn-icons-png.flaticon.com/512/2909/2909762.png",
    bg: "from-purple-50 to-violet-100",
    accent: "bg-purple-500",
  },

  {
    name: "Oils",
    image:
      "https://cdn-icons-png.flaticon.com/512/3081/3081967.png",
    bg: "from-lime-50 to-green-100",
    accent: "bg-lime-500",
  },
];

const INTERVAL = 2500;

export default function Product() {
  const [startIndex, setStartIndex] = useState(0);

  const [hoveredIndex, setHoveredIndex] =
    useState(null);

  const [visibleCount, setVisibleCount] =
    useState(7);

  const intervalRef = useRef(null);

  // ─────────────────────────────────────────────
  // RESPONSIVE ITEMS
  // ─────────────────────────────────────────────

  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(2);
      } else if (window.innerWidth < 768) {
        setVisibleCount(3);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(5);
      } else {
        setVisibleCount(7);
      }
    };

    updateVisibleCount();

    window.addEventListener(
      "resize",
      updateVisibleCount
    );

    return () =>
      window.removeEventListener(
        "resize",
        updateVisibleCount
      );
  }, []);

  // ─────────────────────────────────────────────
  // AUTO SLIDE
  // ─────────────────────────────────────────────

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setStartIndex(
        (prev) => (prev + 1) % categories.length
      );
    }, INTERVAL);

    return () =>
      clearInterval(intervalRef.current);
  }, []);

  // ─────────────────────────────────────────────
  // GET VISIBLE ITEMS
  // ─────────────────────────────────────────────

  const visibleItems = [];

  for (let i = 0; i < visibleCount; i++) {
    visibleItems.push(
      categories[
        (startIndex + i) % categories.length
      ]
    );
  }

  // ─────────────────────────────────────────────
  // MANUAL SLIDE
  // ─────────────────────────────────────────────

  const nextSlide = () => {
    setStartIndex(
      (prev) => (prev + 1) % categories.length
    );
  };

  const prevSlide = () => {
    setStartIndex(
      (prev) =>
        (prev - 1 + categories.length) %
        categories.length
    );
  };

  // ─────────────────────────────────────────────
  // UI
  // ─────────────────────────────────────────────

  return (
    <section
      className="w-full px-3 py-10 sm:px-4 lg:px-6"
      style={{
        background:
          "linear-gradient(135deg, #fdf8f0 0%, #fef9ec 100%)",
      }}
    >
      {/* HEADER */}

      <div className="mb-8 text-center">
        <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-amber-500 sm:text-xs">
          Shop By
        </p>

        <h2
          className="text-2xl font-bold text-stone-800 sm:text-3xl"
          style={{
            fontFamily: "'Georgia', serif",
            letterSpacing: "-0.02em",
          }}
        >
          Featured Categories
        </h2>

        <div className="mx-auto mt-3 h-0.5 w-12 rounded-full bg-amber-400" />
      </div>

      {/* SLIDER */}

      <div className="relative mx-auto flex max-w-[1200px] items-center gap-2 sm:gap-3">
        {/* LEFT BUTTON */}

        <button
          onClick={prevSlide}
          className="
            z-10
            flex
            h-8
            w-8
            flex-shrink-0
            items-center
            justify-center
            rounded-full
            bg-amber-400
            text-white
            shadow-md
            transition-all
            duration-300
            hover:scale-110
            hover:bg-amber-500

            sm:h-10
            sm:w-10
          "
        >
          ←
        </button>

        {/* CARDS */}

        <div className="flex-1 overflow-hidden">
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 sm:gap-3">
            {visibleItems.map((cat, index) => (
              <Link
                key={index}
                to={`/category/${slugify(cat.name)}`}
                onMouseEnter={() =>
                  setHoveredIndex(index)
                }
                onMouseLeave={() =>
                  setHoveredIndex(null)
                }
                className={`
                  relative
                  flex
                  cursor-pointer
                  flex-col
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-2xl
                  border
                  border-white/70
                  bg-gradient-to-br
                  ${cat.bg}

                  px-2
                  py-4

                  sm:px-3
                  sm:py-5

                  transition-all
                  duration-300

                  ${
                    hoveredIndex === index
                      ? "scale-105 shadow-xl"
                      : "shadow-sm"
                  }
                `}
                style={{
                  minHeight:
                    window.innerWidth < 640
                      ? "140px"
                      : "170px",

                  boxShadow:
                    hoveredIndex === index
                      ? "0 12px 30px rgba(0,0,0,0.12)"
                      : "0 3px 10px rgba(0,0,0,0.05)",
                }}
              >
                {/* ACCENT DOT */}

                <div
                  className={`absolute right-2.5 top-2.5 h-2 w-2 rounded-full ${cat.accent}`}
                />

                {/* IMAGE */}

                <div
                  className="mb-3 transition-all duration-300"
                  style={{
                    transform:
                      hoveredIndex === index
                        ? "scale(1.12) rotate(-4deg)"
                        : "scale(1)",
                  }}
                >
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="
                      h-14
                      w-14
                      object-contain

                      sm:h-16
                      sm:w-16

                      md:h-20
                      md:w-20
                    "
                    style={{
                      filter:
                        "drop-shadow(0 6px 12px rgba(0,0,0,0.12))",
                    }}
                  />
                </div>

                {/* NAME */}

                <h3
                  className="
                    text-center
                    text-[11px]
                    font-semibold
                    leading-tight
                    text-stone-700

                    sm:text-xs
                  "
                  style={{
                    fontFamily: "'Georgia', serif",
                  }}
                >
                  {cat.name}
                </h3>

                {/* UNDERLINE */}

                <div
                  className={`
                    mt-2
                    h-0.5
                    rounded-full
                    transition-all
                    duration-300
                    ${cat.accent}
                  `}
                  style={{
                    width:
                      hoveredIndex === index
                        ? "60%"
                        : "0%",
                  }}
                />
              </Link>
            ))}
          </div>
        </div>

        {/* RIGHT BUTTON */}

        <button
          onClick={nextSlide}
          className="
            z-10
            flex
            h-8
            w-8
            flex-shrink-0
            items-center
            justify-center
            rounded-full
            bg-amber-400
            text-white
            shadow-md
            transition-all
            duration-300
            hover:scale-110
            hover:bg-amber-500

            sm:h-10
            sm:w-10
          "
        >
          →
        </button>
      </div>

      {/* DOTS */}

      <div className="mt-6 flex justify-center gap-1.5">
        {categories.map((_, i) => (
          <button
            key={i}
            onClick={() => setStartIndex(i)}
            className={`
              rounded-full
              transition-all
              duration-300

              ${
                i === startIndex
                  ? "h-2 w-5 bg-amber-400"
                  : "h-2 w-2 bg-stone-300 hover:bg-amber-300"
              }
            `}
          />
        ))}
      </div>
    </section>
  );
}