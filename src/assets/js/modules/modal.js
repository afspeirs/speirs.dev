const Modal = {
	modalBackground: document.querySelector('#modal-background'),
	modalFullscreenClose: document.querySelector('.modal.fullscreen-close'),
	dataModal: [...document.querySelectorAll('[data-modal]')],
	modals: [...document.querySelectorAll('.modal')],
	openModals: [],
	init() {
		if (this.dataModal) this.dataModal.forEach(button => button.addEventListener('click', () => this.openModal(button.dataset.modal), false));
		// Close modal and background on click of the modal background
		if (this.modalBackground) this.modalBackground.addEventListener('click', Modal.closeModal, false);
		if (this.modalFullscreenClose) this.modalFullscreenClose.addEventListener('click', Modal.closeModal, false);
		// Close modal on keydown of esc key
		document.addEventListener('keydown', Modal.keyPress, false);
	},
	getModalFromId(idModal) {
		return Modal.modals.filter(modal => modal.id === `modal-${idModal}`)[0];
	},
	openModal(idModal) {
		const foundModal = Modal.getModalFromId(idModal);
		foundModal.classList.add('active');
		Modal.modalBackground.classList.add('active');
		Modal.openModals.push(idModal);
	},
	closeModal() {
		const latestModal = Modal.openModals[Modal.openModals.length - 1];
		const foundModal = Modal.getModalFromId(latestModal);
		foundModal.classList.remove('active');
		Modal.modalBackground.classList.remove('active');
		Modal.openModals.splice(Modal.openModals.length - 1, 1);
	},
	keyPress(key) {
		if (key.keyCode === 27) {
			Modal.closeModal();
		}
	},
};

export default Modal;
