//creating table dynamically
const chars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
let memoryBox = document.getElementById('memory-view-box');
let memoryTable;
let tableHead;
let tableBody;
let rowHead;
function memorySlot(slotNo) {
    for (let i = -1; i <= 15; i++) {
        const cellHead = document.createElement('th');
        cellHead.setAttribute('id', 'cellHead');
        let cellText;
        function createRowHead(value) {
            cellText = document.createTextNode(value);
            cellHead.appendChild(cellText);
            rowHead.appendChild(cellHead);
        }
        const rowBody = document.createElement('tr');
        rowBody.classList.add('row');
        function createRowBody(value) {
            for (let j = -1; j <= 15; j++) {
                const cellBody = document.createElement('td');

                if (j == -1) {
                    cellText = document.createTextNode(value);
                    cellBody.setAttribute('id', 'cellBody');

                } else {
                    cellText = document.createTextNode('00');
                    cellBody.classList.add('cellData');
                    cellBody.setAttribute('onmouseenter', "addHoverEffect(this);")
                    cellBody.setAttribute('onmouseleave', "removeHoverEffect(this);")
                    cellBody.setAttribute('id', `${value}${chars[j]}`);
                    cellBody.setAttribute('title', `${value}${j}`);
                }
                cellBody.appendChild(cellText);
                rowBody.appendChild(cellBody);
            }
        }
        createRowHead(i == -1 ? '' : chars[i]);
        if (i != -1) {
            createRowBody(`${slotNo}${chars[i]}`);
        }
        tableHead.appendChild(rowHead);
        tableBody.appendChild(rowBody)
        tableBody.classList.add('tableBody');
    }
}
for (let k = 0; k <= 15; k++) {
    function createTable(value) {
        memoryTable.setAttribute('id', `memory-table${value}`);
        document.getElementById(`memory-table${value}`).style.borderCollapse = "collapse";
        document.getElementById(`memory-table${value}`).style.display = "none";
        memorySlot(value);
    }
    memoryTable = document.createElement('table');
    tableHead = document.createElement('thead');
    tableBody = document.createElement('tbody');
    rowHead = document.createElement('tr');
    memoryTable.appendChild(tableHead);
    memoryTable.appendChild(tableBody);
    memoryBox.appendChild(memoryTable);
    createTable(chars[k]);
}
