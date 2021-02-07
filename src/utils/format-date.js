import dayjs from 'dayjs';

const formatDate = ({ date, format }) => dayjs(date).format(format);

export default formatDate;
