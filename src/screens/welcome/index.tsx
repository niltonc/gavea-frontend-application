import React from 'react';
import { RootStackScreenProps } from '../../types';
import * as S from '../../styles';

import BGLogo from '../../assets/images/welcome-bg.png';
import Logo from '../../assets/images/logo.png';

export default function Welcome({
  navigation,
}: RootStackScreenProps<'Welcome'>) {
  return (
    <S.Container>
      <S.BackgroundImage source={BGLogo}>
        <S.Logo source={Logo} />

        <S.WelcomeContainer>
          <S.WelcomeText>
            Bem-vindo a {'\n'}sua bolsa digital {'\n'}de commodities
          </S.WelcomeText>
        </S.WelcomeContainer>

        <S.ButtonContainer>
          <S.ButtonPrimary onPress={() => navigation.navigate('SignIn')}>
            <S.ButtonText>Entrar</S.ButtonText>
          </S.ButtonPrimary>
          <S.ButtonSecundary onPress={() => navigation.navigate('SignUp')}>
            <S.ButtonText>Criar Conta</S.ButtonText>
          </S.ButtonSecundary>
        </S.ButtonContainer>
      </S.BackgroundImage>
    </S.Container>
  );
}
