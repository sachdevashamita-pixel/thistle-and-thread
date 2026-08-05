/* ==========================================================
   THISTLE & THREAD
   PRODUCT DETAIL PAGE
========================================================== */

const WHATSAPP_LINK = "https://wa.me/919811987106";
const INSTAGRAM_LINK = "https://www.instagram.com/thistle_nd_thread?igsh=ODRyOG8xc2U2cXo2";

const PRODUCTS = {
    "throw-christmas-tree": {
        category: "Luxe Throws",
        categoryLink: "throws.html",
        name: "Christmas Tree Print Throw",
        price: "\u20b93,500",
        priceNote: "",
        description: "A festive knitted throw with green Christmas trees and red stars, perfect for cosy winter evenings.",
        size: "70 x 100 cm",
        personalizable: false,
        colors: [
            { name: "Natural", image: "images/throws/throw-christmas-tree.jpg" }
        ]
    },

    "throw-maze-red": {
        category: "Luxe Throws",
        categoryLink: "throws.html",
        name: "Red Maze Print Throw",
        price: "\u20b93,500",
        priceNote: "",
        description: "A bold geometric maze pattern knitted in red and cream for a graphic, modern look.",
        size: "70 x 100 cm",
        personalizable: false,
        colors: [
            { name: "Red", image: "images/throws/throw-maze-red.jpg" }
        ]
    },

    "throw-checkerboard-green": {
        category: "Luxe Throws",
        categoryLink: "throws.html",
        name: "Green Checkerboard Throw",
        price: "\u20b93,500",
        priceNote: "",
        description: "A classic diamond checkerboard knit in soft green and cream tones.",
        size: "70 x 100 cm",
        personalizable: false,
        colors: [
            { name: "Green", image: "images/throws/throw-checkerboard-green.jpg" }
        ]
    },

    "throw-diamond-red": {
        category: "Luxe Throws",
        categoryLink: "throws.html",
        name: "Red Diamond Check Throw",
        price: "\u20b93,500",
        priceNote: "",
        description: "A warm red and cream diamond check, knitted for everyday elegance.",
        size: "70 x 100 cm",
        personalizable: false,
        colors: [
            { name: "Red", image: "images/throws/throw-diamond-red.jpg" }
        ]
    },

    "throw-stripe-christmas": {
        category: "Luxe Throws",
        categoryLink: "throws.html",
        name: "Christmas Stripe Throw",
        price: "\u20b93,500",
        priceNote: "",
        description: "Bold red, white and green vertical stripes knitted into a festive statement throw.",
        size: "70 x 100 cm",
        personalizable: false,
        colors: [
            { name: "Multicolour", image: "images/throws/throw-stripe-christmas.jpg" }
        ]
    },

    "throw-chevron-border-cream": {
        category: "Luxe Throws",
        categoryLink: "throws.html",
        name: "Chevron Border Throw",
        price: "\u20b93,500",
        priceNote: "",
        description: "A textured cream knit finished with a bold chevron border in deep green.",
        size: "70 x 100 cm",
        personalizable: false,
        colors: [
            { name: "Cream", image: "images/throws/throw-chevron-border-cream.jpg" }
        ]
    },

    "throw-reindeer": {
        category: "Luxe Throws",
        categoryLink: "throws.html",
        name: "Reindeer Fair Isle Throw",
        price: "\u20b93,500",
        priceNote: "",
        description: "A classic fair isle reindeer motif bordered with a traditional snowflake pattern.",
        size: "70 x 100 cm",
        personalizable: false,
        colors: [
            { name: "Natural", image: "images/throws/throw-reindeer.jpg" }
        ]
    },

    "throw-solid-classic": {
        category: "Luxe Throws",
        categoryLink: "throws.html",
        name: "Classic Solid Throw",
        price: "\u20b93,500",
        priceNote: "",
        description: "A timeless solid knit throw in a soft, everyday palette, available in five colours.",
        size: "70 x 100 cm",
        personalizable: false,
        colors: [
            { name: "Mint", image: "images/throws/throw-solid-mint.jpg" },
            { name: "Green", image: "images/throws/throw-solid-green.jpg" },
            { name: "Orange", image: "images/throws/throw-solid-orange.jpg" },
            { name: "Pink", image: "images/throws/throw-solid-pink.jpg" },
            { name: "Navy", image: "images/throws/throw-solid-navy.jpg" }
        ]
    },

    "throw-stripe-multicolor": {
        category: "Luxe Throws",
        categoryLink: "throws.html",
        name: "Multicolour Stripe Throw",
        price: "\u20b93,500",
        priceNote: "",
        description: "A cream base knitted with playful pink, grey and mustard stripes.",
        size: "70 x 100 cm",
        personalizable: false,
        colors: [
            { name: "Cream Multi", image: "images/throws/throw-stripe-multicolor.jpg" }
        ]
    },

    "throw-colorblock": {
        category: "Luxe Throws",
        categoryLink: "throws.html",
        name: "Colour Block Throw",
        price: "\u20b93,500",
        priceNote: "",
        description: "Rich maroon, pink and sage colour-blocking knitted into one elegant throw.",
        size: "70 x 100 cm",
        personalizable: false,
        colors: [
            { name: "Multicolour", image: "images/throws/throw-colorblock.jpg" }
        ]
    },

    "throw-speckle": {
        category: "Luxe Throws",
        categoryLink: "throws.html",
        name: "Speckle Print Throw",
        price: "\u20b93,500",
        priceNote: "",
        description: "A marled speckle knit with a graphic, textural finish, available in two colourways.",
        size: "70 x 100 cm",
        personalizable: false,
        colors: [
            { name: "Black", image: "images/throws/throw-speckle-black.jpg" },
            { name: "Cream", image: "images/throws/throw-speckle-cream.jpg" }
        ]
    },

    "throw-marble": {
        category: "Luxe Throws",
        categoryLink: "throws.html",
        name: "Marble Print Throw",
        price: "\u20b93,500",
        priceNote: "",
        description: "An abstract marbled knit in black and white for a bold, modern edge.",
        size: "70 x 100 cm",
        personalizable: false,
        colors: [
            { name: "Black/White", image: "images/throws/throw-marble.jpg" }
        ]
    },

    "throw-houndstooth-black": {
        category: "Luxe Throws",
        categoryLink: "throws.html",
        name: "Houndstooth Throw",
        price: "\u20b93,500",
        priceNote: "",
        description: "A timeless houndstooth check knitted in black and cream.",
        size: "70 x 100 cm",
        personalizable: false,
        colors: [
            { name: "Black", image: "images/throws/throw-houndstooth-black.jpg" }
        ]
    },

    "throw-petal-black": {
        category: "Luxe Throws",
        categoryLink: "throws.html",
        name: "Petal Print Throw",
        price: "\u20b93,500",
        priceNote: "",
        description: "Soft cream petal motifs knitted onto a deep black ground.",
        size: "70 x 100 cm",
        personalizable: false,
        colors: [
            { name: "Black", image: "images/throws/throw-petal-black.jpg" }
        ]
    },

    "throw-chevron-zigzag": {
        category: "Luxe Throws",
        categoryLink: "throws.html",
        name: "Chevron Zigzag Throw",
        price: "\u20b93,500",
        priceNote: "",
        description: "A sharp zigzag chevron knit, available in a warm tan or bold black colourway.",
        size: "70 x 100 cm",
        personalizable: false,
        colors: [
            { name: "Tan", image: "images/throws/throw-chevron-zigzag-tan.jpg" },
            { name: "Black", image: "images/throws/throw-chevron-zigzag-black.jpg" }
        ]
    },

    "throw-star-houndstooth": {
        category: "Luxe Throws",
        categoryLink: "throws.html",
        name: "Star Houndstooth Throw",
        price: "\u20b93,500",
        priceNote: "",
        description: "A playful star-shaped houndstooth knit in navy and cream.",
        size: "70 x 100 cm",
        personalizable: false,
        colors: [
            { name: "Navy", image: "images/throws/throw-star-houndstooth.jpg" }
        ]
    },

    "throw-tartan-plaid": {
        category: "Luxe Throws",
        categoryLink: "throws.html",
        name: "Tartan Plaid Sherpa Throw",
        price: "\u20b95,500",
        priceNote: "",
        description: "A classic red and green tartan knit backed with soft sherpa fleece.",
        size: "70 x 100 cm",
        personalizable: false,
        colors: [
            { name: "Multicolour", image: "images/throws/throw-tartan-plaid.jpg" }
        ]
    },

    "throw-fringed-cream": {
        category: "Luxe Throws",
        categoryLink: "throws.html",
        name: "Fringed Knit Throw",
        price: "\u20b93,500",
        priceNote: "",
        description: "A simple, textured cream knit finished with a soft tasselled fringe.",
        size: "70 x 100 cm",
        personalizable: false,
        colors: [
            { name: "Cream", image: "images/throws/throw-fringed-cream.jpg" }
        ]
    },

    "throw-houndstooth-fold": {
        category: "Luxe Throws",
        categoryLink: "throws.html",
        name: "Houndstooth Check Throw",
        price: "\u20b93,500",
        priceNote: "",
        description: "A classic black and cream houndstooth check, knitted into a soft, foldable throw.",
        size: "70 x 100 cm",
        personalizable: false,
        colors: [
            { name: "Black", image: "images/throws/throw-houndstooth-fold.jpg" }
        ]
    },

    "weighted-blanket-classic": {
        category: "Weighted Blankets",
        categoryLink: "weighted-blankets.html",
        name: "Classic Weighted Blanket",
        price: "\u20b95,500",
        priceNote: "",
        description: "A gently weighted knitted blanket with a soft bobble texture, designed to bring calm and comfort.",
        size: "100 x 150 cm",
        personalizable: false,
        colors: [
            { name: "Pink", image: "images/throws/weighted-blanket-pink.jpg" },
            { name: "Green", image: "images/throws/weighted-blanket-green.jpg" }
        ]
    },

    "cushion-polka-dot": {
        category: "Designer Cushions",
        categoryLink: "cushions.html",
        name: "Polka Dot Cushion",
        price: "\u20b9900",
        priceNote: "",
        description: "A soft pink knitted cushion scattered with cream polka dots.",
        size: "45 x 45 cm",
        personalizable: false,
        colors: [
            { name: "Pink", image: "images/cushions/cushion-polka-dot.jpg" }
        ]
    },

    "cushion-plaid": {
        category: "Designer Cushions",
        categoryLink: "cushions.html",
        name: "Plaid Cushion",
        price: "\u20b9900",
        priceNote: "",
        description: "A boucle plaid cushion with a bold graphic check, available in two colourways.",
        size: "45 x 45 cm",
        personalizable: false,
        colors: [
            { name: "Blue", image: "images/cushions/cushion-plaid-blue.jpg" },
            { name: "Red", image: "images/cushions/cushion-plaid-red.jpg" }
        ]
    },

    "cushion-rainbow": {
        category: "Designer Cushions",
        categoryLink: "cushions.html",
        name: "Rainbow Cushion",
        price: "\u20b9900",
        priceNote: "",
        description: "A cheerful boucle cushion with a knitted rainbow and cloud motif.",
        size: "45 x 45 cm",
        personalizable: false,
        colors: [
            { name: "Cream", image: "images/cushions/cushion-rainbow.jpg" }
        ]
    },

    "cushion-heart": {
        category: "Designer Cushions",
        categoryLink: "cushions.html",
        name: "Heart Print Cushion",
        price: "\u20b9900",
        priceNote: "",
        description: "A soft boucle cushion scattered with a gentle heart print.",
        size: "45 x 45 cm",
        personalizable: false,
        colors: [
            { name: "Cream", image: "images/cushions/cushion-heart.jpg" }
        ]
    },

    "cushion-cat-face": {
        category: "Designer Cushions",
        categoryLink: "cushions.html",
        name: "Cat Face Cushion",
        price: "\u20b9900",
        priceNote: "",
        description: "A friendly knitted cat-face cushion in a warm orange knit.",
        size: "45 x 45 cm",
        personalizable: false,
        colors: [
            { name: "Orange", image: "images/cushions/cushion-cat-face.jpg" }
        ]
    },

    "cushion-candy-cane": {
        category: "Designer Cushions",
        categoryLink: "cushions.html",
        name: "Candy Cane Cushion",
        price: "\u20b9900",
        priceNote: "",
        description: "A festive red and cream cushion knitted with a candy cane motif.",
        size: "45 x 45 cm",
        personalizable: false,
        colors: [
            { name: "Red", image: "images/cushions/cushion-candy-cane.jpg" }
        ]
    },

    "baby-blanket-zebra": {
        category: "Baby Blankets",
        categoryLink: "baby-blankets.html",
        name: "Zebra Baby Blanket",
        price: "\u20b93,000",
        priceNote: "",
        description: "A beautifully soft knitted blanket with a playful zebra motif, designed to keep little ones warm and cosy.",
        size: "75 x 100 cm",
        personalizable: false,
        colors: [
            { name: "Grey", image: "images/baby/baby-blanket-zebra.jpg" }
        ]
    },

    "baby-blanket-fox": {
        category: "Baby Blankets",
        categoryLink: "baby-blankets.html",
        name: "Fox Print Baby Blanket",
        price: "\u20b93,000",
        priceNote: "",
        description: "A gentle knitted blanket featuring a sweet fox face on a soft blue ground.",
        size: "75 x 100 cm",
        personalizable: false,
        colors: [
            { name: "Blue", image: "images/baby/baby-blanket-fox.jpg" }
        ]
    },

    "baby-blanket-fruit": {
        category: "Baby Blankets",
        categoryLink: "baby-blankets.html",
        name: "Fruit Print Baby Blanket",
        price: "\u20b93,000",
        priceNote: "",
        description: "A cheerful geometric fruit print knitted in warm orange, mint and olive tones.",
        size: "75 x 100 cm",
        personalizable: false,
        colors: [
            { name: "Multicolour", image: "images/baby/baby-blanket-fruit.jpg" }
        ]
    },

    "baby-blanket-dinosaur": {
        category: "Baby Blankets",
        categoryLink: "baby-blankets.html",
        name: "Dinosaur Baby Blanket",
        price: "\u20b93,000",
        priceNote: "",
        description: "An adventurous knitted blanket featuring playful dinosaur motifs on a soft cream ground.",
        size: "75 x 100 cm",
        personalizable: false,
        colors: [
            { name: "Cream", image: "images/baby/baby-blanket-dinosaur.jpg" }
        ]
    },

    "baby-blanket-bunny": {
        category: "Baby Blankets",
        categoryLink: "baby-blankets.html",
        name: "Bunny Silhouette Baby Blanket",
        price: "\u20b93,000",
        priceNote: "",
        description: "A dreamy knitted blanket with a soft bunny silhouette print.",
        size: "75 x 100 cm",
        personalizable: false,
        colors: [
            { name: "Pink", image: "images/baby/baby-blanket-bunny.jpg" }
        ]
    },

    "baby-blanket-scallop": {
        category: "Baby Blankets",
        categoryLink: "baby-blankets.html",
        name: "Scallop Print Baby Blanket",
        price: "\u20b93,000",
        priceNote: "",
        description: "A bright scallop print knitted in orange, blue and white for playful nursery styling.",
        size: "75 x 100 cm",
        personalizable: false,
        colors: [
            { name: "Multicolour", image: "images/baby/baby-blanket-scallop.jpg" }
        ]
    },

    "baby-blanket-giraffe": {
        category: "Baby Blankets",
        categoryLink: "baby-blankets.html",
        name: "Giraffe Baby Blanket",
        price: "\u20b93,000",
        priceNote: "",
        description: "A cherished knitted blanket featuring a friendly giraffe motif on a rich blue ground.",
        size: "75 x 100 cm",
        personalizable: false,
        colors: [
            { name: "Blue", image: "images/baby/baby-blanket-giraffe.jpg" }
        ]
    },

    "baby-blanket-pink-solid": {
        category: "Baby Blankets",
        categoryLink: "baby-blankets.html",
        name: "Solid Pink Baby Blanket",
        price: "\u20b93,000",
        priceNote: "",
        description: "A simple, soft knitted blanket in a gentle solid pink.",
        size: "75 x 100 cm",
        personalizable: false,
        colors: [
            { name: "Pink", image: "images/baby/baby-blanket-pink-solid.jpg" }
        ]
    },

    "baby-blanket-sailboat": {
        category: "Baby Blankets",
        categoryLink: "baby-blankets.html",
        name: "Sailboat Baby Blanket",
        price: "\u20b93,000",
        priceNote: "",
        description: "A knitted blanket in soft teal, patterned with sailboats and anchors.",
        size: "75 x 100 cm",
        personalizable: false,
        colors: [
            { name: "Teal", image: "images/baby/baby-blanket-sailboat.jpg" }
        ]
    },

    "baby-blanket-personalized-bunny": {
        category: "Baby Blankets",
        categoryLink: "baby-blankets.html",
        name: "Personalized Bunny Baby Blanket",
        price: "\u20b93,000",
        priceNote: "",
        description: "A soft pink knitted blanket with a bunny motif, personalised with your little one's name.",
        size: "75 x 100 cm",
        personalizable: true,
        colors: [
            { name: "Pink", image: "images/baby/baby-blanket-personalized-bunny.jpg" }
        ]
    },

    "baby-blanket-personalized-name": {
        category: "Baby Blankets",
        categoryLink: "baby-blankets.html",
        name: "Personalized Name Baby Blanket",
        price: "\u20b93,000",
        priceNote: "",
        description: "A soft knitted blanket personalised with your little one's name, available in two colourways.",
        size: "75 x 100 cm",
        personalizable: true,
        colors: [
            { name: "Blue Clouds", image: "images/baby/baby-blanket-personalized-clouds.jpg" },
            { name: "Pink", image: "images/baby/baby-blanket-personalized-pink.jpg" }
        ]
    },

    "laptop-sleeve-woven-stripe": {
        category: "Laptop Sleeves",
        categoryLink: "laptop-sleeves.html",
        name: "Woven Stripe Laptop Sleeve",
        price: "\u20b91,200",
        priceNote: "",
        description: "A structured laptop sleeve knitted in a graphic black, grey and cream stripe.",
        size: "Fits up to 14\u2033 laptops",
        personalizable: false,
        colors: [
            { name: "Black/Cream", image: "images/laptop-sleeves/laptop-sleeve-woven-stripe.jpg" }
        ]
    },

    "laptop-sleeve-grey-tweed": {
        category: "Laptop Sleeves",
        categoryLink: "laptop-sleeves.html",
        name: "Grey Tweed Laptop Sleeve",
        price: "\u20b91,200",
        priceNote: "",
        description: "A softly textured tweed-knit laptop sleeve in classic grey.",
        size: "Fits up to 14\u2033 laptops",
        personalizable: false,
        colors: [
            { name: "Grey", image: "images/laptop-sleeves/laptop-sleeve-grey-tweed.jpg" }
        ]
    },

    "laptop-sleeve-orange-tweed": {
        category: "Laptop Sleeves",
        categoryLink: "laptop-sleeves.html",
        name: "Orange Tweed Laptop Sleeve",
        price: "\u20b91,200",
        priceNote: "",
        description: "A softly textured tweed-knit laptop sleeve in a warm burnt orange.",
        size: "Fits up to 14\u2033 laptops",
        personalizable: false,
        colors: [
            { name: "Orange", image: "images/laptop-sleeves/laptop-sleeve-orange-tweed.jpg" }
        ]
    },

    "laptop-sleeve-cream-ribbed": {
        category: "Laptop Sleeves",
        categoryLink: "laptop-sleeves.html",
        name: "Cream Ribbed Laptop Sleeve",
        price: "\u20b91,200",
        priceNote: "",
        description: "A simple ribbed-knit laptop sleeve in a versatile cream.",
        size: "Fits up to 14\u2033 laptops",
        personalizable: false,
        colors: [
            { name: "Cream", image: "images/laptop-sleeves/laptop-sleeve-cream-ribbed.jpg" }
        ]
    },

    "laptop-sleeve-quilted": {
        category: "Laptop Sleeves",
        categoryLink: "laptop-sleeves.html",
        name: "Quilted Laptop Sleeve",
        price: "\u20b91,200",
        priceNote: "",
        description: "A softly quilted laptop sleeve, available in five colours.",
        size: "Fits up to 14\u2033 laptops",
        personalizable: false,
        colors: [
            { name: "Yellow", image: "images/laptop-sleeves/laptop-sleeve-quilted-yellow.jpg" },
            { name: "Charcoal", image: "images/laptop-sleeves/laptop-sleeve-quilted-charcoal.jpg" },
            { name: "Grey", image: "images/laptop-sleeves/laptop-sleeve-quilted-grey.jpg" },
            { name: "Brown", image: "images/laptop-sleeves/laptop-sleeve-quilted-brown.jpg" },
            { name: "Beige", image: "images/laptop-sleeves/laptop-sleeve-quilted-beige.jpg" }
        ]
    },

    "pouch-fern": {
        category: "Knit Pouches",
        categoryLink: "pouches.html",
        name: "Fern Print Pouch",
        price: "\u20b91,200",
        priceNote: "",
        description: "A soft knitted pouch featuring a fern leaf print on a sage ground.",
        size: "24 x 17 cm",
        personalizable: false,
        colors: [
            { name: "Green", image: "images/pouches/pouch-fern.jpg" }
        ]
    },

    "pouch-christmas-tree": {
        category: "Knit Pouches",
        categoryLink: "pouches.html",
        name: "Christmas Tree Pouch",
        price: "\u20b91,200",
        priceNote: "",
        description: "A festive boucle pouch knitted with a repeating Christmas tree print.",
        size: "24 x 17 cm",
        personalizable: false,
        colors: [
            { name: "Red", image: "images/pouches/pouch-christmas-tree.jpg" }
        ]
    },

    "pouch-cream-textured": {
        category: "Knit Pouches",
        categoryLink: "pouches.html",
        name: "Textured Cream Pouch",
        price: "\u20b91,200",
        priceNote: "",
        description: "A simple, versatile knitted pouch in a soft textured cream.",
        size: "24 x 17 cm",
        personalizable: false,
        colors: [
            { name: "Cream", image: "images/pouches/pouch-cream-textured.jpg" }
        ]
    },

    "toy-horse": {
        category: "Shaped Toys",
        categoryLink: "shaped-toys.html",
        name: "Horse Shaped Toy",
        price: "\u20b9800",
        priceNote: "",
        description: "A charming horse-shaped knitted toy in a soft striped knit.",
        size: "",
        personalizable: false,
        colors: [
            { name: "Striped", image: "images/shaped-toys/toy-horse.jpg" }
        ]
    },

    "toy-dinosaur": {
        category: "Shaped Toys",
        categoryLink: "shaped-toys.html",
        name: "Dinosaur Shaped Toy",
        price: "\u20b91,200",
        priceNote: "",
        description: "A playful dinosaur-shaped knitted toy in navy and cream stripes.",
        size: "",
        personalizable: false,
        colors: [
            { name: "Navy Stripe", image: "images/shaped-toys/toy-dinosaur.jpg" }
        ]
    },

    "toy-cloud": {
        category: "Shaped Toys",
        categoryLink: "shaped-toys.html",
        name: "Cloud Shaped Toy",
        price: "\u20b91,200",
        priceNote: "",
        description: "A smiling cloud-shaped knitted toy in soft cream.",
        size: "",
        personalizable: false,
        colors: [
            { name: "Cream", image: "images/shaped-toys/toy-cloud.jpg" }
        ]
    },

    "toy-cat-face": {
        category: "Shaped Toys",
        categoryLink: "shaped-toys.html",
        name: "Cat Face Shaped Toy",
        price: "\u20b91,200",
        priceNote: "",
        description: "A round, friendly cat-face knitted toy in soft grey.",
        size: "",
        personalizable: false,
        colors: [
            { name: "Grey", image: "images/shaped-toys/toy-cat-face.jpg" }
        ]
    },

    "toy-ball": {
        category: "Shaped Toys",
        categoryLink: "shaped-toys.html",
        name: "Ball Toy",
        price: "\u20b9800",
        priceNote: "",
        description: "A playful round knitted toy, available in a bold polka dot or soft checkerboard pattern.",
        size: "",
        personalizable: false,
        colors: [
            { name: "Polka Dot", image: "images/shaped-toys/toy-ball-polka-dot.jpg" },
            { name: "Checker", image: "images/shaped-toys/toy-ball-checker.jpg" }
        ]
    },

    "toy-heart": {
        category: "Shaped Toys",
        categoryLink: "shaped-toys.html",
        name: "Heart Shaped Toy",
        price: "\u20b91,200",
        priceNote: "",
        description: "A soft heart-shaped knitted toy in a gentle cream tone.",
        size: "",
        personalizable: false,
        colors: [
            { name: "Cream", image: "images/shaped-toys/toy-heart.jpg" }
        ]
    },

    "toy-star": {
        category: "Shaped Toys",
        categoryLink: "shaped-toys.html",
        name: "Star Shaped Toy",
        price: "\u20b91,200",
        priceNote: "",
        description: "A star-shaped knitted toy finished with a soft chevron texture.",
        size: "",
        personalizable: false,
        colors: [
            { name: "Pink", image: "images/shaped-toys/toy-star.jpg" }
        ]
    },

    "toy-fish": {
        category: "Shaped Toys",
        categoryLink: "shaped-toys.html",
        name: "Fish Shaped Toy",
        price: "\u20b91,200",
        priceNote: "",
        description: "A charming fish-shaped knitted toy finished with a soft fringed tail.",
        size: "",
        personalizable: false,
        colors: [
            { name: "Cream", image: "images/shaped-toys/toy-fish.jpg" }
        ]
    },

};

