const tableContainer = document.getElementById('table-container');
const table = document.createElement('table');

for (let row = 0; row <= 10; row++) {
    let tableRow = document.createElement('tr');

    for (let column = 0; column <= 10; column++) {
        let tableCell = document.createElement('td');
        if (row === 0) {
            if (column === 0)
                tableCell.innerHTML = 'X';
            else {
                tableCell.innerHTML = `${column}`;
            }
        } else { // row > 0
            if (column === 0)
                tableCell.innerHTML = `${row}`;
            else {
                tableCell.innerHTML = `${column * row}`;
            }
        }
        tableRow.appendChild(tableCell);
    }

    table.appendChild(tableRow);
}

tableContainer.appendChild(table);