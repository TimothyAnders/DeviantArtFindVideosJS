# DeviantArtFindVideosJS
Just a script to plug into a browser console to find videos, and order them by length.   
You can see the results by printing `results` to the console, and see them sorted by duration using `results.sort((a, b) => compareTimesByMinutes(a.elementTime, b.elementTime) > 0);`.   

Once plugged into a browser, it should start looking for videos while scrolling down on whatever page you're at. You can stop it by using `clearInterval(interval)`.    
Note: Some pages have different className's for the video element.. So you may have to touch the script before using.      
