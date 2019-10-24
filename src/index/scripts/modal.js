// Get the modal
let modal = document.querySelector("#myModal");

// Get the button that opens the modal
var btnToDo = document.querySelector("#addBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btnToDo.addEventListener("click", () => {
  console.log("click");
  modal.style.display = "block";
});

// When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// };

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// };
