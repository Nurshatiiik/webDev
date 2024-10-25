const buttons = document.getElementsByClassName('xylo-button');

for (var i = 0; i < buttons.length; i++) {
  const button = buttons[i];
  button.addEventListener('click', soundButtonDidTap);
}

function soundButtonDidTap(event) {
  let button = event.currentTarget; // current tapped button
  let soundName = button.getAttribute('data-sound'); // get sound name from 'data-sound'
  const audio = new Audio(`sounds/${soundName}.wav`);
  audio.play();

  // Visual feedback on click
  button.classList.add('active');
  setTimeout(() => button.classList.remove('active'), 200);
}

// Add keyboard functionality (A-G)
document.addEventListener('keydown', (event) => {
  const note = mapKeyToNote(event.key);
  if (note) {
    const button = document.getElementById(note);
    button.click(); // Trigger click to reuse the same logic
  }
});

// Map keyboard keys (A-G) to musical notes
function mapKeyToNote(key) {
  switch (key.toLowerCase()) {
    case 'a': return 'C';
    case 's': return 'D';
    case 'd': return 'E';
    case 'f': return 'F';
    case 'g': return 'G';
    case 'h': return 'A';
    case 'j': return 'B';
    default: return null;
  }
}
