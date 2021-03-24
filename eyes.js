//Gets the iris of each eye and binds to variable.  Establishes x and y coordinates from the center of the eye and adjusts within a loop

var balls = document.getElementsByClassName("ball");
document.onmousemove = () => {
  var x = (event.clientX * 100) / window.innerWidth + "%";
  var y = (event.clientY * 100) / window.innerHeight + "%";

  for (let i = 0; i < 2; i++) {
    balls[i].style.left = x;
    balls[i].style.top = y;
    balls[i].transfoorm = "translate(-" + x + ",-" + y + ")";
  }
};
