function startQuiz() {

  const guess = prompt('What does this ✅ stand for?');

  if (guess.toLowerCase() === "tick") {
    alert('You guessed correctly!');
  } else {
    alert('Sorry, the correct answer was Tick.');
  }

  const guess2 = prompt('What does this 🍉 stands for?');
  if (guess2.toLowerCase() === 'watermelon') {
    alert('You guessed correctly again!');
  } else {
    alert('Sorry, the correct answer was Watermelon.');
  }

  const guess3 = prompt('What does this 🧡 stands for?');
  if (guess3.toLowerCase() === 'heart') {
    alert('You guessed correctly again!');
  } else {
    alert('Sorry, the correct answer was Heart.');
  }
}

const guess4 = prompt('What does this 🍔 stands for?');
if (guess4.toLowerCase() === 'burger') {
  alert('You guessed correctly again!');
} else {
  alert('Sorry, the correct answer was Burger.');
}

const guess5 = prompt('What does this 😭 stands for?');
if (guess5.toLowerCase() === 'sad face') {
  alert('You guessed correctly again!');
} else {
  alert('Sorry, the correct answer was Sad Face.');
}

