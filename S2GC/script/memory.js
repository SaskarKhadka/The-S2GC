//creating table dynamically
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
                    switch (j) {
                        case 10:
                            cellBody.setAttribute('id', `${value}A`);
                            cellBody.setAttribute('title', `${value}A`);
                            break;
                        case 11:
                            cellBody.setAttribute('id', `${value}B`);
                            cellBody.setAttribute('title', `${value}B`);
                            break;
                        case 12:
                            cellBody.setAttribute('id', `${value}C`);
                            cellBody.setAttribute('title', `${value}C`);
                            break;
                        case 13:
                            cellBody.setAttribute('id', `${value}D`);
                            cellBody.setAttribute('title', `${value}D`);
                            break;
                        case 14:
                            cellBody.setAttribute('id', `${value}E`);
                            cellBody.setAttribute('title', `${value}E`);
                            break;
                        case 15:
                            cellBody.setAttribute('id', `${value}F`);
                            cellBody.setAttribute('title', `${value}F`);
                            break;
                        default:
                            cellBody.setAttribute('id', `${value}${j}`);
                            cellBody.setAttribute('title', `${value}${j}`);
                    }
                }
                cellBody.appendChild(cellText);
                rowBody.appendChild(cellBody);
            }
        }
        createRowHead(i == -1 ?
            '' : i == 10 ?
                'A' : i == 11 ?
                    'B' : i == 12 ?
                        'C' : i == 13 ?
                            'D' : i == 14 ?
                                'E' : i == 15 ?
                                    'F' : i);
        if (i != -1) {
            createRowBody(i == 10 ?
                `${slotNo}A` : i == 11 ?
                    `${slotNo}B` : i == 12 ?
                        `${slotNo}C` : i == 13 ?
                            `${slotNo}D` : i == 14 ?
                                `${slotNo}E` : i == 15 ?
                                    `${slotNo}F` : `${slotNo}${i}`);
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
    createTable(k == 10 ?
        'A' : k == 11 ?
            'B' : k == 12 ?
                'C' : k == 13 ?
                    'D' : k == 14 ?
                        'E' : k == 15 ?
                            'F' : k);
}
