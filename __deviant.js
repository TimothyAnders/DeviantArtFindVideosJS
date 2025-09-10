var results = [];
let classNameWithArray = ['_1fFSj', '_1SRCx'];

// results.sort((a, b) => compareTimesByMinutes(a.elementTime, b.elementTime));

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

function findElementsWithTime() {
	for (let classNameWith of classNameWithArray) {
		for (let elementX of document.getElementsByClassName(classNameWith)) {
			var elementLink;
			var elementTime;
			
			if (!elementX.parentElement.children[2] || !elementX.parentElement.children[2].children[1] || !elementX.parentElement.children[2].children[1].children[0] || !elementX.parentElement.children[2].children[1].children[0].children[0]
				||  !elementX.parentElement.children[2].children[1].children[0].children[0].children[1].children[0]) {
				if (!elementX.innerHTML.includes(':')) {
					continue;
				} else {
					elementTime = elementX.innerHTML;
					elementLink = elementX.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.children[1].href;
				}
			} else {
				elementLink = elementX.href;
				elementTime = elementX.parentElement.children[2].children[1].children[0].children[0].children[1].children[0].children[0].innerHTML; 
			}
			
			var newResult = {elementLink: elementLink, elementTime: elementTime};
			var index = results.findIndex((item) => item.elementLink === elementLink)
			
			if (index == -1) {
				results.push(newResult);
			}
		}
	}
}

var interval = setInterval(function(){
	findElementsWithTime();
	window.scrollTo(0, document.body.scrollHeight);
}, 50);
