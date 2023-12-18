import React from 'react';
import BlogForms from '../components/form';


const EditScreen = ({ route }) => {
  return <BlogForms type="edit" id={route.params.id} />;
};

export default EditScreen;
