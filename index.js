// NAVMENU START

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    let navMenu = document.querySelector(".navMenu");
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    // document.querySelector(".navMenu").style.padding = "15px 10px";
    navMenu.style.padding = "5px 10px";
    navMenu.style.background = "green";

    // document.getElementById("logo").style.fontSize = "25px";
  } else {
    navMenu.style.padding = "15px 10px";
    navMenu.style.background = "red";

    // document.getElementById("logo").style.fontSize = "35px";
  }
}

// NAVMENU ENDS