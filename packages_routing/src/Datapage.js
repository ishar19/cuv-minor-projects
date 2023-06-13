import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import styles from './Datapage.module.css';

const DataPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const formData = location.state.formData;

  const handleEdit = () => {
    // Navigate back to the form page for editing
    navigate('/',{ state: { formData } });
  };

  const handleSave = () => {
    // Perform data saving logic here
    // Replace with your own saving logic
    // For now, display a success message using toastify
    toast.success('Data saved successfully');
  };

  return (
    <div className={styles.container}>
      <h1>Data Page</h1>
      <p>Name: {formData.name}</p>
      <p>Email: {formData.email}</p>

      {/* Render more form data here as needed */}

      <button onClick={handleEdit}>Edit</button>
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default DataPage;
