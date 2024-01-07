import { closeModal } from "./modal";
import { editPopup, addPopup, clickOnImage } from "../index";
import { addCard, removeCard, likeCard } from "./card";

export const editProfileForm = document.forms.editForm;
const nameInput = editProfileForm.name;
const descInput = editProfileForm.description;
const profileTitle = document.querySelector(".profile__title");
const profileDesc = document.querySelector(".profile__description");

export const newPlaceForm = document.forms.newPlace;
const placeName = newPlaceForm.placename;
const placeLink = newPlaceForm.link;

export function fillEditPopupInputs() {
  nameInput.value = profileTitle.textContent;
  descInput.value = profileDesc.textContent;
}

export function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileDesc.textContent = descInput.value;
  closeModal(editPopup);
}

export function handlePlaceFormSubmit(evt) {
  evt.preventDefault();
  const nameValue = placeName.value;
  const linkValue = placeLink.value;

  const card = addCard(
    nameValue,
    linkValue,
    removeCard,
    likeCard,
    clickOnImage
  );
  document.querySelector(".places__list").prepend(card);
  placeName.value = "";
  placeLink.value = "";
  closeModal(addPopup);
}
