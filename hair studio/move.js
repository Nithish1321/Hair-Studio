window.addEventListener("load", start, false);
document.addEventListener("mouseover", mouseover, false);
function start() {
    document.getElementById('sn').addEventListener("mousemove", move, false);
    document.getElementById("nsg").addEventListener("mouseover", over1, false);
    document.getElementById("nsg").addEventListener("mouseout", out1, false);
}
function move() {
    document.getElementById('sn').innerHTML = "Beauty Saloon    ";
}
function mouseover() {
    document.getElementById('ns').innerHTML = "Make time for yourself."
}
function over1() {
    document.getElementById("nsg").setAttribute("src", "hi1.png");
  }

  function out1() {
    document.getElementById("nsg").setAttribute("src", "features.jpeg");
  }




  