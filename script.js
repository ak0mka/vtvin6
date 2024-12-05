var table = document.querySelector("table");
var rows = table.rows;

for (var i = 0; i < rows.length; i++) {
    var td = rows[i].cells[i];
    td.style.backgroundColor = "yellow";
}
