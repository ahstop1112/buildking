
import React, { useReducer } from 'react';
import { useLocation } from 'react-router-dom';
import FormTypeContext from '../store/context/FormType';
import FormTypeReducer from '../store/reducers/FormType';
import PageContainer from './common/PageContainer';
import PageAddEditContainer from './common/PageAddEditContainer';

const FormTypePage = props => {
  let pageAction = useLocation().pathname;
  let updateItemId = pageAction.split('/')[5] ? pageAction.split('/')[5] : null;

  const initialFormTypeState = {
    pageName:   'Form Type',
    pageId:     'form-type',
    checkColumn:     'id',
    data:       [],
    updateItem: [],
    tableName:  'i_form_type',
    columns: ["id", "name", "title", "description", "extra"],
    where:      [["deleted", "=", "0", "AND"]]
  };
  const [state, dispatch] = useReducer(FormTypeReducer, initialFormTypeState);

  return (
      <FormTypeContext.Provider value={{state, dispatch}}>
        {pageAction.includes('add') || pageAction.includes('edit') ? 
            (
              <PageAddEditContainer
                  pageAction={pageAction}
                  updateItemId={updateItemId}
                  context={FormTypeContext}
              />
            ) : (
              <PageContainer 
                context={FormTypeContext}
              />
            )
        }
      </FormTypeContext.Provider>
  );
};

export default FormTypePage;