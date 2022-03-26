import React, { useState } from 'react';
import { Text } from 'react-native';

import { Formik } from 'formik';
import * as yup from 'yup';

import emailicon from '../../../assets/icons/email.png';
import eyeicon from '../../../assets/icons/eye.png';
import lockicon from '../../../assets/icons/lock.png';
import usericon from '../../../assets/icons/user.png';
import * as Button from '../../../components/Button';
import * as Texts from '../../../components/Input';
import { useDataStore } from '../../../context/store';
import { signup } from '../../../services/firebase/auth';
import { RootStackScreenProps } from '../../../types';

import * as S from '../../../styles';

export default function SingUp({ navigation }: RootStackScreenProps<'SignUp'>) {
  const { setName, setInicialRouterName } = useDataStore();
  const [errorFirebase, setErrorFirebase] = useState('');
  const [securityPass, setSecurityPass] = useState(true);

  const handleSignUp = async (values) => {
    const { name, email, password } = values;
    const user = await signup(email, password).catch((Error) => {
      console.log('Error: ', Error);
      if (Error.code === 'auth/email-already-exists') {
        setErrorFirebase('O email inserido já está em uso');
      }
      if (Error.code === 'auth/email-already-in-use') {
        setErrorFirebase('O email inserido já está em uso');
      }
    });
    if (user) {
      setName(name);
      setInicialRouterName('SignIn');
      navigation.navigate('SignIn');
    }
  };

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

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
        passwordConfirmation: '',
      }}
      validationSchema={validationSignUp}
      onSubmit={handleSignUp}
    >
      {({
        errors,
        handleBlur,
        handleChange,
        handleSubmit,
        isValid,
        touched,
        values,
      }) => (
        <S.Container>
          <S.ContainerTitleSemiBold>
            <S.TitleSemiBold>Criar Conta</S.TitleSemiBold>
          </S.ContainerTitleSemiBold>

          <S.ContainerTextInputSec>
            <Text>{errorFirebase}</Text>
            <S.ContainerInput>
              <Texts.Icon source={usericon} />
              <Texts.Input
                value={values.name}
                onChangeText={handleChange('name')}
                onBlur={handleBlur('name')}
                placeholder="Nome completo"
                placeholderTextColor="#B1BEC2"
              />
            </S.ContainerInput>
            {errors.name && touched.name && <Text>{errors.name}</Text>}

            <S.ContainerInput>
              <Texts.Icon source={emailicon} />
              <Texts.Input
                value={values.email}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                placeholder="Email"
                placeholderTextColor="#B1BEC2"
              />
            </S.ContainerInput>
            {errors.email && touched.email && <Text>{errors.email}</Text>}

            <S.ContainerInput>
              <Texts.IconLock source={lockicon} />
              <Texts.Input
                value={values.password}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                placeholder="Senha"
                placeholderTextColor="#B1BEC2"
                secureTextEntry={securityPass}
              />
              <Texts.Iconeye source={eyeicon} />
            </S.ContainerInput>
            {errors.password && touched.password && (
              <Text>{errors.password}</Text>
            )}

            <S.ContainerInput>
              <Texts.IconLock source={lockicon} />
              <Texts.Input
                value={values.passwordConfirmation}
                onChangeText={handleChange('passwordConfirmation')}
                onBlur={handleBlur('passwordConfirmation')}
                placeholder="Confirmar Senha"
                placeholderTextColor="#B1BEC2"
                secureTextEntry={securityPass}
              />
              <Texts.Iconeye source={eyeicon} />
            </S.ContainerInput>
            {errors.passwordConfirmation && touched.passwordConfirmation && (
              <Text>{errors.passwordConfirmation}</Text>
            )}

            <Button.Margin disabled={!isValid} onPress={handleSubmit}>
              <Button.Text>Cadastrar</Button.Text>
            </Button.Margin>
          </S.ContainerTextInputSec>

          <S.ContainerText>
            <S.TextSimple>Já tem uma conta?</S.TextSimple>
            <S.TextClick onPress={() => navigation.navigate('SignIn')}>
              <S.TextPrimary>Faça o login</S.TextPrimary>
            </S.TextClick>
          </S.ContainerText>
        </S.Container>
      )}
    </Formik>
  );
}
