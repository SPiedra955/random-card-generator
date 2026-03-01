<!-- hide -->
# Random card generator

## Before you begin

Install the packages by typing: `npm install`.

### How do I run my website to see live changes?  

Type on the command line `$ npm run start` and type localhost on the browser.

### Where do I write my code?  

It depends on the language, but you have `./src/app.js`, `./src/style.css` and `./src/index.html` respectively, you can add new `.html` as you please, just make sure to import it on the `app.js`.

> Note: remember that the JS workflow starts inside `window.onload`.

## 📝 Instructions

Create an algorithm that randomly generates a card on each refresh:

* Every time the website is refreshed, a new random card should be displayed.

* The card must have one of the following suits: Hearts, Spades, Clubs, or Diamonds.

* The card value must be one of the following: 2 to 10, King, Queen, Jack, or Ace (no wildcards).

At the end, the project should be similar to this demo.

![image](https://github.com/user-attachments/assets/a68bf5fc-ae65-4676-91d9-676a8bfb0fae)

## 💡 Hints

* Remember that the first event in the lifecycle of a website is `onLoad` (your code starts executing there). You should generate a random number between 1 and 4 to choose a suit, and another random number between 0 and 12 to choose the card value.
* Create a general `.card` class to apply common styles to each card, and an additional CSS class for each suit: `.spade`, `.club`, `.heart`, and `.diamond`.
* Apply the `.card` class to the entire div, but only apply one of the suit classes at a time, depending on the suit you want to apply. 
Copy and paste these emojis into your code for the symbols: ♦ ♥ ♠ ♣

😎 Feeling confident?
The following requirements are not necessary to complete the project successfully, but you can challenge yourself to try them!

* +1 Add a button that generates a new card when clicked.
* +1 Add a timer that automatically generates a new card every 10 seconds.
* +1 Allow the user to specify the width and height of the card using text inputs.

