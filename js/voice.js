const msg = new SpeechSynthesisUtterance();
let voices = [];
const voicesDropdown = document.querySelector('[name=voice]');
const speakButton = document.querySelector('#speak');
const stopButton = document.querySelector('#stop');
msg.text = document.querySelector('[name="text"]').value;

function populateVoices() {
  // console.log(this);
  voices = this.getVoices();
  console.log(voices);
  voicesDropdown.innerHTML = voices
    .map(voice => `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`)
    .join('');
}

speechSynthesis.addEventListener('voiceschanged', populateVoices);
