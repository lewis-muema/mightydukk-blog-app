import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Button } from "react-native";
import BlogContext from "../context/blogContext";

const IndexScreen = () => {
  const {data, addPost} = useContext(BlogContext);
  const user = "Lewis";
  return (
    <View>
      <View style={{marginHorizontal: 20}}>
        <Button title="Add blog" onPress={addPost}></Button>
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={data} 
          renderItem={({item}) =>
            <Text style={styles.text}>{ item.title }</Text>
          }
        />
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    textAlign: "center"
  }
});

export default IndexScreen;
