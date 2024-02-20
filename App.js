import { useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight } from 'react-native';

export default function App() {

  const [Name, SetName] = useState('');
  const [Submitted, SetSubmitted] = useState(false);
  const onPress = () => { 
    SetSubmitted(!Submitted)
  }

  return (

    
    <View style={styles.container}>
      <Text style={styles.text}>
        Please write your name:
      </Text>
      <TextInput 
        style={styles.textInput}
        placeholder='e.g ado'
        onChangeText={(value) => SetName(value)}
        multiline
      />
      {/* <Button 
        title={Submitted ? 'Clear' : 'Submit'}
        onPress={onPress}
        // disabled={Submitted}
      /> */}
      {/* <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.9}
      >
        <Text style={styles.button}>
          {Submitted ? 'Clear' : 'Submit'}
        </Text>
      </TouchableOpacity> */}

      <TouchableHighlight
        onPress={onPress}
        activeOpacity={0.5}
        underlayColor={'green'}

      >
        <Text style={styles.button}>
          {Submitted ? 'Clear' : 'Submit'}
        </Text>
      </TouchableHighlight>
          {Submitted ? <Text>You have registered as {Name}</Text> : null}
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    alignContent: 'center',
    alignItems: 'center',
    margin: 30
  },
  
  text: {
    fontSize: 20,
  },

  textInput: {
    width: 200,
    borderWidth: 1,
    alignItems: 'center',
    padding: 5,
    borderRadius: 5,
    marginBottom: 5,
  },
  button: {
    backgroundColor: 'red',
    width: 100,
    height: 45,
    borderRadius: 5,
    padding: 11,
  },
     
});
