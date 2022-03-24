import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';

import colors from '../constants/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
    borderRadius: 6,
    borderWidth: 1,
    marginVertical: 7,
    paddingVertical: 14,
  },
  containerOutline: {
    backgroundColor: 'transparent',
    borderColor: colors.border,
  },

  text: {
    alignSelf: 'center',
    color: colors.white,
    fontSize: 18,
    fontWeight: '500',
  },
  textOutline: {
    color: colors.primary,
  },
});

type ButtonProps = {
  onPress: () => void;
  children: string;
  type?: 'outline';
};

export function Button({
  onPress = () => {},
  children = '',
  type,
}: ButtonProps) {
  const containerStyles: StyleProp<ViewStyle>[] = [styles.container];
  const textStyles: StyleProp<TextStyle>[] = [styles.text];

  if (type === 'outline') {
    containerStyles.push(styles.containerOutline);
    textStyles.push(styles.textOutline);
  }

  return (
    <TouchableOpacity onPress={onPress} style={containerStyles}>
      <Text style={textStyles}>{children}</Text>
    </TouchableOpacity>
  );
}
