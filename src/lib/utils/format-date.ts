import dayjs from 'dayjs';

interface formateDateInterface {
  date?: Date,
  format: string,
}

const formatDate = ({ date, format }: formateDateInterface) => dayjs(date).format(format);

export default formatDate;
