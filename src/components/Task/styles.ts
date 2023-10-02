import { StyleSheet } from 'react-native';
import theme from '../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: theme.colors.gray[400],
    backgroundColor: theme.colors.gray[500],
    marginBottom: 8,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  text: {
    color: theme.colors.gray[100],
    flex: 1,
    fontSize: 14,
  },
  textCompleted: {
    color: theme.colors.gray[300],
    flex: 1,
    fontSize: 14,
    textDecorationLine: 'line-through',
  },
  check: {
    width: 24,
    height: 24,
  },
});
