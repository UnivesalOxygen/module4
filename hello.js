(function(window){
	var hellospeaker={};
	var speakword="Good bye  ";
	hellospeaker.hello=function(name){
	console.log(speakword+""+name);
	}
	window.hellospeaker=hellospeaker;
}
)(window);