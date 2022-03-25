import React from 'react';

import * as Button from '../../../components/Button';
import * as Text from '../../../components/Input';
import { RootStackScreenProps } from '../../../types';

import * as S from '../../../styles';

export default function SingUp({ navigation }: RootStackScreenProps<'SignIn'>) {
  return (
    <S.Container>
      <S.TitleText>Olá!</S.TitleText>
      <S.TextInputContainer>
        <Text.Input placeholder="Email" placeholderTextColor="#B1BEC2" />
        <Text.Input placeholder="Semha" placeholderTextColor="#B1BEC2" />
        <Button.Primary onPress={() => navigation.navigate('HomePage')}>
          <Button.Text>Entrar</Button.Text>
        </Button.Primary>
      </S.TextInputContainer>

      <S.SimpleTextContainer>
        <S.SimpleTextPrimary>Não tem uma conta?</S.SimpleTextPrimary>
        <S.SimpleTextSecundary>Criar conta</S.SimpleTextSecundary>
      </S.SimpleTextContainer>
    </S.Container>
  );
}
