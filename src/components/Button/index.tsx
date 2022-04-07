import React from 'react';

import * as ButtonStyle from './styles';

function Button({ onPress, children, ...rest }) {
  return (
    <ButtonStyle.View onPress={onPress} {...rest}>
      <ButtonStyle.Text>{children}</ButtonStyle.Text>
    </ButtonStyle.View>
  );
}
export { Button };
