import React, { useContext } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Context } from '../context/blogContext';

const ShowScreen = ({ route }) => {
  const { state } = useContext(Context);
  const navigation = useNavigation();

  const getBlog = () => {
    const blog = state.filter(blogPost => blogPost.id === route.params.id);
    return blog.length > 0 ? blog[0] : { title: '', content: '' };
  };

  return <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Edit', { id: route.params.id })}>
        <AntDesign style={styles.edit} name="edit" size={24} color="black" />
      </TouchableOpacity>
      <Text style={styles.title}>{ getBlog().title }</Text>
      <Text style={styles.content}>{ getBlog().content }</Text>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    marginHorizontal: 20,
  },
  edit: {
    textAlign: 'right',
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 10,
  },
  content: {
    textAlign: 'center',
  },
});

export default ShowScreen;
