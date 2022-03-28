import React from 'react';

import LogoGavea from '../../assets/images/logoGavea';
import * as Button from '../../components/Button';
import { RootStackScreenProps } from '../../types';

import * as S from '../../styles';

export default function Welcome({
  navigation,
}: RootStackScreenProps<'Welcome'>) {
  return (
    <S.Container>
      <S.BackgroundImage source={require('../../assets/images/welcome-bg.png')}>
        <S.Logo>
          <LogoGavea />
        </S.Logo>

        <S.ContainerWelcome>
          <S.TextBold>
            Bem-vindo a {'\n'}sua bolsa digital {'\n'}de commodities
          </S.TextBold>
        </S.ContainerWelcome>

        <S.ContainerButton>
          <Button.Primary onPress={() => navigation.navigate('SignIn')}>
            <Button.Text>Entrar</Button.Text>
          </Button.Primary>
          <Button.Secundary onPress={() => navigation.navigate('SignUp')}>
            <Button.Text>Criar Conta</Button.Text>
          </Button.Secundary>
        </S.ContainerButton>
      </S.BackgroundImage>
    </S.Container>
  );
}
