import { useState, useEffect, useRef } from "react";

const reviews = [
  {
    id: 1,
    name: "Fatema Khanam",
    location: "Dhaka",
    avatar: "FK",
    rating: 5,
    product: "Ajwa Dates",
    text: "Ajwa dates গুলো অসাধারণ! একদম authentic Saudi quality। পরিবারের সবাই খুব পছন্দ করেছে। প্যাকেজিং ছিল খুব সুন্দর আর delivery ও fast ছিল।",
    color: "from-amber-400 to-orange-500",
  },
  {
    id: 2,
    name: "Rakibul Islam",
    location: "Chittagong",
    avatar: "RI",
    rating: 5,
    product: "Sundarban Honey",
    text: "সুন্দরবনের মধু এত pure পাবো আশা করিনি। গন্ধ আর স্বাদ দুটোই অতুলনীয়।",
    color: "from-yellow-400 to-amber-500",
  },
  {
    id: 3,
    name: "Nusrat Jahan",
    location: "Sylhet",
    avatar: "NJ",
    rating: 5,
    product: "Organic Honey",
    text: "Organic honey টা সত্যিই অর্গানিক! সকালে খাই, শরীর ভালো লাগে।",
    color: "from-green-400 to-emerald-500",
  },
  {
    id: 4,
    name: "Md. Hasan Ali",
    location: "Rajshahi",
    avatar: "HA",
    rating: 4,
    product: "Cashew Nuts",
    text: "Cashew nuts fresh আর crunchy। quality worth it।",
    color: "from-stone-400 to-amber-600",
  },
];

const AUTO_INTERVAL = 4000;

function StarRating({ rating }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <svg
          key={s}
          className="w-3.5 h-3.5"
          fill={s <= rating ? "#f59e0b" : "#e5e7eb"}
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function ReviewCard({ review, isCenter }) {
  return (
    <div
      className="relative bg-white rounded-2xl border border-amber-100 p-5 sm:p-6 flex flex-col gap-3 transition-all duration-500"
      style={{
        boxShadow: isCenter
          ? "0 20px 40px rgba(180,83,9,0.12)"
          : "0 4px 14px rgba(0,0,0,0.06)",
        transform: isCenter ? "scale(1)" : "scale(0.97)",
        opacity: isCenter ? 1 : 0.85,
      }}
    >
      <span className="absolute top-2 right-4 text-5xl text-amber-100 select-none">
        "
      </span>

      <span
        className={`self-start text-[10px] px-2 py-1 rounded-full text-white bg-gradient-to-r ${review.color}`}
      >
        {review.product}
      </span>

      <p className="text-sm text-stone-600 leading-relaxed">
        {review.text}
      </p>

      <div className="flex items-center justify-between pt-3 border-t">
        <div className="flex items-center gap-3">
          <div
            className={`w-9 h-9 rounded-xl flex items-center justify-center text-white font-bold bg-gradient-to-br ${review.color}`}
          >
            {review.avatar}
          </div>

          <div>
            <p className="text-sm font-semibold">{review.name}</p>
            <p className="text-xs text-gray-400">{review.location}</p>
          </div>
        </div>

        <StarRating rating={review.rating} />
      </div>
    </div>
  );
}

export default function CustomerFeedback() {
  const [index, setIndex] = useState(0);
  const timer = useRef(null);

  const total = reviews.length;

  const getVisible = () => {
    const items = [];
    const isMobile = window.innerWidth < 768;
    const count = isMobile ? 1 : 3;

    for (let i = 0; i < count; i++) {
      items.push(reviews[(index + i) % total]);
    }
    return items;
  };

  const [visible, setVisible] = useState(getVisible());

  useEffect(() => {
    const update = () => setVisible(getVisible());
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [index]);

  useEffect(() => {
    timer.current = setInterval(() => {
      setIndex((p) => (p + 1) % total);
    }, AUTO_INTERVAL);

    return () => clearInterval(timer.current);
  }, []);

  return (
    <section className="w-full py-12 px-4 bg-gradient-to-b from-amber-50 to-white">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-8">
          <p className="text-xs tracking-widest text-amber-500 uppercase">
            Testimonials
          </p>
          <h2 className="text-2xl sm:text-4xl font-bold">
            Customer Feedback
          </h2>
        </div>

        {/* SLIDER */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 transition-all">

          {visible.map((r, i) => (
            <ReviewCard
              key={r.id + index}
              review={r}
              isCenter={i === 1 || visible.length === 1}
            />
          ))}
        </div>

        {/* DOTS */}
        <div className="flex justify-center gap-2 mt-6">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`transition-all rounded-full ${
                i === index
                  ? "w-6 h-2 bg-amber-500"
                  : "w-2 h-2 bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}