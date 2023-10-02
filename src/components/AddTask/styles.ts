import { StyleSheet } from 'react-native';
import theme from '../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    gap: 4,
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: 'row',
    zIndex: 1,
  },
  input: {
    backgroundColor: theme.colors.gray[500],
    borderRadius: 6,
    borderWidth: 1,
    borderColor: theme.colors.gray[700],
    color: theme.colors.gray[100],
    flex: 1,
    fontFamily: 'Inter',
    fontSize: 16,
    padding: 16,
  },
  inputFocus: {
    backgroundColor: theme.colors.gray[500],
    borderRadius: 6,
    borderWidth: 1,
    borderColor: theme.colors.purpleDark,
    color: theme.colors.gray[100],
    flex: 1,
    fontFamily: 'Inter',
    fontSize: 16,
    padding: 16,
  },
  button: {
    alignItems: 'center',
    backgroundColor: theme.colors.blueDark,
    borderRadius: 6,
    height: 52,
    justifyContent: 'center',
    width: 52,
  },
});
