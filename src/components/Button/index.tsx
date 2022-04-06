import React from 'react';

import * as ButtonView from './styles';

function Button({ onPress, children, ...rest }) {
  return (
    <ButtonView.Top onPress={onPress} {...rest}>
      <ButtonView.Text>{children}</ButtonView.Text>
    </ButtonView.Top>
  );
}
export { Button };
