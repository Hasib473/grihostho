
import {
  ShoppingCart,
  MessageCircle,
  PackageCheck,
  Truck,
} from "lucide-react";

const steps = [
  {
    id: "01",
    title: "Choose Products",
    description:
      "Browse categories and select fresh, reliable, and quality products for your needs.",
    icon: ShoppingCart,
  },

  {
    id: "02",
    title: "Place Your Order",
    description:
      "Add products to cart and complete your order quickly with a smooth checkout process.",
    icon: MessageCircle,
  },

  {
    id: "03",
    title: "Order Confirmation",
    description:
      "Our team verifies your order and prepares carefully packed items for delivery.",
    icon: PackageCheck,
  },

  {
    id: "04",
    title: "Fast Delivery",
    description:
      "Receive your products safely at your doorstep with trusted delivery support.",
    icon: Truck,
  },
];

export default function HowToOrder() {
  return (
    <section className="relative overflow-hidden bg-[#fdf8f0] px-4 py-16 sm:px-6 lg:px-8">
      {/* TOP HEADING */}

      <div className="mx-auto max-w-7xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#f58220]">
          Simple Process
        </p>

        <h2 className="mt-3 text-3xl font-black text-[#07162b] sm:text-4xl">
          How To Order
        </h2>

        <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-[#f58220]" />

        <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
          A smooth and reliable ordering experience designed to make shopping
          easier, faster, and safer for every customer.
        </p>
      </div>

      {/* STEPS */}

      <div className="mx-auto mt-14 grid max-w-7xl gap-6 md:grid-cols-2 xl:grid-cols-4">
        {steps.map((step) => {
          const Icon = step.icon;

          return (
            <div
              key={step.id}
              className="group relative overflow-hidden rounded-3xl border border-orange-100 bg-white p-7 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* NUMBER */}

              <div className="absolute right-5 top-5 text-5xl font-black text-orange-50 transition-all duration-500 group-hover:scale-110 group-hover:text-orange-100">
                {step.id}
              </div>

              {/* ICON */}

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#fff4ea] transition-all duration-500 group-hover:bg-[#f58220]">
                <Icon className="h-8 w-8 text-[#f58220] transition-all duration-500 group-hover:text-white" />
              </div>

              {/* CONTENT */}

              <h3 className="mt-6 text-xl font-bold text-[#07162b]">
                {step.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                {step.description}
              </p>

              {/* BOTTOM LINE */}

              <div className="mt-6 h-1 w-0 rounded-full bg-[#f58220] transition-all duration-500 group-hover:w-full" />
            </div>
          );
        })}
      </div>
    </section>
  );
}

