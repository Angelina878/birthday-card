const colors = [
  ['#ff9a9e', '#fad0c4'], // розово-персиковый
  ['#fad0c4', '#fbc2eb'], // персиково-сиреневый
  ['#fbc2eb', '#a6c1ee'], // сиренево-голубой
  ['#a6c1ee', '#c1fcd3'], // голубой-мятный
  ['#c1fcd3', '#ff9a9e'], // мятный-розовый
];

window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const docHeight = document.body.scrollHeight - window.innerHeight;
  const scrollPercent = scrollTop / docHeight;

  const section = Math.floor(scrollPercent * (colors.length - 1));
  const percentInSection = (scrollPercent * (colors.length - 1)) % 1;

  const start = colors[section];
  const end = colors[section + 1] || start;

  const lerp = (a, b, t) => a + (b - a) * t;
  const hexToRgb = hex => hex.match(/\w\w/g).map(x => parseInt(x, 16));
  const rgbToHex = rgb =>
    '#' + rgb.map(x => Math.round(x).toString(16).padStart(2, '0')).join('');

  const rgbStart1 = hexToRgb(start[0]);
  const rgbEnd1 = hexToRgb(end[0]);
  const rgbStart2 = hexToRgb(start[1]);
  const rgbEnd2 = hexToRgb(end[1]);

  const lerped1 = rgbStart1.map((v, i) => lerp(v, rgbEnd1[i], percentInSection));
  const lerped2 = rgbStart2.map((v, i) => lerp(v, rgbEnd2[i], percentInSection));

  const color1 = rgbToHex(lerped1);
  const color2 = rgbToHex(lerped2);

  document.body.style.background = `linear-gradient(135deg, ${color1}, ${color2})`;
});
const openBtn = document.getElementById('openBtn');
const intro = document.getElementById('intro');
const card = document.getElementById('card');

openBtn.addEventListener('click', () => {
  intro.style.display = 'none';
  card.classList.add('show');
});
window.addEventListener('click', () => {
  const audio = document.getElementById('bg-music');
  if (audio && audio.paused) {
    audio.play().catch(() => {});
  }
}, { once: true }); // Только один раз — при первом касании
const heartsContainer = document.querySelector('.hearts-container');

function createHeart() {
  const heart = document.createElement('div');
  heart.className = 'heart';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = 4 + Math.random() * 4 + 's';
  heart.style.opacity = 0.5 + Math.random() * 0.5;
  heart.style.transform = `scale(${0.5 + Math.random()}) rotate(45deg)`;
  heartsContainer.appendChild(heart);
  setTimeout(() => heartsContainer.removeChild(heart), 8000);
}

setInterval(createHeart, 300);

