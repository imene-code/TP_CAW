var walls = document.getElementsByClassName("boundary");
var s = document.getElementById("start");
var e = document.getElementById("end");
var stat = document.getElementById("status");
var win = true;
var m =true;
s.addEventListener("mouseover", function() {
    win = false;
    stat.innerHTML = "Move your mouse over the S to begin";});
    for (var i = 0; i < walls.length; i++) {
        walls[i].addEventListener("mouseover", function() {
          m =false;
          this.style.background = "red";
          stat.innerHTML = "YOU LOSE!"
          alert("YOU LOSE! Game OVER!");
        });
      }
  e.addEventListener("mouseover", function() {
    if (win == false && m==true) {
        stat.innerHTML = "YOU WIN!";
      alert("CONGRATULATIONS! YOU WIN!");
    }
    if(win == false && m==false){
        alert("hfnfhyezi")
        stat.innerHTML = "YOU LOSE!"
        walls[i].style.background ="red";
      }
      if(win == true && m==true){
        alert("don't cheat")
      }
});
