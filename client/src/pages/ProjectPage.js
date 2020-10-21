
import React, { useReducer } from 'react';
import { Grid } from "@material-ui/core";
import UserContext from '../store/context/User';
import ProjectContext from '../store/context/Project';
import ProjectReducer from '../store/reducers/Project';
import PageContainer from './Project/PageContainer';

const ProjectPage = props => {
//   console.log(props.id);
  const initialProjectState = {
    projects: [
        {
            "id": 1,
            "name": "ND/2018/01",
            "description": "Site Formation and Infrastructure Works for Police Facilities in Kong Nga Po",
            "extra": {
                "options": {
                    "location": [
                        "Portion A",
                        "Portion A1",
                        "Portion B",
                        "Portion B1",
                        "Portion B2",
                        "Portion C",
                        "Portion C1",
                        "Portion C2",
                        "Portion D",
                        "Portion D1",
                        "Portion D2",
                        "Portion E",
                        "Portion J15",
                        "Portion J18"
                    ],
                    "works": [
                        "Drainage",
                        "Formwork",
                        "Founding Condition",
                        "Ground Investigation",
                        "Pre-drilling",
                        "PBSH",
                        "Reinforcement",
                        "Steelworks",
                        "Setting Out",
                        "Underground Records",
                        "As-built Survey",
                        "Other"
                    ]
                }
            },
            "deleted": 0,
            "divisions": [
                7,
                8,
                9,
                10,
                11
            ]
        },
        {
            "id": 2,
            "name": "2001SCO",
            "description": "Construction of A 30-Classroom Primary School at Shui Chuen O, Sha Tin",
            "extra": {
                "options": {
                    "location": [
                        "Portion A",
                        "Portion A1",
                        "Portion B",
                        "Portion B1",
                        "Portion B2",
                        "Portion C",
                        "Portion C1",
                        "Portion C2",
                        "Portion D",
                        "Portion D1",
                        "Portion D2",
                        "Portion E",
                        "Portion J15",
                        "Portion J18"
                    ],
                    "works": [
                        "Drainage",
                        "Formwork",
                        "Founding Condition",
                        "Ground Investigation",
                        "Pre-drilling",
                        "PBSH",
                        "Reinforcement",
                        "Steelworks",
                        "Setting Out",
                        "Underground Records",
                        "As-built Survey",
                        "Other"
                    ]
                }
            },
            "deleted": 0,
            "divisions": [
                2
            ]
        },
        {
            "id": 3,
            "name": "2002ABR",
            "description": "Main Contract Works for Proposed New Extension Block at Victoria Shanghai Academy at 19 Shum Wan Road, Aberdeen, Hong Kong",
            "extra": {
                "options": {
                    "location": [
                        "Portion A",
                        "Portion A1",
                        "Portion B",
                        "Portion B1",
                        "Portion B2",
                        "Portion C",
                        "Portion C1",
                        "Portion C2",
                        "Portion D",
                        "Portion D1",
                        "Portion D2",
                        "Portion E",
                        "Portion J15",
                        "Portion J18"
                    ],
                    "works": [
                        "Drainage",
                        "Formwork",
                        "Founding Condition",
                        "Ground Investigation",
                        "Pre-drilling",
                        "PBSH",
                        "Reinforcement",
                        "Steelworks",
                        "Setting Out",
                        "Underground Records",
                        "As-built Survey",
                        "Other"
                    ]
                }
            },
            "deleted": 0,
            "divisions": [
                3
            ]
        },
        {
            "id": 4,
            "name": "2007MSR",
            "description": "Proposed Residential Development at Fanling North New Development at Fanling Sheung Shui Town Lot FSSTL 262, New Territories, Hong Kong",
            "extra": {
                "options": {
                    "location": [
                        "Portion A",
                        "Portion A1",
                        "Portion B",
                        "Portion B1",
                        "Portion B2",
                        "Portion C",
                        "Portion C1",
                        "Portion C2",
                        "Portion D",
                        "Portion D1",
                        "Portion D2",
                        "Portion E",
                        "Portion J15",
                        "Portion J18"
                    ],
                    "works": [
                        "Drainage",
                        "Formwork",
                        "Founding Condition",
                        "Ground Investigation",
                        "Pre-drilling",
                        "PBSH",
                        "Reinforcement",
                        "Steelworks",
                        "Setting Out",
                        "Underground Records",
                        "As-built Survey",
                        "Other"
                    ]
                }
            },
            "deleted": 0,
            "divisions": [
                4
            ]
        }
    ]
  };
  const [state, dispatch] = useReducer(ProjectReducer, initialProjectState);

  return (
      <ProjectContext.Provider value={{state, dispatch}}>
          <PageContainer />
      </ProjectContext.Provider>
  );
};

export default ProjectPage;

