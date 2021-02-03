import { useDispatch } from 'react-redux';
// import chambord from '../../images/chateaux/chambord.jpg'
import { CarouselItem, CarouselCaption } from 'reactstrap';
import {
  setAnimatingFalse,
  setAnimatingTrue,
} from '../../store/carousel/actionCreator';

const CarousselItem = ({ imageName }) => {
  const dispatch = useDispatch();

  return (
    <CarouselItem
      onExiting={() => dispatch(setAnimatingTrue())}
      onExited={() => dispatch(setAnimatingFalse())}
      key={imageName}
    >
      {/* <img src={chambord} alt={imageName.name} /> */}
      <img
        src={`/static/media/chateaux/${imageName.imageName}`}
        alt={imageName.name}
      />
      <CarouselCaption
        captionText={imageName.name}
        captionHeader={imageName.name}
      />
    </CarouselItem>
  );
};

export default CarousselItem;
