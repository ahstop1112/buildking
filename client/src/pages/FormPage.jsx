import React, { useReducer } from 'react';
import { useLocation } from 'react-router-dom';
import FormContext from '../store/context/Form';
import FormReducer from '../store/reducers/Form';
import PageContainer from './common/PageContainer';
import PageAddEditContainer from './common/PageAddEditContainer';

const FormPage = () => {
  let pageAction = useLocation().pathname;
  let projectId = pageAction.split('/')[4] ? pageAction.split('/')[4] : null;
  let divisionId = pageAction.split('/')[6] ? pageAction.split('/')[6] : null;
  let updateItemId = pageAction.split('/')[7] ? pageAction.split('/')[7] : null;

  console.log(projectId);

  const initialFormState = {
    pageName:    'Form',
    pageId:      'form',
    checkColumn: 'id',
    data:        [],
    updateItem:  [],
    tableName:   'i_form',
    columns:     ["id", "no", "data", "created_time", "division_id", "state_id"],
    where:       [["deleted", "=", "0", "AND"]]
    
  };
  const [state, dispatch] = useReducer(FormReducer, initialFormState);

  return (
      <FormContext.Provider value={{state, dispatch}}>
        {pageAction.includes('add') || pageAction.includes('edit') ? 
          (
            <PageAddEditContainer
                pageAction={pageAction}
                projectId={projectId}
                divisionId={divisionId}
                updateItemId={updateItemId}
                context={FormContext}
            />
          ) : (
            <PageContainer 
              projectId={projectId}
              divisionId={divisionId}
              context={FormContext}
            />
          )
        }
      </FormContext.Provider>
  );
};

export default FormPage;
