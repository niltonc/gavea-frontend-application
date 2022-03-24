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

        <S.WelcomeText>
          Bem-vindo a sua bolsa digital de commodities
        </S.WelcomeText>

        <S.ButtonContainer>
          <S.ButtonLogin onPress={() => navigation.navigate('Login')}>
            <S.ButtonText>Entrar</S.ButtonText>
          </S.ButtonLogin>
          <S.ButtonSingup onPress={() => navigation.navigate('SingUp')}>
            <S.ButtonText>Criar Conta</S.ButtonText>
          </S.ButtonSingup>
        </S.ButtonContainer>
      </S.BackgroundImage>
    </S.Container>
  );
}
