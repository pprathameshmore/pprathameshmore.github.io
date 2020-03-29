window.onload = getQuote;

function getQuote() {

    fetch('https://quote-garden.herokuapp.com/quotes/random').then(res => res.json())
        .then(quote => {
            console.log(quote);
            document.getElementById('quote').innerHTML = quote.quoteText + " - " + quote.quoteAuthor;
        });
}