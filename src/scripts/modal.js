//Открыть попап
export function openModal(popup) {
  popup.classList.add("popup_is-opened", "popup_is-animated");
  popup.addEventListener("click", closeByClick);
  document.addEventListener("keydown", closeByEsc);
}

//Закрыть попап
function closeByEsc(evt) {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector(".popup_is-opened");
    if (openedPopup) {
      closeModal(openedPopup);
    }
  }
}

function closeByClick(evt) {
  if (
    evt.target.classList.contains("popup__close") ||
    evt.target === evt.currentTarget 
  ) {
    closeModal(evt.currentTarget);
  }
}

export function closeModal(popup) {
  popup.classList.remove("popup_is-opened");
  popup.removeEventListener("click", closeByClick);
  document.removeEventListener("keydown", closeByEsc);
}
