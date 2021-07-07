const btn = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

btn.addEventListener('click', () => {
  const link = links.classList;
  link.toggle('show-links');

  // another way:
  // let condition = link.contains('show-links');
  // if (condition) {
  //   link.remove('show-links');
  // } else {
  //   link.add('show-links');
  // }
});
