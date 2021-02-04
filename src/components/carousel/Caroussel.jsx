import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  Carousel,
  CarouselCaption,
  CarouselControl,
  CarouselIndicators,
  CarouselItem,
} from 'reactstrap';
import { getRealEstates } from '../../apiBack';
import setRealEstateList from '../../store/realEstate/actionCreator';
// import { setRealEstateList } from '../../store/realEstate/actionCreator';
// import CarousselItem from './CarousselItem';

const Caroussel = () => {
  // const [activeIndex, setActiveIndex] = useState(0);
  const [realEstates, setRealEstates] = useState([]);
  const dispatch = useDispatch();
  // const animating = useSelector((state) => state.carousel.animating);
  // // const realEstateList = useSelector(
  //   (state) => state.realEstate.realEstateList
  // );

  // const dispatch = useDispatch();

  useEffect(() => {
    getRealEstates().then((results) => {
      setRealEstates(results.data);
      dispatch(setRealEstateList(results.data));
    });
  }, []);

  // const next = () => {
  //   if (animating) return;
  //   const nextIndex =
  //     activeIndex === realEstates.length - 1 ? 0 : activeIndex + 1;
  //   setActiveIndex(nextIndex);
  // };

  // const previous = () => {
  //   if (animating) return;
  //   const nextIndex =
  //     activeIndex === 0 ? realEstates.length - 1 : activeIndex - 1;
  //   setActiveIndex(nextIndex);
  // };

  // const goToIndex = (newIndex) => {
  //   if (animating) return;
  //   setActiveIndex(newIndex);
  // };

  // return (
  //   <Carousel activeIndex={activeIndex} next={next} previous={previous}>
  //     <CarouselIndicators
  //       items={realEstates}
  //       activeIndex={activeIndex}
  //       onClickHandler={goToIndex}
  //     />
  //     {realEstates.map((i) => (
  //       <CarousselItem key={i.name} imageName={i} />
  //     ))}
  //     <CarouselControl
  //       direction="prev"
  //       directionText="Previous"
  //       onClickHandler={previous}
  //     />
  //     <CarouselControl
  //       direction="next"
  //       directionText="Next"
  //       onClickHandler={next}
  //     />
  //   </Carousel>
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

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

  const slides = realEstates.map((item) => {
    return (
      <CarouselItem
        key={item.id}
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
      >
        <img
          src={`/static/media/chateaux/${item.imageName}`}
          alt={item.name}
          className="w-100"
        />
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  return (
    <Carousel activeIndex={activeIndex} next={next} previous={previous}>
      <CarouselIndicators
        items={realEstates}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
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
