const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

const btn = document.getElementById('btn');
const text = document.querySelector('.color');

const getRandomNumber = () => {
  let randomNumber = Math.floor(Math.random() * hex.length);
  return randomNumber;
};

getRandomNumber();
btn.addEventListener('click', () => {
  let color = '#';
  for (let i = 0; i < 6; i++) {
    let number = hex[getRandomNumber()];
    color += number;
  }
  document.body.style.background = color;
  text.textContent = color;
  text.style.color = color;
});
