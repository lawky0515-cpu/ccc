const products = [
    {
        id: 1,
        name: "Premium Notebook",
        price: 12.99,
        category: "stationery",
        desc: "A5 Notebook 120 Pages",
        image: "",
        colors: [
            { name: "Black", code: "#000000" },
            { name: "Blue", code: "#3b82f6" }
        ]
    },
    {
        id: 2,
        name: "DOUBLE A A4 Paper",
        price: 14.00,
        category: "stationery",
        desc: "500 Sheets Copy Paper",
        image: "",
        colors: [
            { name: "White", code: "#ffffff" }
        ]
    },
    {
        id: 3,
        name: "Basketball Size 5",
        price: 138,
        category: "sports",
        desc: "PU Leather",
        image: "images/PINK BASKETBALL S5.png",
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
        image: "images/FOLDING MONEY.png",
        colors: [
            { name: "Green", code: "#55855e" }
        ]
    },
    {
        id: 5,
        name: "Pickle Ball Set",
        price: 80.00,
        category: "sports",
        desc: "2 Paddles + 4 Balls",
        image: "",
        colors: [
            { name: "Yellow", code: "#eab308" }
        ]
    },
    {
        id: 6,
        name: "Table Tennis Set",
        price: 30.00,
        category: "sports",
        desc: "1 Bat + 2 Balls",
        image: "",
        colors: [
            { name: "Red", code: "#ef4444" }
        ]
    },
    {
        id: 7,
        name: "Agility Training",
        price: 15.00,
        category: "sports",
        desc: "15cm",
        image: "",
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
        image: "images/MARKER.png",
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
        image: "",
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
        image: "",
        colors: [
            { name: "black", code: "#92400e" }
        ]
    },
    {
        id: 11,
        name: "Football",
        price: 120.00,
        category: "Sports",
        desc: "Molten No.5",
        image: "",
        colors: [
            { name: "Blue White", code: "#10b981" }
        ]
    },
    {
        id: 12,
        name: "Water Rocket Set",
        price: 58.50,
        category: "stem",
        desc: "Rocket Launcher, rocket body set",
        image: "",
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
        image: "images/AGILITY HURDLES 03.png",
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
        image: "images/RESIN TROPHY 26.png",
        colors: [
            { name: "Gold", code: "#eab308" }
        ]
    },
    {
        id: 15,
        name: "Camping Tent",
        price: 89.99,
        category: "camping",
        desc: "4 Person Waterproof Tent",
        image: "images/AGILITY HURDLES.png",
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
        image: "",
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
        image: "",
        colors: [
            { name: "Blue", code: "#2563eb" }
        ]
    },
    {
        id: 18,
        name: "camping tent",
        price: 58.00,
        category: "camping",
        desc: "2x1.25x1.1m",
        image: "",
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
        image: "images/AGILITY HURDLES.png",
        colors: [
            { name: "Blue", code: "#2563eb" }
        ]
    },
    {
        id: 20,
        name: "Large Whear Medal",
        price: 4.00,
        category: "trophy-medal",
        desc: "65mm x 4mm",
        image: "images/LARGE WHEAR MEDAL.png",
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
        image: "images/RB SCOREBOARD.png",
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
        image: "images/SC LAUNCHER.png",
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
        image: "images/TT LAUNCHER.png",
        colors: [
            { name: "White", code: "#2563eb" }
        ]
    },
    {
        id: 24,
        name: "Multipurpose Scoreboard",
        price: 350.00,
        category: "sports",
        desc: "38.8cm x 19cm x 20cm",
        image: "images/BY SCOREBOARD.png",
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
        image: "images/SC LAUNCHER.png",
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
        image: "images/RESIN TROPHY 30.png",
        colors: [
            { name: "Gold", code: "#eab308" }
        ]
    },
];
