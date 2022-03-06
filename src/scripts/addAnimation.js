export default function addAnimation(target) {
  target.style.classList.add(".rotate");

  const id = setTimeout(() => {
    target.style.classList.remove(".rotate");
    clearTimeout(id);
  }, 2000);
}