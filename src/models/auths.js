export default {
    state: {
        authed: false
    },
    reducers: {
      SIGN_IN: (state, payload) => {
        return {...state, authed: true, user: payload}
      },
      SIGN_OUT: (state, payload) => {
        return {...state, authed: false, user: payload}
      }
    }
  }