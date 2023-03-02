
function toggleMemorySlot(value) {
    if (value == "on") {
        document.getElementById('checkbox-input').value = 'off';
        document.getElementById('headline-title').innerHTML = 'Instruction View';
    }
    if (value == "off") {
        document.getElementById('checkbox-input').value = 'on';
        document.getElementById('headline-title').innerHTML = 'Data View'
    }
}
