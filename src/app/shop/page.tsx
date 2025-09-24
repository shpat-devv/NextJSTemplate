"use client";
import React, { useState } from "react";
import Header from "@/components/header/header";
import styles from "./shop.module.css";

export default function ShopPage() {
    const [cart, setCart] = useState<{ id: number; name: string; price: string; qty: number; image: string }[]>([]);
    const [showCart, setShowCart] = useState(false);

    const products = [
        { id: 1, name: "Wireless Headphones", description: "Noise-cancelling, 40h battery life.", price: "$199", image: "https://thumb.ac-illust.com/61/6134524019c58817fbfc332f2fc7314b_t.jpeg" },
        { id: 2, name: "Mechanical Keyboard", description: "RGB, hot-swappable switches.", price: "$129", image: "https://www.shutterstock.com/image-vector/empty-open-lcd-macbook-type-600nw-1355846786.jpg" },
        { id: 3, name: "4K Monitor", description: "Ultra HD 27-inch display.", price: "$349", image: "https://www.shutterstock.com/image-vector/hand-drawn-monitor-vector-illustration-600nw-117363520.jpg" },
        { id: 4, name: "Gaming Laptop", description: "RTX graphics, 16GB RAM, 1TB SSD.", price: "$1,499", image: "https://static.vecteezy.com/system/resources/thumbnails/016/082/918/small/laptop-with-one-continuous-single-line-art-drawing-vector.jpg" },
        { id: 5, name: "Smartwatch", description: "Heart rate monitor, GPS, waterproof.", price: "$249", image: "https://static.vecteezy.com/system/resources/thumbnails/041/012/866/small/hand-drawn-kids-drawing-cartoon-illustration-mens-watch-icon-isolated-on-white-background-vector.jpg" },
        { id: 6, name: "Bluetooth Speaker", description: "Portable, 12h playtime, deep bass.", price: "$99", image: "https://www.shutterstock.com/image-vector/doodle-speaker-icon-260nw-360271259.jpg" },
    ];

    const addToCart = (product: { id: number; name: string; price: string; image: string }) => {
        setCart((prev) => {
            const exists = prev.find((item) => item.id === product.id);
            if (exists) {
                return prev.map((item) =>
                    item.id === product.id ? { ...item, qty: item.qty + 1 } : item
                );
            }
            return [...prev, { ...product, qty: 1 }];
        });
    };

    const removeFromCart = (id: number) => {
        setCart((prev) => prev.filter((item) => item.id !== id));
    };

    const total = cart.reduce((sum, item) => {
        const price = parseFloat(item.price.replace(/[^0-9.]/g, ""));
        return sum + price * item.qty;
    }, 0);

    return (
        <main className="min-h-screen flex flex-col p-6">
            <Header
                title="Business Name"
                subtitle="Shop Our Products"
                buttonText="Menu"
                menuItems={[
                    { title: "Home", link: "/" },
                    { title: "Team", link: "/team" },
                    { title: "Contact", link: "/contact" },
                ]}
            />
            <div className="spacer"></div>
            <div className={styles.shopContainer}>
                <h2 className={styles.title}>Our Products</h2>
                <div className={styles.grid}>
                    {products.map((product) => (
                        <div key={product.id} className={styles.card}>
                            <img
                                src={product.image}
                                alt={product.name}
                                className={styles.image}
                            />
                            <h3 className={styles.name}>{product.name}</h3>
                            <p className={styles.description}>{product.description}</p>
                            <p className={styles.price}>{product.price}</p>
                            <button
                                className={styles.button}
                                onClick={() => addToCart(product)}
                            >
                                Add to Cart
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            <button className={styles.cartToggle} onClick={() => setShowCart(!showCart)}>
                🛒 Cart ({cart.length})
            </button>

            {showCart && (
                <div className={styles.cart}>
                    <h3>Your Cart</h3>
                    {cart.length === 0 ? (
                        <p>No items added.</p>
                    ) : (
                        <ul>
                            {cart.map((item) => (
                                <li key={item.id} className={styles.cartItem}>
                                    <img src={item.image} alt={item.name} />
                                    <div>
                                        <p>{item.name}</p>
                                        <p>{item.price} × {item.qty}</p>
                                    </div>
                                    <button onClick={() => removeFromCart(item.id)}>✖</button>
                                </li>
                            ))}
                        </ul>
                    )}
                    <p className={styles.total}>Total: ${total.toFixed(2)}</p>
                </div>
            )}
        </main>
    );
}
