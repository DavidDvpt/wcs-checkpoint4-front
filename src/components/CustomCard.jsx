import { Card, CardImg, CardSubtitle } from 'reactstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const CustomCard = ({ id, child, imageName, subtitle }) => {
  return (
    <Link to={`/${child}Detail/${id}`}>
      <Card key={subtitle} className="row align">
        <CardImg
          className="w-100"
          src={`/static/media/${imageName}`}
          alt={subtitle}
        />
        <CardSubtitle>{subtitle}</CardSubtitle>
      </Card>
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
