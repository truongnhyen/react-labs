import './Box.scss';
import PropTypes from 'prop-types';

//truyen gia tri object de style theo height
const sizeMap = {
  small: '20px',
  medium: '60px',
  large: '80px',
};

function Box({ boxProps }) {
  const { color = 'black', luckyNumber, size = 'medium' } = boxProps;
  const heightVal = sizeMap[size];

  return (
    //hoac them class bang size value de thay doi css theo size
    <div className={`box ${size}`} style={{ backgroundColor: color, height: heightVal }}>
      {luckyNumber}
    </div>
  );
}

//Validate data
Box.propTypes = {
  boxProps: PropTypes.object,
};

/* Trong truong hop thang cha khong co gia tri, va khong required
phai tao gia tri mac dinh:
*/
Box.defaultProps = {
  boxProps: {},
};
export default Box;
