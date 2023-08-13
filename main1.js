$(function() {
  $(this).bind("contextmenu", function(e) {
      e.preventDefault();
  });
}); 

 /*function check(e)
    {
    alert(e.keyCode);
    }*/
    document.onkeydown = function(e) {
      if (e.ctrlKey && (e.keyCode === 67 || e.keyCode === 86 || e.keyCode === 85 || e.keyCode === 117)) {//Alt+c, Alt+v will also be disabled sadly.
          alert('not allowed by the administrator');
          return false;
      }
      if (e.shiftKey && (e.keyCode === 73 || e.keyCode === 105 )) {//Alt+c, Alt+v will also be disabled sadly.
        alert('not allowed by the administrator');
        return false;
    }
      
};

const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Welcome to KBC Show"];
const typingDelay = 100;
const erasingDelay = 400;
const newTextDelay = 1500; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
  	setTimeout(erase, newTextDelay);

  }
}

function erase() {
	if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});

//const video = document.getElementById("vdeo");
const circlePlayButton = document.getElementById("circle-play-b");
const play= document.getElementById("photo");
const btn2= document.getElementById("btn2");
const btn3=document.getElementById("PRIMAR")
/*function togglePlay() {
	if (video.paused || video.ended) {
		video.play();
	} else {
		video.pause();
	}


/*
  if(video.ended){
    alert("ended");
    /*$(".video-wrapper").hide();
    $("#bus").show();
  }else{
  

  }*/

//}


btn2.onclick = function() {
  //$("#vdeo").show();
 // $("#bus").hide();
 $("#bus").show();
  $("#photo").hide();
  $("#btn2").hide();
  /*video.play();
  video.width='1000px';
  function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }*/
/*
  let user=getCookie("username");
  if(user){
    $("#vdeo").hide();
    $("#bus").show();
  }*/
}
//video.pause();

/*
video.onended = function() {
  $("#vdeo").hide();
  $("#bus").show();

  function setCookie(cname,cvalue,exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  
  setCookie("username", "Stored", 30);
};*/
//$("#vdeo").hide();
$("#bus").hide();
/*
circlePlayButton.addEventListener("click", togglePlay);
video.addEventListener("playing", function () {
	circlePlayButton.style.opacity = 0;
});
*/
/*btn.addEventListener("click",function(){
  function deleteCookies() {
    var allCookies = document.cookie.split(';');
    
    // The "expire" attribute of every cookie is 
    // Set to "Thu, 01 Jan 1970 00:00:00 GMT"
    for (var i = 0; i < allCookies.length; i++)
        document.cookie = allCookies[i] + "=;expires="
        + new Date(0).toUTCString();

    displayCookies.innerHTML = document.cookie;

}
deleteCookies();
})*/
/*video.addEventListener("pause", function () {
	circlePlayButton.style.opacity = 1;
});*/



