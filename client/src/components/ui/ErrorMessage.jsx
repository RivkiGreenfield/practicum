// ErrorMessage.jsx
import React from 'react';

function ErrorMessage({ message, code }) {
  if (!message) return null;

  return (
    <div style={{
      background: '#ffe5e5',
      color: '#b71c1c',
      border: '1px solid #b71c1c',
      borderRadius: '5px',
      padding: '16px',
      margin: '16px 0',
      direction: 'rtl'
    }}>
      <strong>שגיאה{code ? ` (${code})` : ''}:</strong> {message}
    </div>
  );
}

export default ErrorMessage;