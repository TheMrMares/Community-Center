import { init } from "@rematch/core";
import notifications from './../models/notifications';
import auths from './../models/auths';
import shouts from './../models/shouts';

const store = init({
  models: {
    notifications,
    auths,
    shouts
  },
  redux: {
    reducers: {
      //redux stadnard reducer
    }
  },
});

export default store;
