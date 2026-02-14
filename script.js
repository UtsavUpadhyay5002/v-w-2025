function createFloatingElements() {
    const emojis = ['❤️', '🐻'];
    emojis.forEach(emoji => {
        for (let i = 0; i < 3; i++) { // Looping 3 times for each emoji
            const element = document.createElement('div');
            element.innerText = emoji;
            // Add styles and animations here as needed
            document.body.appendChild(element);
        }
    });
}