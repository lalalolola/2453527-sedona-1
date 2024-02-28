const buttonCloseModal = document.querySelector('.close-modal');
const outsideClosingModal = document.querySelector('.modal-container');
const openModal = document.querySelector('.search-hotel-button');

function closeModal(event) {
  if (event.target === outsideClosingModal || event.target === buttonCloseModal || event.target === openModal) {
    outsideClosingModal.classList.toggle('modal-container-close');
  };
};

if (openModal) {
  document.addEventListener("click", closeModal);
};
