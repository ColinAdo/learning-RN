import { useState} from 'react';
import { StyleSheet, Text, View, FlatList, RefreshControl } from 'react-native';

export default function App() {

  const [Items, setItems] = useState([
    {name: 'Item 1'},
    {name: 'Item 2'},
    {name: 'Item 3'},
    {name: 'Item 4'},
    {name: 'Item 5'},
    {name: 'Item 6'},
    {name: 'Item 7'},
    {name: 'Item 8'},
    {name: 'Item 9'},
    {name: 'Item 10'},
    {name: 'Item 11'},
    {name: 'Item 12'},
    {name: 'Item 13'},
    {name: 'Item 14'},
    {name: 'Item 15'},
    {name: 'Item 16'},
    {name: 'Item 17'},
    {name: 'Item 18'},
    {name: 'Item 19'},
    {name: 'Item 20'},
  ])

  const [Refreshing, SetRefreshing] = useState(false);

  const onRefresh = () => {
    SetRefreshing(true);
    setItems([...Items, {name: 'Item 21'}])
    SetRefreshing(false);
  }
  return (
    <FlatList 
      // horizontal
      keyExtractor={(item, index)=> index.toString()}
      
      data={Items}
      renderItem={({ item }) => (
        <View style={styles.row}>
          <Text style={styles.text}>{item.name}</Text>
        </View>
      )}

      refreshControl={
        <RefreshControl 
          refreshing={Refreshing}
          onRefresh={onRefresh}
          colors={['red', 'green']}
      />
    }
      
    />
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ffffff',
   
  },
  row: {
    marginTop: 30,
    backgroundColor: '#4ae1fa',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    height: 100,
  },
  text: {
    fontSize: 25,
  }

     
});
