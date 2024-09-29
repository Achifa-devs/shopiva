import { configureStore } from '@reduxjs/toolkit';
import floater_src from './entrepreneur/floater_src';

let store = configureStore({
  reducer: {
    floater_src: floater_src
  }

})


export default store;