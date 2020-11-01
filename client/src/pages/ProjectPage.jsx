import React, { useReducer } from 'react';
import { useLocation } from 'react-router-dom';
import ProjectContext from '../store/context/Project';
import ProjectReducer from '../store/reducers/Project';
import PageContainer from './common/PageContainer';
import PageAddEditContainer from './common/PageAddEditContainer';

const ProjectPage = () => {
  let pageAction = useLocation().pathname;
  let updateItemId = pageAction.split('/')[5] ? pageAction.split('/')[5] : null;

  const initialProjectState = {
    pageName:   'Project',
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
        {pageAction.includes('add') || pageAction.includes('edit') ? 
          (
            <PageAddEditContainer
                pageAction={pageAction}
                updateItemId={updateItemId}
                context={ProjectContext}
            />
          ) : (
            <PageContainer 
              context={ProjectContext}
            />
          )
        }
      </ProjectContext.Provider>
  );
};

export default ProjectPage;