// Code your solutions in this file
//for (let age =30; age < 40; age++){
//    console.log(`I'm ${age} years old. Happy birthday to me!`);
//    debugger;
//}
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`wrapped ${gifts[i]} and added a bow!`);
        debugger;
    }

    return gifts;
}

wrapGifts(gifts);

const thankYouCardArray = [];
function writeCards(arrayName, eventsName) {
    for (let i = 0; i < arrayName.length; i++) {
        let message = `Thank you ${arrayName[i]}, for the woundeful ${eventsName} gift!`;
        thankYouCardArray.push(message);
    }
}
writeCards(["Bob", "Micheal", "Dave"], "Baby Shower");
console.log(thankYouCardArray);

function countdown(int) {
    while (int > 0) {
        console.log(int);
        int--;
    }
}
countdown(3);
