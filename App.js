import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, View } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.app}>Open</Text>
        <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  app: {
    flex: 1,
    color: 'gray',
    fontWeight: 'bold',
  },
});
