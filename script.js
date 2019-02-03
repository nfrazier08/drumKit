window.onload = function(){

//We want to listen for the key being pressed
window.addEventListener('keydown', function(e) {
    //console.log(e.keyCode);

    //Is there an element on the page that has an audio element?
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

    //We want to grab the key associated with this so that we can add animation
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
   
    if(!audio) return; //stop function from running altogether if there is no audio component

    //We want to rewind the audio element to the beginning so it can be played in succession
    //The currentTime property sets or returns the current position (in seconds) of the audio/video playback.
    //When setting this property, the playback will jump to the specified position. In this case 0 (the start)
    audio.currentTime = 0;

    //play audio element
    audio.play();

    //adding a class of 'playing' when the key is pressed
    key.classList.add('playing')

});

//Using console for e shows the transition end event
//Transitioned is an event listener
function removeTransition(e){
    //console.log(e);
    if(e.propertyName !== 'transform') return; //skip it if its not a transform
    console.log(e.propertyName);

    //'this' is equal to the key
    this.classList.remove('playing');

};

const keys = document.querySelectorAll('.key')
keys.forEach(key => key.addEventListener('transitionend', removeTransition));




}