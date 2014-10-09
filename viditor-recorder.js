if(Meteor.isClient)
{
	Meteor.startup(function()
	{
	var constraints = {audio:true, video:true};

	function success(stream)
	{
		$("video").get(0).src = webkitURL.createObjectURL(stream);
		$("video").get(0).play();
	}

	function failure(error)
	{
		alert(JSON.stringify(error));
	}
	
	if(navigator.webkitGetUserMedia)
		navigator.webkitGetUserMedia(constraints, success, failure);
	else
		alert("Your browser does not support getUserMedia()")

	var idx = 0;
	var filters = ['grayscale', 'sepia', 'blur', 'brightness', 'contrast', 'hue-rotate', 'invert', ''];
	function changeFilter(e)
	{
		var el = e.target;
		el.className = '';
		var effect = filters[idx++ % filters.length];
		if (effect) {
		el.classList.add(effect);
	}
}

document.querySelector('video').addEventListener('click', changeFilter, false);
	});
}