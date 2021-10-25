// expose.js
window.addEventListener('DOMContentLoaded', init);

function init() {

  var curChoice = -1;

  const hornSelection = document.querySelector("#horn-select");
  hornSelection.addEventListener('change', (updatedChoice) =>{
    var hornName = updatedChoice.target.value;
    // select the audio element by its class name
    var audioElement = document.getElementsByClassName("hidden")[0];
    switch (hornName){
      case "air-horn":
        // set img
        document.querySelector('#expose img').src = 'assets/images/air-horn.svg';
        // re-assign audio path
        audioElement.src = 'assets/audio/air-horn.mp3';
        curChoice = 1; 
        break;
      case "car-horn":
        document.querySelector('#expose img').src = 'assets/images/car-horn.svg';
        audioElement.src = 'assets/audio/car-horn.mp3';
        curChoice = 2;
        break;
      case "party-horn":
        document.querySelector('#expose img').src = 'assets/images/party-horn.svg';
        audioElement.src = 'assets/audio/party-horn.mp3';
        curChoice = 3;
        break;
      default:
        break;
    }
  });

  const volumeKnob = document.getElementById("volume");
  volumeKnob.oninput = function adjustVolume(){
    var loudness = this.value

    var audio = document.getElementsByClassName("hidden")[0];
    audio.volume = loudness/100; 

    var volumeImg = document.getElementById('volume-controls').getElementsByTagName('img')[0];
    if (loudness == 0){
      volumeImg.src = 'assets/icons/volume-level-0.svg';
    }else if (loudness < 33){
      volumeImg.src = 'assets/icons/volume-level-1.svg';
    }else if (loudness < 67){
      volumeImg.src = 'assets/icons/volume-level-2.svg';
    }else{
      volumeImg.src = 'assets/icons/volume-level-3.svg';
    }

  };

  const playBtn = document.querySelector("#expose button");
  playBtn.addEventListener('click', function btnClicked(){
    var audio = document.getElementsByClassName("hidden")[0];
    audio.play();

    if (curChoice == 3){
      const jsConfetti = new JSConfetti();
      jsConfetti.addConfetti({
        emojis: ['🎉', '🥳', '🎈', '✨', '🎊'],
      })
    }
  })
  
}



