// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // code implemented from documentation
  // import voice options for drop-down List
  function populateVoiceList() {
    if(typeof speechSynthesis === 'undefined') {
      return;
    }

    var voices = speechSynthesis.getVoices();

    for(var i = 0; i < voices.length; i++) {
      var option = document.createElement('option');
      option.textContent = voices[i].name + ' (' + voices[i].lang + ')';

      if(voices[i].default) {
        option.textContent += ' -- DEFAULT';
      }

      option.setAttribute('data-lang', voices[i].lang);
      option.setAttribute('data-name', voices[i].name);
      document.getElementById("voice-select").appendChild(option);
    }
  }

  populateVoiceList();
  if (typeof speechSynthesis !== 'undefined' && speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  //get option 
  //change voice to option
  console.log(speechSynthesis.speaking)
  // while (speechSynthesis.speaking){
  //   console.log("changeImg");
  // }
  


  // todo: change talking image
  const talkBtn = document.getElementsByTagName('button')[0];
  talkBtn.addEventListener('click', function pressedTalk(){
    var textBox = document.getElementById('text-to-speak').value;
    let utterance = new SpeechSynthesisUtterance(textBox);
    speechSynthesis.speak(utterance);


  

  });



}