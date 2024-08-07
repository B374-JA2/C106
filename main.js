SpeechRecognition = window.webkitSpeechRecognition;
recognition = new SpeechRecognition();

mytextbox = document.getElementById("textbox");
function start() {
    mytextbox.innerHTML = "";
    recognition.start();

}

recognition.onresult = function (event) {
    console.log(event);
    content = event.results[0][0].transcript;
    mytextbox.innerHTML = content;
    if (content == "take my selfie") {
        console.log("Ready for your selfie? Smile!!!");
        speak();
    }
}

Webcam.set({ width:360,height:250,image:"jpeg",jpeg_quality:90 });
camera=document.getElementById("camera");

function speak() {
    synth=window.speechSynthesis;
    speak=document.getElementById("textbox").innerHTML+"in 5 seconds";
    saythis=new SpeechSynthesisUtterance(speak);
    synth.speak(saythis);

    Webcam.attach(camera);
    
    setTimeout(function(){
    takePhoto();
    save();
    },5000)
}

function takePhoto() {
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='myselfie' src=" + data_uri + ">";
    });
}

function save() {
    link=document.getElementById("link");
    img=document.getElementById("myselfie").src;
    link.href=img;
    link.click();
}