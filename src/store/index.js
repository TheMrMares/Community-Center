import { init } from "@rematch/core";
import notifications from './../models/notifications';
import auths from './../models/auths';

const store = init({
  models: {
    notifications,
    auths
  },
  redux: {
    reducers: {
      //redux stadnard reducer
    }
  },
});

export default store;
