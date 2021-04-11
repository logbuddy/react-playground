import { createStore, compose, combineReducers, applyMiddleware } from 'redux';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {
    counter: 0,
    names: []
};

export default function configureStore() {
    return createStore(
        (state = initialState, action) => {

            console.debug(action);

            switch (action.type) {

                case 'increaseCounterCommandAction': {
                    return {
                        ...state,
                        counter: state.counter + action.by
                    };
                }

            }

            return state;
        },

        initialState,

        composeEnhancers()
    )
}

export const increaseCounterCommandAction = (by = 1) => ({
    type: 'increaseCounterCommandAction',
    by: by
});
