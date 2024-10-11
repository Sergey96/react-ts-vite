import moment from 'moment';
import 'moment/locale/ru';
import { timeLocaleRu } from './time.locale';
export const getTime = (value: string) => {
  const objDate = new Date(value);
  const h = objDate.getHours();
  const m = objDate.getMinutes();
  return `${h > 9 ? h : '0' + h}:${m > 9 ? m : '0' + m}`;
};

moment.locale('ru');

export const getLocalTime = (value: string) =>
  moment(value).utc().format('H:mm');

export const getSystemDate = (value: string | Date) =>
  moment(value).format('YYYY-MM-DD');

export const getDate = (day?: number) => {
  const obj = new Date();
  const outDay = day ?? obj.getDate();
  return (
    obj.getFullYear() +
    '-' +
    (obj.getMonth() + 1).toString().padStart(2, '0') +
    '-' +
    (outDay > 9 ? outDay : '0' + outDay)
  );
};

export const formatViewDate = (value: string, isTime = false) => {
  const weekDay = Number(moment(value).utc().day());
  const currentDay = timeLocaleRu.dayNamesShort[weekDay];
  return moment(value)
    .utc()
    .format(`${currentDay}, DD.MM.YYYY${isTime ? ', HH:mm' : ''}`);
};

export const formatDateSimple = (value: string, isUtc = false) => {
  if (!value) {
    return '';
  }

  const date = isUtc ? moment(value).utc() : moment(value);
  const weekDay = Number(date.day());
  const monthDay = Number(date.month());
  const currentDay = timeLocaleRu.dayNamesShort[weekDay];
  const currentMonth = timeLocaleRu.monthNamesRP[monthDay].toLowerCase();
  return date.format(`${currentDay} DD ${currentMonth}`);
};

export const formatMonth = (value: moment.MomentInput) => {
  const date = moment(value);
  const month = Number(date.month());
  const currentMonth = timeLocaleRu.monthNames[month];
  return date.format(`${currentMonth} YYYY`);
};

export const formatViewTime = (value: string) =>
  moment(value).utc().format('HH:mm');

const getHoursWord = (h: number) => {
  if ((h >= 5 && h <= 20) || h === 0) {
    return 'часов';
  }
  if (h < 0) {
    return 'час';
  }
  const count = h % 10;

  if (count === 1) {
    return 'час';
  }
  if (count === 2 || count === 3 || count === 4) {
    return 'часа';
  }
};

export const secondsToTime = (value: number, isFull = false) => {
  const h = Math.floor(value / 3600);
  const m = Math.floor((value % 3600) / 60);

  if (h === 0 && m === 0) {
    return `${h}${isFull ? ' ' + getHoursWord(h) : 'ч'}`;
  }

  if (h === 0) {
    return `${m}${isFull ? ' минут' : 'м'}`;
  }

  if (m === 0) {
    return `${h}${isFull ? ' ' + getHoursWord(h) : 'ч'}`;
  }

  return `${h}${isFull ? ' ' + getHoursWord(h) : 'ч'} ${m}${isFull ? ' минут' : 'м'}`;
};

export const secondsToNumberTime = (value: number) => {
  const h = Math.floor(value / 3600);
  const m = Math.floor((value % 3600) / 60);

  return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}`;
};

export const timeToLabel = (hours: number, minutes: number) =>
  `${hours}`.padStart(2, '0') + ':' + `${minutes}`.toString().padStart(2, '0');

export const timeToSeconds = (hours: number, minutes: number) =>
  hours * 3600 + minutes * 60;

export const getMoment = (value?: string) => moment(value);
