/* ==========================================================
   THISTLE & THREAD
   CART (localStorage based)
========================================================== */

const CART_KEY = "thistleThreadCart";

function getCart() {
    try {
        return JSON.parse(localStorage.getItem(CART_KEY)) || [];
    } catch (e) {
        return [];
    }
}

function saveCart(cart) {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
    updateCartBadge();
}

function cartItemKey(item) {
    return [item.productId, item.variantName, item.personalizeName || ""].join("::");
}

function addToCart(item) {
    const cart = getCart();
    const key = cartItemKey(item);
    const existing = cart.find((i) => cartItemKey(i) === key);

    if (existing) {
        existing.quantity += item.quantity;
    } else {
        cart.push(item);
    }

    saveCart(cart);
}

function removeFromCart(index) {
    const cart = getCart();
    cart.splice(index, 1);
    saveCart(cart);
}

function updateQuantity(index, quantity) {
    const cart = getCart();

    if (quantity <= 0) {
        cart.splice(index, 1);
    } else {
        cart[index].quantity = quantity;
    }

    saveCart(cart);
}

function getCartCount() {
    return getCart().reduce((sum, i) => sum + i.quantity, 0);
}

function updateCartBadge() {
    const el = document.getElementById("cart-count");
    if (el) el.textContent = getCartCount();
}

document.addEventListener("DOMContentLoaded", updateCartBadge);
