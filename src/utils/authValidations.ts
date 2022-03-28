import * as yup from 'yup';

const validationSignIn = yup.object().shape({
  email: yup
    .string()
    .label('Email')
    .email('Email Inválido.')
    .required('Digite seu Email')
    .trim()
    .strict(),
  password: yup
    .string()
    .label('Senha')
    .required('Digite sua Senha')
    .min(4, ({ min }) => `A senha precisa ser maior que ${min} caracteres`),
});

const validationSignUp = yup.object().shape({
  name: yup
    .string()
    .label('Nome')
    .required('Digite seu Nome')
    .min(4, ({ min }) => `O nome precisa ser maior que  ${min} caracteres`),
  email: yup
    .string()
    .label('Email')
    .email('Email Inválido.')
    .required('Digite seu Email')
    .trim()
    .strict(),
  password: yup
    .string()
    .label('Senha')
    .required('Digite sua Senha')
    .min(6, ({ min }) => `A senha precisa ser maior que ${min} caracteres`)
    .max(30, ({ max }) => `A senha precisa ser menor que ${max} caracteres`),
  passwordConfirmation: yup
    .string()
    .required('Você precisar confirmar sua senha')
    .oneOf([yup.ref('password'), null], 'As senhas precisam ser iguais'),
});

export { validationSignIn, validationSignUp };
