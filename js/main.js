// Elements
const e_quoteContainer = document.getElementById('quote-container');
const e_quote = document.getElementById('quote');
const e_author = document.getElementById('author');

// Fetching the quotes file.
var quotes;
fetch("quotes.json")
    .then(response => response.json())
    .then(data => quotes = data)
    .then(() => newQuote())

// Updates the webpage with a new quote.
function newQuote() {
    let _index = Math.floor(Math.random() * quotes.length);
    e_quote.innerText = quotes[_index]['quoteText'];
    e_author.innerText = quotes[_index]['quoteAuthor'] ?  '~ ' + quotes[_index]['quoteAuthor'] : '';
}

// Listening for 'Enter' key to update quote.
document.addEventListener("keypress", function(event) {
    if (event.code === "Enter") newQuote();
});