// api/character.js

const characters = [
    {
        "id": 1,
        "name": "Zeke Zenith",
        "description": "A bald visionary who uses his keen intellect and charm to inspire those around him. He is always one step ahead."
    },
    {
        "id": 2,
        "name": "Lila Lumina",
        "description": "A bright and energetic blonde with a passion for adventure. Her radiant smile can light up any room."
    },
    {
        "id": 3,
        "name": "Cyrus Cronswell",
        "description": "A grizzled man with a mysterious past, known for his wisdom and the crisscross scars that mark his rugged face."
    },
    {
        "id": 4,
        "name": "Cassie Curl",
        "description": "A bubbly girl with a head full of springy curls and a knack for solving puzzles that stump everyone else."
    },
    {
        "id": 5,
        "name": "Penny Prowess",
        "description": "A determined and fierce woman, rocking a ponytail even while pregnant. She is a force to be reckoned with!"
    },
    {
        "id": 6,
        "name": "Axel Frost",
        "description": "A shirtless, six-pack-sporting fighter with stark white hair and an icy gaze that can chill the fiercest opponent."
    },
    {
        "id": 7,
        "name": "Toby Tangle",
        "description": "A messy-haired teen with a penchant for mischief and a heart of gold, always diving headfirst into trouble."
    },
    {
        "id": 8,
        "name": "Eli Edge",
        "description": "An ordinary-looking boy with extraordinary dreams, quietly working behind the scenes to make them come true."
    }
];


// Handle GET request
module.exports = (req, res) => {
    // Enable CORS
    res.setHeader('Access-Control-Allow-Origin', '*');  // Allow requests from any origin
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');  // Allow specific methods
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');  // Allow headers

    const { id } = req.query;

    if (id) {
        const character = characters.find(character => character.id === parseInt(id));
        if (character) {
            return res.status(200).json(character);
        } else {
            return res.status(404).json({ message: "Character not found" });
        }
    }

    return res.status(200).json(characters);
};
