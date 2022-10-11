var SpeechRecognition = window.webkitURLSpeechRecognition;

var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}
recognition.onresult = function(event) {

console.log(event);

var Content = event.results[0][0].transscript;
console.log(Content);
   speak();

document.getElementById("textbox").innerHTML = Content;
}

function speak(){
    var synth = window.speechSynthesis;

    speak_data = document.getElementById("textbox").ariaValueMax;

    var utterThis = new SpeechSynthenisUtterance(speak_data);

    synth.speak(utterThis);
    Webcam.attach(camera);
}



Webcam.set({
    width:360,
    height:250,
    image_format : 'png',
    png_quality:90

});
camera = document.getElementById("camera");