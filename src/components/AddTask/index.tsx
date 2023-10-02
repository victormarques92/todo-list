import { useState } from 'react';
import {
  Image,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import theme from '../../styles/theme';
import { styles } from './styles';

type Props = {
  onPress: (value: string) => void;
};

export function AddTask({ onPress }: Props) {
  const [value, setValue] = useState('');
  const [isFocus, setIsFocus] = useState(false);

  function handlePress() {
    onPress(value);

    setValue('');
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={isFocus ? styles.inputFocus : styles.input}
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor={theme.colors.gray[300]}
        onChangeText={setValue}
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={handlePress}
        disabled={value === ''}
      >
        <Image source={require('../../../assets/plus.png')} />
      </TouchableOpacity>
    </View>
  );
}
