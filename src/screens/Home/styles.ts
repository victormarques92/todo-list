import { StyleSheet } from 'react-native';
import theme from '../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.gray[700],
    flex: 1,
  },
  boxImage: {
    marginTop: 70,
    alignItems: 'center',
    marginBottom: 40,
  },
  content: {
    backgroundColor: theme.colors.gray[600],
    marginTop: -24,
    paddingTop: 56,
    paddingBottom: 24,
    paddingHorizontal: 24,
    flex: 1,
  },
  status: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  statusItem: {
    flexDirection: 'row',
    gap: 8,
  },
  created: {
    color: theme.colors.blue,
    fontFamily: 'Inter',
    fontSize: 14,
    fontWeight: '700',
  },
  completed: {
    color: theme.colors.purple,
    fontFamily: 'Inter',
    fontSize: 14,
    fontWeight: '700',
  },
  boxBadge: {
    borderRadius: 80,
    backgroundColor: theme.colors.gray[400],
    height: 20,
    paddingHorizontal: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  badge: {
    color: theme.colors.gray[200],
    fontSize: 12,
    fontWeight: '700',
  },
});
