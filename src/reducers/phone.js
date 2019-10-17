import {
  FETCH_CATEGORY_ERROR,
  FETCH_CATEGORY_START, FETCH_CATEGORY_SUCCESS,
  FETCH_PHONE_ERROR,
  FETCH_PHONE_START,
  FETCH_PHONE_SUCCESS,
  FETCH_PHONES_ERROR,
  FETCH_PHONES_START,
  FETCH_PHONES_SUCCESS,
  // LOAD_MORE_PHONES_SUCCESS,
  PHONE_ADDED_TO_BASKET,
  PHONE_DECREASED_FROM_BASKET,
  PHONE_INCREASED_TO_BASKET,
  PHONE_REMOVED_FROM_BASKET
} from "../actions/actionType";

const initialState = {
  phones: [],
  phone: {},
  category: [],
  loading: true,
  basketItems: JSON.parse(localStorage.getItem('basketItems')) || [],
  orderTotal: JSON.parse(localStorage.getItem('orderTotal')) || 0
};

const updateOrder = (state, phoneId, quantity) => {
  const phone = state.phones.find(phone => phone.id === phoneId);

  const itemIndex = state.basketItems.findIndex(({id}) => id === phoneId);
  const item = state.basketItems[itemIndex];
  let newItem;

  if(item){
    newItem = {
      ...item,
      count: item.count + quantity,
      total: item.total + quantity * item.price
    };

    if((item.count === 1 && quantity === -1) || (item.count === -quantity)){
      localStorage.setItem('basketItems', JSON.stringify([...state.basketItems.slice(0, itemIndex), ...state.basketItems.slice(itemIndex + 1)]));
      localStorage.setItem('orderTotal', JSON.stringify(state.orderTotal - state.basketItems[itemIndex].total));
      return{
        ...state,
        orderTotal: state.orderTotal - state.basketItems[itemIndex].total,
        basketItems: [
          ...state.basketItems.slice(0, itemIndex),
          ...state.basketItems.slice(itemIndex + 1)
        ]
      };
    }
    localStorage.setItem('basketItems', JSON.stringify([...state.basketItems.slice(0, itemIndex), newItem, ...state.basketItems.slice(itemIndex + 1)]));
    localStorage.setItem('orderTotal', JSON.stringify(state.orderTotal + quantity * item.price));
    return{
      ...state,
      orderTotal: state.orderTotal + quantity * item.price,
      basketItems: [
        ...state.basketItems.slice(0, itemIndex),
        newItem,
        ...state.basketItems.slice(itemIndex + 1)
      ]
    };
  }else {
    newItem = {
      id: phone.id,
      name: phone.name,
      count: 1,
      price: phone.price,
      total: phone.price,
      image: phone.image
    };
    localStorage.setItem('basketItems', JSON.stringify([...state.basketItems, newItem]));
    localStorage.setItem('orderTotal', JSON.stringify(state.orderTotal + quantity * newItem.price));
    return{
      ...state,
      orderTotal: state.orderTotal + quantity * newItem.price,
      basketItems: [...state.basketItems, newItem]
    };
  }
};

const phone = (state = initialState, action) => {
  switch (action.type){
    case FETCH_PHONES_START:
      return{
        ...state,
        loading: true
      };
    case FETCH_PHONES_SUCCESS:
      // localStorage.setItem('phones', JSON.stringify(action.payload));
      return{
        ...state,
        phones: action.payload,
        loading: false
      };
    case FETCH_PHONES_ERROR:
      return{
        ...state,
        error: action.error,
        loading: false
      };
    case FETCH_PHONE_START:
      return{
        ...state,
        loading: true
      };

    case FETCH_PHONE_SUCCESS:
      return{
        ...state,
        phone: action.payload,
        loading: false
      };

    case FETCH_PHONE_ERROR:
      return{
        ...state,
        error: action.error,
        loading: false
      };

    case FETCH_CATEGORY_START:
      return{
        ...state,
        loading: true
      };

    case FETCH_CATEGORY_SUCCESS:
      return{
        ...state,
        category: action.payload,
        loading: false
      };

    case FETCH_CATEGORY_ERROR:
      return{
        ...state,
        error: action.error,
        loading: false
      };

    // case LOAD_MORE_PHONES_SUCCESS:
    //   return{
    //     ...state,
    //     phones: [...state.phones, ...action.payload],
    //     loading: false
    //   };

    case PHONE_ADDED_TO_BASKET:
      return updateOrder(state, action.payload, 1);

    case PHONE_DECREASED_FROM_BASKET:
      return updateOrder(state, action.payload, -1);

    case PHONE_INCREASED_TO_BASKET:
      return updateOrder(state, action.payload, 1);

    case PHONE_REMOVED_FROM_BASKET:
      const item = state.basketItems.find(item => item.id === action.payload);
      return updateOrder(state, action.payload, -item.count);

    default:
      return state
  }
};

export default phone;