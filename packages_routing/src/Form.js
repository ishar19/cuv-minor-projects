import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styles from './Formpage.module.css';

const Form = () => {
  const location = useLocation()  
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: location.state?.formData?.name??'',
    email: location.state?.formData?.email??'',
    // Add more form fields as needed
  });

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission or data saving logic here
    // For simplicity, we'll just navigate to the data page with the form data as props
    navigate('/data', { state: { formData } });
  };

  return (
    <div className={styles.container}>
      <h1>Form Page</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />

        {/* Add more form fields here as needed */}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
