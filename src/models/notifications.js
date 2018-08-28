import store from './../store/index';

export default {
    state: [],
    reducers: {
      ADD_NOTIFICATION: (state, payload) => {

        console.log(payload);

        window.setTimeout(() => {
            store.dispatch.notifications.DELETE_NOTIFICATION(payload.noteID);
        },payload.livetime);

        return [...state, payload]
      },
      DELETE_NOTIFICATION: (state, payload) => {
            let newArr = state;
            newArr = newArr.filter((item, index) => {
                return (item.noteID !== payload)
            });
            return newArr;
      }
    }
  }