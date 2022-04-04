import { StyleSheet, Text, View } from 'react-native';
import calculadora from './src/components/calculadora';

export default function App() {
  return (
    <View style={styles.container}>
      <calculadora />
      <statusbar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
