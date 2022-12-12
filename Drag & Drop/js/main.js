let inp = document.getElementById("inp");
let btn = document.getElementById("btn");
let boxes = document.querySelectorAll(".box");
let darg = null;
btn.onclick = function () {
  if (inp.value != "") {
    boxes[0].innerHTML += `
    <p class="item" draggable="true">${inp.value}</p>
    `;
    inp.value = "";
    inp.focus();
  }
  dragItem();
};

function dragItem() {
  let items = document.querySelectorAll(".item");
  items.forEach((item) => {
    item.addEventListener("dragstart", () => {
      darg = item;
      item.style.opacity = ".5";
    });
    item.addEventListener("dragend", () => {
      darg = null;
      item.style.opacity = "1";
    });
  });

  boxes.forEach((box) => {
    box.addEventListener("dragover", (e) => {
      e.preventDefault();
      box.style.background = "green";
    });
    box.addEventListener("dragleave", () => {
      box.style.background = "white";
      box.style.transition = ".5s";
    });
    box.addEventListener("drop", () => {
      box.appendChild(darg);
      box.style.background = "white";
      box.style.transition = ".5s";
    });
  });
}
