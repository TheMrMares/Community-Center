import { init } from "@rematch/core";
import notifications from './../models/notifications';

const store = init({
  models: {
    notifications,
  },
  redux: {
    reducers: {
      //redux stadnard reducer
    }
  },
});

export default store;
