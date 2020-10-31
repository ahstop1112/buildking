import React, { useReducer } from 'react';
import { useLocation } from 'react-router-dom';
import UserContext from '../store/context/User';
import FormContext from '../store/context/Form';
import FormReducer from '../store/reducers/Form';
import PageContainer from './Form/PageContainer';
import PageAddEditContainer from './Form/PageAddEditContainer';

const FormPage = props => {
  let pageType = useLocation().pathname;
  let editId = pageType.split('/')[5] ? pageType.split('/')[5] : null;
//   console.log(props.id);
  const initialFormState = {
    division: [],
    forms: []
  };
  const [state, dispatch] = useReducer(FormReducer, initialFormState);

  return (
      <FormContext.Provider value={{state, dispatch}}>
        {pageType.includes('add') || pageType.includes('edit') ? 
          (
              <PageAddEditContainer 
                pageType={pageType}
                editId={editId}
              />
          ) : (
              <PageContainer
                pageType={pageType}
              />
          )
        }
      </FormContext.Provider>
  );
};

export default FormPage;