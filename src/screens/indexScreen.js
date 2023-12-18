/* eslint-disable no-unused-vars */
import React, { useContext, useEffect } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity, FlatList,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AntDesign, Feather } from '@expo/vector-icons';
import { Context } from '../context/blogContext';

const IndexScreen = () => {
  const {
    state, addBlogPost, deleteBlogPost, getBlogPosts,
  } = useContext(Context);
  const navigation = useNavigation();

  useEffect(() => {
    getBlogPosts();
  }, []);

  return (
    <View>
      <View style={{ marginHorizontal: 20 }}>
        <TouchableOpacity style={styles.addPost} onPress={() => navigation.navigate('Create')}>
          <Text style={styles.addPostText}>Add blog</Text>
          <AntDesign name="pluscircleo" size={24} color="black" />
        </TouchableOpacity>
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={state}
          renderItem={({ item }) => <View>
              <TouchableOpacity style={styles.list} onPress={() => navigation.navigate('Show', { id: item.id })}>
                <Text style={styles.text}>{ item.title }</Text>
                <TouchableOpacity
                  onPress={() => { deleteBlogPost(item.id, () => getBlogPosts()); }}
                >
                  <Feather name="trash" style={styles.trash} />
                </TouchableOpacity>
              </TouchableOpacity>
            </View>
          }
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    textAlign: 'center',
  },
  list: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'lightgrey',
    borderWidth: 1,
    flex: 1,
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    justifyContent: 'space-between',
  },
  trash: {
    fontSize: 18,
  },
  addPost: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: 'lightgrey',
    borderWidth: 1,
    padding: 20,
    alignItems: 'center',
    margin: 20,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  addPostText: {
    fontSize: 18,
    fontWeight: '600',
  },
});

export default IndexScreen;
