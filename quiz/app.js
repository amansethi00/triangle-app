var modal = document.getElementById("myModal");
var head = document.querySelector("#head");
// Get the button that opens the modal
var btn = document.querySelectorAll(".myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
const values = ["Quiz on isoceles triangle","Quiz on equilateral triangle","Quiz on right-angled triangle","Random Quiz"]
// When the user clicks the button, open the modal 
for(let i=0;i<btn.length;i++){
    btn[i].onclick = btn.onclick = function() {
        modal.style.display = "block";
        head.innerHTML = values[i];
      }
}


// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}