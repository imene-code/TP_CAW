var walls = document.getElementsByClassName("boundary");
var s = document.getElementById("start");
var e = document.getElementById("end");
var stat = document.getElementById("#status");
var win = true;
var m =true;
for (var i = 0; i < walls.length; i++) {
    walls[i].addEventListener("mouseover", function() {
      m =false;
      this.style.background = "red";
      alert("YOU LOSE! START OVER!");
    });
  }