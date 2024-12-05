document.getElementById("change").addEventListener("click", func);

function func() {
    var elements = document.querySelectorAll(".pr");
    elements.forEach((element, index) => {
        element.textContent = index + 1; // Устанавливаем порядковый номер
    });
}
