import React from 'react';

import * as ButtonStyle from './styles';

function Button({ onPress, children, type }) {
  switch (type) {
    case 'primary':
      return (
        <ButtonStyle.Primary onPress={onPress}>{children}</ButtonStyle.Primary>
      );
    case 'secundary':
      return (
        <ButtonStyle.Secundary onPress={onPress}>
          {children}
        </ButtonStyle.Secundary>
      );
    default:
  }
}

export { Button };
