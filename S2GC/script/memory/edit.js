//enabling to edit table
for (let cell of document.querySelectorAll(".cellData")) {
  cell.ondblclick = () => editable.edit(cell);
}

var editable = {
  selected: null,
  value: "",

  edit: (cell) => {
    cell.ondblclick = "";

    cell.contentEditable = true;
    cell.focus();

    cell.classList.add("edit");
    editable.selected = cell;
    editable.value = cell.innerHTML;
    window.addEventListener("click", editable.close);
    cell.onkeydown = (evt) => {
      cell.classList.add("edited");
      if (evt.key == "Enter" || evt.key == "Escape") {
        editable.close(evt.key == "Enter" ? true : false);
        return true;
      }
    };
  },

  close: (evt) => {
    if (evt.target != editable.selected) {
      if (evt === false) {
        editable.selected.innerHTML = editable.value;
        editable.selected.classList.remove("edited");
      }
      window.getSelection().removeAllRanges();
      editable.selected.contentEditable = false;

      window.removeEventListener("click", editable.close);
      let cell = editable.selected;
      cell.ondblclick = () => editable.edit(cell);

      editable.selected.classList.remove("edit");
      editable.selected = null;
      editable.value = "";
      if (evt !== false) {
      }
    }
  },
};
