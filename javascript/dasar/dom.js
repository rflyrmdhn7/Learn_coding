const Tombol = document.getElementById("clickMe");
Tombol.addEventListener("click", function () {
    Tombol.classList.add("btn", "btn-danger", "spinner-border");

});

// tobol beruopa alert
const tombolAlert = document.getElementById("tombolAlert");
tombolAlert.addEventListener("click", function () {
    alert("Hallo selamat datang!");
});
