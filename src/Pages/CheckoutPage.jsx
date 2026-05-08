import React, { useMemo, useState } from 'react';
import { Link } from 'react-router';
import { useCart } from '../Context/CartContext';

const pickupPoints = [
    'Rampura Outlet, Dhaka',
    'Banasree Pickup Point, Dhaka',
    'Mirpur Pickup Point, Dhaka',
    'Uttara Pickup Point, Dhaka',
];

const districts = ['Dhaka', 'Gazipur', 'Narayanganj', 'Chattogram', 'Sylhet', 'Rajshahi', 'Khulna', 'Barishal'];

const CheckoutPage = () => {
    const { cartItems, cartCount, cartTotal, clearCart } = useCart();
    const [deliveryType, setDeliveryType] = useState('home');
    const [paymentMethod, setPaymentMethod] = useState('sslcommerz');
    const [orderPlaced, setOrderPlaced] = useState(false);
    const [formData, setFormData] = useState({
        fullName: '',
        phone: '',
        email: '',
        district: 'Dhaka',
        area: '',
        address: '',
        pickupPoint: pickupPoints[0],
        note: '',
    });

    const deliveryFee = deliveryType === 'pickup' ? 0 : formData.district === 'Dhaka' ? 70 : 130;
    const grandTotal = useMemo(() => cartTotal + deliveryFee, [cartTotal, deliveryFee]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((current) => ({ ...current, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setOrderPlaced(true);
        clearCart();
    };

    if (cartItems.length === 0 && !orderPlaced) {
        return (
            <main className="mx-auto min-h-[460px] max-w-[1760px] px-3 py-6 sm:px-6 sm:py-10 lg:px-10">
                <div className="rounded-lg border border-slate-200 bg-white px-5 py-12 text-center">
                    <h1 className="text-2xl font-black text-[#07162b]">No items to checkout</h1>
                    <p className="mt-2 text-sm text-slate-500">Please add products to your cart before checkout.</p>
                    <Link to="/" className="mt-6 inline-flex rounded bg-[#f58220] px-5 py-2.5 font-semibold text-white transition hover:bg-[#e77412]">
                        Continue Shopping
                    </Link>
                </div>
            </main>
        );
    }

    if (orderPlaced) {
        return (
            <main className="mx-auto min-h-[460px] max-w-[1760px] px-3 py-6 sm:px-6 sm:py-10 lg:px-10">
                <div className="rounded-lg bg-emerald-50 px-5 py-12 text-center ring-1 ring-emerald-100">
                    <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">Order Submitted</p>
                    <h1 className="mt-2 text-3xl font-black text-[#07162b]">Thank you for your order</h1>
                    <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-600">
                        Your checkout information has been received. In a real SSLCommerz integration, this step will redirect to the secured payment gateway.
                    </p>
                    <Link to="/" className="mt-6 inline-flex rounded bg-[#f58220] px-5 py-2.5 font-semibold text-white transition hover:bg-[#e77412]">
                        Back to Home
                    </Link>
                </div>
            </main>
        );
    }

    return (
        <main className="mx-auto max-w-[1760px] px-3 py-6 sm:px-6 sm:py-10 lg:px-10">
            <div className="rounded-lg bg-[#fff8f1] px-4 py-6 sm:px-8 sm:py-8">
                <p className="text-sm font-semibold uppercase tracking-wide text-[#f58220]">Secure Checkout</p>
                <h1 className="mt-2 text-2xl font-black text-[#07162b] sm:text-4xl">Checkout</h1>
                <p className="mt-3 text-sm text-slate-600">Fill in your delivery details and complete payment with SSLCommerz.</p>
            </div>

            <form onSubmit={handleSubmit} className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1fr)_390px]">
                <div className="space-y-6">
                    <section className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
                        <h2 className="text-xl font-bold text-[#07162b]">Customer Information</h2>
                        <div className="mt-5 grid gap-4 sm:grid-cols-2">
                            <label className="block">
                                <span className="text-sm font-semibold text-slate-700">Full Name *</span>
                                <input name="fullName" value={formData.fullName} onChange={handleChange} required className="mt-2 h-11 w-full rounded-md border border-slate-300 px-3 outline-none transition focus:border-[#f58220]" />
                            </label>
                            <label className="block">
                                <span className="text-sm font-semibold text-slate-700">Phone Number *</span>
                                <input name="phone" value={formData.phone} onChange={handleChange} required className="mt-2 h-11 w-full rounded-md border border-slate-300 px-3 outline-none transition focus:border-[#f58220]" />
                            </label>
                            <label className="block sm:col-span-2">
                                <span className="text-sm font-semibold text-slate-700">Email Address</span>
                                <input type="email" name="email" value={formData.email} onChange={handleChange} className="mt-2 h-11 w-full rounded-md border border-slate-300 px-3 outline-none transition focus:border-[#f58220]" />
                            </label>
                        </div>
                    </section>

                    <section className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
                        <h2 className="text-xl font-bold text-[#07162b]">Delivery Method</h2>
                        <div className="mt-5 grid gap-3 sm:grid-cols-2">
                            {[
                                { value: 'home', title: 'Home Delivery', text: 'Courier delivery to your address' },
                                { value: 'pickup', title: 'Pickup Point', text: 'Collect from selected pickup point' },
                            ].map((option) => (
                                <label key={option.value} className={`cursor-pointer rounded-lg border p-4 transition ${deliveryType === option.value ? 'border-[#f58220] bg-[#fff4ea]' : 'border-slate-200 hover:border-orange-200'}`}>
                                    <input type="radio" name="deliveryType" value={option.value} checked={deliveryType === option.value} onChange={() => setDeliveryType(option.value)} className="sr-only" />
                                    <span className="block font-bold text-[#07162b]">{option.title}</span>
                                    <span className="mt-1 block text-sm text-slate-500">{option.text}</span>
                                </label>
                            ))}
                        </div>

                        {deliveryType === 'home' ? (
                            <div className="mt-5 grid gap-4 sm:grid-cols-2">
                                <label className="block">
                                    <span className="text-sm font-semibold text-slate-700">District *</span>
                                    <select name="district" value={formData.district} onChange={handleChange} required className="mt-2 h-11 w-full rounded-md border border-slate-300 px-3 outline-none transition focus:border-[#f58220]">
                                        {districts.map((district) => (
                                            <option key={district} value={district}>{district}</option>
                                        ))}
                                    </select>
                                </label>
                                <label className="block">
                                    <span className="text-sm font-semibold text-slate-700">Area / Thana *</span>
                                    <input name="area" value={formData.area} onChange={handleChange} required className="mt-2 h-11 w-full rounded-md border border-slate-300 px-3 outline-none transition focus:border-[#f58220]" />
                                </label>
                                <label className="block sm:col-span-2">
                                    <span className="text-sm font-semibold text-slate-700">Full Address *</span>
                                    <textarea name="address" value={formData.address} onChange={handleChange} required rows="3" className="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 outline-none transition focus:border-[#f58220]" />
                                </label>
                            </div>
                        ) : (
                            <label className="mt-5 block">
                                <span className="text-sm font-semibold text-slate-700">Select Pickup Point *</span>
                                <select name="pickupPoint" value={formData.pickupPoint} onChange={handleChange} required className="mt-2 h-11 w-full rounded-md border border-slate-300 px-3 outline-none transition focus:border-[#f58220]">
                                    {pickupPoints.map((point) => (
                                        <option key={point} value={point}>{point}</option>
                                    ))}
                                </select>
                            </label>
                        )}

                        <label className="mt-5 block">
                            <span className="text-sm font-semibold text-slate-700">Order Note</span>
                            <textarea name="note" value={formData.note} onChange={handleChange} rows="3" placeholder="Any special instruction for delivery..." className="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 outline-none transition focus:border-[#f58220]" />
                        </label>
                    </section>

                    <section className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
                        <h2 className="text-xl font-bold text-[#07162b]">Payment Method</h2>
                        <div className="mt-5 grid gap-3">
                            <label className={`cursor-pointer rounded-lg border p-4 transition ${paymentMethod === 'sslcommerz' ? 'border-[#f58220] bg-[#fff4ea]' : 'border-slate-200'}`}>
                                <input type="radio" name="paymentMethod" value="sslcommerz" checked={paymentMethod === 'sslcommerz'} onChange={() => setPaymentMethod('sslcommerz')} className="sr-only" />
                                <span className="flex flex-wrap items-center justify-between gap-3">
                                    <span>
                                        <span className="block font-bold text-[#07162b]">SSLCommerz Online Payment</span>
                                        <span className="mt-1 block text-sm text-slate-500">Pay securely using card, mobile banking, or internet banking.</span>
                                    </span>
                                    <span className="rounded bg-[#2d5dab] px-3 py-1 text-sm font-bold text-white">SSLCommerz</span>
                                </span>
                            </label>
                            <label className={`cursor-pointer rounded-lg border p-4 transition ${paymentMethod === 'cod' ? 'border-[#f58220] bg-[#fff4ea]' : 'border-slate-200 hover:border-orange-200'}`}>
                                <input type="radio" name="paymentMethod" value="cod" checked={paymentMethod === 'cod'} onChange={() => setPaymentMethod('cod')} className="sr-only" />
                                <span className="block font-bold text-[#07162b]">Cash on Delivery</span>
                                <span className="mt-1 block text-sm text-slate-500">Pay when your order is delivered.</span>
                            </label>
                        </div>
                    </section>
                </div>

                <aside className="h-fit rounded-lg border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
                    <h2 className="text-xl font-bold text-[#07162b]">Order Summary</h2>
                    <div className="mt-5 max-h-80 space-y-3 overflow-y-auto pr-1">
                        {cartItems.map((item) => (
                            <div key={item.id} className="flex gap-3 rounded-md border border-slate-100 p-3">
                                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded bg-[#fff4ea] text-sm font-black text-[#f58220]">
                                    {item.product.split(' ').map((word) => word[0]).join('').slice(0, 3)}
                                </div>
                                <div className="min-w-0 flex-1">
                                    <p className="truncate text-sm font-bold text-[#07162b]">{item.product}</p>
                                    <p className="mt-1 text-xs text-slate-500">{item.packageLabel}</p>
                                    <p className="mt-1 text-xs text-slate-500">Qty: {item.quantity}</p>
                                </div>
                                <p className="shrink-0 text-sm font-bold text-[#07162b]">Tk {item.price * item.quantity}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-5 space-y-3 border-t border-slate-200 pt-4 text-sm">
                        <div className="flex justify-between text-slate-600">
                            <span>Subtotal ({cartCount} items)</span>
                            <span className="font-semibold text-[#07162b]">Tk {cartTotal}</span>
                        </div>
                        <div className="flex justify-between text-slate-600">
                            <span>Delivery Fee</span>
                            <span className="font-semibold text-[#07162b]">Tk {deliveryFee}</span>
                        </div>
                        <div className="flex justify-between border-t border-slate-200 pt-4 text-lg font-black text-[#07162b]">
                            <span>Total</span>
                            <span>Tk {grandTotal}</span>
                        </div>
                    </div>

                    <button type="submit" className="mt-6 w-full rounded-md bg-[#f58220] px-5 py-3 text-base font-bold text-white shadow-md shadow-orange-500/20 transition hover:-translate-y-0.5 hover:bg-[#e77412] hover:shadow-lg">
                        {paymentMethod === 'sslcommerz' ? 'Pay With SSLCommerz' : 'Place Order'}
                    </button>
                    <p className="mt-3 text-center text-xs leading-5 text-slate-500">
                        By placing this order, you agree to our terms, refund policy, and delivery policy.
                    </p>
                </aside>
            </form>
        </main>
    );
};

export default CheckoutPage;
