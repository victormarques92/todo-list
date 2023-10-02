import { StyleSheet } from 'react-native';
import theme from '../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderColor: theme.colors.gray[300],
    borderTopWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 48,
  },
  title: {
    color: theme.colors.gray[300],
    fontSize: 14,
    fontWeight: '700',
    marginTop: 16,
  },
  text: {
    color: theme.colors.gray[300],
    fontSize: 14,
  },
});
