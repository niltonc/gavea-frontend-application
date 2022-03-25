import React from 'react';

import * as Button from '../../../components/Button';
import * as Text from '../../../components/Input';
import { RootStackScreenProps } from '../../../types';

import * as S from '../../../styles';

export default function SingUp({ navigation }: RootStackScreenProps<'SignUp'>) {
  return (
    <S.Container>
      <S.ContainerTitleSemiBold>
        <S.TitleSemiBold>Criar Conta</S.TitleSemiBold>
      </S.ContainerTitleSemiBold>

      <S.ContainerTextInputSec>
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

        <Button.Margin>
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
