import { actions } from './actions';

const initialState = {
  itemList: [
    {
      description: 'item 1',
      id: 1,
      isChecked: false,
    },
    {
      description: 'item 2',
      id: 2,
      isChecked: false,
    }
  ]
}

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.ADD_TODO:
      return {
        ...state, itemList: [...state.itemList, {
          description: action.payload.description,
          id: state.itemList.length + 1,
          isChecked: false,
        }]
      }
      case actions.SET_CHECK:
        return {
          ...state, itemList: state.itemList.map(element => {
            if (element.id === action.payload.id) {
              element.isChecked = !element.isChecked
            }
            return element
          })
        }
    default: 
      return state;
  }
}

export default todoReducer;
