import React from 'react';

import {
  CalendarContainer,
  CalendarDay,

} from './styles';

function getMonth(year, month) {
  return [
    new Date(year, month, 0).getDate(),
    new Date(year, month - 1, 1).getDay(),
  ];
}

function addGoal({
  monthDay, weekDay, year, month,
}) {
  if ((new Date(year, month - 1, monthDay + 1)).getTime() < (new Date()).getTime()) {
    return;
  }

  console.log({
    monthDay, weekDay, year, month,
  });
}

export default function Calendar() {
  const weekDays = ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado'];

  const [year, month] = '2020/8'.split('/');

  const [monthDays, firstWeekDay] = getMonth(year, month);
  const [lastMonthDays] = getMonth(year, month - 1);

  const days = [];
  const date = new Date();

  for (let i = 0, j = 0; i < 42; i++) {
    days.push({
      weekDay: weekDays[i % weekDays.length],
      monthDay: (i > 7 || i >= firstWeekDay) && ++j <= monthDays ? j
        : j < monthDays ? -1 : j,
    });
  }

  const dayOffset = days.map((day) => day.monthDay).indexOf(1) - 1;

  return (
    <CalendarContainer>
      {
        days.map((day, index) => (
          <CalendarDay
            key={`day-${index}`}
            data-monthday={
                    day.monthDay > monthDays ? day.monthDay - monthDays
                      : day.monthDay < 1 ? lastMonthDays - (dayOffset - index)
                        : day.monthDay
                }

            data-weekday={day.weekDay}

            className={`
                ${(day.monthDay < 1 || day.monthDay > monthDays) && 'faded'}
                ${(month - 1 === date.getMonth() && day.monthDay === date.getDate()) && 'focused'}
                ${(month - 1 === date.getMonth() && day.monthDay >= date.getDate()) ? 'future' : 'past'}
            `}

            onClick={() => {
              addGoal({ ...day, year, month });
            }}
          />
        ))
    }
    </CalendarContainer>
  );
}
