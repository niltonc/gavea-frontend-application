import React, { useState } from 'react';

import * as Button from '../../../components/Button';
import * as Text from '../../../components/Input';
import { signup } from '../../../services/firebase/auth';
import { RootStackScreenProps } from '../../../types';
import { useDataStore } from '../../../zustand/store';

import * as S from '../../../styles';

export default function SingUp({ navigation }: RootStackScreenProps<'SignUp'>) {
  const { setName, setInicialRouterName } = useDataStore();

  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    await signup(email, password);
    setName(userName);
    setInicialRouterName('HomePage');
    navigation.navigate('HomePage');
  };

  return (
    <S.Container>
      <S.ContainerTitleSemiBold>
        <S.TitleSemiBold>Criar Conta</S.TitleSemiBold>
      </S.ContainerTitleSemiBold>
      <S.ContainerTextInputSec>
        <Text.Input
          value={userName}
          onChangeText={(value) => setUserName(value)}
          placeholder="Nome completo"
          placeholderTextColor="#B1BEC2"
        />
        <Text.Input
          value={email}
          onChangeText={(value) => setEmail(value)}
          placeholder="Email"
          placeholderTextColor="#B1BEC2"
        />
        <Text.Input
          value={password}
          onChangeText={(value) => setPassword(value)}
          placeholder="Senha"
          placeholderTextColor="#B1BEC2"
          secureTextEntry
        />
        <Text.Input
          placeholder="Confirmar Senha"
          placeholderTextColor="#B1BEC2"
          secureTextEntry
        />

        <Button.Margin onPress={handleSignUp}>
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
  );
}
