
import React, { useReducer } from 'react';
import UserContext from '../store/context/User';
import FormTypeContext from '../store/context/FormType';
import FormTypeReducer from '../store/reducers/FormType';
import PageContainer from './common/PageContainer';
import PageAddEditContainer from './common/PageAddEditContainer';

const FormTypePage = props => {

  const initialFormTypeState = {
    pageName:   'Form Types',
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
        <PageContainer 
          context={FormTypeContext}
        />
      </FormTypeContext.Provider>
  );
};

export default FormTypePage;

// {pageAction.includes('add') || pageAction.includes('edit') ? 
        //     (
        //       <PageAddEditContainer
        //           pageType="FormType"
        //           pageAction={pageAction}
        //           itemId={itemId}
        //           context={FormTypeContext}
        //       />
        //     ) : (
        //       <PageContainer 
        //         pageType="FormType"
        //         itemId={itemId}
        //         context={FormTypeContext}
        //       />
        //     )
        // }

