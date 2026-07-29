/* ==========================================================
   THISTLE & THREAD
   PRODUCT DETAIL PAGE
========================================================== */

const PRODUCTS = {

    "throw-1": {
        category: "Luxe Throws",
        categoryLink: "collection.html#luxe-throws",
        name: "Classic Luxe Throw",
        price: "₹12,500",
        description: "A beautifully knitted throw designed to bring softness and warmth to your home.",
        size: "70 × 50 cm",
        colors: [
            { name: "Beige", hex: "#ECE5DC", image: "images/throws/throw-1.jpg" },
            { name: "Cream", hex: "#F8F6F2", image: "images/throws/throw-1-cream.jpg" },
            { name: "Taupe", hex: "#D3C5B7", image: "images/throws/throw-1-taupe.jpg" }
        ]
    },

    "throw-2": {
        category: "Luxe Throws",
        categoryLink: "collection.html#luxe-throws",
        name: "Signature Knit Throw",
        price: "₹14,500",
        description: "A timeless knitted design crafted to complement elegant interiors.",
        size: "70 × 50 cm",
        colors: [
            { name: "Cream", hex: "#F8F6F2", image: "images/throws/throw-2.jpg" },
            { name: "Beige", hex: "#ECE5DC", image: "images/throws/throw-2-beige.jpg" },
            { name: "Sage", hex: "#8F9B8B", image: "images/throws/throw-2-sage.jpg" }
        ]
    },

    "throw-3": {
        category: "Luxe Throws",
        categoryLink: "collection.html#luxe-throws",
        name: "Textured Comfort Throw",
        price: "₹13,500",
        description: "A soft textured knit that combines everyday comfort with understated luxury.",
        size: "80 × 50 cm",
        colors: [
            { name: "Taupe", hex: "#D3C5B7", image: "images/throws/throw-3.jpg" },
            { name: "Charcoal", hex: "#2F2F2F", image: "images/throws/throw-3-charcoal.jpg" },
            { name: "Beige", hex: "#ECE5DC", image: "images/throws/throw-3-beige.jpg" }
        ]
    },

    "cushion-1": {
        category: "Designer Cushions",
        categoryLink: "collection.html#designer-cushions",
        name: "Signature Knit Cushion",
        price: "₹3,500",
        description: "A timeless knitted cushion designed to elevate your favourite spaces.",
        size: "45 × 45 cm",
        colors: [
            { name: "Natural", hex: "#EFE6D8", image: "images/cushions/cushion-1.jpg" },
            { name: "Beige", hex: "#ECE5DC", image: "images/cushions/cushion-1-beige.jpg" },
            { name: "Sage", hex: "#8F9B8B", image: "images/cushions/cushion-1-sage.jpg" }
        ]
    },

    "cushion-2": {
        category: "Designer Cushions",
        categoryLink: "collection.html#designer-cushions",
        name: "Textured Luxe Cushion",
        price: "₹4,000",
        description: "A beautifully textured design created for effortless interior styling.",
        size: "50 × 50 cm",
        colors: [
            { name: "Beige", hex: "#ECE5DC", image: "images/cushions/cushion-2.jpg" },
            { name: "Cream", hex: "#F8F6F2", image: "images/cushions/cushion-2-cream.jpg" },
            { name: "Taupe", hex: "#D3C5B7", image: "images/cushions/cushion-2-taupe.jpg" }
        ]
    },

    "cushion-3": {
        category: "Designer Cushions",
        categoryLink: "collection.html#designer-cushions",
        name: "Everyday Comfort Cushion",
        price: "₹3,800",
        description: "Soft, elegant and versatile, designed to bring comfort to everyday living.",
        size: "45 × 45 cm",
        colors: [
            { name: "Soft Grey", hex: "#C9C9C4", image: "images/cushions/cushion-3.jpg" },
            { name: "Charcoal", hex: "#2F2F2F", image: "images/cushions/cushion-3-charcoal.jpg" },
            { name: "Cream", hex: "#F8F6F2", image: "images/cushions/cushion-3-cream.jpg" }
        ]
    },

    "baby-blanket-1": {
        category: "Baby Blankets",
        categoryLink: "collection.html#baby-blankets",
        name: "Cloud Soft Baby Blanket",
        price: "₹4,500",
        description: "A beautifully soft knitted blanket designed to keep little ones warm and cosy.",
        size: "75 × 100 cm",
        colors: [
            { name: "Cream", hex: "#F8F6F2", image: "images/baby-blankets/baby-blanket-1.jpg" },
            { name: "Soft Pink", hex: "#F1D9D9", image: "images/baby-blankets/baby-blanket-1-pink.jpg" },
            { name: "Dusty Blue", hex: "#B7C4C9", image: "images/baby-blankets/baby-blanket-1-blue.jpg" }
        ]
    },

    "baby-blanket-2": {
        category: "Baby Blankets",
        categoryLink: "collection.html#baby-blankets",
        name: "Little Dreamer Blanket",
        price: "₹5,000",
        description: "A gentle knitted blanket made for peaceful naps and treasured moments.",
        size: "75 × 100 cm",
        colors: [
            { name: "Soft Pink", hex: "#F1D9D9", image: "images/baby-blankets/baby-blanket-2.jpg" },
            { name: "Cream", hex: "#F8F6F2", image: "images/baby-blankets/baby-blanket-2-cream.jpg" },
            { name: "Dusty Blue", hex: "#B7C4C9", image: "images/baby-blankets/baby-blanket-2-blue.jpg" }
        ]
    },

    "baby-blanket-3": {
        category: "Baby Blankets",
        categoryLink: "collection.html#baby-blankets",
        name: "Heirloom Baby Blanket",
        price: "₹5,500",
        description: "A timeless knitted piece designed to become part of precious family memories.",
        size: "80 × 110 cm",
        colors: [
            { name: "Sage", hex: "#8F9B8B", image: "images/baby-blankets/baby-blanket-3.jpg" },
            { name: "Beige", hex: "#ECE5DC", image: "images/baby-blankets/baby-blanket-3-beige.jpg" },
            { name: "Ivory", hex: "#F5F1E8", image: "images/baby-blankets/baby-blanket-3-ivory.jpg" }
        ]
    }

};

