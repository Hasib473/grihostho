import React, { useEffect, useState } from 'react';
import logo from '../../assets/logo/Grihostho_App_Icon_Square.png';
import heroone from '../../assets/hero/hero1.png';
import herotwo from '../../assets/hero/hero2.png';
const slides = [
    {
        cta: 'Shop Now',
        bg: 'from-[#fff7e9] via-[#fffaf2] to-[#fff2dd]',
        image: heroone,
    },
    {
        cta: 'Exchange & Return',
        bg: 'from-[#ecfdf5] via-[#f7fff9] to-[#fff8e8]',
        image: 'https://images.unsplash.com/photo-1610348725531-843dff563e2c?auto=format&fit=crop&w=1400&q=80',
    },
    {
        cta: 'Save more',
        bg: 'from-[#fff1f2] via-[#fff7ed] to-[#fffbea]',
        image: herotwo,
    },
];

const HoneyBottle = () => (
    <div className="relative flex h-full min-h-[260px] items-end justify-center overflow-hidden rounded-lg bg-[radial-gradient(circle_at_25%_20%,#fff8d7,transparent_34%),linear-gradient(135deg,#f9e7b4,#d99b3f_55%,#7c4a18)] px-4 py-5 text-[#3f1f12] sm:min-h-[320px] lg:min-h-[392px]">
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#5f3515]/40 to-transparent" />
        <div className="absolute left-4 top-5 max-w-[62%] sm:left-5 sm:max-w-[58%]">
            <p className="text-xs font-semibold uppercase tracking-wide text-[#6d3b16]">Organic Honey</p>
            <h2 className="mt-1 text-lg font-black leading-tight sm:text-2xl lg:text-3xl">Pure sweetness for healthy food</h2>
            <ul className="mt-3 grid gap-1.5 text-xs font-semibold sm:mt-4 sm:gap-2 sm:text-sm">
                <li>1. Natural taste</li>
                <li>2. USDA inspired quality</li>
                <li>3. Daily family use</li>
                <li>4. Trusted source</li>
            </ul>
        </div>

        <div className="relative ml-auto h-44 w-24 rounded-[32px] bg-[#351706] shadow-2xl sm:h-64 sm:w-32">
            <div className="absolute -top-6 left-1/2 h-8 w-12 -translate-x-1/2 rounded-t-md bg-[#2a160b] sm:w-14" />
            <div className="absolute left-1/2 top-14 flex h-24 w-20 -translate-x-1/2 flex-col items-center justify-center rounded-xl bg-white px-2 text-center shadow sm:top-20 sm:h-28 sm:w-24">
                <img src={logo} alt="" className="h-9 w-9 object-contain" />
                <span className="mt-1 text-xs font-bold text-[#07162b]">ORGANIC</span>
                <span className="text-lg font-black text-[#6d3b16]">HONEY</span>
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
        <section className="w-full bg-white px-3 py-4 sm:px-5 lg:px-8">
            <div className="mx-auto grid max-w-[1760px] gap-4 lg:grid-cols-[2fr_0.98fr]">
                <div className={`group relative min-h-[250px] overflow-hidden rounded-lg bg-gradient-to-br ${slide.bg} shadow-sm ring-1 ring-black/5 sm:min-h-[340px] lg:min-h-[392px]`}>
                    {slide.image && (
                        <img
                            src={slide.image}
                            alt=""
                            className="absolute inset-0 h-full w-full object-cover"
                        />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/35 via-black/10 to-transparent" />
                    <div className="relative z-10 flex h-full min-h-[250px] items-end justify-end p-4 sm:min-h-[340px] sm:p-8 lg:min-h-[392px] lg:p-10">
                        <a
                            href="/"
                            className="inline-flex rounded bg-[#f58220] px-4 py-2 text-sm font-black uppercase text-white shadow-md shadow-orange-500/25 transition duration-300 hover:-translate-y-0.5 hover:bg-[#e77412] hover:shadow-lg hover:shadow-orange-500/35 sm:px-6 sm:py-2.5 sm:text-lg"
                        >
                            {slide.cta}
                        </a>
                    </div>

                    <button
                        type="button"
                        onClick={() => setActiveSlide((current) => (current - 1 + slides.length) % slides.length)}
                        className="absolute left-4 top-1/2 z-20 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-2xl text-slate-700 opacity-0 shadow transition duration-300 hover:bg-white hover:text-[#f58220] group-hover:opacity-100 sm:flex"
                        aria-label="Previous slide"
                    >
                        {'<'}
                    </button>
                    <button
                        type="button"
                        onClick={() => setActiveSlide((current) => (current + 1) % slides.length)}
                        className="absolute right-4 top-1/2 z-20 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-2xl text-slate-700 opacity-0 shadow transition duration-300 hover:bg-white hover:text-[#f58220] group-hover:opacity-100 sm:flex"
                        aria-label="Next slide"
                    >
                        {'>'}
                    </button>

                    <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2">
                        {slides.map((item, index) => (
                            <button
                                key={`${item.cta}-${index}`}
                                type="button"
                                onClick={() => setActiveSlide(index)}
                                className={`h-2.5 rounded-full transition-all ${activeSlide === index ? 'w-7 bg-[#f58220]' : 'w-2.5 bg-white ring-1 ring-slate-300'}`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>

                <HoneyBottle />
            </div>
        </section>
    );
};

export default Hero;
