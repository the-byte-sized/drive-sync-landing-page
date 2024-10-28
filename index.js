document.addEventListener('DOMContentLoaded', () => {
    const showDetailsBtn = document.querySelectorAll('button.btn.show-details');
    const showLessDetailsBtn = document.querySelectorAll('.show-less-details');

    [...showDetailsBtn, ...showLessDetailsBtn].forEach((button) => {
        button.addEventListener('click', ({target}) => {
            target.closest('.card-holder').classList.toggle('flip');
        })
    })
})