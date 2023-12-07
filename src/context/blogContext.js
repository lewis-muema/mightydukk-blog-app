/* eslint-disable no-case-declarations */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
import createDataContext from './createDataContext';

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'add_post':
      return [...state, { id: Math.floor(Math.random() * 99999), title: action.payload.title, content: action.payload.content }];
    case 'edit_blogpost':
      return state.map(blogPost => (blogPost.id === action.payload.id ? action.payload : blogPost));
    case 'delete_blogpost':
      return state.filter(blogPost => blogPost.id !== action.payload);
    default:
      return state;
  }
};

const addBlogPost = dispatch => (title, content) => {
  dispatch({ type: 'add_post', payload: { title, content } });
};
const deleteBlogPost = dispatch => (id) => {
  dispatch({ type: 'delete_blogpost', payload: id });
};
const editBlogPost = dispatch => (id, title, content) => {
  dispatch({ type: 'edit_blogpost', payload: { id, title, content } });
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost, editBlogPost },
  [],
);
