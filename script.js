const questions = document.querySelectorAll('.question');

questions.forEach((btn) => {
  btn.addEventListener('click', () => {
    const answer = btn.nextElementSibling;
    const isOpen = answer.style.display === 'block';
    document.querySelectorAll('.answer').forEach(ans => ans.style.display = 'none');
    answer.style.display = isOpen ? 'none' : 'block';
  });
});

