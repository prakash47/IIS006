export interface Attraction {
    slug: string;
    name: string;
    tagline: string;
    heroImage: string;
    description: string;
    history: string;
    highlights: { title: string; desc: string; icon?: string }[];
    visitorInfo: {
        timings: string;
        entryFee: string;
        bestTime: string;
        duration: string;
    };
    gallery: string[];
    travelTips: string[];
}

import { Clock, Ticket, Calendar, MapPin } from "lucide-react";

export const ATTRACTIONS_DATA: Attraction[] = [
    {
        slug: "city-palace-udaipur",
        name: "The City Palace",
        tagline: "A Monumental Legacy of the Mewar Dynasty",
        heroImage: "/images/attraction-city-palace.png",
        description: "Standing majestically on the eastern banks of Lake Pichola, the City Palace of Udaipur is not just a monument; it is a living testament to the grandeur, resilience, and artistic brilliance of the Mewar dynasty. As the largest palace complex in Rajasthan, its facade is a breathtaking fusion of Rajasthani and Mughal architectural styles, stretching over 244 meters in length and 30 meters in height. But beyond its imposing stone walls lies a labyrinth of courtyards, pavilions, terraces, corridors, rooms, and hanging gardens, each distinct yet harmoniously woven into the palace's grand design.",
        history: "Construction of this architectural marvel began in 1559 by Maharana Udai Singh II, coinciding with the establishment of Udaipur as the new capital of the Mewar Kingdom. Over the next 400 years, successive Maharanas added their own palaces and structures to the complex, resulting in a unique amalgamation of styles that somehow retains a startling uniformity. The palace was built entirely in granite and marble, perched atop a hill to provide a strategic advantage against enemies while offering panoramic views of the lake and the city below. It has witnessed siege, celebration, diplomacy, and the changing tides of history, yet it remains the beating heart of Udaipur's cultural identity.",
        highlights: [
            { title: "Mor Chowk", desc: "The 'Peacock Courtyard', famous for its vivid mosaics of peacocks crafted from 5,000 pieces of glass, glowing in green, gold, and blue." },
            { title: "Amar Vilas", desc: "The highest point of the palace, featuring a wonderful hanging garden with fountains, towers, and terraces offering the best view of Lake Pichola." },
            { title: "Badi Mahal", desc: "The Great Palace, also known as the Garden Palace, stands on a 90-foot high natural rock formation and houses a swimming pool." },
            { title: "Crystal Gallery", desc: "Home to the world's largest private collection of crystal, including crystal chairs, sofas, tables, and even beds, ordered by Maharana Sajjan Singh." }
        ],
        visitorInfo: {
            timings: "9:30 AM - 5:30 PM (Daily)",
            entryFee: "₹400 (Adults), ₹150 (Children)",
            bestTime: "Morning (9:30 AM) to avoid crowds",
            duration: "3 - 4 Hours"
        },
        gallery: [
            "/images/gallery_royal_suite_detail_1769706029717.png",
            "/images/gallery_antique_furniture_teak_1769706873146.png",
            "/images/gallery_lobby_1768571576071.png"
        ],
        travelTips: [
            "Wear comfortable walking shoes as the complex is vast.",
            "Hire a government-approved guide to fully understand the history.",
            "Visit the museum shop for authentic souvenirs."
        ]
    },
    {
        slug: "lake-pichola",
        name: "Lake Pichola",
        tagline: "The Ethereal Soul of Udaipur",
        heroImage: "/images/attraction-lake-pichola.png",
        description: "Lake Pichola is the lifeline and the crown jewel of Udaipur. This artificial freshwater lake, created in 1362 AD, is famous for its scenic beauty and the surrounding hills, palaces, temples, and bathing ghats. The lake's calm waters reflect the changing colors of the sky and the majestic City Palace, creating a mesmerizing spectacle that has inspired poets, artists, and travelers for centuries. A boat ride on Lake Pichola, especially at sunset, is considered one of the most romantic experiences in India.",
        history: "The lake was built by a Banjara tribesman, Pichhu Banjara, during the reign of Maharana Lakha to meet the drinking water and irrigation needs of the nearby village. Later, Maharana Udai Singh II, impressed by the charm of the lake with the backdrop of green hills, decided to build the city of Udaipur on its banks. He enlarged the lake by constructing a stone masonry dam in the Badipol region. The lake is home to four islands: Jag Niwas (Lake Palace), Jag Mandir, Mohan Mandir, and Arsi Vilas, each with its own unique history and architecture.",
        highlights: [
            { title: "Jag Niwas (Lake Palace)", desc: "Now a luxury Taj hotel, this white marble palace appears to float on the turquoise waters." },
            { title: "Jag Mandir", desc: "An island palace where Prince Khurram (Emperor Shah Jahan) sought refuge. It is said to have inspired the Taj Mahal." },
            { title: "Arsi Vilas", desc: "A small island that was once an ammunition depot, now a sanctuary for migratory birds." },
            { title: "Gangaur Ghat", desc: "A prime location for festivals and photography, offering stunning sunset views." }
        ],
        visitorInfo: {
            timings: "9:00 AM - 6:00 PM (Boating)",
            entryFee: "₹400 - ₹800 for Boat Rides",
            bestTime: "Sunset (5:00 PM - 6:30 PM)",
            duration: "1 - 2 Hours"
        },
        gallery: [
            "/images/gallery_deluxe_lake_view_balcony_1769706048345.png",
            "/images/gallery_private_balcony_sunset_1769706893816.png",
            "/images/gallery_night_1768571616314.png"
        ],
        travelTips: [
            "Book your sunset boat ride in advance during peak season.",
            "Winter evenings can be chilly on the water, carry a light jacket.",
            "Combine the boat ride with a dinner at Jag Mandir."
        ]
    },
    {
        slug: "jag-mandir-palace",
        name: "Jag Mandir Palace",
        tagline: "The Island Palace of Refuge and Romance",
        heroImage: "/images/gallery_night_1768571616314.png",
        description: "Jag Mandir is an exquisite palace located on an island in Lake Pichola. Also known as the 'Lake Garden Palace', its construction is credited to three Maharanas of the Mewar kingdom. The palace is a stunning example of Rajput architecture, with its marble elephants, spacious courtyards, and beautiful gardens. It has served as a summer resort and pleasure palace for the royal family, as well as a refuge for asylum seekers on two separate occasions.",
        history: "Construction began in 1551 by Maharana Amar Singh, continued by Maharana Karan Singh, and finally completed by Maharana Jagat Singh I in 1652, after whom it is named. The palace famously sheltered Prince Khurram (later Emperor Shah Jahan) when he rebelled against his father Jahangir. It is widely believed that the pietra dura work and the marble structures of Jag Mandir inspired Shah Jahan to build the Taj Mahal. Later, during the Revolt of 1857, Maharana Swaroop Singh sheltered European families here.",
        highlights: [
            { title: "Gul Mahal", desc: "The central structure built for Prince Khurram, featuring Islamic architectural influences." },
            { title: "Marble Elephants", desc: "Eight life-sized marble elephants standing guard at the jetty, a signature feature of the palace." },
            { title: "Garden Courtyard", desc: "A lush garden filled with roses, jasmine, and palm trees, perfect for a leisurely stroll." },
            { title: "Darikhana", desc: "An open-sided terrace that now serves as a restaurant offering fine dining with lake views." }
        ],
        visitorInfo: {
            timings: "10:00 AM - 6:00 PM",
            entryFee: "Included in Boat Ride Ticket",
            bestTime: "Late Afternoon",
            duration: "1.5 Hours"
        },
        gallery: [
            "/images/gallery_wedding_mandap_sunset_1769706118712.png",
            "/images/gallery_reception_dinner_night_1769706089617.png",
            "/images/gallery_cocktail_hour_social_1769706927192.png"
        ],
        travelTips: [
            "Most boat rides stop here for 20-30 minutes.",
            "It's a popular venue for destination weddings.",
            "The restaurant is open for dinner; reservations recommended."
        ]
    },
    {
        slug: "monsoon-palace",
        name: "Sajjangarh Monsoon Palace",
        tagline: "The Crown on the Hilltop",
        heroImage: "/images/gallery_garden_1768571595009.png",
        description: "Perched high atop the Bansdara Peak of the Aravalli hill range, the Monsoon Palace (Sajjangarh) overlooks the city of Udaipur and its lakes from a dizzying height. It looks like a fairytale castle floating in the clouds, especially during the monsoon season. Originally intended to be an astronomical center, it became a hunting lodge and a monsoon retreat for the royal family to watch the rain clouds gather.",
        history: "Built in 1884 by Maharana Sajjan Singh, the palace was planned to be a nine-story astronomical observatory to track monsoon clouds and predict weather patterns. However, due to the Maharana's untimely death, the plan was shelved, and it was completed as a palatial hunting lodge. The palace is built of white marble and offers a breathtaking panoramic view of Udaipur's lakes, palaces, and the surrounding countryside. It gained international fame after being featured in the James Bond movie 'Octopussy'.",
        highlights: [
            { title: "Panoramic Views", desc: "Unmatched 360-degree views of Udaipur city, Fateh Sagar Lake, and the Aravalli range." },
            { title: "Sunset Point", desc: "Widely considered the best spot in Udaipur to watch the sunset." },
            { title: "Sajjangarh Wildlife Sanctuary", desc: "Located at the foot of the hill, home to various reptiles, tigers, nilgai, and wild boars." }
        ],
        visitorInfo: {
            timings: "9:00 AM - 6:00 PM",
            entryFee: "₹100 (Indian), ₹300 (Foreigner)",
            bestTime: "Sunset",
            duration: "2 Hours"
        },
        gallery: [
            "/images/gallery_garden_pavilion_afternoon_1769706174221.png",
            "/images/gallery_private_balcony_sunset_1769706893816.png",
            "/images/gallery_garden_1768571595009.png"
        ],
        travelTips: [
            "The drive up the winding hill road is scenic but steep.",
            "You can take a shared jeep from the entrance gate.",
            "Wait until after sunset to see the city lights twinkle."
        ]
    },
    {
        slug: "saheliyon-ki-bari",
        name: "Saheliyon Ki Bari",
        tagline: "The Garden of Maidens",
        heroImage: "/images/gallery_lobby_1768571576071.png",
        description: "Saheliyon Ki Bari is a major garden and a popular tourist space in Udaipur. The garden is famous for its lush green lawns, marble art, and fountains. The English translation of Saheliyon Ki Bari means 'Garden of Maidens'. This garden was designed by the King himself and he presented this garden to his queen. The queen was accompanied by 48 maids in her marriage. This garden was built for them to offer a pleasurable escape from the court's political intrigues.",
        history: "Built by Maharana Sangram Singh II between 1710 and 1734, this garden is a unique example of nature and architecture blending seamlessly. Unlike other gardens of Rajasthan which are in the middle of the desert, this garden was built in a wet area. The fountains here are not powered by pumps but by the water pressure from the nearby Fateh Sagar Lake, a marvel of 18th-century engineering. The garden was a favorite spot for the royal ladies to stroll, relax, and enjoy the rain.",
        highlights: [
            { title: "Lotus Pool", desc: "A large rectangular pool with four marble elephants spraying water from their trunks." },
            { title: "Rain Fountains", desc: "Fountains designed to mimic the sound of falling rain." },
            { title: "Marble Kiosks", desc: "Intricately carved pavilions perfect for sitting and enjoying the garden's beauty." },
            { title: "Museum", desc: "A small museum displaying royal household items and stuffed animals." }
        ],
        visitorInfo: {
            timings: "9:00 AM - 7:00 PM",
            entryFee: "₹10 (Indian), ₹50 (Foreigner)",
            bestTime: "Morning or Late Afternoon",
            duration: "1 Hour"
        },
        gallery: [
            "/images/gallery_pool_1768571513388.png",
            "/images/gallery_spa_ayurvedic_oils_1769706136609.png",
            "/images/gallery_pool_underwater_view_1769706156528.png"
        ],
        travelTips: [
            "It's a great place for a picnic or a quiet walk.",
            "The fountains are usually turned on throughout the day.",
            "Located near Fateh Sagar Lake, so you can visit both."
        ]
    },
    {
        slug: "fateh-sagar-lake",
        name: "Fateh Sagar Lake",
        tagline: "The Pride of Udaipur",
        heroImage: "/images/gallery_pool_1768571513388.png",
        description: "Fateh Sagar Lake is a sparkling pear-shaped artificial lake, considered the second most important lake in Udaipur after Pichola. Surrounded by the Aravalli hills on three sides and the Moti Magri hill on the north, it offers a scenic and tranquil environment. The lake is connected to Lake Pichola by a canal. It houses three distinctive islands, including the famous Nehru Park, which is a popular picnic spot accessible by boat.",
        history: "Originally constructed by Maharana Jai Singh in 1678 AD, the lake was later reconstructed by Maharana Fateh Singh (1884-1930) after the earthen bund was washed away during floods. He built the Connaught Dam to enlarge the lake, and it was subsequently renamed Fateh Sagar. The lake is vital to the city's water supply and is a hub of recreational activity. The drive along the Moti Magri road overlooking the lake is locally known as 'Marine Drive' of Udaipur.",
        highlights: [
            { title: "Nehru Park", desc: "The largest island in the lake, featuring a boat-shaped restaurant and a zoo." },
            { title: "Udaipur Solar Observatory", desc: "Located on the second island, it is modeled after the solar observatory at Big Bear Lake in California." },
            { title: "Under the Sun Aquarium", desc: "India's biggest public aquarium gallery located near the lake." },
            { title: "Speed Boating", desc: "Popular for water sports and thrilling speedboat rides." }
        ],
        visitorInfo: {
            timings: "8:00 AM - 6:00 PM (Boating)",
            entryFee: "Free (Boating charges apply)",
            bestTime: "Evening",
            duration: "1 - 2 Hours"
        },
        gallery: [
            "/images/gallery_pool_underwater_view_1769706156528.png",
            "/images/gallery_private_party_poolside_1769706091293.png",
            "/images/gallery_deluxe_lake_view_balcony_1769706048345.png"
        ],
        travelTips: [
            "Don't miss the street food stalls designated as 'Bambaiya Bazaar' nearby.",
            "Take a camel or horse ride along the lakeside.",
            "Visit the Maharana Pratap Memorial on Moti Magri nearby."
        ]
    },
    {
        slug: "bagore-ki-haveli",
        name: "Bagore Ki Haveli",
        tagline: "A Cultural Time Capsule",
        heroImage: "/images/gallery_restaurant_1768571557453.png",
        description: "Bagore Ki Haveli is a gracious 18th-century mansion located on the waterfront of Lake Pichola at Gangaur Ghat. It has over a hundred rooms, with displays of costumes and modern art. The haveli has been carefully restored to its former glory and now serves as a museum that offers a fascinating glimpse into the lifestyle of the Mewar nobility. In the evenings, the haveli comes alive with the vibrancy of Rajasthan's folklore through the 'Dharohar' dance show.",
        history: "Built by Amir Chand Badwa, the Prime Minister of Mewar, between 1751 and 1778, the haveli became the residence of Maharana Shakti Singh of Bagore in 1878, hence the name. After independence, the haveli fell into disrepair until it was handed over to the West Zone Cultural Centre in 1986. Extensive restoration work turned it into a museum housing royal artifacts. The structure is a classic example of Mewar's aristocratic architecture, featuring courtyards, balconies, jharokhas, decorative archways, and a fountain.",
        highlights: [
            { title: "Dharohar Dance Show", desc: "A world-famous cultural performance featuring Chari, Terah Taal, Gorbandh, and the spellbinding Bhavai dance." },
            { title: "Puppet Museum", desc: "A dedicated section displaying traditional Rajasthani puppets." },
            { title: "Turban Museum", desc: "Claimed to be the world's biggest turban museum." },
            { title: "Weaponry Section", desc: "Displays old royal weapons used by the Rajputs." }
        ],
        visitorInfo: {
            timings: "10:00 AM - 5:30 PM (Museum), 7:00 PM - 8:00 PM (Show)",
            entryFee: "₹60 (Museum), ₹90 (Show)",
            bestTime: "Evening for the show",
            duration: "2 Hours"
        },
        gallery: [
            "/images/gallery_cocktail_hour_social_1769706927192.png",
            "/images/gallery_restaurant_1768571557453.png",
            "/images/gallery_night_1768571616314.png"
        ],
        travelTips: [
            "Buy tickets for the dance show by 6:00 PM as they sell out fast.",
            "Photography requires an extra ticket.",
            "The view of Gangaur Ghat from the haveli balconies is stunning."
        ]
    }
];

export function getAttraction(slug: string): Attraction | undefined {
    return ATTRACTIONS_DATA.find((a) => a.slug === slug);
}
