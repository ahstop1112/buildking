import React, { useReducer } from 'react';
import FormDetailContext from 'store/context/FormDetail';
import FormDetailReducer from 'store/reducers/FormDetail';
import FormDetailContainer from 'pages/FormDetail/Container';
import { FormData } from 'pages/Form/formList';

const FormDetail = props => {
  const initialFormDetailState = {
    division: [
      {
          "id": 7,
          "name": "ND201801_operation",
          "title": "Operation",
          "description": "",
          "project_id": 1,
          "deleted": 0,
          "project_name": "ND/2018/01"
      }
  ],
  formDetail: [
    {
      "id": 5,
      "no": "1919KNP/RI/000004",
      "template": "{}",
      "data": "{\"location\":5,\"location_remarks\":\"\",\"works\":3,\"works_remarks\":\"Excavation for inspection pit for GI no. SP22\",\"date_1\":\"2020-09-01T06:56:39.380Z\",\"time_1\":\"2020-08-31T06:56:39.380Z\",\"next_operation\":0,\"date_2\":\"2020-08-31T06:56:39.380Z\",\"time_2\":\"2020-08-31T06:56:39.380Z\",\"plant\":4,\"assets_image_1_1\":\"\",\"assets_image_1_2\":\"\",\"assets_image_1_3\":\"\",\"assets_image_1_4\":\"\",\"reject_remarks\":\"NIL\",\"decision\":0,\"decision_remarks\":\"\",\"assets_image_2_1\":\"\",\"assets_image_2_2\":\"\",\"assets_image_2_3\":\"\",\"assets_image_2_4\":\"\"}",
      "mod": 0,
      "rejected_form_id": 0,
      "created_time": "2020-08-31T07:03:23.807000",
      "extra": "{}",
      "division_id": 7,
      "state_id": 1,
      "template_id": 2,
      "deleted": 0
  }
  ]
  };
  const [state, dispatch] = useReducer(FormDetailReducer, initialFormDetailState);

  return (
      <FormDetailContext.Provider value={{state, dispatch}}>
        <FormDetailContainer />
      </FormDetailContext.Provider>
  );
};

export default FormDetail;
