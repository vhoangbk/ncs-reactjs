import {createStore, applyMiddleware} from 'redux';
import appReducer from './reducers';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer } from 'redux-persist'

const persistConfig = {
  key: 'root',
  storage,
}

const sagaMiddleware = createSagaMiddleware();

const store = createStore(persistReducer(persistConfig, appReducer), applyMiddleware(sagaMiddleware, logger));

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
export default store;
