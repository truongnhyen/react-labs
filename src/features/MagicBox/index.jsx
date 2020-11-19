import { useState } from 'react';
import BoxList from './components/BoxList';

const FAKE_DATA = [
  {
    color: 'yellow',
    luckyNumber: 7,
    size: 'small',
  },
  {
    color: 'lightblue',
    luckyNumber: 8,
    size: 'medium',
  },
  {
    color: 'lightgreen',
    luckyNumber: 9,
    size: 'large',
  },
  {
    color: 'orange',
    luckyNumber: 10,
  },
];

function MagicBoxFeature() {
  const [boxList, setBoxList] = useState(FAKE_DATA);

  const handleBoxClick = (boxProps, idx) => {
    //remove box from list
    console.log(boxProps, idx);
    //phai clone mang ra 1 mang moi, thi gia tri moi co the thay doi ngoai UI
    const newBoxList = [...boxList];
    newBoxList.splice(idx, 1);

    setBoxList(newBoxList);
  };

  return (
    <div>
      <h2>Magic box feature</h2>

      <BoxList data={boxList} onBoxClick={handleBoxClick} />
    </div>
  );
}

export default MagicBoxFeature;
