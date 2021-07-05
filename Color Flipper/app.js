const colors = ['green', 'red', 'rgba(133,122,200)', '#f15025'];
const color = document.querySelector('.color');
const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
  let randomNumber = Math.floor(Math.random() * colors.length);
  let backgroundColor = colors[randomNumber];
  document.body.style.background = backgroundColor;
  color.style.color = backgroundColor;
  color.textContent = backgroundColor;
});
