import { useState } from 'react';
import { FlatList, Image, Text, View } from 'react-native';
import { AddTask } from '../../components/AddTask';
import { Empty } from '../../components/Empty';
import { Task } from '../../components/Task';
import { styles } from './styles';

export function Home() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [completeds, setCompleteds] = useState<number[]>([]);

  function handleCreateTask(text: string) {
    setTasks(prevState => [...prevState, text]);
  }

  function handleCompleteTask(id: number) {
    if (completeds.includes(id)) {
      return setCompleteds(prevState =>
        prevState.filter(item => item !== id),
      );
    }

    return setCompleteds(prevState => [...prevState, id]);
  }

  function handleRemoveTask(id: number) {
    setTasks(prevState =>
      prevState.filter((_, index) => index !== id),
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.boxImage}>
        <Image source={require('../../../assets/Logo.png')} />
      </View>

      <AddTask onPress={handleCreateTask} />

      <View style={styles.content}>
        <View style={styles.status}>
          <View style={styles.statusItem}>
            <Text style={styles.created}>Criadas</Text>

            <View style={styles.boxBadge}>
              <Text style={styles.badge}>{tasks.length}</Text>
            </View>
          </View>

          <View style={styles.statusItem}>
            <Text style={styles.completed}>Concluídas</Text>

            <View style={styles.boxBadge}>
              <Text style={styles.badge}>
                {completeds.length}
              </Text>
            </View>
          </View>
        </View>

        <FlatList
          showsVerticalScrollIndicator={false}
          data={tasks}
          keyExtractor={item => item}
          renderItem={({ item, index }) => (
            <Task
              key={index}
              onCompleted={() => handleCompleteTask(index)}
              onRemove={() => handleRemoveTask(index)}
              text={item}
              completed={completeds.includes(index)}
            />
          )}
          ListEmptyComponent={() => <Empty />}
        />
      </View>
    </View>
  );
}
