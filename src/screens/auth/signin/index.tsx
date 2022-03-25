import React from 'react';

import * as Button from '../../../components/Button';
import * as Text from '../../../components/Input';
import { RootStackScreenProps } from '../../../types';

import * as S from '../../../styles';

export default function SingUp({ navigation }: RootStackScreenProps<'SignIn'>) {
  return (
    <S.Container>
      <S.ContainerTitleBold>
        <S.TitleBold>Olá!</S.TitleBold>
        <S.TitleBoldSec>Seja bem-vindo.</S.TitleBoldSec>
      </S.ContainerTitleBold>

      <S.ContainerTextInput>
        <Text.Input placeholder="Email" placeholderTextColor="#B1BEC2" />
        <Text.Input placeholder="Senha" placeholderTextColor="#B1BEC2" />

        <Button.Margin onPress={() => navigation.navigate('HomePage')}>
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
