document.addEventListener('DOMContentLoaded', function () {
    const showModalButtons = document.querySelectorAll('.show-modal');
    const modal = document.querySelector('.modal');
    const modalIframe = document.getElementById('modalIframe');
    const closeModalButton = document.querySelector('.close-modal');
    const overlay = document.querySelector('.overlay');

    showModalButtons.forEach(button => {
        button.addEventListener('click', function () {
            const url = this.getAttribute('data-url');
            modalIframe.src = url;
            modal.classList.remove('hidden');
            overlay.classList.remove('hidden');
        });
    });

    closeModalButton.addEventListener('click', function () {
        modalIframe.src = '';
        modal.classList.add('hidden');
        overlay.classList.add('hidden');
    });

    overlay.addEventListener('click', function () {
        modalIframe.src = '';
        modal.classList.add('hidden');
        overlay.classList.add('hidden');
    });
});
