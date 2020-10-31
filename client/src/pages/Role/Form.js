import React, { useContext } from "react";
import { Card, CardContent, Paper } from './Styles';
import { Grid, Button, TextField } from "@material-ui/core";
import RolesContext from '../../store/context/Role';
import { addRole, updateRole } from '../../services/Data';

const Forms = props => {
  const { pageType, editId } = props;
  const role = useContext(RolesContext);
  const roleState = role.state;
  let roleId = pageType.split('/')[4] ? pageType.split('/')[4] : null;

  const callAPI = () => {
    if (pageType.includes('add')){
      addRole(roleState['updaterole'])
        .then(response => {
          // console.log(response);
          if (response.status = 200){
            window.location.href = "/web/admin/roles";
          }
        })
        .catch(error => {
        });
    }else if (pageType.includes('edit')){
      updateRole(roleId, roleState['updaterole'])
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
                placeholder="Name"
                defaultValue={pageType.includes('edit') ? roleState['updateRole']['name'] : ''}
                fullWidth
                m={5}
              />
            </Grid>
            <Grid container item lg={6} md={8}>
              <TextField
                id="description"
                label="Description"
                style={{ margin: 8 }}
                placeholder="Description"
                defaultValue={pageType.includes('edit') ? roleState['updateRole']['description'] : ''}
                fullWidth
                m={5}
              />
            </Grid>
            <Grid container item lg={12} >
              <TextField
                id="extra"
                label="Extra"
                style={{ margin: 8 }}
                defaultValue={pageType.includes('edit') ? JSON.stringify(roleState['updateRole']['extra']) : ''}
                placeholder="Extra"
                multiline
                rows="5"
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
