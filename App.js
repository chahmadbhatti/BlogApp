import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import blogs from './assets/blogs.json'; //sources

const BlogItem = ({ title, author, content, image }) => (
  <View style={styles.blogItem}>
    <Image source={image} style={styles.image} />
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.author}>By {author}</Text>
    <Text style={styles.content}>{content}</Text>
  </View>
);

const App = () => 
{
  const [blogList, setBlogList] = useState([]);

  useEffect(() => {
    const blogsWithImages = blogs.map(blog => {
      let image;
      switch (blog.id) {
        case 1:
          image = require('./assets/1.jpg');
          break;
        case 2:
          image = require('./assets/2.png');
          break;
        case 3:
          image = require('./assets/3.jpg');
          break;
        default:
          image = require('./assets/default.jpg');
      }
      return { ...blog, image };
    });

    setBlogList(blogsWithImages);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Car Blogs</Text>
      <FlatList
        data={blogList}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <BlogItem
            title={item.title}
            author={item.author}
            content={item.content}
            image={item.image}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create(
{
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: '#f8f8f8',
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  blogItem: {
    backgroundColor: '#fff',
    padding: 20,
    marginBottom: 15,
    borderRadius: 10,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  author: {
    fontSize: 16,
    fontStyle: 'italic',
    marginBottom: 10,
  },
  content: {
    fontSize: 16,
    color: '#333',
  },
});

export default App;
