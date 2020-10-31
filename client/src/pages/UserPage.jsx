
import React, { useReducer } from 'react';
import UserContext from '../store/context/User';
import UserReducer from '../store/reducers/User';
import PageContainer from './common/PageContainer';
import PageAddEditContainer from './common/PageAddEditContainer';

const UserPage = props => {

  const initialUserState = {
    pageName:   'User',
    pageId:     'user',
    checkColumn:     'is_active',
    data:       [],
    updateItem: [],
    tableName:  'auth_user',
    columns:    ["id", "username", "first_name", "last_name", "email", "date_joined"],
    where:      [["is_active", "=", "1", "AND"]]
  };
  const [state, dispatch] = useReducer(UserReducer, initialUserState);

  return (
      <UserContext.Provider value={{state, dispatch}}>
        <PageContainer 
          context={UserContext}
        />
      </UserContext.Provider>
  );
};

export default UserPage;

// {pageAction.includes('add') || pageAction.includes('edit') ? 
        //     (
        //       <PageAddEditContainer
        //           pageType="User"
        //           pageAction={pageAction}
        //           itemId={itemId}
        //           context={UserContext}
        //       />
        //     ) : (
        //       <PageContainer 
        //         pageType="User"
        //         itemId={itemId}
        //         context={UserContext}
        //       />
        //     )
        // }

