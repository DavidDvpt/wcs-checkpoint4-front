import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const CustomCard = ({ id, child, imageName, subtitle }) => {
  return (
    <Link to={`/${child}Detail/${id}`}>
      <idv key={subtitle} className="row">
        <img
          className="col-6"
          src={`/static/media/${imageName}`}
          alt={subtitle}
        />
        <h5 className="col-6 font-weight-bold m-auto">{subtitle}</h5>
      </idv>
    </Link>
  );
};

CustomCard.propTypes = {
  id: PropTypes.number.isRequired,
  child: PropTypes.string.isRequired,
  imageName: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};
export default CustomCard;
