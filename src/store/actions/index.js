export const FETCH_LIST_SAGA = 'FETCH_LIST_SAGA';
export const fetchListSagaAction = () => ({
  type: FETCH_LIST_SAGA
});

export const FETCH_LIST_SAGA_SUCCESS = 'FETCH_LIST_SAGA_SUCCESS';
export const fetchListSagaSuccessAction = (data) => ({
  type: FETCH_LIST_SAGA_SUCCESS,
  data
});

export const FETCH_LIST_SAGA_FAIL = 'FETCH_LIST_SAGA_FAIL';
export const fetchListSagaFailAction = (error) => ({
  type: FETCH_LIST_SAGA_FAIL,
  error
});

//------------------------------------------

export const FETCH_DATA_SAGA = 'FETCH_DATA_SAGA';
export const fetchDataSagaAction = () => ({
  type: FETCH_DATA_SAGA
});

export const FETCH_DATA_SAGA_SUCCESS = 'FETCH_DATA_SAGA_SUCCESS';
export const fetchDataSagaSuccessAction = (data) => ({
  type: FETCH_DATA_SAGA_SUCCESS,
  data
});

export const FETCH_DATA_SAGA_FAIL = 'FETCH_DATA_SAGA_FAIL';
export const fetchDataSagaFailAction = (error) => ({
  type: FETCH_DATA_SAGA_FAIL,
  error
});
