import { cardTemplate } from "../index";
import { openModal } from "./modal";

const imagePopup = document.querySelector(".popup_type_image");
const imagePopupPic = imagePopup.querySelector(".popup__image");
const imagePopupCaption = imagePopup.querySelector(".popup__caption");

export function removeCard(event) {
  const cardItem = event.target.closest(".places__item");
  cardItem.remove();
}

export function addCard(name, link, removeCard, likeCard, clickOnImage) {
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  const removeCardButton = cardElement.querySelector(".card__delete-button");
  cardElement.querySelector(".card__image").src = link;
  cardElement.querySelector(".card__image").alt = "фотография региона " + name;
  cardElement.querySelector(".card__title").textContent = name;
  const likeButton = cardElement.querySelector(".card__like-button");
  const cardImage = cardElement.querySelector(".card__image");
  cardImage.addEventListener("click", clickOnImage);
  likeButton.addEventListener("click", likeCard);
  removeCardButton.addEventListener("click", function (event) {
    removeCard(event);
  });
  return cardElement;
}

export function likeCard(event) {
  const likeButton = event.target;
  likeButton.classList.toggle("card__like-button_is-active");
}

export function clickOnImage(event) {
  const imagePopup = document.querySelector(".popup_type_image");
  const cardElement = event.target.closest(".card");
  const imageSrc = cardElement.querySelector(".card__image").src;
  const imageCaption = cardElement.querySelector(".card__title").textContent;
  imagePopupPic.src = imageSrc;
  imagePopupCaption.textContent = imageCaption;
  openModal(imagePopup);
}
