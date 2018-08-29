import store from './../store/index';

export default {
    state: [],
    reducers: {
        LOAD_SHOUTS: (state, payload) => {
            return payload;
        },
        ADD_SHOUTS: (state, payload) => {
            return [...state, payload];
        }
    }
}
