
import React, { useReducer } from 'react';
import { useLocation } from 'react-router-dom';
import UserContext from '../store/context/User';
import RoleContext from '../store/context/Role';
import RoleReducer from '../store/reducers/Role';
import PageContainer from './common/PageContainer';
import PageAddEditContainer from './common/PageAddEditContainer';

const RolePage = props => {
  let pageAction = useLocation().pathname;
  let updateItemId = pageAction.split('/')[5] ? pageAction.split('/')[5] : null;

  const initialRoleState = {
    pageName:       'Role',
    pageId:         'role',
    checkColumn:     'id',
    data:           [],
    updateItem:     [],
    updateItemName: '',
    tableName:      'i_role',
    columns:        ["id", "name", "title", "description", "role_type"],
    where:          [["deleted", "=", "0", "AND"]]
  };
  const [state, dispatch] = useReducer(RoleReducer, initialRoleState);

  return (
      <RoleContext.Provider value={{state, dispatch}}>
        {pageAction.includes('add') || pageAction.includes('edit') ? 
            (
              <PageAddEditContainer
                  pageAction={pageAction}
                  updateItemId={updateItemId}
                  context={RoleContext}
              />
            ) : (
              <PageContainer 
                context={RoleContext}
              />
            )
        }
      </RoleContext.Provider>
  );
};

export default RolePage;



