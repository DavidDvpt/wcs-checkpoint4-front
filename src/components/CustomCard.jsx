import { Card, CardImg, CardSubtitle } from 'reactstrap';
import PropTypes from 'prop-types';

const CustomCard = ({ imageName, subtitle }) => {
  return (
    <Card key={subtitle} className="row align">
      <CardImg
        className="w-100"
        src={`/static/media/${imageName}`}
        alt={subtitle}
      />
      <CardSubtitle>{subtitle}</CardSubtitle>
    </Card>
  );
};

CustomCard.propTypes = {
  imageName: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};
export default CustomCard;
