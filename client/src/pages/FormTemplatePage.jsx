import React, { useReducer } from 'react';
import UserContext from '../store/context/User';
import FormTemplateContext from '../store/context/FormTemplate';
import FormTemplateReducer from '../store/reducers/FormTemplate';
import PageContainer from './common/PageContainer';
import PageAddEditContainer from './common/PageAddEditContainer';

const FormTemplatePage = props => {

  const initialFormTemplateState = {
    pageName:   'Form Templates',
    pageId:     'form-template',
    data:       [],
    updateItem: [],
    tableName:  'i_form_template',
    columns:    ["id", "name", "division_id", "form_type_id", "description", "template", "extra"],
    where:      [["deleted", "=", "0", "AND"]]
  };
  const [state, dispatch] = useReducer(FormTemplateReducer, initialFormTemplateState);

  return (
      <FormTemplateContext.Provider value={{state, dispatch}}>
        <PageContainer 
          context={FormTemplateContext}
        />
      </FormTemplateContext.Provider>
  );
};

export default FormTemplatePage;

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



