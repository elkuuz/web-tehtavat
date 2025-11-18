const target = document.getElementById('target');

const userAgent = navigator.userAgent;
let browserName = 'Unknown Browser';
let browserVersion = 'Unknown Version';

if (userAgent.indexOf('Firefox') > -1) {
  browserName = 'Mozilla Firefox';
  const versionMatch = userAgent.match(/Firefox\/([0-9\.]+)/);
  if (versionMatch) {
    browserVersion = versionMatch[1];
  }
} else if (userAgent.indexOf('Chrome') > -1) {
  browserName = 'Google Chrome';
  const versionMatch = userAgent.match(/Chrome\/([0-9\.]+)/);
  if (versionMatch) {
    browserVersion = versionMatch[1];
  }
} else if (userAgent.indexOf('Safari') > -1) {
  browserName = 'Apple Safari';
  const versionMatch = userAgent.match(/Version\/([0-9\.]+)/);
  if (versionMatch) {
    browserVersion = versionMatch[1];
  }
}

let os = 'Unknown OS';
if (userAgent.indexOf('Win') !== -1) {
  os = 'Windows';
} else if (userAgent.indexOf('Mac') !== -1) {
  os = 'MacOS';
} else if (userAgent.indexOf('Linux') !== -1) {
  os = 'Linux';
}

const screenWidth = window.screen.width;
const screenHeight = window.screen.height;

const now = new Date();
const dateFI = now.toLocaleDateString('fi-FI', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
});

const timeFI = now.toLocaleTimeString('fi-FI', {
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
});

function addParagraph(text) {
  const p = document.createElement('p');
  p.textContent = text;
  target.appendChild(p);
}

addParagraph(`Selaimen nimi: ${browserName}`);
addParagraph(`Selaimen versio: ${browserVersion}`);
addParagraph(`Käyttöjärjestelmä: ${os}`);
addParagraph(`Näytön resoluutio: ${screenWidth} x ${screenHeight}`);
addParagraph(`Päivämäärä (FI): ${dateFI}`);
addParagraph(`Kellonaika (FI): ${timeFI}`);
