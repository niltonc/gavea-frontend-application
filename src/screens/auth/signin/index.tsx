import React from 'react';

import { RootStackScreenProps } from '../../../types';

import * as S from '../../../styles';

export default function SingUp({ navigation }: RootStackScreenProps<'SignIn'>) {
  return (
    <S.Container>
      <S.TitleText>Olá!</S.TitleText>
      <S.TextInputContainer>
        <S.TextInput placeholder="Email" placeholderTextColor="#B1BEC2" />
        <S.TextInput placeholder="Semha" placeholderTextColor="#B1BEC2" />

        <S.ButtonPrimary>
          <S.ButtonText>Entrar</S.ButtonText>
        </S.ButtonPrimary>
      </S.TextInputContainer>

      <S.SimpleTextContainer>
        <S.SimpleTextPrimary>Não tem uma conta?</S.SimpleTextPrimary>
        <S.SimpleTextSecundary>Criar conta</S.SimpleTextSecundary>
      </S.SimpleTextContainer>
    </S.Container>
  );
}
