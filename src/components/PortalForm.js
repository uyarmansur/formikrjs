import React from "react";
import { Formik, Field, Form } from "formik";
import CustomInput from "./CustomInput";
import { advancedSchema } from "../schemas";
import CustomSelect from "./CustomSelect";
import CustomCheckbox from "./CustomCheckbox";
import { Link } from "react-router-dom";
const onSubmit = async (values, actions) => {
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
  actions.resetForm();
};

function PortalForm() {
  return (
    <>
      <Formik
        initialValues={{ username: "", university: "", isAccepted: false }}
        onSubmit={onSubmit}
        validationSchema={advancedSchema}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="inputDiv">
              <CustomInput
                label="Kullanıcı Adı"
                name="username"
                type="text"
                placeholder="Kullanıcı adınızı giriniz."
              />
            </div>
            <div className="inputDiv">
              <CustomSelect
                label="Okulunuz"
                name="university"
                placeholder="Üniversitenizi seçiniz."
              >
                <option value="">Lütfen Üniversitenizi Seçiniz.</option>
                <option value="bogazici">Boğaziçi üniversitesi</option>
                <option value="gsü">Galatasaray Üniversitesi</option>
                <option value="odtü">Orta Doğu Teknik Üniversitesi</option>
                <option value="itü">İstanbul Teknik Üniversitesi</option>
              </CustomSelect>
            </div>

            <div className="inputDiv">
              <CustomCheckbox
                className="checkbox"
                type="checkbox"
                name="isAccepted"
                span="Kullanım koşullarını kabul ediyorum."
              />
            </div>
            <button disabled={isSubmitting} type="submit">
              {isSubmitting ? "loading.." : "Kaydet"}
            </button>
            <Link style={{color:'white'}} to="/">Ana Forma Git</Link>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default PortalForm;
