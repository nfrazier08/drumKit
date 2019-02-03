window.onload = function(){

//We want to listen for the key being pressed
window.addEventListener('keydown', function(e) {
    //console.log(e.keyCode);

    //Is there an element on the page that has an audio element?
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
   
    if(!audio) return; //stop function from running altogether if there is no audio component

    //We want to rewind the audio element to the beginning so it can be played in succession
    //The currentTime property sets or returns the current position (in seconds) of the audio/video playback.
    //When setting this property, the playback will jump to the specified position. In this case 0 (the start)
    audio.currentTime = 0;

    //play audio element
    audio.play();
});





}