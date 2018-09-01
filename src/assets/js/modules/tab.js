const Tab = {
	tabButtons: [...document.querySelectorAll('div[data-tab]')],
	tabContent: [...document.querySelectorAll('.tab-content')],

	init() {
		this.tabButtons.forEach((e) => {
			e.addEventListener('click', () => {
				// Toggle tab content
				const thisTab = e.dataset.tab;
				this.tabContent.map(tab => (tab.id === thisTab && !tab.classList.contains('active')) ? tab.classList.add('active') : tab.classList.remove('active'));

				// Set tab button active
				this.tabButtons.map(tab => (tab === e && !tab.classList.contains('active')) ? tab.classList.add('active') : tab.classList.remove('active'));
			});
		});
	},
};

export default Tab;
