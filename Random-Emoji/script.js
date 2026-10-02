const generation = document.getElementById("btn");
const emoji = document.getElementById("emoji");
const emojiName = document.getElementById("emoji-Name");
const apiUrl = "https://emoji-api.com/emojis?access_key=74a6079b6cb2473185bd192e9e400bc102276536"; 
// Replace with your actual access key
async function getEmoji() {
const response = await fetch(apiUrl);
const data = await response.json();
console.log(data);
const randomIndex = Math.floor(Math.random() * data.length);
const randomEmoji = data[randomIndex];
emoji.textContent = randomEmoji.character;
emojiName.textContent = randomEmoji.slug;
}

generation.addEventListener("click", () => {
    getEmoji();
});
