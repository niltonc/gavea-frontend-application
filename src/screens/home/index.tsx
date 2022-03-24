import React from 'react';

import logo from '../../assets/images/logo.png';
import { RootStackScreenProps } from '../../types';

import * as S from '../../styles';

const arrayOrders: Array<any> = [
  {
    id: 1,
    variation: 'up',
    image: require('../../assets/icons/avatar01.png'),
    part: 'AgAmerica',
    pag: 'Fev/21',
    ton: 2000,
    value: 164.5,
  },
  {
    id: 2,
    variation: 'up',
    image: require('../../assets/icons/avatar02.png'),
    part: 'TrFood',
    pag: 'Fev/21',
    ton: 2000,
    value: 164.5,
  },
  {
    id: 3,
    variation: 'down',
    image: require('../../assets/icons/avatar03.png'),
    part: 'Gosc',
    pag: 'Fev/21',
    ton: 2000,
    value: 164.5,
  },
  {
    id: 4,
    variation: 'down',
    image: require('../../assets/icons/avatar04.png'),
    part: 'AgCerr',
    pag: 'Fev/21',
    ton: 2000,
    value: 164.5,
  },
  {
    id: 5,
    variation: 'up',
    image: require('../../assets/icons/avatar05.png'),
    part: 'Agro1001',
    pag: 'Fev/21',
    ton: 2000,
    value: 164.5,
  },
  {
    id: 6,
    variation: 'up',
    image: require('../../assets/icons/avatar06.png'),
    part: 'AgAmericana',
    pag: 'Fev/21',
    ton: 2000,
    value: 164.5,
  },
  {
    id: 7,
    variation: 'up',
    image: require('../../assets/icons/avatar02.png'),
    part: 'TrFood',
    pag: 'Fev/21',
    ton: 2000,
    value: 164.5,
  },
];

export default function HomePage({
  navigation,
}: RootStackScreenProps<'HomePage'>) {
  return (
    <S.Container>
      <S.DesignView>
        <S.LogoHome source={logo} />
      </S.DesignView>

      <S.UserView />

      <S.OrderContainer>
        <S.SubtitleView>
          <S.SubtitleText>Part</S.SubtitleText>
          <S.SubtitleText>Pag</S.SubtitleText>
          <S.SubtitleText>Ton</S.SubtitleText>
          <S.SubtitleText>R$</S.SubtitleText>
        </S.SubtitleView>
      </S.OrderContainer>

      <S.OrderView>
        {arrayOrders.map((order) => (
          <S.Order
            key={order.id}
            borderLeftColor={function changeColor() {
              if (order.variation === 'up') {
                return 'green';
              }
              return 'red';
            }}
          >
            <S.OrderIcon source={order.image} />
            <S.SimpleTextPrimary>{order.part}</S.SimpleTextPrimary>
            <S.SimpleTextPrimary>{order.pag}</S.SimpleTextPrimary>
            <S.SimpleTextPrimary>{order.ton}</S.SimpleTextPrimary>
            <S.SimpleTextPrimary>{order.value}</S.SimpleTextPrimary>
          </S.Order>
        ))}
      </S.OrderView>
    </S.Container>
  );
}
