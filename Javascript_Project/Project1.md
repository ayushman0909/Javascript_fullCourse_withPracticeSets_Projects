# Markdown file

# project Link

https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html


## Project 1 Color Changer

```javascript
const body = document.querySelector('body');
const span = document.querySelectorAll('.button');

for (let i = 0; i < span.length; i++) {
  span[i].addEventListener('click', (e) => {
    switch (e.target.id) {
      case 'grey':
        body.style.backgroundColor = e.target.id;
        break;
      case 'white':
        body.style.backgroundColor = e.target.id;
        break;
      case 'blue':
        body.style.backgroundColor = e.target.id;
        break;
      default:
        body.style.backgroundColor = 'yellow';
    }
  });
}

```

## Project 2 BMI Calculator
```javascript
const form = document.querySelector('form');
const displayResultContainer = document.querySelector('#weight-guide');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  for (let i = displayResultContainer.children.length - 1; i >= 0; i--) {
    displayResultContainer.children[i].remove();
  }
  const heightValue = parseInt(document.querySelector('#height').value);
  const weightValue = parseInt(document.querySelector('#weight').value);
  const BMI = (weightValue / (heightValue / 100) ** 2).toFixed(2);
  let result = document.createElement('h3');

  if (BMI < 18.6) {
    result.appendChild(document.createTextNode(`Under-Weight BMI is ${BMI}`));
    displayResultContainer.appendChild(result);
  } else if (BMI >= 18.6 && BMI <= 24.9) {
    result.appendChild(document.createTextNode('Normal BMI is ${BMI}'));
    displayResultContainer.appendChild(result);
  } else {
    result.appendChild(document.createTextNode('Over-Weight BMI is ${BMI}'));
    displayResultContainer.appendChild(result);
  }
});

```



## Project 3 Digital Clock
```javascript
const clockContainer = document.querySelector('#clock');

setInterval(() => {
  const date = new Date();
  clockContainer.innerText = date.toLocaleTimeString();
}, 1000);

```


## Projext 4 Guess the number

```javascript
const form = document.querySelector('.form');
let gameOver = false;
let RandomNumber = Math.floor(Math.random() * 100 + 1);
console.log(RandomNumber);
let Guesses = [];
let lowOrHi = document.querySelector('.lowOrHi');
const CountContainer = document.querySelector('.lastResult');
let CountValue = Number(CountContainer.textContent);
let guessesContainer = document.querySelector('.guesses');
const ResetButton = document.createElement('button');
//Reset
const Reset = () => {
  RandomNumber = Math.floor(Math.random() * 100 + 1);
  CountValue = 10;
  CountContainer.textContent = CountValue;
  Guesses = [];
  guessesContainer.textContent = '';
  lowOrHi.textContent = '';
  document.querySelector('.guessField').value = '';
  ResetButton.style.display = 'none';
  gameOver = false;
};

// Reset Button
ResetButton.textContent = 'New Game';
ResetButton.addEventListener('click', Reset);
lowOrHi.appendChild(ResetButton);
ResetButton.style.display = 'none';

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (gameOver) return;
  const guessFieldValue = Number(document.querySelector('.guessField').value);
  let diff = Math.abs(guessFieldValue - RandomNumber);

  if (
    isNaN(guessFieldValue) ||
    guessFieldValue <= 0 ||
    !Number.isInteger(guessFieldValue) ||
    guessFieldValue > 100
  ) {
    lowOrHi.textContent = `please eneter a valid Natural number between 1 to 100  ${guessFieldValue}`;
  } else {
    if (guessFieldValue === RandomNumber) {
      lowOrHi.textContent = `Correct guess You win The Number is :  ${guessFieldValue}`;
      ResetButton.style.display = 'block';
      lowOrHi.appendChild(ResetButton);
      gameOver = true;
    } else {
      CountValue--;
      CountContainer.textContent = CountValue;
      if (CountValue == 0) {
        lowOrHi.textContent = `Sorry You are Not able  ${guessFieldValue}`;
        ResetButton.style.display = 'block';
        lowOrHi.appendChild(ResetButton);
        gameOver = true;
      } else {
        Guesses.push(guessFieldValue);
        guessesContainer.textContent = Guesses;
        if (diff <= 5) {
          lowOrHi.textContent = 'Too Close';
        } else if (diff <= 10 && diff > 5) {
          lowOrHi.textContent = 'Close';
        } else {
          lowOrHi.textContent = 'Try More';
        }
      }
    }
  }
});

```



## Projext 5 KEY PRESS DETECTOR
``` javascript
console.log('Project 5');
const insert = document.querySelector('#insert');
const h1 = document.createElement('h1');

insert.appendChild(h1);
const DetectButton = (e) => {
  h1.innerText = e.key;
};
document.querySelector('body').addEventListener('keydown', DetectButton);

```

## project 6 Unlimited color changer when start clicked

``` javascript
const start = document.querySelector('#start');
const stop = document.querySelector('#stop');
const body = document.querySelector('body');
let Started = false;
let intervalId;
start.addEventListener('click', () => {
  if (!Started) {
    Started = true;
    intervalId = setInterval(() => {
      const ColorR = Math.floor(Math.random() * 255 + 1);
      const ColorG = Math.floor(Math.random() * 255 + 1);
      const ColorB = Math.floor(Math.random() * 255 + 1);
    }, 1000);
  }
});


```
