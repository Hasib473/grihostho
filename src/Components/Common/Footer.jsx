import React from 'react';
import logo from '../../assets/logo/Grihostho_Transparent_Logo.png';

const footerColumns = [
    {
        title: 'Information',
        links: [
            'About us',
            'Contact us',
            'Company Information',
            'Grihostho Stories',
            'Terms & Conditions',
            'Privacy Policy',
            'Careers',
        ],
    },
    {
        title: 'Shop By',
        links: ['Oil & Ghee', 'Honey', 'Dates', 'Spices', 'Nuts & Seeds', 'Beverage', 'Functional Foods'],
    },
    {
        title: 'Support',
        links: ['Support Center', 'How to Order', 'Order Tracking', 'Payment', 'Shipping', 'FAQ'],
    },
    {
        title: 'Consumer Policy',
        links: ['Happy Return', 'Refund Policy', 'Exchange', 'Cancellation', 'Pre-Order', 'Extra Discount'],
    },
];

const paymentBadges = [
    { label: 'VISA', color: 'text-[#1434cb]' },
    { label: 'Mastercard', color: 'text-[#eb001b]' },
    { label: 'AMEX', color: 'text-[#2e77bc]' },
    { label: 'bKash', color: 'text-[#e2136e]' },
    { label: 'Nexus', color: 'text-[#0f9d58]' },
    { label: 'Upay', color: 'text-[#f58220]' },
    { label: 'Bank', color: 'text-[#2563eb]' },
    { label: 'AB', color: 'text-[#0f766e]' },
    { label: 'Rocket', color: 'text-[#8b5cf6]' },
    { label: 'FastCash', color: 'text-[#16a34a]' },
    { label: 'MTB', color: 'text-[#dc2626]' },
    { label: 'Nagad', color: 'text-[#f97316]' },
    { label: 'IFIC', color: 'text-[#9333ea]' },
    { label: 'mCash', color: 'text-[#059669]' },
    { label: 'iPay', color: 'text-[#0891b2]' },
    { label: 't-cash', color: 'text-[#ef4444]' },
    { label: 'SurePay', color: 'text-[#2563eb]' },
    { label: 'uPay', color: 'text-[#db2777]' },
    { label: 'iPay', color: 'text-[#0d9488]' },
    { label: 'Dmoney', color: 'text-[#f59e0b]' },
];

const LocationIcon = () => (
    <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
    </svg>
);

const PhoneIcon = () => (
    <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.4 2.1L8.1 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.6 1.9Z" />
    </svg>
);

const MailIcon = () => (
    <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M4 5h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z" />
        <path d="m22 7-10 6L2 7" />
    </svg>
);

const FacebookIcon = () => (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M14 8.8V6.9c0-.8.5-1 1-1h1.3V3.6c-.6-.1-1.4-.2-2.1-.2-2.1 0-3.5 1.3-3.5 3.6v1.8H8.4v2.6h2.3v7.2H14v-7.2h2.2l.4-2.6H14Z" />
    </svg>
);

const TwitterIcon = () => (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.7 7.3v.5c0 5.6-4.2 12-12 12-2.4 0-4.6-.7-6.4-1.9h1c2 0 3.8-.7 5.2-1.8-1.8 0-3.4-1.2-3.9-2.9.3.1.5.1.8.1.4 0 .8-.1 1.1-.2-1.9-.4-3.4-2.1-3.4-4.1v-.1c.6.3 1.2.5 1.9.5A4.2 4.2 0 0 1 3.1 6c0-.8.2-1.5.6-2.1a12 12 0 0 0 8.7 4.4 4.2 4.2 0 0 1 7.2-3.8 8.3 8.3 0 0 0 2.7-1 4.2 4.2 0 0 1-1.9 2.3 8.8 8.8 0 0 0 2.4-.6 9 9 0 0 1-2.1 2.1Z" />
    </svg>
);

const InstagramIcon = () => (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="4" y="4" width="16" height="16" rx="4" />
        <circle cx="12" cy="12" r="3.4" />
        <path d="M17.4 6.8h.1" />
    </svg>
);

const GooglePlayBadge = () => (
    <a href="/" className="flex h-9 w-32 items-center gap-2 rounded-md bg-[#111827] px-2.5 text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#0f172a] hover:shadow-md" aria-label="Download on Google Play">
        <span className="block h-0 w-0 border-y-[9px] border-l-[16px] border-y-transparent border-l-[#21c55d]" />
        <span className="leading-none">
            <span className="block text-[7px] uppercase">Get it on</span>
            <span className="block text-[13px] font-semibold">Google Play</span>
        </span>
    </a>
);

