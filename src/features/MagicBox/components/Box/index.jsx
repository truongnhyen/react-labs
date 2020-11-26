import './Box.scss';
import PropTypes from 'prop-types';

//truyen gia tri object de style theo height
const sizeMap = {
  small: '20px',
  medium: '60px',
  large: '80px',
};

function Box({ boxProps, onClick, children }) {
  const { color = 'black', size = 'medium' } = boxProps;
  const height = sizeMap[size];

  const handleRemoveClick = () => {
    if (onClick) onClick(boxProps);
  };

  return (
    //hoac them class bang size value de thay doi css theo size
    <div className={`box ${size}`} style={{ backgroundColor: color, height: height }}>
      {/* {luckyNumber} */}
      {children}
      <button onClick={handleRemoveClick}>REMOVE</button>
    </div>
  );
}

//Validate data
Box.propTypes = {
  boxProps: PropTypes.object,
  onClick: PropTypes.func,
};

/* Trong truong hop thang cha khong co gia tri, va khong required
phai tao gia tri mac dinh:
*/
Box.defaultProps = {
  boxProps: {},
  onClick: null,
};
export default Box;
