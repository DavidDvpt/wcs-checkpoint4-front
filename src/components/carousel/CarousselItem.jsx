import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
// import chambord from '../../images/chateaux/chambord.jpg'
import { CarouselItem, CarouselCaption } from 'reactstrap';
import {
  setAnimatingFalse,
  setAnimatingTrue,
} from '../../store/carousel/actionCreator';

const CarousselItem = ({ name, imageName }) => {
  const dispatch = useDispatch();

  return (
    <CarouselItem
      onExiting={() => dispatch(setAnimatingTrue())}
      onExited={() => dispatch(setAnimatingFalse())}
      key={imageName}
    >
      {/* <img src={chambord} alt={imageName.name} /> */}
      <img src={`/static/media/chateaux/${imageName}`} alt={name} />
      <CarouselCaption captionText={name} captionHeader={name} />
    </CarouselItem>
  );
};

CarousselItem.propTypes = {
  name: PropTypes.string.isRequired,
  imageName: PropTypes.string.isRequired,
};

export default CarousselItem;
