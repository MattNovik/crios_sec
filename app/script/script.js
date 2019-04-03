var  humb = document.querySelector(".hamburger");
var hide = document.querySelector(".hide")

document.body.addEventListener("click", function () {
	var target = event.target;
    while (target != document.body) {
    	if (target == humb) {
    		hide.classList.add("toogle");
    		return;
    	}else if(target.parentNode.classList.contains("hide")) {
            return;
    	}else if (hide.classList.contains("toogle")) {
    		hide.classList.remove("toogle");
    		return;
    	}
     target = target.parentNode;  
    }
});
document.body.addEventListener("click", function () {
	var target = event.target;
    while (target != document.body) {
    	if (target.tagName == "BUTTON") {
    		alert("hi!");
    		alert("What are you doing here?");
    		prompt("Will you play with me? I'm alone here")
    	}
     target = target.parentNode;  
    }
});
