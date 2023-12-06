// @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content; 


// @todo: DOM узлы
const placesList = document.querySelector('.places__list');

// @todo: Функция создания карточки
function addCard(name, link, removeCard) {
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
    const removeCardButton = cardElement.querySelector('.card__delete-button');
    cardElement.querySelector('.card__image').src = link;
    cardElement.querySelector('.card__image').alt = 'фотография региона ' + name;
    cardElement.querySelector('.card__title').textContent = name;
    removeCardButton.addEventListener('click', function (event) {
        removeCard(event);
    });
    return cardElement;
};

// @todo: Функция удаления карточки
function removeCard (event) {
    const cardItem = event.target.closest('.places__item');
    cardItem.remove();
};

// @todo: Вывести карточки на страницу
initialCards.forEach(function(card) {
    placesList.append(addCard(card.name, card.link, removeCard));
});