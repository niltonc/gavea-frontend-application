import React from 'react';
import {
  TextInput as RNTextInput,
  StyleSheet,
  View,
  StyleProp,
  ViewStyle,
  TextInputProps as RNTextInputProps,
} from 'react-native';

import colors from '../constants/colors';
import { Text } from './Text';

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 20,
  },
  labelText: {
    color: colors.gray,
    fontSize: 18,
    marginBottom: 10,
  },
  textInput: {
    fontSize: 14,
    fontWeight: '500',
    paddingBottom: 10,
  },
  border: {
    backgroundColor: colors.border,
    height: 1,
  },
  borderError: {
    backgroundColor: colors.error,
  },
  errorText: {
    color: colors.error,
    marginTop: 5,
  },
});

interface TextInputProps extends RNTextInputProps {
  label: string;
  errorText?: string;
}

export function TextInput({ label, errorText = '', ...rest }: TextInputProps) {
  const borderStyles: StyleProp<ViewStyle> = [styles.border];

  if (errorText && errorText.length > 0) {
    borderStyles.push(styles.borderError);
  }

  return (
    <View style={styles.inputContainer}>
      <Text style={styles.labelText}>{label}</Text>
      <RNTextInput style={styles.textInput} {...rest} />
      <View style={borderStyles} />
      <Text style={styles.errorText}>{errorText}</Text>
    </View>
  );
}
