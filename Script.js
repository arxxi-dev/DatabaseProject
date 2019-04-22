var audio,playbtn;
let volbar = document.getElementById('myRange');
function initaudio()
{
    audio = new Audio();
    audio.src = "Pictures, Icons and Assets/Khalid - Better my-free-mp3s.com .mp3";
    

    audio.paused;

    playbtn= document.getElementById('playpause');
    playbtn.addEventListener('click',playpausef);

    function playpausef()
    {
        if(audio.paused)
        {
            audio.play();
            playbtn.className = "pause";
        }
        else
        {
            audio.pause();
            playbtn.className = "play";
        }
    }
}
window.addEventListener('load',initaudio);


volbar.addEventListener('mousemove',volcontrol);

function volcontrol()
{

audio.volume= (volbar.value /101 ) ; 
console.log(audio.volume) ; 


}

/*
var inputVariable = document.getElementsByTagName("input");
for(var i = 0; i < inputVariable.length(); i++){

var variable = inputVariable[i];
	if(variable.getAttribute('value') == 50)
		alert("Got it baby!");


}

*/

/*
var slider = document.getElementById("myRange");
volboi = slider.value;
// Update the current slider value (each time you drag the slider handle)
slider.oninput  = this.value;
volboi = slider.value;

*/












