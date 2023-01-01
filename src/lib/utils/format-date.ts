import dayjs from 'dayjs';

interface formateDateInterface {
  date?: Date,
  format: string,
}

// TODO: Replace dayjs with Intl.DateTimeFormat helper
const formatDate = ({ date, format }: formateDateInterface) => dayjs(date).format(format);

export default formatDate;
