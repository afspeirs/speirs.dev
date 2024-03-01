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


export const toKebabCase = (value: string) => value
  .replace(/([a-z])([A-Z])/g, '$1-$2') // Get all lowercase letters that are near to uppercase ones
  .replace(/[\s_.]+/g, '-') // Replace all spaces, underscore and full stops
  .toLowerCase();
