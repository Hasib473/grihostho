import React, { useMemo, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import logo from '../../assets/logo/Grihostho_App_Icon_Square.png';
import { useCart } from '../../Context/CartContext';
import { navItems, searchItems, slugify } from '../../data/navigation';

const SearchIcon = () => (
    <svg className="h-5 w-5 sm:h-6 sm:w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-3.5-3.5" />
    </svg>
);

const TrackOrderIcon = () => (
    <svg className="h-6 w-6 sm:h-7 sm:w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M4 20h16" />
        <path d="M5 17V8.5l7-4 7 4V17" />
        <path d="M8 17v-5h8v5" />
        <path d="M12 13V4" />
        <path d="M9.5 6.5 12 4l2.5 2.5" />
        <circle cx="12" cy="5.5" r="3.2" fill="white" />
        <path d="M12 3.3a2.2 2.2 0 0 1 2.2 2.2c0 1.6-2.2 3.6-2.2 3.6S9.8 7.1 9.8 5.5A2.2 2.2 0 0 1 12 3.3Z" />
        <circle cx="12" cy="5.5" r=".55" />
    </svg>
);

const UserIcon = () => (
    <svg className="h-6 w-6 sm:h-7 sm:w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="7" r="3.5" />
        <path d="M4.8 20a7.2 7.2 0 0 1 14.4 0" />
    </svg>
);

const HeartIcon = () => (
    <svg className="h-6 w-6 sm:h-7 sm:w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M20.8 5.7a5.2 5.2 0 0 0-7.4 0L12 7.1l-1.4-1.4a5.2 5.2 0 1 0-7.4 7.4L12 21l8.8-7.9a5.2 5.2 0 0 0 0-7.4Z" />
    </svg>
);

const CartIcon = () => (
    <svg className="h-6 w-6 sm:h-7 sm:w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 4h2l2.4 12.2a2 2 0 0 0 2 1.6h7.8a2 2 0 0 0 2-1.6L21 8H7" />
        <circle cx="10" cy="21" r="1" />
        <circle cx="18" cy="21" r="1" />
    </svg>
);

const MenuIcon = () => (
    <svg className="h-6 w-6 sm:h-7 sm:w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" aria-hidden="true">
        <path d="M4 6h16" />
        <path d="M4 12h11" />
        <path d="M4 18h7" />
    </svg>
);

const ChevronDown = () => (
    <svg className="mt-0.5 h-3.5 w-3.5" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="m5 7.5 5 5 5-5" />
    </svg>
);

const topActions = [
    { label: 'Track Order', icon: TrackOrderIcon },
    { label: 'Sign In', icon: UserIcon },
    { label: 'Wishlist', icon: HeartIcon },
    { label: 'Cart', icon: CartIcon, count: 0 },
    { label: 'More', icon: MenuIcon },
];

const Navbar = () => {
    const navigate = useNavigate();
    const { cartCount } = useCart();

    const [searchTerm, setSearchTerm] = useState('');
    const [isSearchFocused, setIsSearchFocused] = useState(false);

    const suggestions = useMemo(
        () => searchItems(searchTerm).slice(0, 6),
        [searchTerm]
    );

    const hasSearch = searchTerm.trim().length > 0;

    const handleSearch = (event) => {
        event.preventDefault();

        const query = searchTerm.trim();

        if (query) {
            navigate(`/search?q=${encodeURIComponent(query)}`);
            setIsSearchFocused(false);
        }
    };

    return (
        <>
            <header className="w-full bg-white text-[#07162b]">
                <div className="mx-auto flex max-w-[1760px] flex-wrap items-center gap-x-3 gap-y-4 px-3 py-3 sm:gap-x-4 sm:px-5 sm:py-4 lg:flex-nowrap lg:justify-between lg:px-8 xl:px-12">
                    <Link
                        to="/"
                        className="order-1 flex shrink-0 items-center"
                        aria-label="Grihostho home"
                    >
                        <img
                            src={logo}
                            alt="Grihostho"
                            className="h-12 w-auto object-contain sm:h-14 lg:h-16"
                        />
                    </Link>

                    <form
                        onSubmit={handleSearch}
                        className="relative order-3 flex h-11 w-full min-w-0 overflow-visible rounded-lg bg-[#f4f4f4] sm:h-12 lg:order-2 lg:max-w-[540px] xl:max-w-[640px]"
                    >
                        <label
                            htmlFor="navbar-search"
                            className="sr-only"
                        >
                            Search products
                        </label>

                        <input
                            id="navbar-search"
                            type="search"
                            placeholder="Search in..."
                            value={searchTerm}
                            onChange={(event) =>
                                setSearchTerm(event.target.value)
                            }
                            onFocus={() => setIsSearchFocused(true)}
                            onBlur={() =>
                                setTimeout(
                                    () => setIsSearchFocused(false),
                                    150
                                )
                            }
                            className="min-w-0 flex-1 rounded-l-lg bg-transparent px-4 text-sm text-[#07162b] outline-none placeholder:text-[#07162b] sm:text-base lg:px-5"
                        />

                        <button
                            type="submit"
                            className="flex w-12 items-center justify-center text-[#07162b] transition hover:text-[#f58220] sm:w-14"
                            aria-label="Search"
                        >
                            <SearchIcon />
                        </button>

                        {isSearchFocused && hasSearch && (
                            <div className="absolute left-0 right-0 top-full z-[70] mt-2 overflow-hidden rounded-lg bg-white text-[#07162b] shadow-xl ring-1 ring-black/5">
                                {suggestions.length > 0 ? (
                                    <ul className="max-h-80 overflow-y-auto py-2">
                                        {suggestions.map((item) => (
                                            <li
                                                key={`${item.type}-${item.path}`}
                                            >
                                                <Link
                                                    to={item.path}
                                                    onClick={() => {
                                                        setSearchTerm('');
                                                        setIsSearchFocused(false);
                                                    }}
                                                    className="flex items-center justify-between gap-3 px-4 py-2.5 text-sm transition hover:bg-[#fff4ea]"
                                                >
                                                    <span>
                                                        <span className="block font-semibold">
                                                            {item.title}
                                                        </span>

                                                        <span className="text-xs text-slate-500">
                                                            {item.category}
                                                        </span>
                                                    </span>

                                                    <span className="rounded bg-[#fff4ea] px-2 py-1 text-[11px] font-semibold text-[#f58220]">
                                                        {item.type}
                                                    </span>
                                                </Link>
                                            </li>
                                        ))}

                                        <li className="border-t border-slate-100">
                                            <button
                                                type="submit"
                                                className="block w-full px-4 py-3 text-left text-sm font-semibold text-[#f58220] transition hover:bg-[#fff4ea]"
                                            >
                                                See all results for "
                                                {searchTerm}"
                                            </button>
                                        </li>
                                    </ul>
                                ) : (
                                    <div className="px-4 py-4 text-sm text-slate-500">
                                        No matching products found.
                                    </div>
                                )}
                            </div>
                        )}
                    </form>

                    <nav
                        aria-label="Account navigation"
                        className="order-2 ml-auto grid flex-1 grid-cols-5 items-end gap-1 sm:flex-none sm:gap-3 lg:order-3 lg:flex lg:gap-5 xl:gap-7"
                    >
                        {topActions.map(({ label, icon: Icon }) => (
                            <Link
                                key={label}
                                to={label === 'Cart' ? '/cart' : label === 'Sign In' ? '/signin' : '/'}
                                className="group flex min-w-0 flex-col items-center justify-end text-center text-[10px] font-normal leading-tight transition hover:text-[#f58220] sm:text-xs md:text-sm lg:text-base"
                            >
                                <span className="relative leading-none">
                                    <Icon />

                                    {label === 'Cart' && (
                                        <span className="absolute -right-1.5 -top-1.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#ff7f1a] px-1 text-[10px] font-semibold text-white sm:h-5 sm:min-w-5 sm:text-xs">
                                            {cartCount}
                                        </span>
                                    )}
                                </span>

                                <span className="mt-0.5 whitespace-nowrap">
                                    {label}
                                </span>
                            </Link>
                        ))}
                    </nav>
                </div>
            </header>

            <nav
                className="sticky top-0 z-50 bg-[#002b24] text-white shadow-md"
                aria-label="Product categories"
            >
                <div className="mx-auto flex max-w-[1760px] flex-wrap items-center justify-center gap-x-3 gap-y-2 px-2.5 py-2.5 text-[11px] font-medium sm:gap-x-4 sm:px-4 sm:text-xs md:text-sm lg:justify-between lg:gap-x-4 lg:px-6 lg:text-[15px] xl:px-10">
                    {navItems.map(({ label, products }) => (
                        <div
                            key={label}
                            className="group relative"
                        >
                            <Link
                                to={`/category/${slugify(label)}`}
                                className="flex min-w-0 items-center gap-1.5 transition hover:text-[#ffb66d]"
                            >
                                <span>{label}</span>

                                {products && <ChevronDown />}
                            </Link>

                            {products && (
                                <div className="invisible absolute left-1/2 top-full z-50 mt-2 w-52 max-w-[calc(100vw-1rem)] -translate-x-1/2 rounded-md bg-white py-3 text-[#07162b] opacity-0 shadow-xl ring-1 ring-black/5 transition duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100 sm:w-56">
                                    <div className="absolute -top-2 left-1/2 h-4 w-4 -translate-x-1/2 rotate-45 bg-white" />

                                    <ul className="relative space-y-1">
                                        {products.map((product) => (
                                            <li key={product.title}>
                                                <Link
                                                    to={`/category/${slugify(
                                                        label
                                                    )}/${slugify(
                                                        product.title
                                                    )}`}
                                                    className="flex items-center gap-3 px-4 py-2 text-sm font-medium transition hover:bg-[#fff4ea] hover:text-[#f58220]"
                                                >
                                                    <img
                                                        src={product.image}
                                                        alt={product.title}
                                                        className="h-9 w-9 rounded object-cover"
                                                    />

                                                    <span>
                                                        {product.title}
                                                    </span>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </nav>
        </>
    );
};

export default Navbar;