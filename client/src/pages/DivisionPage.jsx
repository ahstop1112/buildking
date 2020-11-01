import React, { useReducer } from 'react';
import { useLocation } from 'react-router-dom';
import DivisionContext from '../store/context/Division';
import DivisionReducer from '../store/reducers/Division';
import PageContainer from './common/PageContainer';
import PageAddEditContainer from './common/PageAddEditContainer';

const DivisionPage = () => {
  let pageAction = useLocation().pathname;
  let projectId = pageAction.split('/')[4] ? pageAction.split('/')[4] : null;
  let updateItemId = pageAction.split('/')[7] ? pageAction.split('/')[7] : null;

  const initialDivisionState = {
    pageName:    'Division',
    pageId:      'division',
    checkColumn: 'id',
    data:        [],
    updateItem:  [],
    tableName:   'i_division',
    columns:     ["id", "project_id", "name", "description", "extra"],
    where:       [["deleted", "=", "0", "AND"]]
    
  };
  const [state, dispatch] = useReducer(DivisionReducer, initialDivisionState);

  return (
      <DivisionContext.Provider value={{state, dispatch}}>
        {pageAction.includes('add') || pageAction.includes('edit') ? 
          (
            <PageAddEditContainer
                pageAction={pageAction}
                projectId={projectId}
                updateItemId={updateItemId}
                context={DivisionContext}
            />
          ) : (
            <PageContainer 
              projectId={projectId}
              context={DivisionContext}
            />
          )
        }
      </DivisionContext.Provider>
  );
};

export default DivisionPage;
