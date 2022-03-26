import React, { useEffect } from 'react';

import { RootStackScreenProps } from '../../../types';
import logo from '../../assets/images/logo-home.png';
import * as Card from '../../components/Card';
import * as Order from '../../components/OrderCard';
import { useDataStore } from '../../context/store';
import { checkAuth } from '../../services/firebase/auth';

import * as S from '../../styles';

const arrayOrders: Array<any> = [
  {
    id: 1,
    spread: 'up',
    image: require('../../assets/icons/avatar01.png'),
    part: 'AgAmerica',
    pag: 'Fev/21',
    ton: 2000,
    value: 164.5,
  },
  {
    id: 2,
    spread: 'up',
    image: require('../../assets/icons/avatar02.png'),
    part: 'TrFood',
    pag: 'Fev/21',
    ton: 2000,
    value: 164.5,
  },
  {
    id: 3,
    spread: 'down',
    image: require('../../assets/icons/avatar03.png'),
    part: 'Gosc',
    pag: 'Fev/21',
    ton: 2000,
    value: 164.5,
  },
  {
    id: 4,
    spread: 'down',
    image: require('../../assets/icons/avatar04.png'),
    part: 'AgCerr',
    pag: 'Fev/21',
    ton: 2000,
    value: 164.5,
  },
  {
    id: 5,
    spread: 'up',
    image: require('../../assets/icons/avatar05.png'),
    part: 'Agro1001',
    pag: 'Fev/21',
    ton: 2000,
    value: 164.5,
  },
  {
    id: 6,
    spread: 'up',
    image: require('../../assets/icons/avatar06.png'),
    part: 'AgAmericana',
    pag: 'Fev/21',
    ton: 2000,
    value: 164.5,
  },
  {
    id: 7,
    spread: 'up',
    image: require('../../assets/icons/avatar02.png'),
    part: 'TrFood',
    pag: 'Fev/21',
    ton: 2000,
    value: 164.5,
  },
];

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
          <Card.AvatarText>FS</Card.AvatarText>
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