document.addEventListener("DOMContentLoaded", () => {

    const params = new URLSearchParams(window.location.search);
    const requestedId = params.get("id");
    const product = PRODUCTS[requestedId] || PRODUCTS["throw-1"];

    const mainImage = document.getElementById("main-image");
    const thumbnailRow = document.getElementById("thumbnail-row");
    const colorSwatches = document.getElementById("color-swatches");
    const selectedColourLabel = document.getElementById("selected-colour");
    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.getElementById("lightbox-image");
    const breadcrumbCategory = document.getElementById("breadcrumb-category");

    document.title = product.name + " | Thistle & Thread";
    breadcrumbCategory.textContent = product.category;
    breadcrumbCategory.href = product.categoryLink;
    document.getElementById("breadcrumb-name").textContent = product.name;
    document.getElementById("product-name").textContent = product.name;
    document.getElementById("product-price").textContent = product.price;
    document.getElementById("product-description").textContent = product.description;
    document.getElementById("product-size").textContent = product.size;

    function renderColor(index){

        const color = product.colors[index];

        mainImage.src = color.image;
        mainImage.alt = product.name + " in " + color.name;
        lightboxImage.src = color.image;
        lightboxImage.alt = mainImage.alt;
        selectedColourLabel.textContent = color.name;

        [...colorSwatches.children].forEach((swatch, i) => {
            swatch.classList.toggle("active", i === index);
        });

        [...thumbnailRow.children].forEach((thumb, i) => {
            thumb.classList.toggle("active", i === index);
        });

    }

    product.colors.forEach((color, index) => {

        const swatch = document.createElement("button");
        swatch.type = "button";
        swatch.className = "swatch";
        swatch.style.background = color.hex;
        swatch.title = color.name;
        swatch.setAttribute("aria-label", "Select colour " + color.name);
        swatch.addEventListener("click", () => renderColor(index));
        colorSwatches.appendChild(swatch);

        const thumb = document.createElement("button");
        thumb.type = "button";
        thumb.className = "thumbnail";
        thumb.setAttribute("aria-label", "Preview " + color.name);

        const thumbImg = document.createElement("img");
        thumbImg.src = color.image;
        thumbImg.alt = product.name + " in " + color.name;
        thumb.appendChild(thumbImg);

        thumb.addEventListener("click", () => renderColor(index));
        thumbnailRow.appendChild(thumb);

    });

    renderColor(0);

    function openLightbox(){
        lightbox.classList.add("open");
    }

    function closeLightbox(){
        lightbox.classList.remove("open");
    }

    document.getElementById("preview-btn").addEventListener("click", (e) => {
        e.stopPropagation();
        openLightbox();
    });

    document.getElementById("main-image-wrap").addEventListener("click", openLightbox);
    document.getElementById("lightbox-close").addEventListener("click", closeLightbox);

    lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) closeLightbox();
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") closeLightbox();
    });

    const addToCartBtn = document.getElementById("add-to-cart-btn");

    addToCartBtn.addEventListener("click", () => {
        const original = addToCartBtn.textContent;
        addToCartBtn.textContent = "Added ✓";
        setTimeout(() => { addToCartBtn.textContent = original; }, 1500);
    });

});
