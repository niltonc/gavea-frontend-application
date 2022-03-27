import React, { useState } from 'react';
import { ActivityIndicator } from 'react-native-paper';

import { Formik } from 'formik';
import * as yup from 'yup';

import emailicon from '../../../assets/icons/email.png';
import eyeicon from '../../../assets/icons/eye.png';
import closeeye from '../../../assets/icons/eyeclose.png';
import lockicon from '../../../assets/icons/lock.png';
import * as Button from '../../../components/Button';
import * as Input from '../../../components/Input';
import * as Yup from '../../../components/yup';
import { useDataStore } from '../../../context/store';
import { signin } from '../../../services/firebase/auth';
import { RootStackScreenProps } from '../../../types';

import * as S from '../../../styles';

export default function SingUp({ navigation }: RootStackScreenProps<'SignIn'>) {
  const [errorFirebase, setErrorFirebase] = useState('');
  const [securityPass, setSecurityPass] = useState(true);

  const { setInicialRouterName } = useDataStore();

  const handleSignIn = async (values) => {
    setLoading(true);
    const { email, password } = values;

    const user = await signin(email, password).catch((Error) => {
      if (Error.code === 'auth/user-not-found') {
        setErrorFirebase('O email inserido não corresponde a nenhuma conta');
      }
      if (Error.code === 'auth/wrong-password') {
        setErrorFirebase('A senha inserida está incorreta');
      }
      if (Error.code === 'auth/too-many-requests') {
        setErrorFirebase('Senha incorreta varias vezes. Tente mais tarde');
      }
      setLoading(false);
    });
    if (user) {
      setInicialRouterName('HomePage');
      navigation.navigate('HomePage');
      setLoading(false);
    }
  };

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

  const [loading, setLoading] = useState(false);

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={validationSignIn}
      onSubmit={handleSignIn}
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
          <S.ContainerTitleBold>
            <S.TitleBold>Olá!</S.TitleBold>
            <S.TitleBoldSec>Seja bem-vindo.</S.TitleBoldSec>
          </S.ContainerTitleBold>

          <S.ContainerTextInput>
            <Yup.ErrosFirebase>{errorFirebase}</Yup.ErrosFirebase>
            <S.ContainerInput>
              <Input.IconEmail source={emailicon} />
              <Input.Text
                value={values.email}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                placeholder="Email"
                placeholderTextColor="#B1BEC2"
              />
            </S.ContainerInput>

            {errors.email && touched.email && (
              <Yup.Email>{errors.email}</Yup.Email>
            )}

            <S.ContainerInput>
              <Input.IconLock source={lockicon} />
              <Input.Text
                value={values.password}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                placeholder="Senha"
                placeholderTextColor="#B1BEC2"
                secureTextEntry={securityPass}
              />
              <Input.Click onPress={() => setSecurityPass(!securityPass)}>
                {securityPass ? (
                  <Input.Iconeye source={eyeicon} />
                ) : (
                  <Input.Iconeye source={closeeye} />
                )}
              </Input.Click>
            </S.ContainerInput>

            {errors.password && touched.password && (
              <Yup.Pass>{errors.password}</Yup.Pass>
            )}

            <Button.Margin
              disabled={!isValid || loading}
              onPress={handleSubmit}
            >
              {loading ? (
                <ActivityIndicator color="white" />
              ) : (
                <Button.Text>Entrar</Button.Text>
              )}
            </Button.Margin>
          </S.ContainerTextInput>

          <S.ContainerText>
            <S.TextSimple>Não tem uma conta?</S.TextSimple>
            <S.TextClick onPress={() => navigation.navigate('SignUp')}>
              <S.TextPrimary>Criar conta</S.TextPrimary>
            </S.TextClick>
          </S.ContainerText>
        </S.Container>
      )}
    </Formik>
  );
}
