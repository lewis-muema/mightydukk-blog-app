import React, { useContext, useState, useEffect } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { Context } from "../context/blogContext";
import { useNavigation } from "@react-navigation/native";

const BlogForms = ({ id, type }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigation = useNavigation();
  const {state, addBlogPost, editBlogPost} = useContext(Context);
  const getBlog = () => {
    const blog = state.filter(blogPost => blogPost.id === id);
    return blog.length > 0 ? blog[0] : {title: "", content: ""};
  };
  useEffect(() => {
    setTitle(getBlog().title);
    setContent(getBlog().content);
  }, []);

  return <View style={styles.container}>
    <Text style={styles.label}>Enter title</Text>
    <TextInput style={styles.input} value={title} onChangeText={(title) => setTitle(title)} />
    <Text style={styles.label}>Enter content</Text>
    <TextInput style={styles.input} value={content} onChangeText={(content) => setContent(content)} />
    <TouchableOpacity style={styles.saveContainer} onPress={() => {
        type === "add" ? addBlogPost(title, content) : editBlogPost(id, title, content);
        navigation.goBack()
      }
    }>
      <Text style={styles.save}>Save blog</Text>
    </TouchableOpacity>
  </View>
};

const styles = StyleSheet.create({
  container: {
    margin: 20
  },
  label: {
    fontSize: 15,
    fontWeight: "600"
  },
  input: {
    borderWidth: 1,
    borderColor: "lightgrey",
    height: 40,
    marginVertical: 10,
    borderRadius: 10,
    backgroundColor: "white",
    padding: 10
  },
  save: {
    padding: 10,
    backgroundColor: "#0292f5",
    color: "white",
    fontSize: 15,
    fontWeight: "600",
    textAlign: "center"
  },
  saveContainer: {
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#0292f5",
    marginTop: 20
  }
});

export default BlogForms;