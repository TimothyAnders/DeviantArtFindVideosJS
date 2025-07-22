var results = [];
// '_1fFSj'
// '_1SRCx'
let classNameWith = '_1SRCx';

// results.sort((a, b) => compareTimesByMinutes(a.elementTime, b.elementTime) > 0);

function compareTimesByMinutes(time1, time2) {
  // Assuming time strings are in "HH:MM" format
  const [hours1, minutes1] = time1.split(':').map(Number);
  const [hours2, minutes2] = time2.split(':').map(Number);

  const totalMinutes1 = (hours1 * 60) + minutes1;
  const totalMinutes2 = (hours2 * 60) + minutes2;

  if (totalMinutes1 > totalMinutes2) {
    return 1; // time1 is later
  } else if (totalMinutes1 < totalMinutes2) {
    return -1; // time1 is earlier
  } else {
    return 0; // times are equal
  }
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