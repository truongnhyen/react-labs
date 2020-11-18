import Box from './components/Box';
import BoxList from './components/BoxList';

function MagicBoxFeature() {
  const box = {
    color: 'pink',
    luckyNumber: 8,
  };

  const boxList = [
    {
      color: 'yellow',
      luckyNumber: 7,
    },
    {
      color: 'lightblue',
      luckyNumber: 8,
    },
    {
      color: 'lightgreen',
      luckyNumber: 9,
    },
  ];

  return (
    <div>
      <h2>Magic box feature</h2>

      <BoxList boxList={boxList} />

      <Box color="green" luckyNumber={11} />
      <Box color={box.color} luckyNumber={box.luckyNumber} />
      <Box luckyNumber={10} />
    </div>
  );
}

export default MagicBoxFeature;
