import { configureStore } from '@reduxjs/toolkit';
import floater_src from './entrepreneur/floater_src';
import entrepreneur_cookie from './entrepreneur/entrepreneur_cookie';
import entrepreneur_id from './entrepreneur/entrepreneur_id';
import entrepreneur_data from './entrepreneur/entrepreneur_data';

let store = configureStore({
  reducer: {
    floater_src: floater_src,
    entrepreneur_cookie: entrepreneur_cookie,
    entrepreneur_id: entrepreneur_id,
    entrepreneur_data: entrepreneur_data
  }

})


export default store;