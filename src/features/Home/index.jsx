import React, { useState } from 'react';
import Clock from '../../components/Clock';
import Introduction from './component/Introduction';

HomePage.propTypes = {};

function HomePage(props) {
  const [showClock, setShowClock] = useState(true);

  return (
    <div>
      <Introduction />
      {showClock && <Clock/>}
      <button onClick={()=> setShowClock(false)}>Hide Clock</button>
    </div>
  );
}

export default HomePage;
