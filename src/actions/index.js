import {
  PHONE_ADDED_TO_BASKET,
  FETCH_PHONE_SUCCESS,
  FETCH_PHONES_ERROR,
  FETCH_PHONES_START,
  FETCH_PHONES_SUCCESS,
  // LOAD_MORE_PHONES_ERROR,
  // LOAD_MORE_PHONES_START,
  // LOAD_MORE_PHONES_SUCCESS,
  PHONE_DECREASED_FROM_BASKET,
  PHONE_INCREASED_TO_BASKET,
  PHONE_REMOVED_FROM_BASKET,
  FETCH_PHONE_START,
  FETCH_PHONE_ERROR,
  FETCH_CATEGORY_START,
  FETCH_CATEGORY_SUCCESS,
  FETCH_CATEGORY_ERROR
} from "./actionType";
import {fetchPhonesApi,
  // loadMorePhonesApi
} from "../api";

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
      type: FETCH_PHONE_START
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
        type: FETCH_PHONE_ERROR,
        payload: e,
        error: true
      });
    }
  }
}

export const fetchPhoneByCategoryId = categoryId => {
  return async  dispatch => {
    dispatch({
      type: FETCH_CATEGORY_START
    });

    try {
      let category = await fetchPhonesApi();
      category = category.filter(item => item.categoryId === categoryId);
      dispatch({
        type: FETCH_CATEGORY_SUCCESS,
        payload: category
      })

    }catch (e) {
      dispatch({
        type: FETCH_CATEGORY_ERROR,
        payload: e,
        error: true
      });
    }
  }
}


// const getRenderedPhonesLength = state => state.phones ? state.phones.length : null;
//
// export const loadMorePhones = () => async (dispatch, getState) => {
//   const offset = getRenderedPhonesLength(getState());
//   dispatch({
//     type: LOAD_MORE_PHONES_START
//   });
//
//   try {
//     const phones = await loadMorePhonesApi({offset});
//     dispatch({
//       type: LOAD_MORE_PHONES_SUCCESS,
//       payload: phones
//     })
//
//   }catch (e) {
//     dispatch({
//       type: LOAD_MORE_PHONES_ERROR,
//       payload: e,
//       error: true
//     });
//   }
// };

export const phoneAddedToBasket = (phoneId) => {
  return{
    type: PHONE_ADDED_TO_BASKET,
    payload: phoneId
  }
};
export const phoneDecreasedFromBasket = (phoneId) => {
  return{
    type: PHONE_DECREASED_FROM_BASKET,
    payload: phoneId
  }
};
export const phoneIncreasedToBasket = (phoneId) => {
  return{
    type: PHONE_INCREASED_TO_BASKET,
    payload: phoneId
  }
};
export const phoneRemovedFromBasket = (phoneId) => {
  return{
    type: PHONE_REMOVED_FROM_BASKET,
    payload: phoneId
  }
};
export const checkout = phones => () => {
  alert(JSON.stringify(phones))
};