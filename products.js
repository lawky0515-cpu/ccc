const products = [
    {
        id: 1,
        name: "Acrylc Marker",
        price: 42.00,
        category: "art",
        desc: "24 colours",
        image: "jpg/ACRYLIC MARKER.jpg",
        colors: [
            { name: "24 colours", code: "#000000" }
        ]
    },
    {
        id: 2,
        name: "A4 Clipboard",
        price: 40.00,
        category: "stationery",
        desc: "10 Pcs",
        image: "jpg/CLIPBOARD.jpg",
        colors: [
            { name: "Black", code: "#ffffff" }
        ]
    },
    {
        id: 3,
        name: "Basketball Size 5",
        price: 138,
        category: "sports",
        desc: "PU Leather",
        image: "jpg/PINK BASKETBALL S5.jpg",
        colors: [
            { name: "Pink", code: "#000000" }
        ]
    },
    {
        id: 4,
        name: "Folding Mattress",
        price: 388,
        category: "sports",
        desc: "200x100x20cm",
        image: "jpg/FOLDING MONEY.jpg",
        colors: [
            { name: "Green", code: "#55855e" }
        ]
    },
    {
        id: 5,
        name: "Pickle Ball Set",
        price: 80.00,
        category: "sports",
        desc: "Free 2 Balls",
        image: "jpg/PB.jpg",
        colors: [
            { name: "Black", code: "#eab308" }
        ]
    },
    {
        id: 6,
        name: "Table Tennis Set",
        price: 30.00,
        category: "sports",
        desc: "2 Bats + 3 Balls",
        image: "jpg/TTR 2.jpg",
        colors: [
            { name: "Red", code: "#ef4444" }
        ]
    },
    {
        id: 7,
        name: "Table Tennis Set DF",
        price: 15.00,
        category: "sports",
        desc: "2 Bats + 6 Balls",
        image: "jpg/TTR DF.jpg",
        colors: [
            { name: "Red", code: "#8b5cf6" }
        ]
    },
    {
        id: 8,
        name: "Marking Disc Set",
        price: 14.00,
        category: "sports",
        desc: "10 pieces, storage bag",
        image: "jpg/MARKER.jpg",
        colors: [
            { name: "Multicolour", code: "#000000" }
        ]
    },
    {
        id: 9,
        name: "Joinfit Strength Rubber",
        price: 35.00,
        category: "sports",
        desc: "15-35 pounds",
        image: "jpg/JF PB 15-35.jpg",
        colors: [
            { name: "Red", code: "#d97706" }
        ]
    },
    {
        id: 10,
        name: "Joinfit Strength Rubber",
        price: 48.00,
        category: "sports",
        desc: "25-65 pounds",
        image: "jpg/JF PB 25-65.jpg",
        colors: [
            { name: "black", code: "#92400e" }
        ]
    },
    {
        id: 11,
        name: "Football",
        price: 120.00,
        category: "Sports",
        desc: "Molten No.4",
        image: "jpg/SOCCER NO 4.jpg",
        colors: [
            { name: "Blue", code: "#10b981" }
        ]
    },
    {
        id: 12,
        name: "Water Rocket Set",
        price: 58.50,
        category: "stem",
        desc: "Rocket Launcher, rocket body set",
        image: "jpg/WATER ROCKET.jpg",
        colors: [
            { name: "Multicolour", code: "#2563eb" }
        ]
    },
    {
        id: 13,
        name: "Gold Trophy 03",
        price: 23,
        category: "trophy-medal",
        desc: "Resin Trophy",
        image: "jpg/RESIN TROPHY 03.jpg",
        colors: [
            { name: "Gold", code: "#eab308" }
        ]
    },
    {
        id: 14,
        name: "Gold Trophy 26",
        price: 23.00,
        category: "trophy-medal",
        desc: "Premium Trophy Award",
        image: "jpg/RESIN TROPHY 26.jpg",
        colors: [
            { name: "Gold", code: "#eab308" }
        ]
    },
    {
        id: 15,
        name: "Camping Tent",
        price: 100.00,
        category: "camping",
        desc: "2x1.8x1.2m",
        image: "jpg/CP2.jpg",
        colors: [
            { name: "Green", code: "#16a34a" }
        ]
    },
    {
        id: 16,
        name: "Sleeping Bag",
        price: 52.00,
        category: "camping",
        desc: "0.95kg lightweight Sleeping Bag",
        image: "jpg/SLEEPING BAG.jpg",
        colors: [
            { name: "Black", code: "#000000" }
        ]
    },
    {
        id: 17,
        name: "3d Pen",
        price: 52.00,
        category: "stem",
        desc: "Free 3 roll PLA fiments",
        image: "jpg/3D PEN.jpg",
        colors: [
            { name: "Blue", code: "#2563eb" }
        ]
    },
    {
        id: 18,
        name: "Camping Tent",
        price: 58.00,
        category: "camping",
        desc: "2x1.25x1.1m",
        image: "jpg/CP1.jpg",
        colors: [
            { name: "Green", code: "#2563eb" }
        ]
    },
    {
        id: 19,
        name: "Agility Hurdles",
        price: 43.00,
        category: "sports",
        desc: "15cm x 5",
        image: "jpg/AGILITY HURDLES.jpg",
        colors: [
            { name: "Blue", code: "#2563eb" }
        ]
    },
    {
        id: 20,
        name: "Large Wheat Medal",
        price: 4.00,
        category: "trophy-medal",
        desc: "65mm x 4mm",
        image: "jpg/LARGE WHEAR MEDAL.jpg",
        colors: [
            { name: "Gold", code: "#2563eb" },
            { name: "Silver", code: "#2563eb" },
            { name: "Bronze", code: "#2563eb" }
        ]
    },
    {
        id: 21,
        name: "Steel Scoreboard",
        price: 78.00,
        category: "sports",
        desc: "36.5cmx13.5cmx23cm",
        image: "jpg/RB SCOREBOARD.jpg",
        colors: [
            { name: "Red Blue", code: "#2563eb" }
        ]
    },
    {
        id: 22,
        name: "Shuttlecocks Launcher",
        price: 350.00,
        category: "sports",
        desc: "Free 6 Shuttlecocks",
        image: "jpg/SC LAUNCHER.jpg",
        colors: [
            { name: "White", code: "#2563eb" }
        ]
    },
    {
        id: 23,
        name: "Table Tennis Ball Launcher",
        price: 95.00,
        category: "sports",
        desc: "Free 10 balls",
        image: "jpg/TT LAUNCHER.jpg",
        colors: [
            { name: "White", code: "#2563eb" }
        ]
    },
    {
        id: 24,
        name: "Multipurpose Scoreboard",
        price: 90.00,
        category: "sports",
        desc: "38.8cm x 19cm x 20cm",
        image: "jpg/BY SCOREBOARD.jpg",
        colors: [
            { name: "Black", code: "#2563eb" }
        ]
    },
    {
        id: 25,
        name: "Shuttlecocks Launcher",
        price: 350.00,
        category: "sports",
        desc: "Free 6 Shuttlecocks",
        image: "jpg/BY SCOREBOARD.jpg",
        colors: [
            { name: "White", code: "#2563eb" }
        ]
    },
    {
        id: 26,
        name: "Gold Trophy 30",
        price: 23.00,
        category: "trophy-medal",
        desc: "Premium Trophy Award",
        image: "jpg/RESIN TROPHY 30.jpg",
        colors: [
            { name: "Gold", code: "#eab308" }
        ]
    },
];
