import React, { useContext } from "react";
import { Grid, Button, TextField } from "@material-ui/core";
import { Card, CardContent, Paper } from './Styles';
import { addItem, updateItem } from '../../services/Data';

const Forms = props => {
  const { pageAction, projectId, updateItemId, context } = props;
  const page = useContext(context);
  const pageState = page.state;

  const handleChange = (fieldValue, fieldName) => {
    console.log(fieldValue + ', ' +  fieldName);
    page.dispatch({type: 'CHANGE_UPDATE_TEXTFIELD', fieldValue, fieldName});
  }

  const callAPI = () => {
    if (pageAction.includes('add')){
      addItem(
        pageState['tableName'],
        pageState['columns'].filter(row => row !== 'id'),
        Object.values(pageState['updateItem'])
      )
        .then(response => {
          // console.log(response);
          if (response.status = 200){
            window.location.href = `/web/admin/${pageState['pageId']}`;
          }
        })
        .catch(error => {
        });
    }else if (pageAction.includes('edit')){
      // tableName, columns, data, checkColumn, itemId
      updateItem(
        pageState['tableName'],
        pageState['columns'],
        Object.values(pageState['updateItem']),
        pageState['checkColumn'],
        updateItemId,
      )
        .then(response => {
          console.log(response);
          if (response.status = 200){
            window.location.reload();
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
          {pageAction.includes('edit') && 
            Object.keys(pageState['updateItem']).length > 0 && 
            Object.keys(pageState['updateItem']).map((row, index) => (
            <Grid container item key={index}
              lg={row !== 'extra' && row !== 'description' && row !== 'template' ? 6 : 12} 
              md={row !== 'extra' && row !== 'description' && row !== 'template' ? 6 : 12} 
            >
              {row !== 'extra' && row !== 'template' ? 
                <TextField
                  id={row} label={row} style={{ margin: 8 }}
                  disabled={row !== 'id' && row !== 'project_id' ? false : true}
                  value={pageState['updateItem'][row] ? pageState['updateItem'][row] : '' }
                  onChange={e => handleChange(e.target.value, row)}
                  InputLabelProps={{ shrink: true }}
                  fullWidth m={5}
                /> :
                <TextField
                  id={row} label={row} style={{ margin: 8 }}
                  disabled={row !== 'id' || row !== 'project_id' ? false : true}
                  value={pageState['updateItem'][row] ? pageState['updateItem'][row] : '' }
                  onChange={e => handleChange(e.target.value, row)}
                  InputLabelProps={{ shrink: true }}
                  multiline rows="5" fullWidth  m={2}
                />  
              }
            </Grid>
          ))}
          {pageAction.includes('add') && 
            pageState['columns'].filter(row => row !== 'id').map((row, index) => (
            <Grid container item key={index}
              lg={row !== 'extra' && row !== 'description' && row !== 'template' ? 6 : 12} 
              md={row !== 'extra' && row !== 'description' && row !== 'template' ? 6 : 12} 
            >
              {row === 'project_id' ? 
                <TextField
                  id="project_id" label="project_id"
                  style={{ margin: 8 }} value={projectId}
                  disabled="true" fullWidth m={5}
                  InputLabelProps={{ shrink: true }}
                /> : row === 'extra' || row === 'template' ? 
                /* Full Width and Multiple Line */
                <TextField
                  id={row} label={row} style={{ margin: 8 }}
                  value={pageState['updateItem'][row] ? pageState['updateItem'][row] : ''}
                  onChange={e => handleChange(e.target.value, row)}
                  InputLabelProps={{ shrink: true }}
                  multiline rows="5" fullWidth m={2}
                /> : 
                <TextField
                  id={row} label={row} style={{ margin: 8 }}
                  value={pageState['updateItem'][row] ? pageState['updateItem'][row] : ''}
                  onChange={e => handleChange(e.target.value, row)}
                  InputLabelProps={{ shrink: true }}
                  fullWidth m={5}
                />
              }
            </Grid>
          ))}
           
          </Grid>
          <Grid container item lg={12} justify="flex-end">
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