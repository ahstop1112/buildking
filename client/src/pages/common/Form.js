import React, { useContext } from "react";
import { Card, CardContent, Paper } from './Styles';
import { Grid, Button, TextField } from "@material-ui/core";
import { addItem, updateItem } from '../../services/Data';

const Forms = props => {
  const { pageAction, updateItemId, context } = props;
  const page = useContext(context);
  const pageState = page.state;

  console.log(pageState);

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
            <Grid container item lg={6} md={6} key={index}>
              <TextField
                id={row}
                label={row}
                style={{ margin: 8 }}
                value={pageState['updateItem'][row] ? 
                        pageState['updateItem'][row] : ''
                      }
                // defaultValue={pageState['updateItem'][row]}
                disabled={row === 'id' ? true : false}
                onChange={e => handleChange(e.target.value, row)}
                InputLabelProps={{
                  shrink: true
                }}
                fullWidth
                m={5}
              /> 
            </Grid>
          ))}
          {pageAction.includes('add') && 
            pageState['columns'].filter(row => row !== 'id').map((row, index) => (
            <Grid container item lg={6} md={6} key={index}>
              <TextField
                id={row}
                label={row}
                style={{ margin: 8 }}
                value={pageState['updateItem'][row] ? 
                  pageState['updateItem'][row] : ''
                }
                // defaultValue={pageState['updateItem'][row]}
                onChange={e => handleChange(e.target.value, row)}
                InputLabelProps={{
                  shrink: true
                }}
                fullWidth
                m={5}
              /> 
            </Grid>
          ))}
           
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

 // <Grid container item lg={6} md={8}>
            //   <TextField
            //     id="description"
            //     label="Description"
            //     style={{ margin: 8 }}
            //     placeholder="Description"
            //     defaultValue={pageAction.includes('edit') ? pageState['updateFormType']['description'] : ''}
            //     fullWidth
            //     m={5}
            //   />
            // </Grid>
            // <Grid container item lg={12} >
            //   <TextField
            //     id="extra"
            //     label="Extra"
            //     style={{ margin: 8 }}
            //     defaultValue={pageAction.includes('edit') ? JSON.stringify(pageState['updateFormType']['extra']) : ''}
            //     placeholder="Extra"
            //     multiline
            //     rows="5"
            //     fullWidth
            //     m={2}
            //   />  
            // </Grid>
