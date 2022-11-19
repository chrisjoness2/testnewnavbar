function openNav() {

    	if  (screen.width >= 700) {
        document.getElementById("myNav").style.width = "20%";
    	}
      if (screen.width <= 699) {
        document.getElementById("myNav").style.width = "50%";
      }
       else {
    	document.getElementById("myNav").style.height = "100%";
    	}
    }


function closeNav() {
  if (screen.width >= 700) {
        document.getElementById("myNav").style.width = "0%";
  }
  if (screen.width <= 699) {
    document.getElementById("myNav").style.width = "0%";
  }
  else {
    	document.getElementById("myNav").style.height = "100%";
    	}
    }
