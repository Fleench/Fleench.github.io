function showLBH() {
  document.getElementById("photo").style.display = "block"
}
function aSHOW2() {
  var show;
  var firstElement = document.getElementById('AIT');
  var secondElement = document.getElementById('AIFB');
  var thirdElement = document.getElementById('ANO');
  if (show==true) {
      document.getElementById("ANO").style.display = "none";
      show = false;

      // Set the height of secondElement to be equal to the height of firstElement
      secondElement.style.height = firstElement.offsetHeight + 'px';
  }
  if (show==false) {
      document.getElementById("ANO").style.display = "flex";
      show = true;
      secondElement.style.height = thirdElement.offsetHeight + 'px';

  }

}
function aSHOW() {
  // Declare and initialize show as a local variable
  let firstElement = document.getElementById('AIT');
  let secondElement = document.getElementById('AIFB');
  let thirdElement = document.getElementById('ANO');
  let show = document.getElementById("ANO").style.display === "flex";
  // Use ternary operator to toggle show value and display property
  show ? document.getElementById("ANO").style.display = "none" : document.getElementById("ANO").style.display = "flex";
}
/* window.onload = function() {
  var firstElement = document.getElementById('AIT');
var secondElement = document.getElementById('AIFB'); 

// Set the height of secondElement to be equal to the height of firstElement
secondElement.style.height = firstElement.offsetHeight + 'px';
}*/