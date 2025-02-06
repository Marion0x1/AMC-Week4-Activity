import React,{useState} from 'react';
import {View, FlatList, StyleSheet, Text, StatusBar,TouchableOpacity} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

type ItemData = {
  id: string;
  title: string;
};

const DATA = [
  {
    id: '1',
    title: 'Taking Bath',
  },
  {
    id: '2',
    title: 'BreakFAST',
  },
  {
    id: '3',
    title: 'Toothbrush',
  },
  {
    id: '4',
    title: 'SOC MED',
  },
  {
    id: '5',
    title: 'ONLINE GAMES',
  },
  {
    id: '6',
    title: 'WALIS',
  },
  {
    id: '7',
    title: 'TULALA',
  },
  {
    id: '8',
    title: 'NOOD',
  },
  {
    id: '9',
    title: 'HUGAS PLATO',
  },
  {
    id: '10',
    title: 'KAIN',
  },
  {
    id: '11',
    title: 'MERYENDA',
  },
  {
    id: '12',
    title: 'COMPYUTER',
  },
  {
    id: '13',
    title: 'ML',
  },
  {
    id: '14',
    title: 'BASKETBALL',
  },
  {
    id: '15',
    title: 'BIKE',
  },
  {
    id: '16',
    title: 'KAIN ULIT',
  },
  {
    id: '17',
    title: 'TRIP',
  },
  {
    id: '18',
    title: 'FOODTRIP',
  },
  {
    id: '19',
    title: 'ANIME',
  },
  {
    id: '20',
    title: 'MANGA',
  },
  {
    id: '21',
    title: 'MANHWA',
  },
  {
    id: '22',
    title: 'KDRAMA',
  },
  {
    id: '23',
    title: 'TULOG TANGHALI',
  },
  {
    id: '24',
    title: 'HAPUNAN',
  },
  {
    id: '25',
    title: 'TULOG',
  },

];


  type ItemProps = {
  item: ItemData;
  onPress: () => void;
  backgroundColor: string;
  textColor: string;
};

const Item = ({item, onPress, backgroundColor, textColor}: ItemProps) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, {backgroundColor}]}>
    <Text style={[styles.title, {color: textColor}]}>{item.title}</Text>
  </TouchableOpacity>
);

const App = () => {
  const [selectedId, setSelectedId] = useState();

  const renderItem = ({item}: {item: ItemData}) => {
    const backgroundColor = item.id === selectedId ? 'lime' : '#f9c2ff';
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    );
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          extraData={selectedId}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    flex: 1,
    padding: 24,
    backgroundColor: '#eaeaea',
    
  },
  item: {
   
    marginVertical: 8,
    marginHorizontal: 16,
  },
 title: {
    borderWidth: 4,
    borderColor: '#20232a',
    color: '#20232a',
    borderRadius: 6,
    backgroundColor: 'gray',
    color: '#20232a',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold'
  },
  
});

export default App;