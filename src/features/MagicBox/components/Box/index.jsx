import './Box.scss';
import PropTypes from 'prop-types';

function Box(props) {
  const { color, luckyNumber } = props;

  return (
    <div className="box" style={{ backgroundColor: color }}>
      {luckyNumber}
    </div>
  );
}

//Validate data
Box.propTypes = {
  color: PropTypes.string,
  luckyNumber: PropTypes.number.isRequired,
};

/* Trong truong hop thang cha khong co gia tri, va khong required
phai tao gia tri mac dinh:
*/
Box.defaultProps = {
  color: 'black',
};
export default Box;
