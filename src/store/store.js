import { configureStore } from '@reduxjs/toolkit';
import carouselReducer from './carousel/reducer';
import realEstateReducer from './realEstate/reducer';

export default configureStore({
  reducer: {
    realEstate: realEstateReducer,
    carousel: carouselReducer,
  },
});
