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
export const advancedSchema = yup.object().shape({
  username: yup
    .string()
    .min(3,'Kullanıcı adı 3 karakterden az olamaz!')
    .required("Kullanıcı adı zorunludur!"),
  university: yup
    .string()
    .oneOf(['bogazici','gsu','odtü','itü'],'Lütfen üniversitesini seçiniz!')
    .required('Lütfen bir üniversite seçiniz!'),
  password: yup
    .boolean().oneOf(['true'],'Kullanım koşullarınızı kabul ediniz!')

});
