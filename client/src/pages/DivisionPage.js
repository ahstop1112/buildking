import React, { useReducer } from 'react';
import { Grid } from "@material-ui/core";
import UserContext from '../store/context/User';
import DivisionContext from '../store/context/Division';
import DivisionReducer from '../store/reducers/Division';
import PageContainer from './Division/PageContainer';

const DivisionPage = props => {
//   console.log(props.id);
const initialDivisionState = {
  divisions: [
      {
          "id": 7,
          "name": "ND201801_operation",
          "title": "Operation",
          "description": "",
          "project_id": 1,
          "deleted": 0,
          "project_name": "ND/2018/01"
      },
      {
          "id": 8,
          "name": "ND201801_survey",
          "title": "Survey",
          "description": "",
          "project_id": 1,
          "deleted": 0,
          "project_name": "ND/2018/01"
      },
      {
          "id": 9,
          "name": "ND201801_safety",
          "title": "Safety",
          "description": "",
          "project_id": 1,
          "deleted": 0,
          "project_name": "ND/2018/01"
      },
      {
          "id": 10,
          "name": "ND201801_environment",
          "title": "Environment",
          "description": "",
          "project_id": 1,
          "deleted": 0,
          "project_name": "ND/2018/01"
      },
      {
          "id": 11,
          "name": "ND201801_quality",
          "title": "Quality",
          "description": "",
          "project_id": 1,
          "deleted": 0,
          "project_name": "ND/2018/01"
      }
  ]
};
const [state, dispatch] = useReducer(DivisionReducer, initialDivisionState);

  return (
      <DivisionContext.Provider value={{state, dispatch}}>
          <PageContainer />
      </DivisionContext.Provider>
  );
};

export default DivisionPage;
