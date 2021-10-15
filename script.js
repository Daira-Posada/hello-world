var firstPeriod = new Date('Oct 30, 2021 8:40:00').getTime();
/* var endfirstPeriod = new Date('Oct 30, 2021 9:27:00').getTime();
var secondPeriod = new Date('Aug 30, 2021 9:32:00').getTime();
var endSecondPeriod = new Date('Aug 30, 2021 10:19:00').getTime();
var thirdPeriod = new Date('Aug 30, 2021 10:24:00').getTime();
var endThirdPeriod = new Date('Aug 30, 2021 11:11:00').getTime();
var fourthPeriod = new Date('Aug 30, 2021 11:16:00').getTime();
var endFourthPeriod = new Date('Aug 30, 2021 12:04:00').getTime();
var fifthPeriod = new Date('Aug 30, 2021 12:09:00').getTime();
var endFifthPeriod = new Date('Aug 30, 2021 1:39:00').getTime();
var sixthPeriod = new Date('Aug 30, 2021 1:44:00').getTime();
var endSixthPeriod = new Date('Aug 30, 2021 2:31:00').getTime();
var sevenPeriod = new Date('Aug 30, 2021' 2:36:00).getTime();
var endSevenPeriod = new Date('Aug 30, 2021' 3:23:00).getTime();
var eightPeriod = new Date('Aug 30, 2021' 3:28:00).getTime();
var endEightPeriod = new Date('Aug 30, 2021' 4:15:00).getTime();*/
var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = firstPeriod - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60))/ (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
   if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "Next Period!";
  }
}, 1000);
