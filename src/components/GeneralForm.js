import React from "react";
import { useFormik } from "formik";
import { basicSchema } from "../schemas";
const onSubmit = async (values, actions) => {
  console.log(actions.resetForm);
  console.log(values);
  console.log("object");
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
  actions.resetForm();
};

function GeneralForm() {
  const { values, errors, isSubmitting, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
        age: "",
        password: "",
        confirmPassword: "",
      },
      validationSchema: basicSchema,
      onSubmit,
    });
  return (
    <form onSubmit={handleSubmit}>
      <div className="inputDiv">
        <label>Email</label>
        <input
          type="email"
          value={values.email}
          onChange={handleChange}
          className={errors.email ? "inputError" : ""}
          id="email"
          placeholder="Mail adresinizi giriniz..."
        />
        {errors.email && <p className="error">{errors.email}</p>}
      </div>
      <div className="inputDiv">
        <label>Yaş</label>
        <input
          type="number"
          value={values.age}
          onChange={handleChange}
          className={errors.age ? "inputError" : ""}
          id="age"
          placeholder="Yaşınızı giriniz..."
        />
        {errors.age && <p className="error">{errors.age}</p>}
      </div>
      <div className="inputDiv">
        <label>Şifre</label>
        <input
          type="password"
          value={values.password}
          onChange={handleChange}
          className={errors.password ? "inputError" : ""}
          id="password"
          placeholder="Şifrenizi giriniz..."
        />
        {errors.password && <p className="error">{errors.password}</p>}
      </div>
      <div className="inputDiv">
        <label>Şifre Tekrar</label>
        <input
          type="password"
          value={values.confirmPassword}
          onChange={handleChange}
          className={errors.confirmPassword ? "inputError" : ""}
          id="confirmPassword"
          placeholder="Şifrenizi tekrar giriniz..."
        />
        {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
      </div>
      <button disabled={isSubmitting} type="submit">
        {isSubmitting ? "loading.." : "Kaydet"}
      </button>
    </form>
  );
}

export default GeneralForm;
