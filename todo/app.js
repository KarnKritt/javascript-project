// ----- Select Item -----

const mod = document.querySelector(".modal");
const form = document.querySelector(".form");
const inp = document.querySelector("#txt");
const sub = document.querySelector(".sub");
const lists = document.querySelector(".list");
const clear = document.querySelector(".clear");
const box = document.querySelector(".box");

// ----- edit option -----

let editElement;
let editFlag = false;
let editID = "";

// ----- Event Listener -----

// submit form
form.addEventListener("submit", addItem);
// clear items
clear.addEventListener("click", clearItems);
// loaded item
window.addEventListener("DOMContentLoaded", setupItems);
// ----- Function -----
function addItem(e) {
  e.preventDefault();
  let value = inp.value;
  const id = new Date().getTime().toString();
  if (value && !editFlag) {
    createListItems(id, value);
    // modal
    displayMod("List added", "add");
    // show
    box.classList.add("box-show");
    // add to local storage
    addToLocalStorage(id, value);
    // set back to default
    setBackToDefault();
  } else if (value && editFlag) {
    editElement.innerHTML = value;
    displayMod("List edited", "delete");
    // edit local storage
    editLoacalStorage(editID, value);
    setBackToDefault();
  } else {
    displayMod("Please enter value", "delete");
  }
}
// ----- display modal -----
function displayMod(text, action) {
  mod.textContent = text;
  mod.classList.add(`modal-${action}`);
  function clearMod() {
    mod.textContent = null;
    mod.classList.remove(`modal-${action}`);
  }
  setTimeout(clearMod, 800);
}
// clear items
function clearItems() {
  const items = document.querySelectorAll(".item");
  if (items.length > 0) {
    items.forEach(function (item) {
      lists.removeChild(item);
    });
  }
  box.classList.remove("box-show");
  displayMod("All list cleared", "delete");
  localStorage.removeItem("list");
  setBackToDefault();
}
// delete item
function deleteItem(e) {
  const element = e.currentTarget.parentElement.parentElement;
  const id = element.dataset.id;
  lists.removeChild(element);
  if (lists.children.length === 0) {
    box.classList.remove("box-show");
  }
  displayMod("Removed list", "delete");
  setBackToDefault();
  // remove from local storage
  removeFromLocalStorage(id);
}
// edit item
function editItem(e) {
  const element = e.currentTarget.parentElement.parentElement;
  const id = element.dataset.id;
  // set edit item
  editElement = e.currentTarget.parentElement.previousElementSibling;
  inp.value = editElement.innerHTML;
  editFlag = true;
  editID = id;
  sub.textContent = "Edit";
}
// set back to default
function setBackToDefault() {
  inp.value = null;
  editFlag = false;
  editID = "";
  sub.textContent = "Submit";
}
// ----- Local Storage -----
function addToLocalStorage(id, value) {
  const todoList = { id, value };
  let items = getLocalStorage();
  items.push(todoList);
  localStorage.setItem("list", JSON.stringify(items));
}
function removeFromLocalStorage(id) {
  let items = getLocalStorage();
  items = items.filter(function (item) {
    if (item.id !== id) {
      return item;
    }
  });
  localStorage.setItem("list", JSON.stringify(items));
}
function editLoacalStorage(id, value) {
  let items = getLocalStorage();
  items = items.map(function (item) {
    if (item.id === id) {
      item.value = value;
    }
    return item;
  });
  localStorage.setItem("list", JSON.stringify(items));
}
function getLocalStorage() {
  return localStorage.getItem("list")
    ? JSON.parse(localStorage.getItem("list"))
    : [];
}
// localStorage API
// setItem
// removeItem
// getItem
// save as string
// localStorage.setItem("orange", JSON.stringify(["item", "item2"]));
// const oranges = JSON.parse(localStorage.getItem("orange"));
// console.log(oranges);
// localStorage.removeItem("orange");

// ----- Setup Items -----
function setupItems() {
  let items = getLocalStorage();
  if (items.length > 0) {
    items.forEach(function (item) {
      createListItems(item.id, item.value);
    });
    box.classList.add("box-show");
  }
}

function createListItems(id, value) {
  const element = document.createElement("li");
  // add class
  element.classList.add("item");
  // add id
  const attr = document.createAttribute("data-id");
  attr.value = id;
  element.setAttributeNode(attr);
  element.innerHTML = `<p>${value}</p>
                <button class="btn edit"><i class="fas fa-edit"></i></button>
                <button class="btn delete"><i class="fas fa-trash"></i></button>`;
  const delBtn = element.querySelector(".fa-trash");
  const editBtn = element.querySelector(".fa-edit");
  delBtn.addEventListener("click", deleteItem);
  editBtn.addEventListener("click", editItem);
  lists.appendChild(element);
}
