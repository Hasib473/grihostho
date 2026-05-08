import React, { useMemo, useState } from 'react';
import { Link, useParams } from 'react-router';
import heroImage from '../assets/hero/hero2.png';
import logo from '../assets/logo/Grihostho_App_Icon_Square.png';
import { useCart } from '../Context/CartContext';
import { navItems, slugify } from '../data/navigation';

const allCategories = navItems.map((item) => ({
    ...item,
    slug: slugify(item.label),
}));

const getBasePrice = (productName) => {
    const total = productName.split('').reduce((sum, letter) => sum + letter.charCodeAt(0), 0);
    return 320 + (total % 9) * 85;
};

const buildPackages = (productName, categoryName) => {
    const basePrice = getBasePrice(productName);
    return [
        { label: `500 gm ${productName}`, price: basePrice, weight: '500 gm' },
        { label: `1 Kg ${productName}`, price: basePrice * 2 - 40, weight: '1 Kg' },
        { label: `2 Kg ${productName} Family Pack`, price: basePrice * 4 - 120, weight: '2 Kg' },
        { label: `5 Kg ${categoryName} Saver Pack`, price: basePrice * 9, weight: '5 Kg' },
    ];
};

const ProductDetailsPage = () => {
    const { addToCart } = useCart();
    const { categorySlug, productSlug } = useParams();
    const category = allCategories.find((item) => item.slug === categorySlug);
    const product =
        category?.products?.find((item) => slugify(item) === productSlug) ||
        (category && slugify(category.label) === productSlug ? category.label : null);
    const packages = useMemo(() => (product && category ? buildPackages(product, category.label) : []), [category, product]);
    const [selectedPackage, setSelectedPackage] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [added, setAdded] = useState(false);
    const activePackage = selectedPackage || packages[0];

    if (!category || !product || !activePackage) {
        return (
            <main className="mx-auto min-h-[420px] max-w-[1760px] px-4 py-12 sm:px-6 lg:px-10">
                <p className="text-sm font-semibold uppercase tracking-wide text-[#f58220]">Not Found</p>
                <h1 className="mt-2 text-3xl font-bold text-[#07162b]">Product details not found</h1>
                <Link to="/" className="mt-6 inline-flex rounded bg-[#f58220] px-5 py-2.5 font-semibold text-white transition hover:bg-[#e77412]">
                    Back to Home
                </Link>
            </main>
        );
    }

    const totalPrice = activePackage.price * quantity;
    const updateQuantity = (nextValue) => {
        setQuantity(Math.max(1, nextValue));
        setAdded(false);
    };

    return (
        <main className="mx-auto max-w-[1760px] px-3 py-5 sm:px-6 sm:py-6 lg:px-10">
            <div className="grid gap-6 lg:grid-cols-[0.98fr_1fr]">
                <section className="overflow-hidden rounded-md border border-slate-300 bg-white">
                    <div className="relative min-h-[280px] overflow-hidden bg-[#edf3df] sm:min-h-[420px] lg:min-h-[460px]">
                        <img src={heroImage} alt="" className="absolute inset-0 h-full w-full object-cover opacity-45" />
                        <div className="absolute inset-0 bg-gradient-to-br from-white/75 via-white/50 to-transparent" />
                        <div className="relative flex min-h-[280px] flex-col items-center justify-center px-4 text-center sm:min-h-[420px] sm:px-6 lg:min-h-[460px]">
                            <h1 className="max-w-full break-words text-3xl font-black leading-tight text-[#4b6b35] sm:text-5xl lg:text-6xl">{product}</h1>
                            <div className="mt-6 flex h-28 w-28 items-center justify-center rounded-full bg-white/80 shadow-xl ring-1 ring-white sm:mt-8 sm:h-40 sm:w-40">
                                <img src={logo} alt="" className="h-16 w-16 object-contain sm:h-24 sm:w-24" />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="rounded-md border border-slate-300 bg-white p-4 shadow-sm sm:p-5">
                    <div className="flex flex-wrap items-center gap-2 text-sm">
                        <Link to="/" className="text-slate-500 transition hover:text-[#f58220]">Home</Link>
                        <span className="text-slate-300">/</span>
                        <Link to={`/category/${category.slug}`} className="text-slate-500 transition hover:text-[#f58220]">{category.label}</Link>
                        <span className="text-slate-300">/</span>
                        <Link to={`/category/${category.slug}/${slugify(product)}`} className="text-slate-500 transition hover:text-[#f58220]">{product}</Link>
                    </div>

                    <div className="mt-4 flex flex-wrap items-center gap-2">
                        <h2 className="break-words text-xl font-bold text-[#07162b] sm:text-2xl">{product}</h2>
                        <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-bold text-emerald-700">In Stock</span>
                    </div>

                    <p className="mt-3 text-2xl font-bold text-[#07162b]">
                        Tk {activePackage.price}
                        <span className="text-sm font-medium text-slate-500"> / {activePackage.weight}</span>
                    </p>

                    <div className="mt-5">
                        <p className="text-sm font-semibold text-[#07162b]">Select Package:</p>
                        <div className="mt-3 grid gap-2 sm:flex sm:flex-wrap">
                            {packages.map((option) => (
                                <button
                                    key={option.label}
                                    type="button"
                                    onClick={() => {
                                        setSelectedPackage(option);
                                        setAdded(false);
                                    }}
                                    className={`w-full rounded-md border px-3 py-2 text-left text-sm font-semibold transition sm:w-auto ${
                                        activePackage.label === option.label
                                            ? 'border-[#3f7166] bg-[#3f7166] text-white shadow-sm'
                                            : 'border-slate-300 bg-white text-[#07162b] hover:border-[#f58220] hover:text-[#f58220]'
                                    }`}
                                >
                                    {option.label} (Tk {option.price})
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="mt-6">
                        <p className="text-sm font-semibold text-[#07162b]">Order Quantity</p>
                        <div className="mt-2 flex flex-wrap items-center gap-3">
                            <div className="flex overflow-hidden rounded-md border border-slate-300">
                                <button type="button" onClick={() => updateQuantity(quantity - 1)} className="flex h-10 w-10 items-center justify-center bg-[#3f7166] text-xl font-bold text-white transition hover:bg-[#315a51]" aria-label="Decrease quantity">
                                    -
                                </button>
                                <span className="flex h-10 w-12 items-center justify-center bg-white text-sm font-bold text-[#07162b]">{quantity}</span>
                                <button type="button" onClick={() => updateQuantity(quantity + 1)} className="flex h-10 w-10 items-center justify-center bg-[#3f7166] text-xl font-bold text-white transition hover:bg-[#315a51]" aria-label="Increase quantity">
                                    +
                                </button>
                            </div>
                            <p className="text-sm text-slate-600">
                                Tk {activePackage.price} x {quantity} = <span className="font-bold text-[#07162b]">Tk {totalPrice}</span>
                            </p>
                        </div>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-4 text-sm">
                        <p><span className="font-semibold">Packaging :</span> Box</p>
                        <p><span className="font-semibold">Weight :</span> {activePackage.weight}</p>
                    </div>

                    <button
                        type="button"
                        onClick={() => {
                            addToCart({
                                id: `${category.slug}-${slugify(product)}-${slugify(activePackage.label)}`,
                                product,
                                category: category.label,
                                categorySlug: category.slug,
                                productSlug: slugify(product),
                                packageLabel: activePackage.label,
                                weight: activePackage.weight,
                                price: activePackage.price,
                                quantity,
                            });
                            setAdded(true);
                        }}
                        className="mt-6 inline-flex w-full items-center justify-center rounded-md bg-[#f58220] px-6 py-3 text-base font-bold text-white shadow-md shadow-orange-500/20 transition hover:-translate-y-0.5 hover:bg-[#e77412] hover:shadow-lg sm:w-auto"
                    >
                        Add to Cart
                    </button>

                    {added && (
                        <p className="mt-3 rounded-md bg-emerald-50 px-3 py-2 text-sm font-semibold text-emerald-700">
                            Added {quantity} item(s) of {product} to cart.
                        </p>
                    )}
                </section>
            </div>

            <section className="mt-8 rounded-md border border-slate-300 bg-white p-4 text-sm leading-7 text-slate-700 sm:p-5">
                <h3 className="flex items-center gap-2 text-base font-bold text-[#07162b]">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">!</span>
                    Important Notes
                </h3>

                <div className="mt-4 space-y-4">
                    <p>Delivery timing depends on product availability, weather, and courier schedule. We always try to deliver fresh and carefully packed items as quickly as possible.</p>
                    <p>Please check the package and quantity before confirming your order. If you receive any damaged or wrong item, contact support with photos or videos.</p>
                    <p>For pre-order or seasonal items, delivery may take extra time. The final delivery date can vary based on collection, sorting, and packaging.</p>
                    <p>Payment can be completed using cash on delivery, mobile banking, or online payment where available. Delivery charge may be added during checkout.</p>
                    <p>If courier service is unavailable in your location, our support team will contact you and suggest the best possible delivery option.</p>
                </div>
            </section>
        </main>
    );
};

export default ProductDetailsPage;
