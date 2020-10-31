import React, { useContext } from "react";
import { Card, CardContent, Typography, Paper, Divider } from './Styles';
import { Grid, Button, TextField } from "@material-ui/core";
import ProjectContext from '../../store/context/Project';
import { addProject, updateProject } from '../../services/Data';

const Forms = props => {
  const { pageType, projectId } = props;
  const project = useContext(ProjectContext);
  const projectState = project.state;
  // console.log(projectState['updateProject']['name']);

  const handleChange = (fieldValue, fieldName) => {
    project.dispatch({type: 'CHANGE_TEXTFIELD', fieldValue, fieldName});
  }

  const callAPI = () => {
    if (pageType.includes('add')){
      addProject(projectState['updateProject'])
        .then(response => {
          // console.log(response);
          if (response.status = 200){
            window.location.href = "/web/admin/projects";
          }
        })
        .catch(error => {
        });
    }else if (pageType.includes('edit')){
      updateProject(projectId, projectState['updateProject'])
        .then(response => {
          console.log(response);
          if (response.status = 200){
            // window.location.reload();
          }
        })
        .catch(error => {
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
                value={projectState['updateProject']['name'] ? 
                        projectState['updateProject']['name'] : ''
                      }
                defaultValue={projectState['updateProject']['name']}
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
                id="description"
                label="Description"
                style={{ margin: 8 }}
                value={projectState['updateProject']['description'] ? 
                        projectState['updateProject']['description'] : ''
                      }
                defaultValue={projectState['updateProject']['description']}
                onChange={e => handleChange(e.target.value, 'description')}
                InputLabelProps={{
                  shrink: true
                }}
                type="text"
                fullWidth
                m={5}
              />
            </Grid>
            <Grid container item lg={12} >
              <TextField
                id="extra"
                label="Extra"
                style={{ margin: 8 }}
                defaultValue={projectState['updateProject']['extra']}
                onChange={(e) => handleChange(e.target.value, 'extra')}
                placeholder="Extra"
                multiline
                rows="10"
                InputLabelProps={{
                  shrink: true
                }}
                type="text"
                fullWidth
                m={2}
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
              onClick={callAPI}
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
