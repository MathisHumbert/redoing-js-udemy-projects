const btnContainer = document.querySelector('.btn-container');
const btns = document.querySelectorAll('.tab-btn');
const content = document.querySelectorAll('.content');

btnContainer.addEventListener('click', (e) => {
  const id = e.target.dataset.id;
  btnToggle(id);
  contentToggle(id);
});

const btnToggle = (id) => {
  btns.forEach((btn) => {
    if (btn.dataset.id === id) {
      btn.classList.toggle('active');
    } else {
      btn.classList.remove('active');
    }
  });
};

const contentToggle = (id) => {
  content.forEach((item) => {
    if (item.id === id) {
      item.classList.toggle('active');
    } else {
      item.classList.remove('active');
    }
  });
};

// can be replaced by toggle
// if (!btn.classList.contains('active')) {
//   btn.classList.add('active');
// } else {
//   btn.classList.remove('active');
// }
