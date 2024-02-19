import { useState} from 'react';
import { StyleSheet, Text, View, FlatList, RefreshControl, SectionList } from 'react-native';

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

  // const DATA = [
  //   {
  //     title: 'Title 1',
  //     data: ['Item 1', 'Item 2'],
  //   },
  //   {
  //     title: 'Title 2',
  //     data: ['Item 2', 'Item 3'],
  //   },
  //   {
  //     title: 'Title 3',
  //     data: ['Item 4', 'Item 5'],
  //   },
  //   {
  //     title: 'Title 4',
  //     data: ['Item 6', 'Item 7'],
  //   },
  //   {
  //     title: 'Title 5',
  //     data: ['Item 8', 'Item 9'],
  //   },
  //   {
  //     title: 'Title 6',
  //     data: ['Item 10', 'Item 11'],
  //   },
  //   {
  //     title: 'Title 7',
  //     data: ['Item 12', 'Item 13'],
  //   },
  // ]

  const [Sections, setSections] = useState([
    {
      title: 'Title 1',
      data: ['Item 1', 'Item 2','Item 3'],
    }
  ])
  const [Refreshing, SetRefreshing] = useState(false);

  const IndexIncrement = Sections.length + 1;
  const onRefresh = () => {
    SetRefreshing(true);
    // setItems([...Items, {name: 'Item 21'}])
    setSections([...Sections,
            {
              title: `Title ${IndexIncrement}`,
              data: [`Item ${IndexIncrement}`,`Item ${IndexIncrement}`, `Item ${IndexIncrement}`],
            }
    ]
    )
    SetRefreshing(false);
  }
  return (

    <SectionList 
      sections={Sections}
      renderItem={({ item }) => (
           <Text style={styles.text}>{item}</Text>
      )}
      renderSectionHeader={({ section }) => (
        <View style={styles.row}>
           <Text style={styles.text}>{section.title}</Text>
       </View>
      )}

    refreshControl={
      <RefreshControl 
        refreshing={Refreshing}
        onRefresh={onRefresh}
        colors={['green']}
      />
    }
    />
    // <SectionList
    
    //   sections={DATA}
    //   renderItem={({ item }) => (
    //        <Text style={styles.text}>{item}</Text>
    //   )}

    //   renderSectionHeader={({ section }) => (
    //     <View style={styles.row}>
    //        <Text style={styles.text}>{section.title}</Text>
    //    </View>
    //   )}

    // />
    // <FlatList 
    //   // horizontal
    //   keyExtractor={(item, index)=> index.toString()}
      
    //   data={Items}
    //   renderItem={({ item }) => (
    //     <View style={styles.row}>
    //       <Text style={styles.text}>{item.name}</Text>
    //     </View>
    //   )}

    //   refreshControl={
    //     <RefreshControl 
    //       refreshing={Refreshing}
    //       onRefresh={onRefresh}
    //       colors={['red', 'green']}
    //   />
    // }
      
    // />
    
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
