import React, { useContext } from "react";
import { Card, CardContent, Typography, Paper, Divider } from './Styles';
import { Grid, Button, TextField } from "@material-ui/core";
import DivisionsContext from '../../store/context/Division';
import { addDivision } from '../../services/Data';

const Forms = props => {
  const { pageType, editItem, projectId } = props;
  const division = useContext(DivisionsContext);
  const divisionState = division.state;

  const handleChange = (fieldValue, fieldName) => {
    console.log(fieldValue + ', ' +  fieldName);
    division.dispatch({type: 'CHANGE_UPDATE_TEXTFIELD', fieldValue, fieldName});
  }

  const callDivisionAPI = () => {
    let name = divisionState['updateDivision']['name'];
    let title = divisionState['updateDivision']['title'];
    let desc = divisionState['updateDivision']['description'];

    if (pageType.includes('add')){
      addDivision(name, title, desc, projectId)
        .then(response => {
          console.log(response);
          // if (response.data.data){
          //   let project_data = response.data.data;
          //   let projectName = project_data[0]['name'];
          //   // console.log(projectName);
          //   division.dispatch({type: 'INITIAL_PROJECT_NAME', projectName});
          // }
        })
        .catch(error => {
          // if (error.response) {
          //   setIsInvalid(true);
          //   setIsFetching(false);
          // }
        });
    }
  }

  return (
    <Card>
      <CardContent>
        <Paper>
        <form noValidate autoComplete="off">
          <Grid container item lg={12}>
            <Grid container item lg={6} md={4}>
              <TextField
                id="name"
                label="Name"
                style={{ margin: 8 }}
                value={divisionState['updateDivision']['name'] ? 
                        divisionState['updateDivision']['name'] : ''
                      }
                defaultValue={divisionState['updateDivision']['name']}
                onChange={e => handleChange(e.target.value, 'name')}
                InputLabelProps={{
                  shrink: true
                }}
                fullWidth
                m={5}
              /> 
            </Grid>
            <Grid container item lg={6} md={8}>
              <TextField
                id="title"
                label="Title"
                style={{ margin: 8 }}
                value={divisionState['updateDivision']['title'] ? 
                        divisionState['updateDivision']['title'] : ''
                      }
                defaultValue={divisionState['updateDivision']['title']}
                onChange={e => handleChange(e.target.value, 'title')}
                InputLabelProps={{
                  shrink: true
                }}
                type="text"
                fullWidth
                m={5}
              />
            </Grid>
            <Grid container item lg={12} md={12}>
              <TextField
                id="description"
                label="Description"
                style={{ margin: 8 }}
                value={divisionState['updateDivision']['description'] ? 
                        divisionState['updateDivision']['description'] : ''
                      }
                defaultValue={divisionState['updateDivision']['description']}
                onChange={e => handleChange(e.target.value, 'description')}
                InputLabelProps={{
                  shrink: true
                }}
                type="text"
                fullWidth
                m={5}
              />
            </Grid>
          </Grid>
          <Grid container item lg={12} justify="flex-end">
            <Button
              variant="contained"
              size="medium"
              style={{ margin: '25px 8px 0 8px' }}
            >
              Reset
            </Button>

            <Button
              variant="contained"
              color="primary"
              size="medium"
              style={{ margin: '25px 8px 0 8px' }}
              target="_self"
              onClick={callDivisionAPI}
            >
              Save
            </Button>
          </Grid>
        </form>
        </Paper>
      </CardContent>
    </Card>
  );
}

export default Forms;
