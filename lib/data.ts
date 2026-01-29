export const ROOMS = [
    {
        id: "suite-royal",
        slug: "royal-heritage-suite",
        name: "Royal Heritage Suite",
        description: "Experience the grandeur of Rajasthan in our spacious Royal Heritage Suite. Featuring traditional decor, a private balcony with lake views, and modern amenities.",
        longDescription: "Step into a world where history whispers from every corner. The Royal Heritage Suite is a masterclass in Rajasthani opulence, meticulously restored to preserve its original 19th-century charm while offering the pinnacle of modern luxury. High vaulted ceilings adorned with original frescoes tell tales of mythology and courtly life, while the hand-carved stone jharokhas (balconies) frame breathtaking vistas of Lake Pichola and the Aravalli hills.\n\nSpanning over 800 square feet, this suite is not just a room but a personal palace. The living area, separated by antique teak arches, features plush velvet seating perfect for evening chai or a private dining experience. As night falls, the room transforms into a sanctuary of golden stillness, lit by crystal chandeliers that cast a warm, romantic glow.",
        price: 15000,
        capacity: 2,
        images: ["/images/room-royal-1.png", "/images/room-royal-2.png"],
        amenities: ["King Bed", "Lake View", "Bathtub", "WiFi", "Breakfast"],
        highlights: [
            { label: "Original Frescoes", desc: "Walls adorned with 100-year-old Mewar art." },
            { label: "Private Jharokha", desc: "Traditional overhanging balcony with panoramic lake views." },
            { label: "Antique Decor", desc: "Furnished with restored teakwood and silver furniture." }
        ],
        sleepExperience: {
            mattress: "Posturte-pedic Memory Foam with 10-inch loft",
            linens: "400-Thread Count Egyptian Cotton",
            pillows: "Menu available (Goose down, Memory foam, Hypoallergenic)",
            ambiance: "Blackout silk curtains and sound-proofed heritage glass"
        },
        bathAmenities: {
            features: ["Clawfoot Copper Bathtub", "Rainfall Shower", "Double Vanity"],
            products: "Forest Essentials Ayurvedic Toiletries",
            extras: ["Plush Bathrobes", "Slippers", "Hairdryer", "Bath Salts"]
        },
        services: ["24-Hour Butler Service", "Evening Turndown with Sweet Treats", "In-Room Dining", "Unpacking Service"]
    },
    {
        id: "deluxe-lake",
        slug: "deluxe-lake-view",
        name: "Deluxe Lake View Room",
        description: "A cozy retreat with stunning views of the lake. Perfect for couples seeking tranquility.",
        longDescription: "Awake to the shimmering reflection of the morning sun on Lake Pichola in our Deluxe Lake View Room. Designed for intimacy and tranquility, this room blends contemporary comfort with traditional Rajasthani aesthetics. Soft pastel hues and natural light create an airy, peaceful atmosphere that instantly calms the spirit.\n\nThe highlight of this room is the large bay window that offers a front-row seat to Udaipur's life on the water. Watch boats glide by and birds take flight as you sip your morning coffee. The room features a comfortable seating area, a dedicated work desk for the modern traveler, and handcrafted decor elements that add a touch of local artistry.",
        price: 8000,
        capacity: 2,
        images: ["/images/room-deluxe-1.png"],
        amenities: ["Queen Bed", "Lake View", "Shower", "WiFi"],
        highlights: [
            { label: "Panoramic Window", desc: "Uninterrupted views of the lake and City Palace." },
            { label: "Cozy Nook", desc: "Window-side seating perfect for reading or relaxing." },
            { label: "Modern & Heritage", desc: "Fusion decor blending old-world charm with clean lines." }
        ],
        sleepExperience: {
            mattress: "Orthopedic Spring Mattress",
            linens: "300-Thread Count Percale Cotton",
            pillows: "Plush Microfiber",
            ambiance: "Sound-insulated walls for peaceful rest"
        },
        bathAmenities: {
            features: ["Walk-in Glass Rain Shower", "Single Vanity with Stone Basin"],
            products: "Kama Ayurveda Toiletries",
            extras: ["Cotton Kimono Robes", "Slippers", "Luxury Towels"]
        },
        services: ["Concierge Service", "Daily Housekeeping", "Laundry Service", "In-Room Tea/Coffee"]
    },
    {
        id: "family-suite",
        slug: "family-garden-suite",
        name: "Family Garden Suite",
        description: "Spacious suite opening into our lush gardens. Ideal for families with children.",
        longDescription: "Create lasting memories in our Family Garden Suite, a haven of space and freedom designed for families and small groups. Located on the ground floor, this expansive suite opens directly onto our manicured private gardens, allowing children to play safely while you relax on your private veranda.\n\nThe suite features two interconnecting sleeping areas to ensure privacy while keeping loved ones close. A small kitchenette allows for preparing quick meals or warming milk for little ones. The decor is vibrant and cheerful, reflecting the colors of Rajasthan's festivals, making it a warm and welcoming home away from home.",
        price: 12000,
        capacity: 4,
        images: ["/images/room-family-1.png"],
        amenities: ["2 Queen Beds", "Garden Access", "Kitchenette", "WiFi"],
        highlights: [
            { label: "Direct Garden Access", desc: "Step out from your room into lush greenery." },
            { label: "Dual Sleeping Areas", desc: "Smart layout for privacy and togetherness." },
            { label: "Kitchenette", desc: "Equipped with microwave, fridge, and sink for convenience." }
        ],
        sleepExperience: {
            mattress: "Premium Hybrid Foam & Spring",
            linens: "Soft Washed Cotton",
            pillows: "Variety of firmness options",
            ambiance: "Garden facing for quiet nights and birdsong mornings"
        },
        bathAmenities: {
            features: ["Family-sized Shower Area", "Low-height Sink for Kids"],
            products: "Gentle Organic Toiletries",
            extras: ["Kid-sized Robes", "Step Stool", "Bath Toys on Request"]
        },
        services: ["Babysitting (On Request)", "Kid-friendly Menu", "Activity Kit", "Evening Storytelling Session"]
    },
    {
        id: "honeymoon-suite",
        slug: "honeymoon-suite",
        name: "Honeymoon Suite",
        description: "An intimate haven designed for romance. Features a four-poster bed, private terrace, and in-room jacuzzi with rose petal turndown service.",
        longDescription: "The Honeymoon Suite is our love letter to romance. Tucked away in a secluded corner of the haveli, this suite offers absolute privacy and an ambiance of sheer indulgence. The centerpiece is a magnificent four-poster king bed draped in sheer voile, promising nights of royal comfort.\n\nYour private terrace is a hidden gem, offering a secluded spot for candlelit dinners under the stars. Inside, the in-room jacuzzi beckons for a relaxing soak, complete with our signature rose and sandalwood bath salts. Every detail, from the soft mood lighting to the fresh flowers placed daily, is curated to kindle the flames of love.",
        price: 18000,
        capacity: 2,
        images: ["/images/room-royal-1.png"],
        amenities: ["Four-Poster Bed", "Private Terrace", "Jacuzzi", "Champagne Service", "WiFi"],
        highlights: [
            { label: "Private Terrace", desc: "Secluded outdoor space for romantic dining." },
            { label: "In-Room Jacuzzi", desc: "Private whirlpool bath for two." },
            { label: "Romantic Ambience", desc: "Mood lighting, candles, and floral decor." }
        ],
        sleepExperience: {
            mattress: "Ultra-Plush Pillow Top King",
            linens: "600-Thread Count Satin-Finish Cotton",
            pillows: "Goose Down and Memory Foam blend",
            ambiance: "Sound-proofed and secluded for ultimate privacy"
        },
        bathAmenities: {
            features: ["Oversized Jacuzzi Tub", "Separate Rain Shower", "His & Hers Vanity"],
            products: "Luxury Molton Brown Toiletries",
            extras: ["Silk Robes", "Satin Slippers", "Aromatherapy Kit"]
        },
        services: ["Champagne on Arrival", "Breakfast in Bed", "Couple's Spa Priority", "Romantic Turndown"]
    },
];

