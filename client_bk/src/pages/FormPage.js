import React, { useReducer } from 'react';
import UserContext from '../store/context/User';
import FormContext from '../store/context/Form';
import FormReducer from '../store/reducers/Form';
import PageContainer from './Form/PageContainer';
import { FormData } from '../pages/Form/formList';

const FormPage = props => {
//   console.log(props.id);
const initialFormState = {
  division: [
      {
          "id": 7,
          "name": "ND201801_operation",
          "title": "Operation",
          "description": "",
          "project_id": 1,
          "deleted": 0,
          "project_name": "ND/2018/01"
      }
  ],
  form: FormData
};
const [state, dispatch] = useReducer(FormReducer, initialFormState);

  return (
      <FormContext.Provider value={{state, dispatch}}>
        <PageContainer />
      </FormContext.Provider>
  );
};

export default FormPage;