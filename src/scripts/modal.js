

//Открыть попап
export function openModal(popup) {
  popup.classList.add("popup_is-opened");
  popup.classList.add("popup_is-animated");
  popup.addEventListener("click", function (evt) {
    if (
      evt.target.classList.contains("popup__close") ||
      evt.target.classList.contains("popup")
    ) {
      closeModal(popup);
    }
  });
  document.addEventListener("keydown", function (evt) {
    if (evt.key === "Escape") {
      closeModal(popup);
    }
  });
};

//Закрыть попап
export function closeModal(popup) {
  popup.classList.remove("popup_is-opened");
  popup.removeEventListener("click", closeModal);
  document.removeEventListener("keydown", closeModal);
};
