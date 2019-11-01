let formfield = document.getElementById("formfield");
let textfield = document.getElementById("textfield");
let mylist = document.getElementById("mylist");

formfield.addEventListener("submit", e => {
  e.preventDefault();
  createItem(textfield.value);
});

function createItem(x) {
  let myHtml = `<li>${x}<button onClick='buttonDelete(this)'>Delete</button></li>`;
  mylist.insertAdjacentHTML("beforeend", myHtml);
  textfield.value = "";
  textfield.focus();
}

function buttonDelete(toDelete) {
  toDelete.parentElement.remove();
}
