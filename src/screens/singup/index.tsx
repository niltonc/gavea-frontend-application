import React from 'react';
import { RootStackScreenProps } from '../../types';
import * as S from '../../styles';

export default function SingUp({ navigation }: RootStackScreenProps<'SingUp'>) {
  return (
    <S.Container>
      <S.TitleText>Criar Conta</S.TitleText>
      <S.TextInputContainer>
        <S.TextInput
          placeholder="Nome completo"
          placeholderTextColor="#B1BEC2"
        />
        <S.TextInput placeholder="Email" placeholderTextColor="#B1BEC2" />
        <S.TextInput placeholder="Semha" placeholderTextColor="#B1BEC2" />
        <S.TextInput
          placeholder="Confirmar Senha"
          placeholderTextColor="#B1BEC2"
        />
        <S.ButtonPrimary>
          <S.ButtonText>Cadastrar</S.ButtonText>
        </S.ButtonPrimary>
      </S.TextInputContainer>
    </S.Container>
  );
}
