/* ==========================================================
   THISTLE & THREAD
   CHECKOUT
========================================================== */

const SHEET_WEBAPP_URL = "https://script.google.com/macros/s/AKfycbyFFC6hgATr23iei9LdFHvbMxUUBbK9OUkNeGPeLmYgqcvuVo4Ed363SWbubvgfWyhe/exec";

const UPI_ID = "thistleandthread@ptaxis";
const UPI_PAYEE_NAME = "Thistle and Thread";

function generateOrderId() {
    const now = new Date();
    return "TT" + now.getFullYear() + String(now.getMonth() + 1).padStart(2, "0") +
        String(now.getDate()).padStart(2, "0") + "-" + Math.floor(Math.random() * 9000 + 1000);
}

function buildItemsSummary(cart) {
    return cart.map((item) => {
        let line = item.quantity + "x " + item.name + " (" + item.variantName + ")";
        if (item.personalizeName) {
            line += " - Personalized: \"" + item.personalizeName + "\"";
        }
        return line;
    }).join(" | ");
}

function buildUpiLink(orderId) {
    const params = new URLSearchParams({
        pa: UPI_ID,
        pn: UPI_PAYEE_NAME,
        cu: "INR",
        tn: "Thistle & Thread Order " + orderId
    });
    return "upi://pay?" + params.toString();
}

function renderCheckout() {
    const cart = getCart();
    const summaryEl = document.getElementById("checkout-summary");
    const emptyEl = document.getElementById("checkout-empty");
    const formSection = document.getElementById("checkout-form-section");

    if (cart.length === 0) {
        emptyEl.style.display = "";
        formSection.style.display = "none";
        summaryEl.innerHTML = "";
        return;
    }

    emptyEl.style.display = "none";
    formSection.style.display = "";
    summaryEl.innerHTML = "";

    cart.forEach((item) => {
        const row = document.createElement("p");
        row.className = "product-option";
        let text = item.quantity + "x " + item.name + " (" + item.variantName + ")";
        if (item.personalizeName) {
            text += " - Personalized: \"" + item.personalizeName + "\"";
        }
        row.textContent = text;
        summaryEl.appendChild(row);
    });
}

function postToSheet(payload) {
    if (!SHEET_WEBAPP_URL || SHEET_WEBAPP_URL.indexOf("PASTE_YOUR") === 0) return;

    fetch(SHEET_WEBAPP_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
    }).catch(() => {});
}

function submitOrder(customer) {
    const cart = getCart();
    const orderId = generateOrderId();

    postToSheet({
        action: "create",
        orderId: orderId,
        customerName: customer.name,
        customerPhone: customer.phone,
        customerEmail: customer.email,
        customerAddress: customer.address,
        items: buildItemsSummary(cart),
        paymentStatus: "Pending"
    });

    return orderId;
}

function updatePaymentStatus(orderId, status) {
    postToSheet({
        action: "updateStatus",
        orderId: orderId,
        paymentStatus: status
    });
}

document.addEventListener("DOMContentLoaded", () => {

    renderCheckout();

    const form = document.getElementById("checkout-form");
    if (!form) return;

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const customer = {
            name: document.getElementById("checkout-name").value.trim(),
            phone: document.getElementById("checkout-phone").value.trim(),
            email: document.getElementById("checkout-email").value.trim(),
            address: document.getElementById("checkout-address").value.trim()
        };

        const orderId = submitOrder(customer);
        const cart = getCart();

        const message = "New Order " + orderId + " - Thistle & Thread\n\n" +
            "Name: " + customer.name + "\n" +
            "Phone: " + customer.phone + "\n" +
            "Address: " + customer.address + "\n\n" +
            buildItemsSummary(cart).split(" | ").join("\n") +
            "\n\nPayment: UPI (awaiting confirmation)";

        const whatsappLink = document.getElementById("checkout-whatsapp-link");
        const upiLink = document.getElementById("checkout-upi-link");

        whatsappLink.href = "https://wa.me/919811987106?text=" + encodeURIComponent(message);
        upiLink.href = buildUpiLink(orderId);
        document.getElementById("checkout-order-id").textContent = orderId;

        upiLink.addEventListener("click", () => {
            updatePaymentStatus(orderId, "Received");
        });

        whatsappLink.addEventListener("click", () => {
            updatePaymentStatus(orderId, "Pending");
        });

        document.getElementById("checkout-form-section").style.display = "none";
        document.getElementById("checkout-confirmation").style.display = "";

        localStorage.setItem(CART_KEY, JSON.stringify([]));
        updateCartBadge();
    });

});
