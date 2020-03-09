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
			document.body.classList.add('modal-open');
			foundModal.classList.add('active');
			modalBackground.classList.add('active');
			openModals.push(id);

			// Trigger modal-open event
			const event = new CustomEvent('modal-open');
			foundModal.dispatchEvent(event);
		} else {
			// eslint-disable-next-line no-console
			console.error(`No modal called "${id}" was found`);
		}
	}

	function closeModal(id = openModals[openModals.length - 1]) {
		const foundModal = getModalFromId(id);

		if (foundModal) {
			document.body.classList.remove('modal-open');
			foundModal.classList.remove('active');
			modalBackground.classList.remove('active');
			openModals.pop();

			// Trigger modal-close event
			const event = new CustomEvent('modal-close');
			foundModal.dispatchEvent(event);
		} else {
			// eslint-disable-next-line no-console
			console.error(`No modal called "${id}" was found`);
		}
	}

	function keyPress(event) {
		if (event.key === 'Escape' && openModals.length !== 0) closeModal();
	}

	function init() {
		// Open modal with an id or the data-modal attribute
		if (dataModal) dataModal.forEach((button) => button.addEventListener('click', () => openModal(button.dataset.modal)));

		// Close modal and background on click of the modal background
		if (modalBackground) modalBackground.addEventListener('click', () => closeModal());
		if (modalFullscreenClose) modalFullscreenClose.forEach((modal) => modal.addEventListener('click', () => closeModal()));
		if (modalClose) modalClose.forEach((modal) => modal.addEventListener('click', () => closeModal()));

		// Close modal on keydown of esc key
		document.addEventListener('keydown', keyPress);
	}

	return {
		init,
		closeModal,
		openModal,
	};
}());
