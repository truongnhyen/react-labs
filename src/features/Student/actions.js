import studentApi from 'api/studentApi';

const getStudentListStart = () => ({
  type: 'students/getStudentListStart',
});

const getStudentListSuccess = (data) => ({
  type: 'students/getStudentListSuccess',
  payload: data,
});

const getStudentListFailed = (error) => ({
  type: 'students/getStudentListFailed',
  payload: error,
});

//asyns action return ve function, nen can middleware de xu ly
//asyns action su dung redux thunk
export const getStudentList = (params) => {
  return async (dispatch) => {
    try {
      dispatch(getStudentListStart()); //loading

      const response = await studentApi.getAll(params);
      const action = getStudentListSuccess(response);
      dispatch(action);
    } catch (error) {
      const action = getStudentListFailed(error);
      dispatch(action);
    }
  };
};
