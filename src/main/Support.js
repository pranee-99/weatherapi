import React from 'react'
import config from'../config'

export default function Support() {
  return (
    <div style={styles.container}>
    <h2 style={styles.heading}>Need Help!</h2>
    <p style={styles.description}>
      If you're experiencing issues or have any questions, please feel free to reach out to our support team.
    </p>
    <div style={styles.contactContainer}>
      <div style={styles.contactItem}>
        <strong>Email:</strong>climacast@gmail.com
      </div>
      <div style={styles.contactItem}>
        <strong>Phone:</strong> +91 7098765432
      </div>
    </div>
  </div>
);
};

const styles = {
container: {
  padding: '20px',
  textAlign: 'center',
},
heading: {
  fontSize: '24px',
  color: 'black',
  marginBottom: '15px',
},
description: {
  fontSize: '16px',
  marginBottom: '20px',
},
contactContainer: {
  display: 'flex',
  justifyContent: 'center',
},
contactItem: {
  margin: '0 10px',
  fontSize: '16px',
},
};