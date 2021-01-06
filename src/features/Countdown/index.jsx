import { Typography } from '@material-ui/core';
import React from 'react';
import useCountdown from '../../hooks/useCountdown';

function Countdown() {
  const seconds = useCountdown({ initialSeconds: 20 });
  return (
    <div>
      <Typography component="h2" variant="h2">
        {seconds}
      </Typography>
    </div>
  );
}

export default Countdown;
