document.addEventListener('DOMContentLoaded', function () {
    // Typing Effect
    const message = "Need a story told? Let’s write it together.";
    let index = 0;
    const welcomeMessage = document.getElementById('welcomeMessage');

    function typeEffect() {
        if (index < message.length) {
            welcomeMessage.innerHTML += message.charAt(index);
            index++;
            setTimeout(typeEffect, 100);
        }
    }

    typeEffect();

    // User Interaction: Responding to User Input
    document.getElementById('generateResponse').addEventListener('click', function () {
        const userInput = document.getElementById('userInput').value;
        const responseElement = document.getElementById('response');

        if (userInput.trim() === "") {
            responseElement.textContent = "Please enter something!";
        } else {
            // Simulate a creative response
            responseElement.textContent = `"${userInput}" sounds like a brilliant idea! Let’s bring it to life with words.`;
        }
    });

    // Writing Style Selector
    const styleContent = document.getElementById('styleContent');
    const styleData = {
        blog: "Blog Writing: In this style, I focus on crafting engaging, informative, and SEO-optimized blog posts tailored to your audience.",
        copy
