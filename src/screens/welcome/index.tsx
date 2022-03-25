import React from 'react';

import Logo from '../../assets/images/logo.png';
import BGLogo from '../../assets/images/welcome-bg.png';
import * as Button from '../../components/Button';
import { RootStackScreenProps } from '../../types';

import * as S from '../../styles';

export default function Welcome({
  navigation,
}: RootStackScreenProps<'Welcome'>) {
  return (
    <S.Container>
      <S.BackgroundImage source={BGLogo}>
        <S.Logo source={Logo} />

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
