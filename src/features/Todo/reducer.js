const getInitialTodoList = () => {
  try {
    return JSON.parse(localStorage.getItem('todo_list')) || [];
  } catch (error) {}
};

const initialState = {
  list: getInitialTodoList(),
  filters: {
    completed: 'all',
  },
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

    case 'todo/update': {
      const todo = action.payload;
      const newList = [...state.list];
      const updatedIdx = newList.findIndex((x) => x.id === todo.id);

      if (updatedIdx < 0) return state;

      //clone todo item
      newList[updatedIdx] = {
        ...newList[updatedIdx],
        ...todo,
      };

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

    case 'todo/setFilters': {
      return {
        ...state,
        filters: {
          //cach viet nay de giu lai state cu khi filter ko thay doi
          ...state.filters,
          ...action.payload,
        },
      };
    }

    default:
      return state;
  }
};

export default todoReducer;
