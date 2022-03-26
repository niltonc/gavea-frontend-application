import React, { useState } from 'react';

import emailicon from '../../../assets/icons/email.png';
import lockicon from '../../../assets/icons/lock.png';
import usericon from '../../../assets/icons/user.png';
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
        <S.ContainerInput>
          <Text.Icon source={usericon} />
          <Text.Input
            value={userName}
            onChangeText={(value) => setUserName(value)}
            placeholder="Nome completo"
            placeholderTextColor="#B1BEC2"
          />
        </S.ContainerInput>

        <S.ContainerInput>
          <Text.Icon source={emailicon} />
          <Text.Input
            value={email}
            onChangeText={(value) => setEmail(value)}
            placeholder="Email"
            placeholderTextColor="#B1BEC2"
          />
        </S.ContainerInput>
        <S.ContainerInput>
          <Text.IconLock source={lockicon} />
          <Text.Input
            value={password}
            onChangeText={(value) => setPassword(value)}
            placeholder="Senha"
            placeholderTextColor="#B1BEC2"
            secureTextEntry
          />
        </S.ContainerInput>
        <S.ContainerInput>
          <Text.IconLock source={lockicon} />
          <Text.Input
            placeholder="Confirmar Senha"
            placeholderTextColor="#B1BEC2"
            secureTextEntry
          />
        </S.ContainerInput>

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
