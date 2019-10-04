import {
  FETCH_PHONE_SUCCESS,
  FETCH_PHONES_ERROR,
  FETCH_PHONES_START,
  FETCH_PHONES_SUCCESS,
  LOAD_MORE_PHONES_SUCCESS, PHONE_ADDED_TO_BASKET
} from "../actions/actionType";

const initialState = {
  phones: [],
  phone: {},
  loading: true,
  basketItems: [],
  orderTotal: 0
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
      total: item.total + quantity * phone.price
    };

    if((item.count === 1 && quantity === -1) || (item.count === -quantity)){
      return{
        ...state,
        orderTotal: state.orderTotal - state.basketItems[itemIndex].total,
        basketItems: [
          ...state.basketItems.slice(0, itemIndex),
          ...state.basketItems.slice(itemIndex + 1)
        ]
      };
    }
    return{
      ...state,
      orderTotal: state.orderTotal + quantity * phone.price,
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
      total: phone.price
    };
    return{
      ...state,
      orderTotal: state.orderTotal + quantity * phone.price,
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

    case FETCH_PHONE_SUCCESS:
      return{
        ...state,
        phone: action.payload,
        loading: false
      };

    case LOAD_MORE_PHONES_SUCCESS:
      return{
        ...state,
        phones: action.payload,
        loading: false
      };

    case PHONE_ADDED_TO_BASKET :
      return updateOrder(state, action.payload, 1);

    default:
      return state
  }
};

export default phone;