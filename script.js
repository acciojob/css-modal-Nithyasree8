//your JS code here. If required
var modal = document.getElementById("myModal");
var openModalBtn = document.getElementById("openModal");
var closeModalBtn = document.getElementsByClassName("close-modal")[0];

// When the user clicks the button, open the modal
openModalBtn.onclick = function() {
    modal.style.display = "block";
}


closeModalBtn.onclick = function() {
    modal.style.display = "none";
}


window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

