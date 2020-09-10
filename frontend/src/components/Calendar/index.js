import React, { useEffect, useState } from 'react';
import { getDaysInMonth, getDay } from 'date-fns';
import PropTypes from 'prop-types';

import { Container, Grid, Days, WeakDay, Button } from './styles';

export default function Calendar({ month, year }) {
  const [days, setDays] = useState([]);
  const day = getDay(new Date(year, month, 1));

  function LoopNumbers(value) {
    const daysArray = [];

    for (let i = 1; i <= value; i++) {
      daysArray.push(i);
    }

    setDays(daysArray);
  }

  useEffect(() => {
    setDays([]);
    const daysMonth = getDaysInMonth(new Date(year, month));

    LoopNumbers(daysMonth);
  }, [month, year]);

  return (
    <Container>
      <Days>
        <WeakDay>DOM</WeakDay>
        <WeakDay>SEG</WeakDay>
        <WeakDay>TER</WeakDay>
        <WeakDay>QUA</WeakDay>
        <WeakDay>QUI</WeakDay>
        <WeakDay>SEX</WeakDay>
        <WeakDay>SAB</WeakDay>
      </Days>

      <Grid>
        {days.map(dayMap => (
          <Button start={day + 1} key={dayMap} type="button">
            {dayMap}
          </Button>
        ))}
      </Grid>
    </Container>
  );
}

Calendar.propTypes = {
  month: PropTypes.number,
  year: PropTypes.number,
};

Calendar.defaultProps = {
  month: 0,
  year: 2020,
};
