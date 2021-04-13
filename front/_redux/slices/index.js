import { combineReducers } from 'redux';
import { HYDRATE } from 'next-redux-wrapper';

import userSlice from './user';
import postSlice from './post';
import commentSlice from './comment';
import farmSlice from './farm';
import actionSlice from './action';


const rootReducer = (state, action) => {
  switch (action.type) {
    case HYDRATE:
      return action.payload;
    default: {
      const combineReducer = combineReducers({
        user: userSlice,
        post: postSlice, 
        comment: commentSlice,
        farm: farmSlice,
        action: actionSlice
      });
      return combineReducer(state, action);
    }
  }
};


// export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;