import React, { useReducer } from 'react';
import UserContext from '../store/context/User';
import ProjectContext from '../store/context/Project';
import ProjectReducer from '../store/reducers/Projects';
import PageContainer from './common/PageContainer';
import PageAddEditContainer from './common/PageAddEditContainer';

const ProjectPage = props => {

  const initialProjectState = {
    pageName:   'Projects',
    pageId:     'project',
    checkColumn:     'id',
    data:       [],
    updateItem: [],
    tableName:  'i_project',
    columns:    ["id", "name", "description", "extra"],
    where:      [["deleted", "=", "0", "AND"]]
    
  };
  const [state, dispatch] = useReducer(ProjectReducer, initialProjectState);

  return (
      <ProjectContext.Provider value={{state, dispatch}}>
        <PageContainer 
          context={ProjectContext}
        />
      </ProjectContext.Provider>
  );
};

export default ProjectPage;

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



