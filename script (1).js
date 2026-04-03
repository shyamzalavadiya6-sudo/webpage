document.getElementById("appointmentForm").addEventListener("submit", function(e) {
    e.preventDefault();

    document.getElementById("popup").style.display = "flex";

    this.reset();
});

function closePopup() {
    document.getElementById("popup").style.display = "none";
}