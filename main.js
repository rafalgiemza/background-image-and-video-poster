const BREAKPOINT = 650;
const BGIMG = document.querySelector('div[data-background-image]');
const POSTER = document.querySelector('video[data-poster]');
const VIDEO = document.querySelector('video[data-src]');

if (screen.width < BREAKPOINT) {
  BGIMG.setAttribute('style', `background-image: url(${BGIMG.dataset.backgroundImage})`);
} else {
  VIDEO.setAttribute('poster', POSTER.dataset.poster);
  const source = document.createElement('source');
  source.setAttribute('type', 'video/mp4')
  source.setAttribute('src', VIDEO.dataset.src)
  VIDEO.appendChild(source)
}