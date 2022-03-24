import React from 'react';

import logo from '../../assets/images/logo.png';
import { RootStackScreenProps } from '../../types';

import * as S from '../../styles';

export default function HomePage({
  navigation,
}: RootStackScreenProps<'HomePage'>) {
  return (
    <S.Container>
      <S.DesignView>
        <S.LogoHome source={logo} />
      </S.DesignView>
    </S.Container>
  );
}
