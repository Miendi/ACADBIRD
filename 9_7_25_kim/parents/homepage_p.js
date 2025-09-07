document.addEventListener('DOMContentLoaded', () => {
    const addStudentButton = document.querySelector('.add-student-button');
    const modalOverlay = document.querySelector('.modal-overlay');
    const closeModalButton = document.querySelector('.close-modal');
    const cancelButton = document.querySelector('.cancel-button');

    addStudentButton.addEventListener('click', () => {
        modalOverlay.style.display = 'flex';
    });

    closeModalButton.addEventListener('click', () => {
        modalOverlay.style.display = 'none';
    });

    cancelButton.addEventListener('click', () => {
        modalOverlay.style.display = 'none';
    });
});
