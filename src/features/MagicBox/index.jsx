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

  return (
    <div>
      <h2>Magic box feature</h2>

      <BoxList data={boxList} />
    </div>
  );
}

export default MagicBoxFeature;
