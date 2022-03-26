import React, { useState } from 'react';

import * as Button from '../../../components/Button';
import * as Text from '../../../components/Input';
import { signin } from '../../../services/firebase/auth';
import { RootStackScreenProps } from '../../../types';
import { useDataStore } from '../../../zustand/store';

import * as S from '../../../styles';

export default function SingUp({ navigation }: RootStackScreenProps<'SignIn'>) {
  const { setInicialRouterName } = useDataStore();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async () => {
    await signin(email, password);
    setInicialRouterName('HomePage');
    navigation.navigate('HomePage');
  };

  return (
    <S.Container>
      <S.ContainerTitleBold>
        <S.TitleBold>Olá!</S.TitleBold>
        <S.TitleBoldSec>Seja bem-vindo.</S.TitleBoldSec>
      </S.ContainerTitleBold>

      <S.ContainerTextInput>
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
        <Button.Margin onPress={handleSignIn}>
          <Button.Text>Entrar</Button.Text>
        </Button.Margin>
      </S.ContainerTextInput>

      <S.ContainerText>
        <S.TextSimple>Não tem uma conta?</S.TextSimple>
        <S.TextClick onPress={() => navigation.navigate('SignUp')}>
          <S.TextPrimary>Criar conta</S.TextPrimary>
        </S.TextClick>
      </S.ContainerText>
    </S.Container>
  );
}
