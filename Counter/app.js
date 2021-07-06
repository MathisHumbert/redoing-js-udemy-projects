const number = document.getElementById('value');

const btns = document.querySelectorAll('.btn');

let count = 0;

const setValueColor = (value) => {
  if (value > 0) {
    number.style.color = 'green';
  } else if (value < 0) {
    number.style.color = 'red';
  } else {
    number.style.color = 'black';
  }
};

btns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    let target = e.currentTarget.classList;
    if (target.contains('decrease')) {
      count--;
    } else if (target.contains('increase')) {
      count++;
    } else {
      count = 0;
    }
    value.textContent = count;
    setValueColor(count);
  });
});
