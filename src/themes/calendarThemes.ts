import type { IDefaultTheme } from './theme';

export const calendarTheme = (theme: IDefaultTheme) => ({
  textDayFontSize: theme.fonts.medium,
  textDayHeaderFontSize: theme.fonts.medium,
  arrowColor: theme.colors.blue80,
  monthTextColor: theme.colors.black80,
  indicatorColor: theme.colors.black60,
  textDisabledColor: theme.colors.black20,
  selectedDayBackgroundColor: theme.colors.blue80,
  selectedDayBorderColor: 'black',
  selectedDayTextColor: theme.colors.white,
  todayTextColor: theme.colors.blue80,
  dayTextColor: theme.colors.black60,
  'stylesheet.calendar.header': {
    week: {
      fontSize: theme.fonts.medium,
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
    monthText: {
      color: '#4C4C4C',
      fontWeight: '600',
      fontSize: 18,
      fontFamily: 'mulish_bold',
    },
    dayHeader: {
      color: theme.colors.black60,
    },
  },
});

export const calendarCreateRecordTheme = (theme: IDefaultTheme) => ({
  arrowColor: theme.colors.blue80,
  monthTextColor: theme.colors.black80,
  indicatorColor: theme.colors.black60,
  textDisabledColor: theme.colors.black20,
  selectedDayBackgroundColor: theme.colors.blue80,
  selectedDayTextColor: theme.colors.white,
  todayTextColor: theme.colors.blue80,
  dayTextColor: theme.colors.black60,
  'stylesheet.calendar.header': {
    week: {
      fontSize: theme.fonts.medium,
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
    monthText: {
      color: '#4C4C4C',
      fontWeight: '600',
      fontSize: 18,
      fontFamily: 'mulish_bold',
    },
    dayHeader: {
      color: theme.colors.black60,
      fontFamily: 'mulish_bold',
      fontWeight: '600',
      fontSize: 14,
      marginTop: 12,
    },
  },
});
