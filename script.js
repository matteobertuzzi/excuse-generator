let who = ['The dog', 'My grandma', 'His turtle', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'the keys', 'the car'];
let when = ['before the class', 'right on time', 'when I finished', 'during my lunch', 'while I was praying'];

function getRandom (array) {
    let randomIndex = Math.floor(Math.random()*array.length);
    const item = array[randomIndex];
    return item
}

const excuse = getRandom(who)+" "+getRandom(action)+" "+getRandom(what)+" "+getRandom(when);

window.onload = () => {
    document.querySelector(".excuse").innerHTML = excuse;
}