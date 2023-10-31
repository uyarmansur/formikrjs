import React from "react";
import { Formik, Field, Form } from "formik";
import CustomInput from "./CustomInput";
import { advancedSchema } from "../schemas";
const onSubmit = async (values, actions) => {
  console.log(actions.resetForm);
  console.log(values);
  console.log("object");
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
  actions.resetForm();
};

function PortalForm() {
  return (
    <>
      <Formik
        initialValues={{ userName: "", university: "", isAccepted: false }}
        onSubmit={onSubmit}
        validationSchema={advancedSchema}
      >
        {() => (
          <Form>
            <CustomInput
              label="Kullanıcı Adı"
              name="username"
              type="text"
              placeholder="Kullanıcı adınızı giriniz."
            />
          </Form>
        )}
      </Formik>
    </>
  );
}

export default PortalForm;
