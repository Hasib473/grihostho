import React from 'react';
import { Link, useParams } from 'react-router';
import { navItems, slugify } from '../data/navigation';

const allCategories = navItems.map((item) => ({
    ...item,
    slug: slugify(item.label),
}));

const CategoryPage = () => {
    const { categorySlug, productSlug } = useParams();

    const category = allCategories.find(
        (item) => item.slug === categorySlug
    );

    const selectedProduct = category?.products?.find(
        (item) => slugify(item.title) === productSlug
    );

    const visibleItems = selectedProduct
        ? [selectedProduct]
        : category?.products || [];

    if (!category) {
        return (
            <main className="mx-auto min-h-[420px] max-w-[1760px] px-4 py-12 sm:px-6 lg:px-10">
                <p className="text-sm font-semibold uppercase tracking-wide text-[#f58220]">
                    Not Found
                </p>

                <h1 className="mt-2 text-3xl font-bold text-[#07162b]">
                    Category not found
                </h1>

                <Link
                    to="/"
                    className="mt-6 inline-flex rounded bg-[#f58220] px-5 py-2.5 font-semibold text-white transition hover:bg-[#e77412]"
                >
                    Back to Home
                </Link>
            </main>
        );
    }

    if (productSlug && !selectedProduct) {
        return (
            <main className="mx-auto min-h-[420px] max-w-[1760px] px-4 py-12 sm:px-6 lg:px-10">
                <p className="text-sm font-semibold uppercase tracking-wide text-[#f58220]">
                    Not Found
                </p>

                <h1 className="mt-2 text-3xl font-bold text-[#07162b]">
                    Product not found
                </h1>

                <Link
                    to={`/category/${category.slug}`}
                    className="mt-6 inline-flex rounded bg-[#f58220] px-5 py-2.5 font-semibold text-white transition hover:bg-[#e77412]"
                >
                    Back to {category.label}
                </Link>
            </main>
        );
    }

    return (
        <main className="mx-auto min-h-[420px] max-w-[1760px] px-3 py-6 sm:px-6 sm:py-10 lg:px-10">
            <div className="rounded-lg bg-[#fff8f1] px-4 py-6 sm:px-8 sm:py-8">
                <div className="flex flex-wrap items-center gap-2 text-sm font-medium text-slate-500">
                    <Link to="/" className="transition hover:text-[#f58220]">
                        Home
                    </Link>

                    <span>/</span>

                    <Link
                        to={`/category/${category.slug}`}
                        className="transition hover:text-[#f58220]"
                    >
                        {category.label}
                    </Link>

                    {selectedProduct && (
                        <>
                            <span>/</span>
                            <span className="text-[#f58220]">
                                {selectedProduct.title}
                            </span>
                        </>
                    )}
                </div>

                <p className="mt-6 text-sm font-semibold uppercase tracking-wide text-[#f58220]">
                    {selectedProduct ? 'Product Collection' : 'Category'}
                </p>

                <h1 className="mt-2 break-words text-2xl font-black text-[#07162b] sm:text-4xl">
                    {selectedProduct?.title || category.label}
                </h1>

                <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
                    Explore safe, reliable, and carefully selected{' '}
                    {selectedProduct?.title || category.label} items from Grihostho.
                </p>
            </div>

            <section className="mt-8">
                <h2 className="text-xl font-bold text-[#07162b]">
                    {selectedProduct
                        ? 'Available Item'
                        : `Shop ${category.label}`}
                </h2>

                <div className="mt-5 grid gap-4 min-[520px]:grid-cols-2 lg:grid-cols-4">
                    {visibleItems.map((item) => (
                        <Link
                            key={item.title}
                            to={`/product/${category.slug}/${slugify(item.title)}`}
                            className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-orange-200 hover:shadow-md"
                        >
                            <div className="flex h-40 items-center justify-center overflow-hidden rounded-md bg-[#fff4ea]">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="h-full w-full object-cover"
                                />
                            </div>

                            <h3 className="mt-4 text-base font-semibold text-[#07162b]">
                                {item.title}
                            </h3>

                            <p className="mt-1 text-sm text-slate-500">
                                View details
                            </p>
                        </Link>
                    ))}
                </div>
            </section>
        </main>
    );
};

export default CategoryPage;