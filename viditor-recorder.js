if(Meteor.isClient)
{
	Meteor.startup(function()
	{
var camera1 = document.getElementById("camera1");
var camera2 = document.getElementById("camera2");
var play = document.getElementById("play");
var pause = document.getElementById("pause");
var stop = document.getElementById("stop");
var constraints = {audio:true, video:true};

function success(stream) {
camera1.src = webkitURL.createObjectURL(stream);
camera1.play();
camera2.src = webkitURL.createObjectURL(stream);
camera2.play();
disableButtons(true, false, false);
}

function failure(error) {
alert(JSON.stringify(error));
}

function disableButtons(disPlay, disPause, disStop) {
play.disabled = disPlay;
pause.disabled = disPause;
stop.disabled = disStop;
}

disableButtons(true, true, true);

if(navigator.webkitGetUserMedia)
navigator.webkitGetUserMedia(constraints, success, failure);
else
alert("Your browser does not support getUserMedia()");

play.addEventListener("click", function() {
disableButtons(true, false, false);
camera.play();
}, false);

pause.addEventListener("click", function() {
disableButtons(false, true, false);
camera.pause();
}, false);

stop.addEventListener("click", function() {
disableButtons(true, true, true);
camera.pause();
camera.src = "";
}, false);

var idx = 0;
var filters = ['grayscale', 'sepia', 'blur', 'brightness', 'contrast', 'hue-rotate',
		 'hue-rotate2', 'hue-rotate3', 'saturate', 'invert', ''];

function changeFilter(e) {
var el = e.target;
el.className = '';
var effect = filters[idx++ % filters.length]; // loop through filters.
if (effect) {
el.classList.add(effect);
}
}

document.querySelector('video').addEventListener('click', changeFilter, false);
	});
}