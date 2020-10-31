import React, { useReducer } from 'react';
import UserContext from '../store/context/User';
import { useLocation } from 'react-router-dom';
import DivisionContext from '../store/context/Division';
import DivisionReducer from '../store/reducers/Division';
import { getProjectById } from '../services/Data';
import PageContainer from './Division/PageContainer';
import PageAddEditContainer from './Division/PageAddEditContainer';

const DivisionPage = props => {
    let pageType = useLocation().pathname;

    const initialDivisionState = {
        projectName: '',
        divisions: [],
        updateDivision: {}
    };
    const [state, dispatch] = useReducer(DivisionReducer, initialDivisionState);

  return (
      <DivisionContext.Provider value={{state, dispatch}}>
        {pageType.includes('add') || pageType.includes('edit') ? 
            (
                <PageAddEditContainer 
                    pageType={pageType}
                />
            ) : (
                <PageContainer 
                    pageType={pageType}
                />
            )
        }
      </DivisionContext.Provider>
  );
};

export default DivisionPage;
