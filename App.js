import { useState} from 'react';
import { StyleSheet, Text, View, ScrollView, RefreshControl } from 'react-native';

export default function App() {

  const [Items, setItems] = useState([
    {key: 1, item: 'Item 1'},
    {key: 2, item: 'Item 2'},
    {key: 3, item: 'Item 3'},
    {key: 4, item: 'Item 4'},
    {key: 5, item: 'Item 5'},
    {key: 6, item: 'Item 6'},
    {key: 7, item: 'Item 7'},
    {key: 8, item: 'Item 8'},
    {key: 9, item: 'Item 9'},
    {key: 10, item: 'Item 10'},
    {key: 11, item: 'Item 11'},
    {key: 12, item: 'Item 12'},
    {key: 13, item: 'Item 13'},
    {key: 14, item: 'Item 14'},
    {key: 15, item: 'Item 15'},
    {key: 16, item: 'Item 16'},
    {key: 17, item: 'Item 17'},
    {key: 18, item: 'Item 18'},
    {key: 19, item: 'Item 19'},
    {key: 20, item: 'Item 20'},
  ])

  const [Refreshing, SetRefreshing] = useState(false);

  const onRefresh = () => {
    SetRefreshing(true);
    setItems([...Items, {key: 21, item: 'Item 21'}])
    SetRefreshing(false);
  }
  return (
    <ScrollView
      style={styles.container}
      refreshControl={ 
        <RefreshControl
          refreshing={Refreshing}
          onRefresh={onRefresh}
          colors={['red']}
        />
      }
    >
      {
        Items.map((element) => {
          return (
            <View style={styles.row} key={element.key}>
              <Text style={styles.text}>{ element.item }</Text>
            </View>
          )
        })
      }
      
      </ScrollView>
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
