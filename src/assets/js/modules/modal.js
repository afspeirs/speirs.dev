export default (function Modal() {
	const modalBackground = document.querySelector('#modal-background');
	const modalFullscreenClose = [...document.querySelectorAll('.modal.fullscreen-close')];
	const modalClose = [...document.querySelectorAll('.modal-close')];
	const dataModal = [...document.querySelectorAll('[data-modal]')];
	const allModals = [...document.querySelectorAll('.modal')];
	const openModals = [];

	const getModalFromId = (id) => allModals.find((modal) => modal.id === `modal-${id}`);

	function openModal(id) {
		const foundModal = getModalFromId(id);

		if (foundModal) {
			foundModal.classList.add('active');
			modalBackground.classList.add('active');
			openModals.push(id);
		} else {
			console.error(`No modal called "${id}" was found`); // eslint-disable-line no-console
		}
	}

	function closeModal(id = openModals[openModals.length - 1]) {
		const foundModal = getModalFromId(id);

		if (foundModal) {
			foundModal.classList.remove('active');
			modalBackground.classList.remove('active');
			openModals.pop();
		} else {
			console.error(`No modal called "${id}" was found`); // eslint-disable-line no-console
		}
	}

	function keyPress(event) {
		if (event.key === 'Escape' && openModals.length !== 0) closeModal();
	}

	function init() {
		// Open modal with an id or the data-modal attribute
		if (dataModal) dataModal.forEach((button) => button.addEventListener('click', () => openModal(button.dataset.modal), false));

		// Close modal and background on click of the modal background
		if (modalBackground) modalBackground.addEventListener('click', closeModal, false);
		if (modalFullscreenClose) modalFullscreenClose.forEach((modal) => modal.addEventListener('click', closeModal, false));
		if (modalClose) modalClose.forEach((modal) => modal.addEventListener('click', closeModal, false));

		// Close modal on keydown of esc key
		document.addEventListener('keydown', keyPress, false);
	}

	return {
		init,
		closeModal,
		openModal,
	};
}());
