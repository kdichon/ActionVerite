import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import Item from './common/Item';

const Home = () => {
  const category = useSelector(state => state.category);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      {category.map(item => (
        <Item key={item.id} data={item} />
      ))}
      {/* <FlatList
        data={category}
        renderItem={item => <Text>{item.name}</Text>}
        keyExtractor={item => item.id}
      /> */}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
