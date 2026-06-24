'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number🏆 '; //sets the conent of the html element
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13; //sets the conent of the html element
// document.querySelector('.score').textContent = '10'; //sets the conent of the html element
// document.querySelector('.guess').value = 23; //sets the value of the text field
// console.log(document.querySelector('.guess').value); // gets the value to the textfield
// ////////////////////////////////////////////////////////////////////////////////////////////

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
let score = 20;
let highScore = 0;

// Add a function to display messages
const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value); //convert to number and get the value
  console.log(
    `The selected number is ${guess} and the type is ${typeof guess}`,
  );
  //if no input
  if (!guess) {
    //instead of the below code wwe will use displayMessage Function
    //document.querySelector('.message').textContent = 'No number 😒';
    displayMessage('No number 😒');

    // if no number is typed we send a message to .message text
  } // when number is high
  else if (guess !== secretNumber) {
    if (score > 1) {
      //document.querySelector('.message').textContent =
      //instead of the below code wwe will use displayMessage Function
      //document.querySelector('.message').textContent = 'Too High 😒' : 'Too Low 😒'';
      displayMessage(guess > secretNumber ? 'Too High 😒' : 'Too Low 😒');

      score--;
      document.querySelector('.score').textContent = score;
    } else {
      //instead of the below code wwe will use displayMessage Function
      //document.querySelector('.message').textContent = 'You Lost 😔'';
      displayMessage('You Lost 😔');
    }
  }

  //Keeping the old below code for refrence. We are adding a ternary operator now to check the conditions
  // else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too High 😒';
  //     console.log('Too high');
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You Lost 😔';
  //   }
  // }

  // //when number is low
  // else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too Low 😒';
  //     console.log('Too Low');
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You Lost 😔';
  //   }
  // } // when player wins
  else {
    //instead of the below code wwe will use displayMessage Function
    //document.querySelector('.message').textContent = 'Bang On 🏆';
    displayMessage('Bang On 🏆');
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.number').textContent = secretNumber;
    console.log('Bang on Target');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      console.log(score, highScore);
      document.querySelector('.highScore').textContent = highScore;
    }
  }
});

//Reset function
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  //instead of the below code wwe will use displayMessage Function
  //document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  //document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
});
