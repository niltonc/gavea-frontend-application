import React, { useState, useRef } from 'react';

import { Formik } from 'formik';

import EmailIcon from '../../../assets/icons/icon-email';
import EyeCloseIcon from '../../../assets/icons/icon-eye-close';
import EyeOpenIcon from '../../../assets/icons/icon-eye-open';
import LockIcon from '../../../assets/icons/icon-lock';
import UserIcon from '../../../assets/icons/icon-user';
import { Button } from '../../../components/Button';
import * as Input from '../../../components/Input';
import * as Yup from '../../../components/yup';
import { useDataStore } from '../../../context/store';
import { signup } from '../../../services/firebase/auth';
import { RootStackScreenProps } from '../../../types';
import { validationSignUp } from '../../../utils/authValidations';

import * as S from '../../../styles';

export default function SingUp({ navigation }: RootStackScreenProps<'SignUp'>) {
  const { setName, setInicialRouterName } = useDataStore();
  const [errorFirebase, setErrorFirebase] = useState('');
  const [securityPass, setSecurityPass] = useState(true);
  const [loading, setLoading] = useState(false);

  const refInput01 = useRef();
  const refInput02 = useRef();
  const refInput03 = useRef();
  const refInput04 = useRef();

  const handleSignUp = async (values: {
    name: string;
    email: string;
    password: string;
  }) => {
    setLoading(true);
    const { name, email, password } = values;
    const user = await signup(email, password).catch((Error) => {
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
            <Yup.ErrosFirebase>{errorFirebase}</Yup.ErrosFirebase>
            <S.ContainerInput>
              <Input.IconUserView>
                <UserIcon />
              </Input.IconUserView>
              <Input.Text
                ref={refInput01}
                onSubmitEditing={() => refInput02.current.focus()}
                value={values.name}
                onChangeText={handleChange('name')}
                onBlur={handleBlur('name')}
                placeholder="Nome completo"
                placeholderTextColor="#B1BEC2"
                returnKeyType="next"
                blurOnSubmit={false}
              />
            </S.ContainerInput>

            {errors.name && touched.name && <Yup.User>{errors.name}</Yup.User>}

            <S.ContainerInput>
              <Input.IconEmailView>
                <EmailIcon />
              </Input.IconEmailView>
              <Input.Text
                ref={refInput02}
                onSubmitEditing={() => refInput03.current.focus()}
                value={values.email}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                placeholder="Email"
                placeholderTextColor="#B1BEC2"
                returnKeyType="next"
              />
            </S.ContainerInput>

            {errors.email && touched.email && (
              <Yup.EmailCad>{errors.email}</Yup.EmailCad>
            )}

            <S.ContainerInput>
              <Input.IconLockView>
                <LockIcon />
              </Input.IconLockView>
              <Input.Text
                ref={refInput03}
                onSubmitEditing={() => refInput04.current.focus()}
                value={values.password}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                placeholder="Senha"
                placeholderTextColor="#B1BEC2"
                secureTextEntry={securityPass}
                returnKeyType="next"
              />
              <Input.Click onPress={() => setSecurityPass(!securityPass)}>
                {securityPass ? <EyeCloseIcon /> : <EyeOpenIcon />}
              </Input.Click>
            </S.ContainerInput>

            {errors.password && touched.password && (
              <Yup.PassCad>{errors.password}</Yup.PassCad>
            )}

            <S.ContainerInput>
              <Input.IconLockView>
                <LockIcon />
              </Input.IconLockView>
              <Input.Text
                ref={refInput04}
                returnKeyType="done"
                value={values.passwordConfirmation}
                onChangeText={handleChange('passwordConfirmation')}
                onBlur={handleBlur('passwordConfirmation')}
                placeholder="Confirmar Senha"
                placeholderTextColor="#B1BEC2"
                secureTextEntry={securityPass}
              />
              <Input.Click onPress={() => setSecurityPass(!securityPass)}>
                {securityPass ? <EyeCloseIcon /> : <EyeOpenIcon />}
              </Input.Click>
            </S.ContainerInput>

            {errors.passwordConfirmation && touched.passwordConfirmation && (
              <Yup.PassConfirm>{errors.passwordConfirmation}</Yup.PassConfirm>
            )}

            <Button
              singin
              disabled={!isValid || loading}
              onPress={handleSubmit}
            >
              Cadastrar
            </Button>
          </S.ContainerTextInputSec>

          <S.ContainerTextSecundary>
            <S.TextSimple>Já tem uma conta?</S.TextSimple>
            <S.TextClick onPress={() => navigation.navigate('SignIn')}>
              <S.TextPrimary>Faça o login</S.TextPrimary>
            </S.TextClick>
          </S.ContainerTextSecundary>
        </S.Container>
      )}
    </Formik>
  );
}
