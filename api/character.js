// api/character.js

const characters = [
    {
        "id": 1,
        "name": "Zeke Zenith",
        "description": "A bald visionary who uses his keen intellect and charm to inspire those around him. He is always one step ahead. His touch power is 200, which allows him to influence the thoughts of others with subtle gestures. His speed is 5, as he prefers to take his time and think things through carefully. With a strength of 70, Zeke relies more on his mental prowess than physical might to get things done.",
        "touchPower": 200, 
        "speed": 5, 
        "strength": 70
    },
    {
        "id": 2,
        "name": "Lila Lumina",
        "description": "A bright and energetic blonde with a passion for adventure. Her radiant smile can light up any room. Her touch power is 250, giving her the ability to influence people around her with a simple touch. She is swift with a speed of 7 and strong with a strength of 65.",
        "touchPower": 250, 
        "speed": 7, 
        "strength": 65
    },
    {
        "id": 3,
        "name": "Cyrus Cronswell",
        "description": "A grizzled man with a mysterious past, known for his wisdom and the crisscross scars that mark his rugged face. His touch power is 220, a result of his mastery in controlling his environment. His speed is 6, with strength of 85, honed from years of surviving in harsh conditions.",
        "touchPower": 220, 
        "speed": 6, 
        "strength": 85
    },
    {
        "id": 4,
        "name": "Cassie Curl",
        "description": "A bubbly girl with a head full of springy curls and a knack for solving puzzles that stump everyone else. Her touch power is 210, allowing her to manipulate objects with precision. She's quick on her feet, with a speed of 8, and her strength is 60, relying on wit rather than brute force.",
        "touchPower": 210, 
        "speed": 8, 
        "strength": 60
    },
    {
        "id": 5,
        "name": "Penny Prowess",
        "description": "A determined and fierce woman, rocking a ponytail even while pregnant. She is a force to be reckoned with! Her touch power is 240, which helps her stay calm and composed under pressure. With a speed of 9 and strength of 90, she's always ready for a challenge.",
        "touchPower": 240, 
        "speed": 9, 
        "strength": 90
    },
    {
        "id": 6,
        "name": "Axel Frost",
        "description": "A shirtless, six-pack-sporting fighter with stark white hair and an icy gaze that can chill the fiercest opponent. His touch power is 280, allowing him to freeze objects with a single touch. His speed is 7 and strength is 95, making him nearly unstoppable in battle.",
        "touchPower": 280, 
        "speed": 7, 
        "strength": 95
    },
    {
        "id": 7,
        "name": "Toby Tangle",
        "description": "A messy-haired teen with a penchant for mischief and a heart of gold, always diving headfirst into trouble. His touch power is 220, giving him a knack for fixing things on the fly. His speed is 6, and his strength is 55, relying more on agility and quick thinking than raw power.",
        "touchPower": 220, 
        "speed": 6, 
        "strength": 55
    },
    {
        "id": 8,
        "name": "Eli Edge",
        "description": "An ordinary-looking boy with extraordinary dreams, quietly working behind the scenes to make them come true. His touch power is 230, which allows him to subtly influence situations. With a speed of 6 and strength of 75, he surprises people with his hidden abilities.",
        "touchPower": 230, 
        "speed": 6, 
        "strength": 75
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
