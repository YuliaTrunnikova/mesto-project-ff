import "./styles/index.css";
import { initialCards } from "./scripts/cards";
import { openModal } from "./scripts/modal";
import {
  handleProfileFormSubmit,
  editProfileForm,
  newPlaceForm,
  handlePlaceFormSubmit,
  fillEditPopupInputs,
} from "./scripts/forms";
import { addCard, removeCard, likeCard } from "./scripts/card";

// @todo: Темплейт карточки
export const cardTemplate = document.querySelector("#card-template").content;

// @todo: DOM узлы
const placesList = document.querySelector(".places__list");
const profileEditButton = document.querySelector(".profile__edit-button");
const addCardButton = document.querySelector(".profile__add-button");
export const editPopup = document.querySelector(".popup_type_edit");
export const addPopup = document.querySelector(".popup_type_new-card");
const imagePopup = document.querySelector(".popup_type_image");
const imagePopupPic = imagePopup.querySelector(".popup__image");
const imagePopupCaption = imagePopup.querySelector(".popup__caption");

// @todo: Функция создания карточки
addCardButton.addEventListener("click", function () {
  openModal(addPopup);
});
newPlaceForm.addEventListener("submit", handlePlaceFormSubmit);

// @todo: Вывести карточки на страницу
initialCards.forEach(function (card) {
  placesList.append(
    addCard(card.name, card.link, removeCard, likeCard, clickOnImage)
  );
});

// @todo: Открыть попап с изображением карточки
export function clickOnImage(name, link) {
  imagePopupPic.src = link;
  imagePopupPic.alt = "фотография региона " + name;
  imagePopupCaption.textContent = name;
  openModal(imagePopup);
}

// @todo: Редактировать профиль
profileEditButton.addEventListener("click", function () {
  fillEditPopupInputs();
  openModal(editPopup);
});
editProfileForm.addEventListener("submit", handleProfileFormSubmit);
