/* Created by Tivotal */

const viewBtn = document.querySelector(".view-modal");
const popup = document.querySelector(".popup");
const close = document.querySelector(".close");
const field = document.querySelector(".field");
const input = document.querySelector("input");
const copy = document.querySelector(".field button");

viewBtn.onclick = () => {
  popup.classList.toggle("show");
};

close.onclick = () => {
  viewBtn.click();
};

copy.onclick = () => {
  //select input
  input.select();
  window.navigator.clipboard.writeText(input.value);
  field.classList.add("active");
  copy.innerText = "Copied";
  setTimeout(() => {
    field.classList.remove("active");
    copy.innerText = "Copy";
    //remove selected items
    window.getSelection().removeAllRanges();
  }, 3000);
};
