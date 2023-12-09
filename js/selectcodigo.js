function toggleDropdown() {
    var dropdownOptions = document.getElementById("dropdownOptions");
    if (dropdownOptions.style.display === "block") {
        dropdownOptions.style.display = "none";
    } else {
        dropdownOptions.style.display = "block";
    }
}

function selectOption(option) {
    document.querySelector(".dropdown-label").textContent = "Seleccionaste: " + option;
    document.getElementById("dropdownOptions").style.display = "none";
}