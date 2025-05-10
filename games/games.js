// Array of game data
const games = [
    { name: "boi", icon: "images/game1_icon.png", link: "link/to/game1.html" },
    { name: "1v1.lol", icon: "images/game2_icon.png", link: "pages/1v1lol.html" },
    { name: "Game 3", icon: "images/game3_icon.png", link: "link/to/game3.html" },
    { name: "Game 3", icon: "images/game3_icon.png", link: "link/to/game3.html" },
    { name: "Game 4", icon: "images/game4_icon.png", link: "link/to/game4.html" },
    { name: "Game 5", icon: "images/game5_icon.png", link: "link/to/game5.html" },
    { name: "Game 6", icon: "images/game6_icon.png", link: "link/to/game6.html" },
    { name: "Game 7", icon: "images/game7_icon.png", link: "link/to/game7.html" },
    { name: "Game 8", icon: "images/game8_icon.png", link: "link/to/game8.html" },
    { name: "Game 9", icon: "images/game9_icon.png", link: "link/to/game9.html" },
    { name: "Game 10", icon: "images/game10_icon.png", link: "link/to/game10.html" },
    { name: "Game 11", icon: "images/game11_icon.png", link: "link/to/game11.html" },
    { name: "Game 12", icon: "images/game12_icon.png", link: "link/to/game12.html" },
    { name: "Game 13", icon: "images/game13_icon.png", link: "link/to/game13.html" },
    { name: "Game 14", icon: "images/game14_icon.png", link: "link/to/game14.html" },
    { name: "Game 15", icon: "images/game15_icon.png", link: "link/to/game15.html" },
    { name: "Game 16", icon: "images/game16_icon.png", link: "link/to/game16.html" },
    { name: "Game 17", icon: "images/game17_icon.png", link: "link/to/game17.html" },
    { name: "Game 18", icon: "images/game18_icon.png", link: "link/to/game18.html" },
    { name: "Game 19", icon: "images/game19_icon.png", link: "link/to/game19.html" },
    { name: "Game 20", icon: "images/game20_icon.png", link: "link/to/game20.html" },
    // Add more games here
];

// Function to render games
function renderGames(filter = "") {
    const gamesContainer = document.getElementById("games-container");
    gamesContainer.innerHTML = ""; // Clear existing content

    const filteredGames = games.filter(game =>
        game.name.toLowerCase().includes(filter.toLowerCase())
    );

    filteredGames.forEach(game => {
        const gameElement = document.createElement("div");
        gameElement.className = "game-item";

        gameElement.innerHTML = `
            <a href="${game.link}" class="game-icon">
                <img src="${game.icon}" alt="${game.name}">
            </a>
            <p class="game-title">${game.name}</p>
        `;

        gamesContainer.appendChild(gameElement);
    });
}

// Add event listener for search bar
document.getElementById("search-bar").addEventListener("input", (e) => {
    renderGames(e.target.value);
});

// Initial render
renderGames();