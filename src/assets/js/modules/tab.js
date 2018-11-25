const Tab = {
	tabButtons: [...document.querySelectorAll('div[data-tab]')],
	tabContent: [...document.querySelectorAll('.tab-content')],

	init() {
		this.tabButtons.forEach((e) => {
			e.addEventListener('click', () => {
				// Toggle tab content if the clicked tab is not active
				if (!e.classList.contains('active')) {
					// Set clicked tab as active
					// Remove active from the other tabs
					this.tabButtons.map(tab => (tab === e ? tab.classList.add('active') : tab.classList.remove('active')));
					this.tabContent.map(tab => (tab.id === e.dataset.tab ? tab.classList.add('active') : tab.classList.remove('active')));
				}
			});
		});
	},
};

export default Tab;
