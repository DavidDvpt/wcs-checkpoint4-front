import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Carousel, CarouselControl, CarouselIndicators } from 'reactstrap';
import getRealEstates from '../../apiBack';
import setRealEstateList from '../../store/realEstate/actionCreator';
// import { setRealEstateList } from '../../store/realEstate/actionCreator';
import CarousselItem from './CarousselItem';

const Caroussel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [realEstates, setRealEstates] = useState([]);
  const dispatch = useDispatch();
  const animating = useSelector((state) => state.carousel.animating);
  // const realEstateList = useSelector(
  //   (state) => state.realEstate.realEstateList
  // );

  // const dispatch = useDispatch();

  useEffect(() => {
    getRealEstates().then((results) => {
      setRealEstates(results.data);
      dispatch(setRealEstateList(results.data));
    });
  }, []);

  const next = () => {
    if (animating) return;
    const nextIndex =
      activeIndex === realEstates.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex =
      activeIndex === 0 ? realEstates.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  return (
    <Carousel activeIndex={activeIndex} next={next} previous={previous}>
      <CarouselIndicators
        items={realEstates}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {realEstates.map((i) => (
        <CarousselItem key={i.name} imageName={i} />
      ))}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
};

export default Caroussel;
