import { useState } from 'react';

function useButtonClickCounter() {
    //pocetan broj klikova je 0
  const [clickCount, setClickCount] = useState(0);

  //svaki put kad se klikne povecava se za 1
  const handleButtonClick = () => {
    setClickCount((prevCount) => prevCount + 1);
  };

  //za resetovanje kliktanja
  const handleResetClick = () => {
    setClickCount(0);
  };

  return { clickCount, handleButtonClick, handleResetClick };
}

export default useButtonClickCounter;