import React, { useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router';
import { navItems, searchItems } from '../data/navigation';

const filterOptions = [
    { label: 'All', value: 'all' },
    ...navItems.map((item) => ({
        label: item.label,
        value: item.label
            .toLowerCase()
            .replace(/&/g, 'and')
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/^-+|-+$/g, ''),
    })),
];

const SearchPage = () => {
    const [searchParams] = useSearchParams();
    const query = searchParams.get('q') || '';
    const [activeFilter, setActiveFilter] = useState('all');

    const results = useMemo(() => searchItems(query, activeFilter), [query, activeFilter]);

    return (
        <main className="mx-auto min-h-[460px] max-w-[1760px] px-3 py-6 sm:px-6 sm:py-10 lg:px-10">
            <div className="rounded-lg bg-[#fff8f1] px-4 py-6 sm:px-8 sm:py-8">
                <p className="text-sm font-semibold uppercase tracking-wide text-[#f58220]">Search Results</p>
                <h1 className="mt-2 break-words text-2xl font-black text-[#07162b] sm:text-4xl">
                    {query ? `Results for "${query}"` : 'Search products'}
                </h1>
                <p className="mt-3 text-sm text-slate-600">
                    {results.length} matching item{results.length === 1 ? '' : 's'} found.
                </p>
            </div>

            <div className="mt-6 flex gap-2 overflow-x-auto pb-2">
                {filterOptions.map((filter) => (
                    <button
                        key={filter.value}
                        type="button"
                        onClick={() => setActiveFilter(filter.value)}
                        className={`shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition ${
                            activeFilter === filter.value
                                ? 'bg-[#f58220] text-white shadow-md shadow-orange-500/20'
                                : 'bg-white text-slate-600 ring-1 ring-slate-200 hover:text-[#f58220] hover:ring-orange-200'
                        }`}
                    >
                        {filter.label}
                    </button>
                ))}
            </div>

            {results.length > 0 ? (
                <div className="mt-6 grid gap-4 min-[520px]:grid-cols-2 lg:grid-cols-4">
                    {results.map((item) => (
                        <Link
                            key={`${item.type}-${item.path}`}
                            to={item.path}
                            className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-orange-200 hover:shadow-md"
                        >
                            <div className="flex h-28 items-center justify-center rounded-md bg-[#fff4ea] text-lg font-black text-[#f58220]">
                                {item.title.split(' ').map((word) => word[0]).join('').slice(0, 3)}
                            </div>
                            <div className="mt-4 flex items-start justify-between gap-3">
                                <div className="min-w-0">
                                    <h2 className="break-words text-base font-semibold text-[#07162b]">{item.title}</h2>
                                    <p className="mt-1 text-sm text-slate-500">{item.category}</p>
                                </div>
                                <span className="rounded bg-[#fff4ea] px-2 py-1 text-[11px] font-semibold text-[#f58220]">{item.type}</span>
                            </div>
                        </Link>
                    ))}
                </div>
            ) : (
                <div className="mt-8 rounded-lg border border-slate-200 bg-white px-5 py-10 text-center">
                    <h2 className="text-xl font-bold text-[#07162b]">No products found</h2>
                    <p className="mt-2 text-sm text-slate-500">Try another keyword or choose a different category filter.</p>
                </div>
            )}
        </main>
    );
};

export default SearchPage;
