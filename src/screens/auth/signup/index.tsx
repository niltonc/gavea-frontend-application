import React from 'react';

import * as Button from '../../../components/Button';
import * as Text from '../../../components/Input';
import { RootStackScreenProps } from '../../../types';

import * as S from '../../../styles';

export default function SingUp({ navigation }: RootStackScreenProps<'SignUp'>) {
  return (
    <S.Container>
      <S.TitleText>Criar Conta</S.TitleText>
      <S.TextInputContainer>
        <Text.Input
          placeholder="Nome completo"
          placeholderTextColor="#B1BEC2"
        />
        <Text.Input placeholder="Email" placeholderTextColor="#B1BEC2" />
        <Text.Input placeholder="Semha" placeholderTextColor="#B1BEC2" />
        <Text.Input
          placeholder="Confirmar Senha"
          placeholderTextColor="#B1BEC2"
        />

        <Button.Primary>
          <Button.Text>Cadastrar</Button.Text>
        </Button.Primary>
      </S.TextInputContainer>

      <S.SimpleTextContainer>
        <S.SimpleTextPrimary>Já tem uma conta?</S.SimpleTextPrimary>
        <S.SimpleTextSecundary>Faça o login</S.SimpleTextSecundary>
      </S.SimpleTextContainer>
    </S.Container>
  );
}
