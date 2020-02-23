const Accordion = (function Accordion() {
	const accordionButtons = [...document.querySelectorAll('.accordion-button')];

	function accordionClick() {
		[...this.parentNode.children]
			.forEach((element) => element !== this && element.classList.remove('active'));
		this.classList.toggle('active');
	}

	function init() {
		if (accordionButtons) accordionButtons.forEach((button) => button.addEventListener('click', accordionClick, false));
	}

	return {
		init,
	};
}());

export default Accordion;