const AppStoreBadge = () => (
    <a href="/" className="flex h-9 w-32 items-center gap-2 rounded-md bg-white px-2.5 text-[#111827] shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-0.5 hover:shadow-md" aria-label="Download on the App Store">
        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#111827] text-[10px] font-bold text-white">A</span>
        <span className="leading-none">
            <span className="block text-[7px]">Download on the</span>
            <span className="block text-[13px] font-semibold">App Store</span>
        </span>
    </a>
);

const Footer = () => {
    return (
        <footer className="w-full border-t border-slate-100 bg-gradient-to-b from-white to-[#fbfcfc] text-[#1e293b]">
            <div className="mx-auto max-w-[1760px] px-4 py-10 sm:px-6 lg:px-10 lg:py-12 xl:px-14">
                <div className="grid gap-10 lg:grid-cols-[1.35fr_3fr] lg:gap-20">
                    <div>
                        <a href="/" className="inline-flex" aria-label="Grihostho home">
                            <img src={logo} alt="Grihostho" className="h-24 w-auto object-contain sm:h-28" />
                        </a>

                        <p className="mt-3 max-w-sm text-sm leading-6 text-slate-600">
                            Grihostho is an e-commerce platform dedicated to providing safe and reliable food to every home.
                        </p>

                        <ul className="mt-6 space-y-3 text-sm text-slate-600">
                            <li className="flex items-center gap-3">
                                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#fff4ea] text-[#f58220]">
                                    <LocationIcon />
                                </span>
                                <span>Rampura, Dhaka, Bangladesh</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#fff4ea] text-[#f58220]">
                                    <PhoneIcon />
                                </span>
                                <a href="tel:09642922922" className="transition hover:text-[#f58220]">
                                    09642922922
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#fff4ea] text-[#f58220]">
                                    <MailIcon />
                                </span>
                                <a href="mailto:contact@grihostho.com" className="transition hover:text-[#f58220]">
                                    contact@grihostho.com
                                </a>
                            </li>
                        </ul>

                        <div className="mt-8 flex gap-3">
                            {[
                                { label: 'Facebook', icon: FacebookIcon },
                                { label: 'Twitter', icon: TwitterIcon },
                                { label: 'Instagram', icon: InstagramIcon },
                            ].map(({ label, icon: Icon }) => (
                                <a
                                    key={label}
                                    href="/"
                                    className="flex h-9 w-9 items-center justify-center rounded-full border border-orange-100 bg-white text-[#f58220] shadow-sm transition hover:-translate-y-0.5 hover:bg-[#f58220] hover:text-white hover:shadow-md"
                                    aria-label={label}
                                >
                                    <Icon />
                                </a>
                            ))}
                        </div>

                        <div className="mt-7">
                            <p className="text-base font-medium text-[#07162b]">Download App on Mobile :</p>
                            <div className="mt-4 flex flex-wrap gap-3">
                                <GooglePlayBadge />
                                <AppStoreBadge />
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-x-7 gap-y-9 sm:grid-cols-4 lg:pt-5">
                        {footerColumns.map((column) => (
                            <div key={column.title}>
                                <h3 className="relative pb-3 text-base font-semibold text-[#07162b] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-9 after:rounded-full after:bg-[#f58220]">
                                    {column.title}
                                </h3>
                                <ul className="mt-4 space-y-2.5 text-sm text-slate-600">
                                    {column.links.map((link) => (
                                        <li key={link}>
                                            <a href="/" className="inline-flex transition hover:translate-x-1 hover:text-[#f58220]">
                                                {link}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-12 border-t border-slate-200 pt-7">
                    <div className="flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
                        <p className="text-sm text-slate-600">Copyright (c) 2026 Grihostho</p>

                        <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
                            <span className="shrink-0 text-base font-semibold text-[#1f2937]">Pay With</span>
                            <div className="grid grid-cols-4 gap-2 min-[420px]:grid-cols-5 sm:grid-cols-8 xl:grid-cols-10">
                                {paymentBadges.map((badge, index) => (
                                    <span
                                        key={`${badge.label}-${index}`}
                                        className={`flex h-10 min-w-14 items-center justify-center rounded-md border border-slate-200 bg-white px-2 text-[10px] font-bold shadow-sm transition hover:-translate-y-0.5 hover:border-orange-200 hover:shadow-md sm:min-w-16 ${badge.color}`}
                                    >
                                        {badge.label}
                                    </span>
                                ))}
                            </div>
                            <div className="flex w-fit flex-col justify-center border-slate-300 text-xs text-slate-600 lg:border-l lg:pl-5">
                                <span>Verified by</span>
                                <span className="mt-1 rounded bg-[#2d5dab] px-3 py-1 text-sm font-bold text-white shadow-sm">SSLCommerz</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
