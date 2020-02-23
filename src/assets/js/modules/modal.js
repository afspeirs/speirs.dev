const Modal = (function Modal() {
	const modalBackground = document.querySelector('#modal-background');
	const modalFullscreenClose = document.querySelector('.modal.fullscreen-close');
	const modalClose = [...document.querySelectorAll('.modal-close')];
	const dataModal = [...document.querySelectorAll('[data-modal]')];
	const allModals = [...document.querySelectorAll('.modal')];
	const openModals = [];

	const getModalFromId = (idModal) => allModals.filter((modal) => modal.id === `modal-${idModal}`)[0];

	function openModal(idModal) {
		const foundModal = getModalFromId(idModal);

		if (foundModal) {
			foundModal.classList.add('active');
			modalBackground.classList.add('active');
			openModals.push(idModal);
		} else {
			console.error('modal not found');
		}
	}
	function closeModal() {
		const latestModal = openModals[openModals.length - 1];
		const foundModal = getModalFromId(latestModal);
		foundModal.classList.remove('active');
		modalBackground.classList.remove('active');
		openModals.splice(openModals.length - 1, 1);
	}
	function keyPress(key) {
		if (key.keyCode === 27) {
			Modal.closeModal();
		}
	}
	function init() {
		if (dataModal) dataModal.forEach((button) => button.addEventListener('click', () => openModal(button.dataset.modal), false));
		// Close modal and background on click of the modal background
		if (modalBackground) modalBackground.addEventListener('click', closeModal, false);
		if (modalFullscreenClose) modalFullscreenClose.addEventListener('click', closeModal, false);
		if (modalClose) modalClose.forEach((modal) => modal.addEventListener('click', closeModal, false));
		// Close modal on keydown of esc key
		document.addEventListener('keydown', keyPress, false);
	}

	return {
		init,
		openModal,
		closeModal,
	};
}());

export default Modal;
