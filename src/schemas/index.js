import * as yup from "yup";
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const basicSchema = yup.object().shape({
  email: yup
    .string()
    .email("Geçerli bir email giriniz!")
    .required("Email zorunludur."),
  age: yup
    .number()
    .positive("Lütfen pozitif yaş giriniz!")
    .integer("Lütfen tam sayı formatında yaş giriniz!")
    .required("Yaş gitmek zorunludur."),
  password: yup
    .string()
    .min(5, "Lütfen minimum 5 karakter giriniz!")
    .matches(passwordRules, {
      message:
        "Lütfen en az bir büyük harf,bir küçük harf ve bir sayı giriniz!",
    })
    .required("Şifre zorunludur!"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], "Şifreler eşleşmiyor!")
    .required("Şifre tekrarı girmek zorunludur!"),
});
