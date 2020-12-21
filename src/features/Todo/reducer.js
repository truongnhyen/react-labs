const initialState = {
  list: [{ id: 1, title: 'Learning' }],
  filters: {},
};
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'todo/add': {
      const newList = [...state.list];
      newList.push(action.payload);
      return {
        //return kieu du lieu dua vao kieu du lieu cua state ban dau
        ...state,
        list: newList,
      };
    }

    case 'todo/remove': {
      return {
        ...state,
        list: state.list.filter((x) => x.id !== action.payload),
      };
    }

    default:
      return state;
  }
};

export default todoReducer;
