function createFloatingElements() {
    const emojiContainer = document.getElementById('emojiContainer');
    const emojis = ['❤️', '🐻'];
    const numberOfEmojis = 3; // Number of copies for each emoji

    emojis.forEach(emoji => {
        for (let i = 0; i < numberOfEmojis; i++) {
            const emojiElement = document.createElement('div');
            emojiElement.innerText = emoji;
            emojiElement.className = 'floating-emoji';
            emojiContainer.appendChild(emojiElement);
            animateEmoji(emojiElement); // Assuming this function animates the emojis
        }
    });
}