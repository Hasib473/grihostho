import React from 'react';
import { Link } from 'react-router';
import { useCart } from '../Context/CartContext';

const CartPage = () => {
    const { cartItems, cartCount, cartTotal, updateQuantity, removeFromCart, clearCart } = useCart();

    return (
        <main className="mx-auto min-h-[460px] max-w-[1760px] px-3 py-6 sm:px-6 sm:py-10 lg:px-10">
            <div className="rounded-lg bg-[#fff8f1] px-4 py-6 sm:px-8 sm:py-8">
                <p className="text-sm font-semibold uppercase tracking-wide text-[#f58220]">Shopping Cart</p>
                <h1 className="mt-2 text-2xl font-black text-[#07162b] sm:text-4xl">
                    Your Cart
                </h1>
                <p className="mt-3 text-sm text-slate-600">
                    {cartCount} item{cartCount === 1 ? '' : 's'} added.
                </p>
            </div>

            {cartItems.length === 0 ? (
                <div className="mt-8 rounded-lg border border-slate-200 bg-white px-5 py-12 text-center">
                    <h2 className="text-xl font-bold text-[#07162b]">Your cart is empty</h2>
                    <p className="mt-2 text-sm text-slate-500">Add products from the details page to see them here.</p>
                    <Link to="/" className="mt-6 inline-flex rounded bg-[#f58220] px-5 py-2.5 font-semibold text-white transition hover:bg-[#e77412]">
                        Continue Shopping
                    </Link>
                </div>
            ) : (
                <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1fr)_360px]">
                    <section className="space-y-4">
                        {cartItems.map((item) => (
                            <article key={item.id} className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
                                <div className="grid gap-4 sm:grid-cols-[96px_minmax(0,1fr)_auto] sm:items-center">
                                    <div className="flex h-24 w-24 items-center justify-center rounded-md bg-[#fff4ea] text-lg font-black text-[#f58220] sm:h-24 sm:w-24">
                                        {item.product.split(' ').map((word) => word[0]).join('').slice(0, 3)}
                                    </div>

                                    <div className="min-w-0">
                                        <h2 className="break-words text-lg font-bold text-[#07162b]">{item.product}</h2>
                                        <p className="mt-1 text-sm text-slate-500">{item.category}</p>
                                        <p className="mt-2 text-sm text-slate-700">{item.packageLabel}</p>
                                        <p className="mt-1 text-sm text-slate-500">Weight: {item.weight}</p>
                                    </div>

                                    <div className="flex flex-row flex-wrap items-center justify-between gap-3 sm:flex-col sm:items-end sm:justify-start">
                                        <p className="text-lg font-bold text-[#07162b]">Tk {item.price * item.quantity}</p>
                                        <div className="flex overflow-hidden rounded-md border border-slate-300">
                                            <button
                                                type="button"
                                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                className="flex h-9 w-9 items-center justify-center bg-[#3f7166] text-lg font-bold text-white transition hover:bg-[#315a51]"
                                                aria-label="Decrease quantity"
                                            >
                                                -
                                            </button>
                                            <span className="flex h-9 w-11 items-center justify-center bg-white text-sm font-bold text-[#07162b]">{item.quantity}</span>
                                            <button
                                                type="button"
                                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                className="flex h-9 w-9 items-center justify-center bg-[#3f7166] text-lg font-bold text-white transition hover:bg-[#315a51]"
                                                aria-label="Increase quantity"
                                            >
                                                +
                                            </button>
                                        </div>
                                        <button
                                            type="button"
                                            onClick={() => removeFromCart(item.id)}
                                            className="text-sm font-semibold text-red-500 transition hover:text-red-600"
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </section>

                    <aside className="h-fit rounded-lg border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
                        <h2 className="text-xl font-bold text-[#07162b]">Order Summary</h2>
                        <div className="mt-5 space-y-3 text-sm">
                            <div className="flex justify-between text-slate-600">
                                <span>Total Items</span>
                                <span className="font-semibold text-[#07162b]">{cartCount}</span>
                            </div>
                            <div className="flex justify-between text-slate-600">
                                <span>Subtotal</span>
                                <span className="font-semibold text-[#07162b]">Tk {cartTotal}</span>
                            </div>
                            <div className="flex justify-between text-slate-600">
                                <span>Delivery Fee</span>
                                <span className="font-semibold text-[#07162b]">Added at checkout</span>
                            </div>
                        </div>
                        <div className="mt-5 border-t border-slate-200 pt-4">
                            <div className="flex justify-between text-lg font-black text-[#07162b]">
                                <span>Total</span>
                                <span>Tk {cartTotal}</span>
                            </div>
                        </div>

                        <Link
                            to="/checkout"
                            className="mt-6 block w-full rounded-md bg-[#f58220] px-5 py-3 text-center text-base font-bold text-white shadow-md shadow-orange-500/20 transition hover:-translate-y-0.5 hover:bg-[#e77412] hover:shadow-lg"
                        >
                            Checkout
                        </Link>
                        <button
                            type="button"
                            onClick={clearCart}
                            className="mt-3 w-full rounded-md border border-slate-300 px-5 py-3 text-base font-bold text-slate-700 transition hover:border-red-200 hover:text-red-500"
                        >
                            Clear Cart
                        </button>
                    </aside>
                </div>
            )}
        </main>
    );
};

export default CartPage;
