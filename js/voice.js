const msg = new SpeechSynthesisUtterance();
let voices = [];
const voicesDropdown = document.querySelector('[name="voice"]');
let message = document.querySelector('[name="text"]')
const speakButton = document.querySelector('#speak');
const stopButton = document.querySelector('#stop');
msg.text = document.querySelector('[name="text"]').value;

function populateVoices() {
  // console.log(this);
  voices = this.getVoices();
  // console.log(voices);
  voicesDropdown.innerHTML = voices
    // .filter(voice => voice.lang.includes('zh-CN'))
    .map(voice => `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`)
    .join('');
  // console.log(voicesDropdown.innerHTML);
}

function setVoice() {
  msg.voice = voices.find(voice => voice.name === this.value);
}

function setMessage() {
  msg.text = this.value;
  console.log(msg.text);
}

function play() {
  speechSynthesis.speak(msg);
}

speechSynthesis.addEventListener('voiceschanged', populateVoices);
voicesDropdown.addEventListener('change', setVoice);
message.addEventListener('change', setMessage);
speakButton.addEventListener('click', play);
