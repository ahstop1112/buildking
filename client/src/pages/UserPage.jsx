
import React, { useReducer } from 'react';
import { useLocation } from 'react-router-dom';
import UserContext from '../store/context/User';
import UserReducer from '../store/reducers/User';
import PageContainer from './common/PageContainer';
import PageAddEditContainer from './common/PageAddEditContainer';

const UserPage = props => {
  let pageAction = useLocation().pathname;
  let updateItemId = pageAction.split('/')[5] ? pageAction.split('/')[5] : null;

  const initialUserState = {
    pageName:     'User',
    pageId:       'user',
    checkColumn:  'id',
    data:         [],
    updateItem:   [],
    tableName:    'auth_user',
    columns:      ["id", "username", "first_name", "last_name", "email", "date_joined"],
    where:        [["is_active", "=", "1", "AND"]]
  };
  const [state, dispatch] = useReducer(UserReducer, initialUserState);

  return (
      <UserContext.Provider value={{state, dispatch}}>
        {pageAction.includes('add') || pageAction.includes('edit') ? 
            (
              <PageAddEditContainer
                  pageAction={pageAction}
                  updateItemId={updateItemId}
                  context={UserContext}
              />
            ) : (
              <PageContainer 
                context={UserContext}
              />
            )
        }
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

