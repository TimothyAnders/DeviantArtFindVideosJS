var results = [];
// '_1fFSj'
// '_1SRCx'
let classNameWith = '_1SRCx';

// results.sort((a, b) => compareTimesByMinutes(a.elementTime, b.elementTime) > 0);

function compareTimesByMinutes(time1, time2) {
  const totalMinutes1 = getElementTimeAsMinutes(time1);
  const totalMinutes2 = getElementTimeAsMinutes(time2);

  return totalMinutes1 - totalMinutes2;
}

function getElementTimeAsMinutes(time) {
  if (time.elementTime) {
	  time = time.elementTime;
  }
  
  if (time == "" || time.elementLink) {
	  time = "0:00";
  }
  
  // Assuming time strings are in "HH:MM" format
  const [hours1, minutes1] = time.split(':').map(Number);

   return (hours1 * 60) + minutes1;
}

var interval = setInterval(function(){
for (let elementX of document.getElementsByClassName(classNameWith)) {
	if (!elementX.parentElement.children[2] || !elementX.parentElement.children[2].children[1] || !elementX.parentElement.children[2].children[1].children[0] || !elementX.parentElement.children[2].children[1].children[0].children[0]
	||  !elementX.parentElement.children[2].children[1].children[0].children[0].children[1].children[0]) {
		continue;
	}
	var elementLink = elementX.href;
	var elementTime = elementX.parentElement.children[2].children[1].children[0].children[0].children[1].children[0].children[0].innerHTML; 
	
	var newResult = {elementLink: elementLink, elementTime: elementTime};
	var index = results.findIndex((item) => item.elementLink === elementLink)
	
	if (index == -1) {
		results.push(newResult);
	}
}
	window.scrollTo(0, document.body.scrollHeight);
}, 50);

/*
var interval = setInterval(function(){
	for (let elementX of document.getElementsByClassName(classNameWith)) {
		var elementLink = elementX.parentElement.parentElement.parentElement.parentElement.children[0].href;
		var elementTime = elementX.innerHTML; 
		
		var newResult = {elementLink: elementLink, elementTime: elementTime};
		var index = results.findIndex((item) => item.elementLink === elementLink)
		
		if (index == -1) {
			results.push(newResult);
		}
	}
	window.scrollTo(0, document.body.scrollHeight);
}, 50);

*/
