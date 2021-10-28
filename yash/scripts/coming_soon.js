var countDownDate = new Date("Jan 5, 2022 15:37:25").getTime();
var circles=document.getElementsByClassName("circle")

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  circles[0].innerHTML=`<span class='text'>${days}</span>` 
  circles[1].innerHTML=`<span class='text'>${hours}</span>` 
  circles[2].innerHTML=`<span class='text'>${minutes}</span>` 
  circles[3].innerHTML=`<span class='text'>${seconds}</span>` 

    
  if (distance < 0) {
    clearInterval(x);
    circles[0].innerHTML=`<span class='text'>Expired</span>` 
    circles[1].innerHTML=`<span class='text'>Expired</span>` 
    circles[2].innerHTML=`<span class='text'>Expired</span>` 
    circles[3].innerHTML=`<span class='text'>Expired</span>`
  }
}, 1000);