document.addEventListener("DOMContentLoaded", () => {

    const params = new URLSearchParams(window.location.search);
    const requestedId = params.get("id");
    const productId = PRODUCTS[requestedId] ? requestedId : "throw-christmas-tree";
    const product = PRODUCTS[productId];

    const mainImage = document.getElementById("main-image");
    const thumbnailRow = document.getElementById("thumbnail-row");
    const colorSwatches = document.getElementById("color-swatches");
    const selectedColourLabel = document.getElementById("selected-colour");
    const optionGroup = document.getElementById("option-group");
    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.getElementById("lightbox-image");
    const breadcrumbCategory = document.getElementById("breadcrumb-category");
    const personalizeField = document.getElementById("personalize-field");
    const whatsappLink = document.getElementById("whatsapp-link");
    const instagramLink = document.getElementById("instagram-link");
    const contactWhatsapp = document.getElementById("contact-whatsapp");
    const contactInstagram = document.getElementById("contact-instagram");

    document.title = product.name + " | Thistle & Thread";
    breadcrumbCategory.textContent = product.category;
    breadcrumbCategory.href = product.categoryLink;
    document.getElementById("breadcrumb-name").textContent = product.name;
    document.getElementById("product-name").textContent = product.name;
    document.getElementById("product-price").textContent = product.price;
    document.getElementById("product-description").textContent = product.description;

    const priceNoteEl = document.getElementById("product-price-note");
    if (product.priceNote) {
        priceNoteEl.textContent = product.priceNote;
        priceNoteEl.style.display = "";
    } else {
        priceNoteEl.style.display = "none";
    }

    if (product.size) {
        document.getElementById("size-row").style.display = "";
        document.getElementById("product-size").textContent = product.size;
    } else {
        document.getElementById("size-row").style.display = "none";
    }

    if (product.colors.length > 1) {
        optionGroup.style.display = "";
    } else {
        optionGroup.style.display = "none";
    }

    if (product.personalizable) {
        personalizeField.style.display = "";
    } else {
        personalizeField.style.display = "none";
    }

    whatsappLink.href = WHATSAPP_LINK;
    instagramLink.href = INSTAGRAM_LINK;
    contactWhatsapp.href = WHATSAPP_LINK;
    contactInstagram.href = INSTAGRAM_LINK;

    let currentColorIndex = 0;

    function renderColor(index){

        currentColorIndex = index;
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

    colorSwatches.innerHTML = "";
    thumbnailRow.innerHTML = "";

    product.colors.forEach((color, index) => {

        const swatch = document.createElement("button");
        swatch.type = "button";
        swatch.className = "variant-pill";
        swatch.textContent = color.name;
        swatch.setAttribute("aria-label", "Select " + color.name);

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
        const color = product.colors[currentColorIndex];
        const personalizeInput = document.getElementById("personalize-input");
        const personalizeName = product.personalizable && personalizeInput
            ? personalizeInput.value.trim()
            : "";

        addToCart({
            productId: productId,
            name: product.name,
            variantName: color.name,
            variantImage: color.image,
            personalizeName: personalizeName,
            quantity: 1
        });

        const original = addToCartBtn.textContent;
        addToCartBtn.textContent = "Added ✓";
        setTimeout(() => { addToCartBtn.textContent = original; }, 1500);
    });

});
