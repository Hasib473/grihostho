import { Link } from "react-router";
import {
  Flame,
  ShoppingCart,
  ArrowRight,
} from "lucide-react";

import {
  navItems,
  slugify,
} from "../../data/navigation";

// ─────────────────────────────────────────────
// FLASH SALE DATA FROM NAVIGATION
// ─────────────────────────────────────────────

const flashDeals = navItems
  .filter((item) => item.products?.length)
  .flatMap((category) =>
    category.products.slice(0, 2).map((product, index) => ({
      ...product,
      category: category.label,
      categorySlug: slugify(category.label),
      productSlug: slugify(product.title),

      // DYNAMIC PRICE
      price: 450 + index * 120,

      // DYNAMIC OLD PRICE
      oldPrice: 650 + index * 150,

      // DYNAMIC DISCOUNT
      discount:
        index % 2 === 0 ? "20% OFF" : "15% OFF",
    }))
  )
  .slice(0, 8);

// ─────────────────────────────────────────────
// COMPONENT
// ─────────────────────────────────────────────

export default function FlashSaleSection() {
  return (
    <section className="bg-[#fffaf4] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* HEADER */}

        <div className="flex flex-col gap-6 rounded-[32px] bg-gradient-to-r from-[#071] to-[#102542] px-6 py-8 text-white shadow-2xl sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-12">
          
          {/* LEFT */}

          <div>
            <div className="flex items-center gap-2">
              <Flame className="h-5 w-5 text-orange-400" />

              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-300">
                Flash Sale
              </p>
            </div>

            <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl">
              Daily Deals & Special Offers
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
              Discover carefully selected premium
              products at exclusive discounted prices
              for a limited time only.
            </p>
          </div>

          {/* BUTTON */}

          <Link
            to="/search"
            className="
              inline-flex
              items-center
              justify-center
              gap-2
              rounded-2xl
              bg-[#f58220]
              px-6
              py-4
              text-sm
              font-semibold
              text-white
              transition-all
              duration-300
              hover:scale-105
              hover:bg-[#ff9b43]
            "
          >
            Explore Deals

            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* PRODUCTS */}

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {flashDeals.map((deal, index) => (
            <div
              key={`${deal.title}-${index}`}
              className="
                group
                overflow-hidden
                rounded-[30px]
                border
                border-orange-100
                bg-white
                shadow-sm
                transition-all
                duration-500
                hover:-translate-y-2
                hover:shadow-2xl
              "
            >
              {/* IMAGE AREA */}

              <div className="relative overflow-hidden bg-[#fff7ef]">
                
                {/* DISCOUNT BADGE */}

                <div className="absolute left-4 top-4 z-20 rounded-full bg-[#f58220] px-4 py-1.5 text-xs font-bold text-white shadow-lg">
                  {deal.discount}
                </div>

                {/* CATEGORY */}

                <div className="absolute right-4 top-4 z-20 rounded-full bg-[#07162b]/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white backdrop-blur-sm">
                  {deal.category}
                </div>

                {/* IMAGE */}

                <div className="flex h-64 items-center justify-center overflow-hidden p-6">
                  <img
                    src={deal.image}
                    alt={deal.title}
                    className="
                      h-full
                      w-full
                      object-contain
                      transition-all
                      duration-700
                      group-hover:scale-110
                      group-hover:rotate-2
                    "
                  />
                </div>
              </div>

              {/* CONTENT */}

              <div className="p-5">
                
                {/* TITLE */}

                <h3 className="line-clamp-1 text-lg font-bold text-[#07162b]">
                  {deal.title}
                </h3>

                {/* CATEGORY TEXT */}

                <p className="mt-1 text-sm text-slate-500">
                  Premium {deal.category} Collection
                </p>

                {/* PRICE */}

                <div className="mt-4 flex items-center gap-3">
                  <span className="text-2xl font-black text-[#f58220]">
                    ৳ {deal.price}
                  </span>

                  <span className="text-sm font-medium text-slate-400 line-through">
                    ৳ {deal.oldPrice}
                  </span>
                </div>

                {/* BUTTONS */}

                <div className="mt-6 flex gap-3">
                  
                  {/* DETAILS */}

                  <Link
                    to={`/product/${deal.categorySlug}/${deal.productSlug}`}
                    className="
                      flex-1
                      rounded-2xl
                      border
                      border-[#07162b]
                      px-4
                      py-3
                      text-center
                      text-sm
                      font-semibold
                      text-[#07162b]
                      transition-all
                      duration-300
                      hover:bg-[#07162b]
                      hover:text-white
                    "
                  >
                    View Details
                  </Link>

                  {/* CART */}

                  <button
                    className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-2xl
                      bg-[#f58220]
                      text-white
                      transition-all
                      duration-300
                      hover:scale-110
                      hover:bg-[#ff9b43]
                    "
                  >
                    <ShoppingCart className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}