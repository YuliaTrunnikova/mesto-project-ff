import { cardTemplate, clickOnImage } from "../index";

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
  cardImage.addEventListener("click", () => clickOnImage(name, link));
  likeButton.addEventListener("click", likeCard);
  removeCardButton.addEventListener("click", removeCard);
  return cardElement;
}

export function likeCard(event) {
  const likeButton = event.target;
  likeButton.classList.toggle("card__like-button_is-active");
}
