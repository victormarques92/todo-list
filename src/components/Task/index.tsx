import {
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { styles } from './styles';

type Props = {
  text: string;
  completed?: boolean;
  onCompleted: () => void;
  onRemove: () => void;
};

export function Task({
  onCompleted,
  onRemove,
  text,
  completed,
}: Props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onCompleted}>
        <Image
          style={styles.check}
          source={
            completed
              ? require('../../../assets/check-completed.png')
              : require('../../../assets/check.png')
          }
        />
      </TouchableOpacity>

      <Text
        style={completed ? styles.textCompleted : styles.text}
      >
        {text}
      </Text>

      <TouchableOpacity onPress={onRemove}>
        <Image source={require('../../../assets/trash.png')} />
      </TouchableOpacity>
    </View>
  );
}
