/* ==========================================================
   THISTLE & THREAD
   CART PAGE
========================================================== */

const CART_WHATSAPP_NUMBER = "919811987106";
const CART_EMAIL = "shivanisachdeva.171980@gmail.com";

function buildOrderMessage(cart) {
    const lines = ["New Order Request - Thistle & Thread", ""];

    cart.forEach((item) => {
        let line = item.quantity + "x " + item.name + " (" + item.variantName + ")";
        if (item.personalizeName) {
            line += " - Personalized: \"" + item.personalizeName + "\"";
        }
        lines.push(line);
    });

    lines.push("");
    lines.push("Please confirm pricing, availability and shipping. Thank you!");

    return lines.join("\n");
}

function renderCart() {
    const cart = getCart();
    const itemsEl = document.getElementById("cart-items");
    const emptyEl = document.getElementById("cart-empty");
    const actionsEl = document.getElementById("cart-actions");
    const noteEl = document.getElementById("cart-note");
    const checkoutCtaEl = document.getElementById("cart-checkout-cta");

    itemsEl.innerHTML = "";

    if (cart.length === 0) {
        emptyEl.style.display = "";
        actionsEl.style.display = "none";
        noteEl.style.display = "none";
        checkoutCtaEl.style.display = "none";
        return;
    }

    emptyEl.style.display = "none";
    actionsEl.style.display = "flex";
    noteEl.style.display = "";
    checkoutCtaEl.style.display = "";

    cart.forEach((item, index) => {

        const row = document.createElement("div");
        row.className = "cart-item";

        const img = document.createElement("img");
        img.src = item.variantImage;
        img.alt = item.name;
        row.appendChild(img);

        const info = document.createElement("div");
        info.className = "cart-item-info";

        const title = document.createElement("h3");
        title.textContent = item.name;
        info.appendChild(title);

        const variant = document.createElement("p");
        variant.textContent = "Option: " + item.variantName;
        info.appendChild(variant);

        if (item.personalizeName) {
            const personalize = document.createElement("p");
            personalize.textContent = "Personalized: \"" + item.personalizeName + "\"";
            info.appendChild(personalize);
        }

        const qtyRow = document.createElement("div");
        qtyRow.className = "cart-item-qty";

        const minusBtn = document.createElement("button");
        minusBtn.type = "button";
        minusBtn.textContent = "-";
        minusBtn.setAttribute("aria-label", "Decrease quantity");
        minusBtn.addEventListener("click", () => {
            updateQuantity(index, item.quantity - 1);
            renderCart();
        });

        const qtyLabel = document.createElement("span");
        qtyLabel.textContent = item.quantity;

        const plusBtn = document.createElement("button");
        plusBtn.type = "button";
        plusBtn.textContent = "+";
        plusBtn.setAttribute("aria-label", "Increase quantity");
        plusBtn.addEventListener("click", () => {
            updateQuantity(index, item.quantity + 1);
            renderCart();
        });

        qtyRow.appendChild(minusBtn);
        qtyRow.appendChild(qtyLabel);
        qtyRow.appendChild(plusBtn);
        info.appendChild(qtyRow);

        const removeBtn = document.createElement("button");
        removeBtn.type = "button";
        removeBtn.className = "cart-item-remove";
        removeBtn.textContent = "Remove";
        removeBtn.addEventListener("click", () => {
            removeFromCart(index);
            renderCart();
        });
        info.appendChild(removeBtn);

        row.appendChild(info);
        itemsEl.appendChild(row);

    });

    const message = buildOrderMessage(cart);

    document.getElementById("cart-whatsapp-btn").href =
        "https://wa.me/" + CART_WHATSAPP_NUMBER + "?text=" + encodeURIComponent(message);

    document.getElementById("cart-email-btn").href =
        "mailto:" + CART_EMAIL +
        "?subject=" + encodeURIComponent("New Order Request - Thistle & Thread") +
        "&body=" + encodeURIComponent(message);
}

document.addEventListener("DOMContentLoaded", renderCart);
