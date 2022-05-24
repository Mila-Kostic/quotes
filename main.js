//alert('Happy codding!');

var quotes = [
    "\"We become what we think about.\" <br> – Earl Nightingale",

'A reminder that positive thinking helps you frame your mindset and change your life, spoken by the author of, “Essence of Success.”',

'“People who are crazy enough to think they can change the world, are the ones who do.” <br> - Rob Siltanen',

' Rob is a leading creative marketer responsible for some of the most effective and iconic advertising campaigns of the past 30 years.',

' “Optimism is the one quality more associated with success and happiness than any other.” <br>- Brian Tracy',

' Let your positivity and optimism inspire you and lead you to success. That’s my favorite way to achieve success.',

' “Happiness is not something readymade. It comes from your own actions.” <br> -Dalai Lama',

' A visionary among us, the Dalai Lama always has something inspiring to share.',

' “All our dreams can come true if we have the courage to pursue them.” <br>- Walt Disney',

' This amazing quote comes from the man who created the happiest place on earth – and a multibillion-dollar empire.',

' “Success is not final, failure is not fatal: it is the courage to continue that counts.” <br> - Winston Churchill',

' When it comes to inspirational, encouraging quotes by successful people, Winston Churchill’s words of wisdom always make my list.',

' “Believe you can and you’re halfway there.” <br> - Theodore Roosevelt'
];
console.log(quotes);


let btn = document.querySelector("#btn");

btn = addEventListener('click', btnClick);

function btnClick() {
    let randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quote').innerHTML = quotes[randomNumber];
}


