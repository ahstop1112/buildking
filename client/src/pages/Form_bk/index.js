import React, { useReducer } from 'react';
import FormContext from 'store/context/Form';
import FormReducer from 'store/reducers/Form';
import FormContainer from 'pages/Form/Container';
import { FormData } from 'pages/Form/formList';

const Form = props => {
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
        <FormContainer />
      </FormContext.Provider>
  );
};

export default Form;
