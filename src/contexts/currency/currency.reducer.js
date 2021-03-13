export const initialState = {
  currency: { id: 'VND', label: 'đ', format: 'vi-VN' },
};
export default function currencyReducer(state, action) {
  switch (action.type) {
    case 'CURRENT_CURRENCY':
      return {
        ...state,
        currency: action.payload,
      };
    default:
      return state;
  }
}
