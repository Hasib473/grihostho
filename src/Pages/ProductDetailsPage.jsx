import React, { useMemo, useState } from 'react';
import { Link, useParams } from 'react-router';
import { useCart } from '../Context/CartContext';
import { navItems, slugify } from '../data/navigation';

const allCategories = navItems.map((item) => ({
    ...item,
    slug: slugify(item.label),
}));

const getBasePrice = (productName) => {
    const total = productName
        .split('')
        .reduce((sum, letter) => sum + letter.charCodeAt(0), 0);

    return 320 + (total % 9) * 85;
};

const buildPackages = (productName, categoryName) => {
    const basePrice = getBasePrice(productName);

    return [
        {
            label: `500 gm ${productName}`,
            price: basePrice,
            weight: '500 gm',
        },
        {
            label: `1 Kg ${productName}`,
            price: basePrice * 2 - 40,
            weight: '1 Kg',
        },
        {
            label: `2 Kg ${productName} Family Pack`,
            price: basePrice * 4 - 120,
            weight: '2 Kg',
        },
        {
            label: `5 Kg ${categoryName} Saver Pack`,
            price: basePrice * 9,
            weight: '5 Kg',
        },
    ];
};

const ProductDetailsPage = () => {
    const { addToCart } = useCart();
    const { categorySlug, productSlug } = useParams();

    const category = allCategories.find(
        (item) => item.slug === categorySlug
    );

    const product =
        category?.products?.find(
            (item) => slugify(item.title) === productSlug
        ) || null;

    const packages = useMemo(
        () =>
            product && category
                ? buildPackages(product.title, category.label)
                : [],
        [category, product]
    );

    const [selectedPackage, setSelectedPackage] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [added, setAdded] = useState(false);

    const activePackage = selectedPackage || packages[0];

    if (!category || !product || !activePackage) {
        return (
            <main className="mx-auto min-h-[420px] max-w-[1760px] px-4 py-12">
                <h1 className="text-2xl font-bold">Product not found</h1>
                <Link to="/" className="text-orange-500 mt-4 inline-block">
                    Back Home
                </Link>
            </main>
        );
    }

    const totalPrice = activePackage.price * quantity;

    return (
        <main className="mx-auto max-w-[1760px] px-3 py-5 lg:px-10">

            <div className="grid gap-6 lg:grid-cols-[0.98fr_1fr]">

                {/* HERO IMAGE */}
                <section className="overflow-hidden rounded-xl border bg-white">
                    <div className="relative w-full h-[320px] sm:h-[420px] lg:h-[520px]">

                        <img
                            src={product.image}
                            alt={product.title}
                            className="w-full h-full object-contain"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" />

                        <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6">
                            <h1 className="text-white text-2xl sm:text-4xl font-bold drop-shadow-lg">
                                {product.title}
                            </h1>
                        </div>

                    </div>
                </section>

                {/* DETAILS */}
                <section className="rounded-xl border bg-white p-4 sm:p-6">

                    {/* breadcrumb */}
                    <div className="text-sm text-gray-500 flex flex-wrap gap-2">
                        <Link to="/" className="hover:text-orange-500">Home</Link>
                        <span>/</span>
                        <Link to={`/category/${category.slug}`} className="hover:text-orange-500">
                            {category.label}
                        </Link>
                        <span>/</span>
                        <span>{product.title}</span>
                    </div>

                    <h2 className="mt-4 text-xl sm:text-2xl font-bold text-gray-800">
                        {product.title}
                    </h2>

                    <p className="mt-2 text-xl font-bold text-gray-900">
                        Tk {activePackage.price}
                        <span className="text-sm text-gray-500">
                            {' '} / {activePackage.weight}
                        </span>
                    </p>

                    {/* PACKAGE */}
                    <div className="mt-5">
                        <p className="font-semibold">Select Package</p>

                        <div className="grid sm:flex gap-2 mt-3 flex-wrap">
                            {packages.map((option) => (
                                <button
                                    key={option.label}
                                    onClick={() => {
                                        setSelectedPackage(option);
                                        setAdded(false);
                                    }}
                                    className={`px-3 py-2 rounded border text-sm font-medium ${
                                        activePackage.label === option.label
                                            ? "bg-green-700 text-white"
                                            : "bg-white hover:border-orange-500"
                                    }`}
                                >
                                    {option.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* QUANTITY */}
                    <div className="mt-5 flex items-center gap-3 flex-wrap">

                        <button
                            onClick={() => setQuantity(Math.max(1, quantity - 1))}
                            className="px-3 py-1 bg-gray-200 rounded"
                        >
                            -
                        </button>

                        <span>{quantity}</span>

                        <button
                            onClick={() => setQuantity(quantity + 1)}
                            className="px-3 py-1 bg-gray-200 rounded"
                        >
                            +
                        </button>

                        <span className="ml-4 font-semibold">
                            Total: Tk {totalPrice}
                        </span>
                    </div>

                    {/* ADD TO CART */}
                    <button
                        onClick={() => {
                            addToCart({
                                id: `${category.slug}-${slugify(product.title)}`,
                                product: product.title,
                                image: product.image,
                                category: category.label,
                                price: activePackage.price,
                                quantity,
                            });
                            setAdded(true);
                        }}
                        className="mt-6 w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded font-bold"
                    >
                        Add to Cart
                    </button>

                    {added && (
                        <p className="mt-3 text-green-600 font-medium">
                            Added successfully!
                        </p>
                    )}

                </section>
            </div>

            {/* 🔥 IMPORTANT NOTES (RESTORED) */}
            <section className="mt-8 rounded-xl border bg-white p-4 sm:p-6 text-sm leading-7 text-gray-700">

                <h3 className="flex items-center gap-2 text-base font-bold text-[#07162b]">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                        !
                    </span>
                    Important Notes
                </h3>

                <div className="mt-4 space-y-4">

                    <p>
                        Delivery timing depends on product availability, weather,
                        and courier schedule. We always try to deliver fresh and
                        carefully packed items as quickly as possible.
                    </p>

                    <p>
                        Please check the package and quantity before confirming
                        your order. If you receive any damaged or wrong item,
                        contact support with photos or videos.
                    </p>

                    <p>
                        For pre-order or seasonal items, delivery may take extra
                        time depending on collection and packaging process.
                    </p>

                    <p>
                        Payment can be completed using cash on delivery or mobile
                        banking where available. Delivery charge may apply.
                    </p>

                    <p>
                        If courier service is unavailable in your area, support
                        team will contact you with alternatives.
                    </p>

                </div>

            </section>

        </main>
    );
};

export default ProductDetailsPage;