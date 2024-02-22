let button_close_modal = document.querySelector('.close-modal');
let close_modal = document.querySelector('.modal-container');
let open_modal = document.querySelector('.search-hotel-button');

button_close_modal.onclick = function () {
  close_modal.classList.toggle('modal-container-close');
};

open_modal.onclick = function () {
  close_modal.classList.toggle('modal-container-close');
};
