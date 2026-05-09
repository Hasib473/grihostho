import organichoney from '../assets/Honey/organic honey.png';
export const slugify = (value) =>
    value
        .toLowerCase()
        .replace(/&/g, 'and')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');

export const navItems = [
    {
        label: 'Offer Zone',
        products: [
            { title: 'Weekly Grocery Deal', image: '/images/weekly-grocery-deal.jpg' },
            { title: 'Honey Combo Pack', image: '/images/honey-combo-pack.jpg' },
            { title: 'Dates Saver Bundle', image: '/images/dates-saver-bundle.jpg' },
            { title: 'Spice Combo Offer', image: '/images/spice-combo-offer.jpg' },
            { title: 'Family Rice Pack', image: '/images/family-rice-pack.jpg' },
            { title: 'Ramadan Essentials Box', image: '/images/ramadan-essentials-box.jpg' },
        ]
    },

    { label: 'Oil & Ghee' },

    {
        label: 'Honey',
        products: [
            { title: 'Organic Honey', image: organichoney },
            { title: 'Black Seed Honey', image: '/images/black-seed-honey.jpg' },
            { title: 'Mustard Flower Honey', image: '/images/mustard-flower-honey.jpg' },
            { title: 'Sundarban Honey', image: '/images/sundarban-honey.jpg' },
            { title: 'Litchi Flower Honey', image: '/images/litchi-flower-honey.jpg' },
            { title: 'Raw Honey', image: '/images/raw-honey.jpg' },
        ]
    },

    {
        label: 'Dates',
        products: [
            { title: 'Medjool Dates', image: '/images/medjool-dates.jpg' },
            { title: 'Mabroom Dates', image: '/images/mabroom-dates.jpg' },
            { title: 'Ajwa Dates', image: '/images/ajwa-dates.jpg' },
            { title: 'Sukkari Dates', image: '/images/sukkari-dates.jpg' },
            { title: 'Maryam Dates', image: '/images/maryam-dates.jpg' },
            { title: 'Dates Powder', image: '/images/dates-powder.jpg' },
        ]
    },

    {
        label: 'Spices',
        products: [
            { title: 'Turmeric Powder', image: '/images/turmeric-powder.jpg' },
            { title: 'Chili Powder', image: '/images/chili-powder.jpg' },
            { title: 'Cumin Powder', image: '/images/cumin-powder.jpg' },
            { title: 'Coriander Powder', image: '/images/coriander-powder.jpg' },
            { title: 'Black Pepper', image: '/images/black-pepper.jpg' },
            { title: 'Garam Masala', image: '/images/garam-masala.jpg' },
        ]
    },

    {
        label: 'Mango',
        products: [
            { title: 'Himsagar Mango', image: '/images/himsagar-mango.jpg' },
            { title: 'Langra Mango', image: '/images/langra-mango.jpg' },
            { title: 'Amrapali Mango', image: '/images/amrapali-mango.jpg' },
            { title: 'Haribhanga Mango', image: '/images/haribhanga-mango.jpg' },
            { title: 'Fazli Mango', image: '/images/fazli-mango.jpg' },
            { title: 'Mango Bar', image: '/images/mango-bar.jpg' },
        ]
    },

    {
        label: 'Nuts & Seeds',
        products: [
            { title: 'Almonds', image: '/images/almonds.jpg' },
            { title: 'Cashew Nuts', image: '/images/cashew-nuts.jpg' },
            { title: 'Pistachios', image: '/images/pistachios.jpg' },
            { title: 'Walnuts', image: '/images/walnuts.jpg' },
            { title: 'Chia Seeds', image: '/images/chia-seeds.jpg' },
            { title: 'Pumpkin Seeds', image: '/images/pumpkin-seeds.jpg' },
        ]
    },

    {
        label: 'Beverage',
        products: [
            { title: 'Tea', image: '/images/tea.jpg' },
            { title: 'Green Tea', image: '/images/green-tea.jpg' },
            { title: 'Coffee', image: '/images/coffee.jpg' },
            { title: 'Juice', image: '/images/juice.jpg' },
            { title: 'Milk Powder', image: '/images/milk-powder.jpg' },
            { title: 'Healthy Drinks', image: '/images/healthy-drinks.jpg' },
        ]
    },

    { label: 'Rice' },

    {
        label: 'Flours & Lentils',
        products: [
            { title: 'Atta', image: '/images/atta.jpg' },
            { title: 'Maida', image: '/images/maida.jpg' },
            { title: 'Besan', image: '/images/besan.jpg' },
            { title: 'Masoor Dal', image: '/images/masoor-dal.jpg' },
            { title: 'Moong Dal', image: '/images/moong-dal.jpg' },
            { title: 'Chola Dal', image: '/images/chola-dal.jpg' },
        ]
    },

    { label: 'Certified' },

    { label: 'Pickle' },
];

export const searchableItems = navItems.flatMap((category) => {
    const categorySlug = slugify(category.label);

    const categoryItem = {
        title: category.label,
        type: 'Category',
        category: category.label,
        categorySlug,
        path: `/category/${categorySlug}`,
    };

    const productItems = (category.products || []).map((product) => ({
        title: product.title,
        image: product.image,
        type: 'Product',
        category: category.label,
        categorySlug,
        productSlug: slugify(product.title),
        path: `/category/${categorySlug}/${slugify(product.title)}`,
    }));

    return [categoryItem, ...productItems];
});

export const searchItems = (query, category = 'all') => {
    const normalizedQuery = query.trim().toLowerCase();

    return searchableItems.filter((item) => {
        const matchesQuery =
            !normalizedQuery ||
            item.title.toLowerCase().includes(normalizedQuery) ||
            item.category.toLowerCase().includes(normalizedQuery) ||
            item.type.toLowerCase().includes(normalizedQuery);

        const matchesCategory = category === 'all' || item.categorySlug === category;

        return matchesQuery && matchesCategory;
    });
};