/* 
1. Welcome Message for the User
2. Ask the user six questions?
3. Keep asking 

console.log('wellcome to my web siet');
let Name = prompt('whats your name');
console.log(Name);
function feeling() {
    let feeling = confirm('are you good');
    if (feeling === true) {
        console.log(yes);
    }
    else {
        console.log(no);
    }
}
feeling();
function favuriteDish() {
    let favuriteDish = confirm('do you love MANSAF')
    if (favuriteDish === true) {
        console.log(yes);
    }
    else {
        console.log(no)
    }
}
favuriteDish();
function hobbeis() {
    let hobbeis = confirm('do you love dancing')
    if (hobbeis === true) {
        console.log(yes);
    }
    else {
        console.log(no)
    }
}
hobbeis();
function sports() {
    let sports = confirm('do you like football')
    if (sports === true) {
        console.log(yes);
    }
    else {
        console.log(no)
    }
}
sports();
function color() {
    let color = confirm('do you love color red')
    if (color === true) {
        console.log(yes);
    }
    else {
        console.log(no)
    }
}
color();
*/
let guessAge = prompt('how many years i have?');

for (let x = 0; x < 4; x++) {

    if (guessAge == age) {
        alert('correct')
        break;

    } else if (guessAge > age) {
        alert('its higher ');
        guessAge = prompt('how many years i have?');

    } else
        alert('read again the question please');
    guessAge = prompt('how many years i have?');
}

/* question 7
*/

let guessAnswer = '';

let answer = ['The Lord of the Rings', 'Pride and Prejudice', 'oliver twest']
let correct = false;




for (let j = 0; j < 6; j++) {
    guessAnswer = prompt('guess a book that i would to read it?');

    for (let i = 0; i < guessAnswer.length; i++) {
        console.log(answer === [i]); {
            alert(correct);
            alert('here correct answer' + answer);
            correct = true;

            if (correct === true)

                break;
            if (i === 5) {
                alert('here correct answer' + answers)
            } else if (i < 6) {
                alert('wrong');
            }

        }
    }

    let attemps=6;

    while (attemps) {
        guessAnswer = prompt('guess a book that i would to read it?');

        attemps-=1;


    for (let i =0; i < answers.length; i++){
        console.log(answer[i]);
        if (guessAnswer===answer[i]){
            alert('thats correct. here are all the answers'+ answer);

            break;
        }
    }
    }