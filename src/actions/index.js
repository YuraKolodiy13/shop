import {
  PHONE_ADDED_TO_BASKET,
  FETCH_PHONE_SUCCESS,
  FETCH_PHONES_ERROR,
  FETCH_PHONES_START,
  FETCH_PHONES_SUCCESS, LOAD_MORE_PHONES_ERROR,
  LOAD_MORE_PHONES_START, LOAD_MORE_PHONES_SUCCESS
} from "./actionType";
import {fetchPhonesApi, loadMorePhonesApi} from "../api";

export const fetchPhones = () => async dispatch => {
  dispatch({
    type: FETCH_PHONES_START
  });

  try {
    const phones = await fetchPhonesApi();
    dispatch({
      type: FETCH_PHONES_SUCCESS,
      payload: phones
    })

  }catch (e) {
    dispatch({
      type: FETCH_PHONES_ERROR,
      payload: e,
      error: true
    });
  }
};


export const fetchPhoneById = PhoneId => {
  return async  dispatch => {
    dispatch({
      type: FETCH_PHONES_START
    });

    try {
      let phone = await fetchPhonesApi();
      phone = phone.find(item => item.id === PhoneId);
      dispatch({
        type: FETCH_PHONE_SUCCESS,
        payload: phone
      })

    }catch (e) {
      dispatch({
        type: FETCH_PHONES_ERROR,
        payload: e,
        error: true
      });
    }
}
}


const getRenderedPhonesLength = () => console.log(323)

export const loadMorePhones = () => async (dispatch, getState) => {
  const offset = getRenderedPhonesLength(getState());
  dispatch({
    type: LOAD_MORE_PHONES_START
  });

  try {
    const phones = await loadMorePhonesApi({offset});
    dispatch({
      type: LOAD_MORE_PHONES_SUCCESS,
      payload: phones
    })

  }catch (e) {
    dispatch({
      type: LOAD_MORE_PHONES_ERROR,
      payload: e,
      error: true
    });
  }
};

export const bookAddedToBasket = (phoneId) => {
  return{
    type: PHONE_ADDED_TO_BASKET,
    payload: phoneId
  }
};