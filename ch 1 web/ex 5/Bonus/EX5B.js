document.querySelectorAll('.sample').forEach(sample => {
  sample.addEventListener('click', () => {
    const audio = new Audio(sample.dataset.audio);
    audio.play();
  });
});
