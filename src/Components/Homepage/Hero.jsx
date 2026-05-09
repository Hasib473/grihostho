import React, { useEffect, useState } from 'react';
import logo from '../../assets/logo/Grihostho_App_Icon_Square.png';
import heroone from '../../assets/hero/hero1.png';
import herotwo from '../../assets/hero/hero2.png';
import herothree from '../../assets/Honey/sundarban honey.png';

const slides = [
    {
        cta: 'Shop Now',
        bg: 'from-[#fff7e9] via-[#fffaf2] to-[#fff2dd]',
        image: heroone,
    },
    {
        cta: 'Exchange & Return',
        bg: 'from-[#ecfdf5] via-[#f7fff9] to-[#fff8e8]',
        image: herothree,
    },
    {
        cta: 'Save More',
        bg: 'from-[#fff1f2] via-[#fff7ed] to-[#fffbea]',
        image: herotwo,
    },
];

const HoneyBottle = () => (
    <div className="relative flex h-full min-h-[260px] items-end justify-center overflow-hidden rounded-2xl bg-[radial-gradient(circle_at_25%_20%,#fff8d7,transparent_34%),linear-gradient(135deg,#f9e7b4,#d99b3f_55%,#7c4a18)] px-4 py-5 text-[#3f1f12] shadow-[0_10px_30px_rgba(0,0,0,0.08)] ring-1 ring-black/5 sm:min-h-[320px] lg:min-h-[392px]">

        {/* Background Glow */}
        <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-yellow-200/30 blur-3xl" />
        <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-orange-300/20 blur-3xl" />

        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#5f3515]/40 to-transparent" />

        {/* TEXT */}
        <div className="absolute left-4 top-5 z-10 max-w-[62%] sm:left-5 sm:max-w-[58%]">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#6d3b16]">
                Organic Honey
            </p>

            <h2 className="mt-2 text-lg font-black leading-tight text-[#2f160b] sm:text-2xl lg:text-3xl">
                Pure sweetness
                <span className="block text-[#fff8e7]">
                    for healthy food
                </span>
            </h2>

            <ul className="mt-4 grid gap-2 text-xs font-semibold text-[#fff7ea] sm:text-sm">
                <li className="flex items-center gap-2">
                    ✅ Natural taste
                </li>

                <li className="flex items-center gap-2">
                    ✅ Premium quality
                </li>

                <li className="flex items-center gap-2">
                    ✅ Daily family use
                </li>

                <li className="flex items-center gap-2">
                    ✅ Trusted source
                </li>
            </ul>
        </div>

        {/* BOTTLE */}
        <div className="relative ml-auto h-44 w-24 rounded-[32px] bg-[#351706] shadow-2xl sm:h-64 sm:w-32">

            {/* Cap */}
            <div className="absolute -top-6 left-1/2 h-8 w-12 -translate-x-1/2 rounded-t-md bg-[#2a160b] sm:w-14" />

            {/* Glow */}
            <div className="absolute inset-2 rounded-[28px] bg-gradient-to-b from-yellow-500/10 to-transparent" />

            {/* Label */}
            <div className="absolute left-1/2 top-14 flex h-24 w-20 -translate-x-1/2 flex-col items-center justify-center rounded-2xl bg-white px-2 text-center shadow-lg sm:top-20 sm:h-28 sm:w-24">

                <img
                    src={logo}
                    alt=""
                    className="h-9 w-9 object-contain"
                />

                <span className="mt-1 text-[10px] font-bold tracking-wide text-[#07162b]">
                    ORGANIC
                </span>

                <span className="text-lg font-black text-[#6d3b16]">
                    HONEY
                </span>
            </div>
        </div>
    </div>
);

const Hero = () => {
    const [activeSlide, setActiveSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setActiveSlide((current) => (current + 1) % slides.length);
        }, 4000);

        return () => clearInterval(timer);
    }, []);

    const slide = slides[activeSlide];

    return (
        <section className="w-full bg-[#fafafa] px-3 py-4 sm:px-5 lg:px-8">

            <div className="mx-auto grid max-w-[1760px] gap-4 lg:grid-cols-[2fr_0.98fr]">

                {/* SLIDER */}
                <div
                    className={`group relative min-h-[250px] overflow-hidden rounded-2xl bg-gradient-to-br ${slide.bg} shadow-[0_10px_30px_rgba(0,0,0,0.08)] ring-1 ring-black/5 sm:min-h-[340px] lg:min-h-[392px]`}
                >

                    {/* IMAGE */}
                    {slide.image && (
                        <img
                            src={slide.image}
                            alt=""
                            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    )}

                    {/* OVERLAY */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/20 to-black/10" />

                    {/* CONTENT */}
                    <div className="relative z-10 flex h-full min-h-[250px] items-end justify-end p-4 sm:min-h-[340px] sm:p-8 lg:min-h-[392px] lg:p-10">

                        <a
                            href="/"
                            className="inline-flex items-center gap-2 rounded-full bg-[#f58220] px-5 py-2 text-sm font-extrabold uppercase tracking-wide text-white shadow-lg shadow-orange-500/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#e77412] hover:shadow-orange-500/40 sm:px-6 sm:py-2.5 sm:text-base"
                        >
                            {slide.cta}
                            <span>→</span>
                        </a>
                    </div>

                    {/* PREVIOUS BUTTON */}
                    <button
                        type="button"
                        onClick={() =>
                            setActiveSlide(
                                (current) =>
                                    (current - 1 + slides.length) %
                                    slides.length
                            )
                        }
                        className="absolute left-4 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-xl text-white opacity-0 backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-[#f58220] group-hover:opacity-100 sm:flex"
                        aria-label="Previous slide"
                    >
                        ←
                    </button>

                    {/* NEXT BUTTON */}
                    <button
                        type="button"
                        onClick={() =>
                            setActiveSlide(
                                (current) =>
                                    (current + 1) % slides.length
                            )
                        }
                        className="absolute right-4 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-xl text-white opacity-0 backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-[#f58220] group-hover:opacity-100 sm:flex"
                        aria-label="Next slide"
                    >
                        →
                    </button>

                    {/* INDICATORS */}
                    <div className="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 gap-2">

                        {slides.map((item, index) => (
                            <button
                                key={`${item.cta}-${index}`}
                                type="button"
                                onClick={() => setActiveSlide(index)}
                                className={`rounded-full transition-all duration-300 ${
                                    activeSlide === index
                                        ? 'h-2.5 w-8 bg-[#f58220]'
                                        : 'h-2.5 w-2.5 bg-white/80'
                                }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>

                {/* RIGHT SIDE */}
                <HoneyBottle />
            </div>
        </section>
    );
};

export default Hero;