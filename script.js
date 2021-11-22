var tableContainer = document.getElementById('table-container');
var table = document.createElement('table');
for (var row = 0; row <= 10; row++) {
    var tableRow = document.createElement('tr');
    for (var column = 0; column <= 10; column++) {
        var tableCell = document.createElement('td');
        if (row === 0) {
            if (column === 0)
                tableCell.innerHTML = 'X';
            else {
                tableCell.innerHTML = "" + column;
            }
        }
        else { // row > 0
            if (column === 0)
                tableCell.innerHTML = "" + row;
            else {
                tableCell.innerHTML = "" + column * row;
            }
        }
        tableRow.appendChild(tableCell);
    }
    table.appendChild(tableRow);
}
tableContainer.appendChild(table);
