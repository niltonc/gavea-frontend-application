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

        <S.WelcomeTxt>
          Bem-vindo a sua bolsa digital de commodities
        </S.WelcomeTxt>

        <S.ButtonLogin onPress={() => navigation.navigate('Settings')}>
          <S.TextButton>Entrar</S.TextButton>
        </S.ButtonLogin>

        <S.ButtonSingup onPress={() => navigation.navigate('SingUp')}>
          <S.TextButton>Criar Conta</S.TextButton>
        </S.ButtonSingup>
      </S.BackgroundImage>
    </S.Container>
  );
}
