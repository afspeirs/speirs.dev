type FormatDate = {
  date?: string | Date,
  locale?: string,
  options?: Intl.DateTimeFormatOptions,
};

export function formatDate({
  date,
  locale = 'en-GB',
  options = { dateStyle: 'short' },
}: FormatDate) {
  const dateTime = new Intl.DateTimeFormat(locale, options);

  return dateTime.format(typeof date === 'string' ? new Date(date) : date);
}
