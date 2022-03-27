import React, { useEffect } from 'react';

import { RootStackScreenProps } from '../../../types';
import logo from '../../assets/images/logo-home.png';
import * as Card from '../../components/Card';
import * as Order from '../../components/OrderCard';
import { useDataStore } from '../../context/store';
import { checkAuth } from '../../services/firebase/auth';
import { arrayOrders } from './data';

import * as S from '../../styles';

function changeColor(spread) {
  if (spread === 'up') {
    return 'green';
  }
  return 'red';
}

export default function HomePage({ navigation }: RootStackScreenProps<'Home'>) {
  useEffect(() => {
    checkAuth(navigation);
  }, []);

  const name = useDataStore((state) => state.name);

  return (
    <S.Container>
      <S.View>
        <S.LogoHome source={logo} />
      </S.View>

      <Card.User>
        <Card.Avatar>
          <Card.AvatarText> {`${name}`.substring(0, 2)}</Card.AvatarText>
        </Card.Avatar>
        <Card.UserName>Olá, {name}</Card.UserName>
        <Card.UserSubtitle>Gavea Marketplace</Card.UserSubtitle>
      </Card.User>

      <S.ContainerLeg>
        <S.SubtitleView>
          <S.TextLeg>Part</S.TextLeg>
          <S.TextLeg>Pag</S.TextLeg>
          <S.TextLeg>Ton</S.TextLeg>
          <S.TextLeg>R$</S.TextLeg>
        </S.SubtitleView>
      </S.ContainerLeg>

      <S.ContainerOrder>
        {arrayOrders.map((order) => (
          <Order.Card
            key={order.id}
            borderLeftColor={() => changeColor(order.spread)}
          >
            <Order.Icon source={order.image} />
            <Order.TextPart>{order.part}</Order.TextPart>
            <Order.TextPag>{order.pag}</Order.TextPag>
            <Order.TextTon>{order.ton}</Order.TextTon>
            <Order.TextValue selectionColor={() => changeColor(order.spread)}>
              {order.value}
            </Order.TextValue>
          </Order.Card>
        ))}
      </S.ContainerOrder>
    </S.Container>
  );
}
