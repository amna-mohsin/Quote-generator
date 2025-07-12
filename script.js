const quotes = [
  "The best way to get started is to quit talking and begin doing.",
  "Don’t let yesterday take up too much of today.",
  "Success doesn’t just find you. You have to go out and get it.",
  "Dream big and dare to fail.",
  "Do something today that your future self will thank you for.",
  "Push yourself, because no one else is going to do it for you.",
  "Doubt kills more dreams than failure ever will.",
  "It’s not whether you get knocked down, it’s whether you get up.",
  "Believe you can and you're halfway there.",
  "Make it simple, but significant."
];

function generateQuote() {
  const quote = document.getElementById("quote");
  quote.style.opacity = 0;

  setTimeout(() => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quote.textContent = quotes[randomIndex];
    quote.style.opacity = 1;
  }, 300);
}
