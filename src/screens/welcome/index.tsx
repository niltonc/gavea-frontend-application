import React from 'react';

import LogoGavea from '../../assets/images/logoGavea';
import { Button } from '../../components/Button';
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
          <Button primary onPress={() => navigation.navigate('SignIn')}>
            Entrar
          </Button>

          <Button secundary onPress={() => navigation.navigate('SignUp')}>
            Criar Conta
          </Button>
        </S.ContainerButton>
      </S.BackgroundImage>
    </S.Container>
  );
}
