import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

import colors from '../constants/colors';
import { Text } from './Text';

const styles = StyleSheet.create({
  row: {
    backgroundColor: colors.white,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  titleText: {
    fontWeight: 'bold',
  },
  separator: {
    backgroundColor: colors.border,
    height: StyleSheet.hairlineWidth,
  },
});

type ListItemProps = {
  title: string;
  subtitle: string;
  onPress: () => void;
};

export function ListItem({
  title,
  subtitle,
  onPress = () => null,
}: ListItemProps) {
  const rowStyles = [styles.row];

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={rowStyles}>
        <Text style={styles.titleText}>{title}</Text>
        <Text>{subtitle}</Text>
      </View>
    </TouchableOpacity>
  );
}

export function ListSeparator() {
  return <View style={styles.separator} />;
}
