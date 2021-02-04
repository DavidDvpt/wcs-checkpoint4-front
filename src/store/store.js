import { configureStore } from '@reduxjs/toolkit';
import adminReducer from './admin/reducer';
import carouselReducer from './carousel/reducer';
import familyReducer from './family/reducer';
import realEstateReducer from './realEstate/reducer';

export default configureStore({
  reducer: {
    realEstate: realEstateReducer,
    carousel: carouselReducer,
    family: familyReducer,
    admin: adminReducer,
  },
});
