//using selectors inside the element
const questions = document.querySelectorAll('.question');

questions.forEach((question) => {
  const btn = question.querySelector('.question-btn');
  btn.addEventListener('click', () => {
    questions.forEach((item) => {
      if (question !== item) {
        item.classList.remove('show-text');
      }
    });
    question.classList.toggle('show-text');
  });
});

// traversing the dom
const toggleBtn = document.querySelectorAll('.question-btn');
const question = document.querySelectorAll('.question');

toggleBtn.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const actualQuestion = e.currentTarget.parentElement.parentElement;
    removeAll();
    toggleQuestion(actualQuestion);
  });
});

const toggleQuestion = (element) => {
  element.classList.add('show-text');
};

const removeAll = () => {
  question.forEach((q) => {
    q.classList.remove('show-text');
  });
};
