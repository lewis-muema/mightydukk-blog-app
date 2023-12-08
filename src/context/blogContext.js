/* eslint-disable no-case-declarations */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
import createDataContext from './createDataContext';
import blogs from '../api/blogs';

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'get_blogposts':
      return action.payload;
    case 'add_post':
      return [...state, {
        id: Math.floor(Math.random() * 99999),
        title: action.payload.title,
        content: action.payload.content,
      }];
    case 'edit_blogpost':
      return state.map(blogPost => (blogPost.id === action.payload.id ? action.payload : blogPost));
    case 'delete_blogpost':
      return state.filter(blogPost => blogPost.id !== action.payload);
    default:
      return state;
  }
};

const getBlogPosts = dispatch => () => {
  blogs.get('/blogposts').then((res) => {
    dispatch({ type: 'get_blogposts', payload: res.data });
  });
};
const addBlogPost = () => (title, content, callback) => {
  blogs.post('/blogposts', { title, content }).then(() => {
    callback();
  });
};
const deleteBlogPost = () => (id, callback) => {
  blogs.delete(`/blogposts/${id}`).then(() => {
    callback();
  });
};
const editBlogPost = () => (id, title, content, callback) => {
  blogs.put(`/blogposts/${id}`, { title, content }).then(() => {
    callback();
  });
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  {
    addBlogPost, deleteBlogPost, editBlogPost, getBlogPosts,
  },
  [],
);
