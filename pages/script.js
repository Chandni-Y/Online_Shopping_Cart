// script.js

// Mock Product Data with various categories and more items
const products = [
    // --- Electronics ---
    // Laptops (10 items)
    { id: 101, name: "MacBook Air M3", price: 119999, image: "https://images.unsplash.com/photo-1629131610425-4c07d30d1d73?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80", badge: "New", category: "Electronics" },
    { id: 102, name: "Dell XPS 15", price: 145000, image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80", category: "Electronics" },
    { id: 103, name: "HP Spectre x360", price: 120000, image: "https://images.unsplash.com/photo-1601933973783-a717b6b00511?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80", category: "Electronics" },
    { id: 104, name: "Lenovo ThinkPad X1 Carbon", price: 130000, image: "https://images.unsplash.com/photo-1547082260-262174c81b5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80", category: "Electronics" },
    { id: 105, name: "ASUS ROG Zephyrus G14", price: 155000, image: "https://images.unsplash.com/photo-1593642702749-bf917539958c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80", category: "Electronics" },
    { id: 106, name: "Microsoft Surface Laptop 5", price: 105000, image: "https://images.unsplash.com/photo-1618424269818-f2b733077e92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80", category: "Electronics" },
    { id: 107, name: "Acer Swift 3", price: 78000, image: "https://images.unsplash.com/photo-1561081047-926f2122394a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80", category: "Electronics" },
    { id: 108, name: "Razer Blade 15", price: 170000, image: "https://images.unsplash.com/photo-1605556784013-64472c914e91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80", category: "Electronics" },
    { id: 109, name: "Google Pixelbook Go", price: 65000, image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80", category: "Electronics" }, // Using Kindle for a generic laptop look
    { id: 110, name: "MSI GE76 Raider", price: 185000, image: "https://images.unsplash.com/photo-1607853202273-797f1c22a38e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80", category: "Electronics" }, // Reusing console for generic gaming laptop

    // Smartphones (10 items)
    { id: 201, name: "iPhone 15 Pro Max", price: 139900, image: "https://images.unsplash.com/photo-1695048132580-3f5b1b9b0b0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80", badge: "Hot", category: "Electronics" },
    { id: 202, name: "Samsung Galaxy S24 Ultra", price: 115000, image: "https://images.unsplash.com/photo-1693892795892-70b991ef2301?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80", category: "Electronics" },
    { id: 203, name: "Google Pixel 8 Pro", price: 89000, image: "https://images.unsplash.com/photo-1681755106179-8d7d9e7d9b01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80", category: "Electronics" },
    { id: 204, name: "OnePlus 12", price: 64999, image: "https://images.unsplash.com/photo-1691238914041-e97d1b1f1f9e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80", category: "Electronics" },
    { id: 205, name: "Xiaomi 14 Ultra", price: 95000, image: "https://images.unsplash.com/photo-1667468161726-2a77f39d1b64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80", category: "Electronics" }, // Generic phone image
    { id: 206, name: "Realme 12 Pro+", price: 29999, image: "https://images.unsplash.com/photo-1621601633534-1c6b1b70c32f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80", category: "Electronics" }, // Another generic phone
    { id: 207, name: "Vivo X100 Pro", price: 85000, image: "https://images.unsplash.com/photo-1601784553319-a1b7e4f8d5e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80", category: "Electronics" }, // Phone with bright background
    { id: 208, name: "OPPO Find X7 Ultra", price: 90000, image: "https://images.unsplash.com/photo-1616719830509-c18749f121d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80", category: "Electronics" }, // General tech/phone
    { id: 209, name: "Nothing Phone (2)", price: 44999, image: "https://images.unsplash.com/photo-1688661642878-a006c9a7b973?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80", category: "Electronics" }, // Nothing phone
    { id: 210, name: "iQOO 12 5G", price: 49999, image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80", category: "Electronics" }, // Generic tech device

    // Headphones & Audio (10 items)
    { id: 301, name: "Sony WH-1000XM5", price: 29990, image: "https://images.unsplash.com/photo-1655720828012-585df65945f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80", category: "Electronics" },
    { id: 302, name: "Apple AirPods Pro 2nd Gen", price: 24900, image: "https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80", category: "Electronics" },
    { id: 303, name: "Bose QuietComfort Earbuds II", price: 22999, image: "https://images.unsplash.com/photo-1616719830509-c18749f121d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80", category: "Electronics" },
    { id: 304, name: "Sennheiser Momentum 4 Wireless", price: 28990, image: "https://images.unsplash.com/photo-1625902150892-2591e13028b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80", category: "Electronics" }, // Sennheiser headphones
    { id: 305, name: "JBL Flip 6 Portable Speaker", price: 8999, image: "https://images.unsplash.com/photo-1617462066228-b2a30b5d9e5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80", category: "Electronics" }, // JBL speaker
    { id: 306, name: "Audio-Technica ATH-M50x", price: 12500, image: "https://images.unsplash.com/photo-1546435677-2e1d035f56b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80", category: "Electronics" }, // Audio Technica headphones
    { id: 307, name: "Skullcandy Crusher ANC 2", price: 16999, image: "https://images.unsplash.com/photo-1579737107871-3c22b9c7b9c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80", category: "Electronics" }, // Skullcandy headphones
    { id: 308, name: "Marshall Acton III Speaker", price: 27999, image: "https://images.unsplash.com/photo-1619853929424-69b5966a01b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80", category: "Electronics" }, // Marshall speaker
    { id: 309, name: "Boat Airdopes 131", price: 1299, image: "https://images.unsplash.com/photo-1610438072709-a75d5a2d1d2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80", category: "Electronics" }, // Boat airdopes
    { id: 310, name: "Bose SoundLink Revolve+", price: 21900, image: "https://images.unsplash.com/photo-1546876104-e3a53e920d3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80", category: "Electronics" }, // Bose speaker

    // Gaming Consoles & Accessories (10 items)
    { id: 401, name: "PlayStation 5 Slim", price: 49990, image: "https://images.unsplash.com/photo-1607853202273-797f1c22a38e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80", category: "Electronics" },
    { id: 402, name: "Xbox Series X", price: 47990, image: "https://images.unsplash.com/photo-1607853202273-797f1c22a38e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80", category: "Electronics" }, // Reusing Xbox image for now
    { id: 403, name: "Nintendo Switch OLED", price: 34999, image: "https://images.unsplash.com/photo-1638547733529-ee5d5033c01a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80", category: "Electronics" },
    { id: 404, name: "Sony DualSense Controller", price: 5999, image: "https://images.unsplash.com/photo-1606144044199-52d9b6d6d4a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80", category: "Electronics" }, // PS5 controller
    { id: 405, name: "Xbox Elite Wireless Controller Series 2", price: 14500, image: "https://images.unsplash.com/photo-1629859546059-e9b4d1b8275c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80", category: "Electronics" }, // Xbox controller
    { id: 406, name: "Logitech G29 Driving Force Racing Wheel", price: 28000, image: "https://images.unsplash.com/photo-1616719830509-c18749f121d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80", category: "Electronics" }, // Generic wheel
    { id: 407, name: "HyperX Cloud II Gaming Headset", price: 7500, image: "https://images.unsplash.com/photo-1546876104-e3a53e920d3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80", category: "Electronics" }, // Generic gaming headset
    { id: 408, name: "Razer DeathAdder V3 Pro Mouse", price: 10500, image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80", category: "Electronics" }, // Gaming mouse
    { id: 409, name: "Corsair K70 RGB MK.2 Keyboard", price: 12000, image: "https://images.unsplash.com/photo-1555774135-22687c9d7148?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80", category: "Electronics" }, // Gaming keyboard
    { id: 410, name: "Elgato Stream Deck", price: 15000, image: "https://images.unsplash.com/photo-1616719830509-c18749f121d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80", category: "Electronics" }, // Generic streaming device

    // --- Clothes --- (15 items)
    { id: 501, name: "Men's Classic Denim Jacket", price: 2499, image: "https://images.unsplash.com/photo-1587123927692-0b1e3e7f0b5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80", category: "Clothes" },
    { id: 502, name: "Women's Floral Summer Dress", price: 1899, image: "https://images.unsplash.com/photo-1594957640321-72a3b0b8c6a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80", category: "Clothes" },
    { id: 503, name: "Unisex Cotton Hoodie", price: 1299, image: "https://images.unsplash.com/photo-1509910309605-e362624d7764?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80", category: "Clothes" },
    { id: 504, name: "Men's Slim Fit Chinos", price: 1599, image: "https://images.unsplash.com/photo-1601004245788-b4b10b0b8d5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80", category: "Clothes" },
    { id: 505, name: "Women's High-Waist Jeans", price: 2199, image: "https://images.unsplash.com/photo-1598970428987-a3a8a3a0e1b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80", category: "Clothes" },
    { id: 506, name: "Kids' Cartoon T-Shirt", price: 499, image: "https://images.unsplash.com/photo-1596700816999-5f2162f4e0c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80", category: "Clothes" },
    { id: 507, name: "Sportswear Tracksuit Set", price: 2999, image: "https://images.unsplash.com/photo-1599605963953-b0e2d3d9e0f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80", category: "Clothes" },
    { id: 508, name: "Formal Men's Shirt", price: 999, image: "https://images.unsplash.com/photo-1563290680-e883e0a137b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80", category: "Clothes" },
    { id: 509, name: "Women's Casual Blouse", price: 799, image: "https://images.unsplash.com/photo-1581077755319-3d1912a23e59?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80", category: "Clothes" },
    { id: 510, name: "Unisex Winter Scarf", price: 599, image: "https://images.unsplash.com/photo-1596541177695-1f9e6d4c5d3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80", category: "Clothes" },
    { id: 511, name: "Women's Party Gown", price: 4999, image: "https://images.unsplash.com/photo-1593397987332-9c9e8e5d0f62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80", category: "Clothes" },
    { id: 512, name: "Men's Sports Shorts", price: 699, image: "https://images.unsplash.com/photo-1621532053150-f1b2a9e3a6c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80", category: "Clothes" },
    { id: 513, name: "Girls' Fancy Skirt", price: 849, image: "https://images.unsplash.com/photo-1595166668709-6d6f22c6e6e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80", category: "Clothes" },
    { id: 514, name: "Baby Romper", price: 349, image: "https://images.unsplash.com/photo-1582234033107-16013a7c6a99?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80", category: "Clothes" },
    { id: 515, name: "Swimwear Set", price: 1199, image: "https://images.unsplash.com/photo-1598970428987-a3a8a3a0e1b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80", category: "Clothes" }, // Reusing jeans for generic fabric

    // --- Jewellery --- (15 items)
    { id: 601, name: "Gold Plated Necklace", price: 2800, image: "https://images.unsplash.com/photo-1626084090530-58c0c0b8b2b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80", category: "Jewellery" },
    { id: 602, name: "Diamond Stud Earrings", price: 15000, image: "https://images.unsplash.com/photo-1599394541300-fe3e2f5f1c9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80", category: "Jewellery" },
    { id: 603, name: "Silver Bracelet with Charms", price: 3500, image: "https://images.unsplash.com/photo-1586520377484-909d9d4d9c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80", category: "Jewellery" },
    { id: 604, name: "Emerald Cut Ring", price: 8000, image: "https://images.unsplash.com/photo-1586520377484-909d9d4d9c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80", category: "Jewellery" }, // Reusing for a ring
    { id: 605, name: "Pearl Drop Earrings", price: 2100, image: "https://images.unsplash.com/photo-1626084090530-58c0c0b8b2b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80", category: "Jewellery" }, // Reusing for pearl
    { id: 606, name: "Men's Stainless Steel Chain", price: 1800, image: "https://images.unsplash.com/photo-1592070007887-f8c6b7d6b3c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80", category: "Jewellery" },
    { id: 607, name: "Bohemian Stone Pendant", price: 950, image: "https://images.unsplash.com/photo-1621344400267-3e6f917b2b2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80", category: "Jewellery" },
    { id: 608, name: "Rose Gold Bangle", price: 4200, image: "https://images.unsplash.com/photo-1563290680-e883e0a137b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80", category: "Jewellery" }, // Generic metallic object
    { id: 609, name: "Geometric Hoop Earrings", price: 1200, image: "https://images.unsplash.com/photo-1621344400267-3e6f917b2b2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80", category: "Jewellery" }, // Reusing for generic jewellery
    { id: 610, name: "Custom Engraved Locket", price: 3100, image: "https://images.unsplash.com/photo-1599394541300-fe3e2f5f1c9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80", category: "Jewellery" }, // Reusing
    { id: 611, name: "Anklet with Bells", price: 850, image: "https://images.unsplash.com/photo-1592070007887-f8c6b7d6b3c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80", category: "Jewellery" }, // Reusing for anklet
    { id: 612, name: "Cubic Zirconia Pendant", price: 1600, image: "https://images.unsplash.com/photo-1626084090530-58c0c0b8b2b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80", category: "Jewellery" }, // Reusing
    { id: 613, name: "Kids' Animal Necklace", price: 700, image: "https://images.unsplash.com/photo-1586520377484-909d9d4d9c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80", category: "Jewellery" }, // Reusing
    { id: 614, name: "Traditional Kundan Set", price: 6500, image: "https://images.unsplash.com/photo-1626084090530-58c0c0b8b2b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80", category: "Jewellery" }, // Reusing
    { id: 615, name: "Hypoallergenic Titanium Ring", price: 2900, image: "https://images.unsplash.com/photo-1592070007887-f8c6b7d6b3c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80", category: "Jewellery" }, // Reusing

    // --- Kitchen --- (15 items)
    { id: 701, name: "Smart Air Fryer (5L)", price: 6500, image: "https://images.unsplash.com/photo-1622709230132-000c0f991e0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80", category: "Kitchen" },
    { id: 702, name: "Coffee Maker with Grinder", price: 4200, image: "https://images.unsplash.com/photo-1592476088812-bb2062d9b62d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80", category: "Kitchen" },
    { id: 703, name: "Non-Stick Cookware Set (7 Pcs)", price: 3800, image: "https://images.unsplash.com/photo-1582234033107-16013a7c6a99?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80", category: "Kitchen" }, // Generic kitchen item
    { id: 704, name: "Blender with Multiple Jars", price: 2900, image: "https://images.unsplash.com/photo-1583681432426-8c4d29f8f4f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80", category: "Kitchen" },
    { id: 705, name: "Digital Kitchen Scale", price: 850, image: "https://images.unsplash.com/photo-1563290680-e883e0a137b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80", category: "Kitchen" }, // Generic small appliance
    { id: 706, name: "Electric Kettle (1.7L)", price: 1100, image: "https://images.unsplash.com/photo-1585233159073-677d2c3e1e2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80", category: "Kitchen" },
    { id: 707, name: "Food Processor (800W)", price: 5500, image: "https://images.unsplash.com/photo-1586520377484-909d9d4d9c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80", category: "Kitchen" }, // Generic kitchen item
    { id: 708, name: "Toaster 2-Slice", price: 1500, image: "https://images.unsplash.com/photo-1594957640321-72a3b0b8c6a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80", category: "Kitchen" }, // Generic small appliance
    { id: 709, name: "Silicone Spatula Set", price: 600, image: "https://images.unsplash.com/photo-1587123927692-0b1e3e7f0b5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80", category: "Kitchen" }, // Generic kitchen tool
    { id: 710, name: "Stainless Steel Mixing Bowls (Set of 3)", price: 1200, image: "https://images.unsplash.com/photo-1596700816999-5f2162f4e0c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80", category: "Kitchen" }, // Generic bowl
    { id: 711, name: "Hand Mixer Electric", price: 1800, image: "https://images.unsplash.com/photo-1599605963953-b0e2d3d9e0f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80", category: "Kitchen" }, // Generic appliance
    { id: 712, name: "Chopping Board Set (Bamboo)", price: 950, image: "https://images.unsplash.com/photo-1621532053150-f1b2a9e3a6c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80", category: "Kitchen" }, // Generic wood item
    { id: 713, name: "Manual Juicer", price: 700, image: "https://images.unsplash.com/photo-1595166668709-6d6f22c6e6e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80", category: "Kitchen" }, // Generic kitchen tool
    { id: 714, name: "Spice Rack Organizer", price: 1400, image: "https://images.unsplash.com/photo-1582234033107-16013a7c6a99?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80", category: "Kitchen" }, // Generic storage
    { id: 715, name: "Reusable Food Storage Containers (Set of 5)", price: 1000, image: "https://images.unsplash.com/photo-1598970428987-a3a8a3a0e1b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80", category: "Kitchen" }, // Generic container

    // Add more categories and items as needed
];

// Extract unique categories
// Use Set to get unique categories and map them to display names if desired.
// For now, categories are taken directly from product data.
const categories = [...new Set(products.map(p => p.category))];

// Cart State
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// DOM Elements
const productGrid = document.getElementById("product-grid");
const cartItems = document.getElementById("cart-items");
const cartCount = document.getElementById("cart-count");
const cartTotal = document.getElementById("cart-total");
const productSectionHeading = document.getElementById("product-section-heading");
const categoryButtonsContainer = document.getElementById("category-buttons");


// Render Categories
function renderCategories() {
    categoryButtonsContainer.innerHTML = categories.map(category => `
        <button class="category-button" data-category="${category}">${category}</button>
    `).join('');

    // Add event listeners to category buttons
    document.querySelectorAll('.category-button').forEach(button => {
        button.addEventListener('click', (event) => {
            const selectedCategory = event.target.dataset.category;
            filterProductsByCategory(selectedCategory);
        });
    });
}


// Render Products (now accepts a list of products to render)
function renderProducts(productsToRender = []) { // Default to empty array
    if (productsToRender.length === 0) {
        productGrid.innerHTML = '<p class="select-category-message">No products found in this category.</p>';
        return;
    }

    productGrid.innerHTML = productsToRender.map(product => `
        <div class="product">
            ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>₹${product.price.toLocaleString('en-IN')}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        </div>
    `).join("");

    // Update the heading based on filter (done in filterProductsByCategory)
}

// Filter Products by Category
function filterProductsByCategory(category) {
    const filtered = products.filter(p => p.category === category);
    renderProducts(filtered);
    productSectionHeading.textContent = `${category} Products`; // Update heading
    productGrid.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to products
}

// Render Cart
function renderCart() {
    // Ensure all cart items have full product details for consistent display
    const detailedCart = cart.map(item => {
        const productDetails = products.find(p => p.id === item.id);
        return {
            ...productDetails, // Copy all details from original product
            quantity: item.quantity || 1 // Keep existing quantity or default to 1
        };
    }).filter(item => item.name); // Filter out any items whose product details weren't found (e.g. if product was removed from list)

    cartItems.innerHTML = detailedCart.map(item => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-item-info">
                <span>${item.name} (₹${item.price.toLocaleString('en-IN')} x ${item.quantity || 1})</span>
                <div class="cart-item-controls">
                    <input type="number" min="1" value="${item.quantity || 1}"
                           onchange="updateCartQuantity(${item.id}, this.value)">
                    <button onclick="removeFromCart(${item.id})">Remove</button>
                </div>
            </div>
        </div>
    `).join("");

    // Update total and count
    const total = detailedCart.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0);
    cartTotal.textContent = total.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 }); // Format to 2 decimal places and Indian locale
    cartCount.textContent = cart.reduce((sum, item) => sum + (item.quantity || 1), 0); // Sum of quantities
}

// Add to Cart
function addToCart(productId) {
    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity = (existingItem.quantity || 1) + 1;
    } else {
        const productToAdd = products.find(p => p.id === productId);
        if (productToAdd) {
            cart.push({ id: productToAdd.id, quantity: 1 });
        }
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
}

// Update Cart Quantity
function updateCartQuantity(productId, newQuantity) {
    const itemIndex = cart.findIndex(item => item.id === productId);
    if (itemIndex > -1) {
        const quantity = parseInt(newQuantity);
        if (quantity > 0) {
            cart[itemIndex].quantity = quantity;
        } else {
            cart = cart.filter(item => item.id !== productId); // Remove if quantity is 0 or less
        }
        localStorage.setItem("cart", JSON.stringify(cart));
        renderCart();
    }
}

// Remove from Cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderCategories(); // Render category buttons first
    // Initially, show a message. User must select a category.
    productGrid.innerHTML = '<p class="select-category-message">Please select a category above to view products.</p>';
    productSectionHeading.textContent = "Browse Categories";
    renderCart(); // Still render cart if there are items
});