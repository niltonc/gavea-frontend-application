import React, { useState, useRef } from 'react';

import { Formik } from 'formik';

import EmailIcon from '../../../assets/icons/icon-email';
import EyeCloseIcon from '../../../assets/icons/icon-eye-close';
import EyeOpenIcon from '../../../assets/icons/icon-eye-open';
import LockIcon from '../../../assets/icons/icon-lock';
import { Button } from '../../../components/Button';
import * as Input from '../../../components/Input';
import * as Yup from '../../../components/yup';
import { useDataStore } from '../../../context/store';
import { signin } from '../../../services/firebase/auth';
import { RootStackScreenProps } from '../../../types';
import { validationSignIn } from '../../../utils/authValidations';

import * as S from '../../../styles';

export default function SingUp({ navigation }: RootStackScreenProps<'SignIn'>) {
  const [errorFirebase, setErrorFirebase] = useState('');
  const [securityPass, setSecurityPass] = useState(true);
  const [loading, setLoading] = useState(false);

  const refInput01 = useRef();
  const refInput02 = useRef();

  const { setInicialRouterName } = useDataStore();

  const handleSignIn = async (values: { email: string; password: string }) => {
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
              <Input.IconEmailView>
                <EmailIcon />
              </Input.IconEmailView>
              <Input.Text
                ref={refInput01}
                onSubmitEditing={() => refInput02.current.focus()}
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
              <Input.IconLockView>
                <LockIcon />
              </Input.IconLockView>
              <Input.Text
                ref={refInput02}
                returnKeyType="done"
                value={values.password}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                placeholder="Senha"
                placeholderTextColor="#B1BEC2"
                secureTextEntry={securityPass}
              />
              <Input.Click onPress={() => setSecurityPass(!securityPass)}>
                {securityPass ? <EyeCloseIcon /> : <EyeOpenIcon />}
              </Input.Click>
            </S.ContainerInput>

            {errors.password && touched.password && (
              <Yup.Pass>{errors.password}</Yup.Pass>
            )}

            <Button
              signin
              disabled={!isValid || loading}
              onPress={handleSubmit}
            >
              Entrar
            </Button>
          </S.ContainerTextInput>

          <S.ContainerTextPrimary>
            <S.TextSimple>Não tem uma conta?</S.TextSimple>
            <S.TextClick onPress={() => navigation.navigate('SignUp')}>
              <S.TextPrimary>Criar conta</S.TextPrimary>
            </S.TextClick>
          </S.ContainerTextPrimary>
        </S.Container>
      )}
    </Formik>
  );
}
