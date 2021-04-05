const sortFunction = {
	'date-created-asc': (a, b) => b.date - a.date,
	'date-created-dsc': (a, b) => a.date - b.date,
	'slug-asc': (a, b) => a.slug.localeCompare(b.slug),
	'slug-dsc': (a, b) => b.slug.localeCompare(a.slug),
};

export default sortFunction;
