import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle form field change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission (this is just a placeholder)
  const handleSubmit = (e) => {
    e.preventDefault();
    // This is where you would process the form data (send to an API or email service)
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-page" style={styles.pageContainer}>
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit} style={styles.formContainer}>
        <div style={styles.inputContainer}>
          <label htmlFor="name" style={styles.label}>Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>
        
        <div style={styles.inputContainer}>
          <label htmlFor="email" style={styles.label}>Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>
        
        <div style={styles.inputContainer}>
          <label htmlFor="message" style={styles.label}>Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            style={styles.textarea}
          />
        </div>
        
        <button type="submit" style={styles.submitButton}>Submit</button>
        
        {isSubmitted && <p style={styles.successMessage}>Thank you for contacting us! We'll get back to you soon.</p>}
      </form>

      <div style={styles.contactInfo}>
        <p><strong>Email:</strong> regangib@btinternet.com</p>
        <p><strong>Phone:</strong> 07858783353</p>
      </div>
    </div>
  );
};

const styles = {
  pageContainer: {
    padding: '20px',
    maxWidth: '600px',
    margin: 'auto',
    backgroundColor: '#f4e9d4ff;',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    
  },
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  inputContainer: {
    marginBottom: '15px',
  },
  label: {
    fontSize: '16px',
    marginBottom: '5px',
  },
  input: {
    padding: '10px',
    fontSize: '14px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    width: '100%',
    boxSizing: 'border-box',
  },

  textarea: {
    padding: '10px',
    fontSize: '14px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    width: '100%',
    boxSizing: 'border-box',
    minHeight: '120px',
  },

  submitButton: {
    padding: '10px 20px',
    backgroundColor: '#000000ff',
    color: '#fff',
    fontSize: '16px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  submitButtonHover: {
    backgroundColor: '#45a049',
  },
  successMessage: {
    color: '#4CAF50',
    fontSize: '16px',
    marginTop: '20px',
  },
  contactInfo: {
    marginTop: '30px',
    textAlign: 'center',
  },
};

export default Contact;
