window.onload = function(){

    //We want to listen for the key being pressed
window.addEventListener('keydown', function(e) {
    //console.log(e.keyCode);

    //Is there an element on the page that has an audio element?
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
   
    if(!audio) return; //stop function from running altogether if there is no audio component

    //play audio element
    audio.play();
});





}