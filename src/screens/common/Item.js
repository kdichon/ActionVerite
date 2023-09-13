import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Icon, ListItem} from '@rneui/base';

const Item = ({data}) => {
  console.log(data);
  return (
    <ListItem>
      <Icon name="inbox" type="material-community" color="grey" />
      <ListItem.Content>
        <ListItem.Title>{data.name}</ListItem.Title>
      </ListItem.Content>
      <ListItem.Chevron />
    </ListItem>
  );
};

export default Item;

const styles = StyleSheet.create({});