export const ATTRACTIONS = [
    {
        name: "City Palace",
        description: "A monumental complex of 11 palaces, courtyards and gardens, famed for its intricate peacock mosaics.",
        distance: "2.5 km",
        image: "/images/attraction-city-palace.png",
    },
    {
        name: "Lake Pichola",
        description: "An artificial fresh water lake, created in 1362 AD, named after the nearby Picholi village.",
        distance: "1.0 km",
        image: "/images/attraction-lake-pichola.png",
    },
    {
        name: "Jag Mandir",
        description: "A stunning island palace built in the 17th century, featuring marble elephants and beautiful gardens.",
        distance: "1.5 km (boat)",
        image: "/images/gallery_night_1768571616314.png",
    },
    {
        name: "Monsoon Palace",
        description: "Hilltop palace offering panoramic sunset views of the city, lakes, and Aravalli hills.",
        distance: "8 km",
        image: "/images/gallery_garden_1768571595009.png",
    },
    {
        name: "Fateh Sagar Lake",
        description: "A serene lake with Nehru Park island, surrounded by hills and popular for evening walks.",
        distance: "4 km",
        image: "/images/gallery_pool_1768571513388.png",
    },
    {
        name: "Saheliyon Ki Bari",
        description: "The 'Garden of Maidens' with fountains, kiosks, marble elephants, and lotus pools.",
        distance: "3 km",
        image: "/images/gallery_lobby_1768571576071.png",
    },
    {
        name: "Bagore Ki Haveli",
        description: "18th-century haveli museum hosting nightly folk dance performances.",
        distance: "2 km",
        image: "/images/gallery_restaurant_1768571557453.png",
    },
];

export const EXPERIENCES = [
    {
        title: "Lake Boat Cruise",
        desc: "Sunset sail on Lake Pichola with champagne and canapés",
        duration: "2 hours",
        image: "/images/attraction-lake-pichola.png",
    },
    {
        title: "Cooking Masterclass",
        desc: "Learn authentic Rajasthani recipes with our chef",
        duration: "3 hours",
        image: "/images/gallery_restaurant_1768571557453.png",
    },
    {
        title: "Heritage Walk",
        desc: "Guided tour through Udaipur's historic old city",
        duration: "2.5 hours",
        image: "/images/attraction-city-palace.png",
    },
    {
        title: "Sunrise Yoga",
        desc: "Rooftop yoga session with panoramic views",
        duration: "1 hour",
        image: "/images/gallery_garden_1768571595009.png",
    },
];
