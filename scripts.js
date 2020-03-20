const modalOverlay = document.querySelector('.modal-overlay');
const foods = document.querySelectorAll('.food');

openModal(foods);
closeModal(modalOverlay);

function openModal(foods) {
    for (let food of foods) {
        food.addEventListener('click', function() {
            const cardImg = food.querySelector('#card-img').src
            const cardTitle = food.querySelector('#card-title').innerHTML
            const cardText = food.querySelector('#card-text').innerHTML

            /* passando o conteúdo para o modal */
            modalOverlay.querySelector('#modal-img').src = `${cardImg}`
            modalOverlay.querySelector('#modal-title').innerHTML = `${cardTitle}`
            modalOverlay.querySelector('#modal-text').innerHTML = `${cardText}`
            modalOverlay.classList.add('active');
        })
    }
}

function closeModal(modalOverlay) {
    modalOverlay.querySelector('.close-modal').addEventListener('click', function() {
        modalOverlay.classList.remove('active');
    });
}