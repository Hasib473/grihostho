export const slugify = (value) =>
    value
        .toLowerCase()
        .replace(/&/g, 'and')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');

export const navItems = [
    { label: 'Offer Zone', products: ['Weekly Grocery Deal', 'Honey Combo Pack', 'Dates Saver Bundle', 'Spice Combo Offer', 'Family Rice Pack', 'Ramadan Essentials Box'] },
    { label: 'Oil & Ghee' },
    { label: 'Honey', products: ['Organic Honey', 'Black Seed Honey', 'Mustard Flower Honey', 'Sundarban Honey', 'Litchi Flower Honey', 'Raw Honey'] },
    { label: 'Dates', products: ['Medjool Dates', 'Mabroom Dates', 'Ajwa Dates', 'Sukkari Dates', 'Maryam Dates', 'Dates Powder'] },
    { label: 'Spices', products: ['Turmeric Powder', 'Chili Powder', 'Cumin Powder', 'Coriander Powder', 'Black Pepper', 'Garam Masala'] },
    { label: 'Mango', products: ['Himsagar Mango', 'Langra Mango', 'Amrapali Mango', 'Haribhanga Mango', 'Fazli Mango', 'Mango Bar'] },
    { label: 'Nuts & Seeds', products: ['Almonds', 'Cashew Nuts', 'Pistachios', 'Walnuts', 'Chia Seeds', 'Pumpkin Seeds'] },
    { label: 'Beverage', products: ['Tea', 'Green Tea', 'Coffee', 'Juice', 'Milk Powder', 'Healthy Drinks'] },
    { label: 'Rice' },
    { label: 'Flours & Lentils', products: ['Atta', 'Maida', 'Besan', 'Masoor Dal', 'Moong Dal', 'Chola Dal'] },
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
        title: product,
        type: 'Product',
        category: category.label,
        categorySlug,
        productSlug: slugify(product),
        path: `/category/${categorySlug}/${slugify(product)}`,
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
