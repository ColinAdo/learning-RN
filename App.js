import { useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, Linking, StyleSheet, Text, View } from 'react-native';

export default function App() {

  // const [name, setNmae] = useState('Colin')
  // const [session, setSession] = useState({ year: 3, job: 'software engineering' })
  // const [current, setCurrent] = useState(true)
  const [counter, setCounter] = useState(0)

  const onClickHandler = () => {
    // setNmae("Deluxe and Intense are also my name!!")
    // setSession({ year: 3.2, job: 'Nursing' })
    // setCurrent(false)
    setCounter(counter + 1)
  };
  return (
    <View style={styles.container}>
      {/* <Text style={styles.text}>{name}</Text>
      <Text style={styles.text}>I am a {session.year} year student pursuing {session.job}</Text>
      <Text style={styles.text}>{ current ? 'Page 1 of 2' : 'Page 2 of 2'}</Text> */}

      <Text style={styles.text}>{ counter * 5 }</Text> 
      <Button title=' Click Me ' onPress={onClickHandler}></Button>
      <Text style={styles.text}>You have cliked { counter } times</Text> 

      {/* <Button title=' Google ' onPress={() => {Linking.openURL("https://www.google.com")}}></Button> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'blue',
    fontSize: 15,
    fontWeight: 'bold',
    margin: 10,
  },
});
