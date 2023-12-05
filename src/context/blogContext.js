import React, { useState } from 'react';

const BlogContext = React.createContext();

export const BlogProvider = ({children}) => {
  const [blogPosts, setBlogPosts] = useState([]);
  const addBlogPost = () => {
    setBlogPosts([...blogPosts, { title: `Blog #${blogPosts.length + 1}`}]);
  }
  return <BlogContext.Provider value={{data: blogPosts, addPost: addBlogPost}}>
    {children}
  </BlogContext.Provider>
}

export default BlogContext;
